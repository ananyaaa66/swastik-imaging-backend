import { prisma } from '../config/database.js';
import { logger } from '../utils/logger.js';
import { 
  generateReferenceNumber, 
  parsePhoneNumber,
  createSuccessResponse,
  createErrorResponse,
  isValidAppointmentDate,
  generateTimeSlots
} from '../utils/helpers.js';
import { sendEmail, emailTemplates } from '../config/email.js';
import { AppError, asyncHandler } from '../middleware/errorHandler.js';
import moment from 'moment';

// Create new appointment
export const createAppointment = asyncHandler(async (req, res) => {
  const { 
    name, 
    phone, 
    email, 
    appointmentDate, 
    appointmentTime, 
    selectedServices, 
    additionalInfo 
  } = req.body;

  // Parse and validate phone number
  const parsedPhone = parsePhoneNumber(phone);
  
  // Validate appointment date and time
  if (!isValidAppointmentDate(appointmentDate)) {
    throw new AppError('Invalid appointment date', 400);
  }

  // Check if the time slot is available
  const appointmentDateTime = new Date(appointmentDate);
  const existingAppointments = await prisma.appointment.findMany({
    where: {
      appointmentDate: {
        gte: new Date(appointmentDate),
        lt: new Date(new Date(appointmentDate).getTime() + 24 * 60 * 60 * 1000)
      },
      status: {
        not: 'CANCELLED'
      }
    }
  });

  // Check for time conflicts
  const conflictingAppointment = existingAppointments.find(apt => 
    apt.appointmentTime === appointmentTime
  );

  if (conflictingAppointment) {
    throw new AppError('This time slot is already booked', 409);
  }

  // Generate unique reference number
  const referenceNumber = generateReferenceNumber();

  try {
    // Start transaction
    const result = await prisma.$transaction(async (tx) => {
      // Find or create patient
      let patient = await tx.patient.findUnique({
        where: { phone: parsedPhone }
      });

      if (!patient) {
        patient = await tx.patient.create({
          data: {
            name,
            phone: parsedPhone,
            email: email || null
          }
        });
      } else {
        // Update patient info if provided
        patient = await tx.patient.update({
          where: { id: patient.id },
          data: {
            name,
            email: email || patient.email
          }
        });
      }

      // Create appointment
      const appointment = await tx.appointment.create({
        data: {
          referenceNumber,
          appointmentDate: new Date(appointmentDate),
          appointmentTime,
          additionalInfo,
          patientId: patient.id,
          status: 'PENDING'
        },
        include: {
          patient: true
        }
      });

      // Find and link services
      if (selectedServices && selectedServices.length > 0) {
        for (const serviceName of selectedServices) {
          // Try to find existing service or create a simple record
          let service = await tx.service.findFirst({
            where: { 
              name: {
                contains: serviceName,
                mode: 'insensitive'
              }
            }
          });

          if (!service) {
            // Create a temporary service record for unknown services
            const defaultCategory = await tx.serviceCategory.findFirst({
              where: { name: 'General' }
            });

            if (!defaultCategory) {
              // Create default category if it doesn't exist
              const newCategory = await tx.serviceCategory.create({
                data: { name: 'General', description: 'General services' }
              });
              
              service = await tx.service.create({
                data: {
                  name: serviceName,
                  categoryId: newCategory.id
                }
              });
            } else {
              service = await tx.service.create({
                data: {
                  name: serviceName,
                  categoryId: defaultCategory.id
                }
              });
            }
          }

          // Link service to appointment
          await tx.appointmentService.create({
            data: {
              appointmentId: appointment.id,
              serviceId: service.id
            }
          });
        }
      }

      return appointment;
    });

    // Send confirmation email if email is provided
    if (email) {
      try {
        const emailData = {
          ...result,
          services: selectedServices
        };
        
        const template = emailTemplates.appointmentConfirmation(emailData);
        await sendEmail(email, template);
        
        // Update appointment to mark confirmation email sent
        await prisma.appointment.update({
          where: { id: result.id },
          data: { confirmationSentAt: new Date() }
        });
      } catch (emailError) {
        logger.error('Failed to send confirmation email:', emailError);
        // Don't fail the appointment creation if email fails
      }
    }

    // Fetch complete appointment data for response
    const completeAppointment = await prisma.appointment.findUnique({
      where: { id: result.id },
      include: {
        patient: true,
        appointmentServices: {
          include: {
            service: true
          }
        }
      }
    });

    logger.info(`New appointment created: ${referenceNumber}`, {
      appointmentId: result.id,
      patientName: name,
      appointmentDate,
      appointmentTime
    });

    res.status(201).json(createSuccessResponse(
      completeAppointment,
      'Appointment booked successfully'
    ));

  } catch (error) {
    logger.error('Error creating appointment:', error);
    throw new AppError('Failed to create appointment', 500);
  }
});

// Get all appointments with filtering and pagination
export const getAppointments = asyncHandler(async (req, res) => {
  const { 
    page = 1, 
    limit = 10, 
    status, 
    date, 
    search 
  } = req.query;

  const skip = (parseInt(page) - 1) * parseInt(limit);
  const take = parseInt(limit);

  // Build where clause
  const where = {};
  
  if (status) {
    where.status = status;
  }
  
  if (date) {
    const startDate = new Date(date);
    const endDate = new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000);
    where.appointmentDate = {
      gte: startDate,
      lt: endDate
    };
  }
  
  if (search) {
    where.OR = [
      { referenceNumber: { contains: search, mode: 'insensitive' } },
      { patient: { name: { contains: search, mode: 'insensitive' } } },
      { patient: { phone: { contains: search } } }
    ];
  }

  const [appointments, total] = await Promise.all([
    prisma.appointment.findMany({
      where,
      include: {
        patient: true,
        appointmentServices: {
          include: {
            service: {
              include: {
                category: true
              }
            }
          }
        }
      },
      orderBy: [
        { appointmentDate: 'asc' },
        { appointmentTime: 'asc' }
      ],
      skip,
      take
    }),
    prisma.appointment.count({ where })
  ]);

  res.json(createSuccessResponse({
    appointments,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / take),
      totalItems: total,
      itemsPerPage: take
    }
  }));
});

// Get single appointment by ID or reference number
export const getAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  // Try to find by ID first, then by reference number
  let appointment = await prisma.appointment.findUnique({
    where: { id },
    include: {
      patient: true,
      appointmentServices: {
        include: {
          service: {
            include: {
              category: true
            }
          }
        }
      }
    }
  });

  if (!appointment) {
    // Try finding by reference number
    appointment = await prisma.appointment.findUnique({
      where: { referenceNumber: id },
      include: {
        patient: true,
        appointmentServices: {
          include: {
            service: {
              include: {
                category: true
              }
            }
          }
        }
      }
    });
  }

  if (!appointment) {
    throw new AppError('Appointment not found', 404);
  }

  res.json(createSuccessResponse(appointment));
});

// Update appointment
export const updateAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const appointment = await prisma.appointment.findUnique({
    where: { id },
    include: { patient: true }
  });

  if (!appointment) {
    throw new AppError('Appointment not found', 404);
  }

  // If updating date/time, check for conflicts
  if (updates.appointmentDate || updates.appointmentTime) {
    const checkDate = updates.appointmentDate || appointment.appointmentDate;
    const checkTime = updates.appointmentTime || appointment.appointmentTime;
    
    const conflictingAppointment = await prisma.appointment.findFirst({
      where: {
        id: { not: id },
        appointmentDate: new Date(checkDate),
        appointmentTime: checkTime,
        status: { not: 'CANCELLED' }
      }
    });

    if (conflictingAppointment) {
      throw new AppError('This time slot is already booked', 409);
    }
  }

  const updatedAppointment = await prisma.appointment.update({
    where: { id },
    data: {
      ...updates,
      appointmentDate: updates.appointmentDate ? new Date(updates.appointmentDate) : undefined
    },
    include: {
      patient: true,
      appointmentServices: {
        include: {
          service: true
        }
      }
    }
  });

  logger.info(`Appointment updated: ${appointment.referenceNumber}`, {
    appointmentId: id,
    updates
  });

  res.json(createSuccessResponse(
    updatedAppointment,
    'Appointment updated successfully'
  ));
});

// Cancel appointment
export const cancelAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { reason } = req.body;

  const appointment = await prisma.appointment.findUnique({
    where: { id },
    include: { patient: true }
  });

  if (!appointment) {
    throw new AppError('Appointment not found', 404);
  }

  if (appointment.status === 'CANCELLED') {
    throw new AppError('Appointment is already cancelled', 400);
  }

  const updatedAppointment = await prisma.appointment.update({
    where: { id },
    data: { 
      status: 'CANCELLED',
      additionalInfo: reason ? `${appointment.additionalInfo || ''}\nCancellation reason: ${reason}` : appointment.additionalInfo
    },
    include: {
      patient: true,
      appointmentServices: {
        include: {
          service: true
        }
      }
    }
  });

  logger.info(`Appointment cancelled: ${appointment.referenceNumber}`, {
    appointmentId: id,
    reason
  });

  res.json(createSuccessResponse(
    updatedAppointment,
    'Appointment cancelled successfully'
  ));
});

// Get available time slots for a date
export const getAvailableSlots = asyncHandler(async (req, res) => {
  const { date } = req.query;

  if (!isValidAppointmentDate(date)) {
    throw new AppError('Invalid date', 400);
  }

  // Get existing appointments for the date
  const existingAppointments = await prisma.appointment.findMany({
    where: {
      appointmentDate: new Date(date),
      status: { not: 'CANCELLED' }
    },
    select: {
      appointmentTime: true
    }
  });

  // Generate available slots
  const availableSlots = generateTimeSlots(date, existingAppointments);

  res.json(createSuccessResponse(availableSlots));
});

// Get appointment statistics
export const getAppointmentStats = asyncHandler(async (req, res) => {
  const { startDate, endDate } = req.query;
  
  const dateFilter = {};
  if (startDate && endDate) {
    dateFilter.appointmentDate = {
      gte: new Date(startDate),
      lte: new Date(endDate)
    };
  }

  const [
    totalAppointments,
    pendingAppointments,
    confirmedAppointments,
    completedAppointments,
    cancelledAppointments,
    todayAppointments
  ] = await Promise.all([
    prisma.appointment.count({ where: dateFilter }),
    prisma.appointment.count({ where: { ...dateFilter, status: 'PENDING' } }),
    prisma.appointment.count({ where: { ...dateFilter, status: 'CONFIRMED' } }),
    prisma.appointment.count({ where: { ...dateFilter, status: 'COMPLETED' } }),
    prisma.appointment.count({ where: { ...dateFilter, status: 'CANCELLED' } }),
    prisma.appointment.count({
      where: {
        appointmentDate: {
          gte: moment().startOf('day').toDate(),
          lte: moment().endOf('day').toDate()
        }
      }
    })
  ]);

  const stats = {
    total: totalAppointments,
    pending: pendingAppointments,
    confirmed: confirmedAppointments,
    completed: completedAppointments,
    cancelled: cancelledAppointments,
    today: todayAppointments
  };

  res.json(createSuccessResponse(stats));
});