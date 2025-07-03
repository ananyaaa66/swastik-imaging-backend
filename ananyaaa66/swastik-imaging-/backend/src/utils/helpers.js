import moment from 'moment';

// Generate unique appointment reference number
export const generateReferenceNumber = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `SID${timestamp}${random}`;
};

// Format date for display
export const formatDate = (date, format = 'YYYY-MM-DD') => {
  return moment(date).format(format);
};

// Format time for display
export const formatTime = (time) => {
  return moment(time, 'HH:mm').format('h:mm A');
};

// Check if date is valid for appointment booking
export const isValidAppointmentDate = (date) => {
  const appointmentDate = moment(date);
  const today = moment().startOf('day');
  const maxAdvanceDate = moment().add(30, 'days');
  
  return appointmentDate.isValid() && 
         appointmentDate.isSameOrAfter(today) && 
         appointmentDate.isSameOrBefore(maxAdvanceDate);
};

// Check if time slot is within operating hours
export const isValidTimeSlot = (time, dayOfWeek) => {
  const appointmentTime = moment(time, 'HH:mm');
  
  // Default operating hours
  const operatingHours = {
    0: { open: '08:30', close: '17:00' }, // Sunday
    1: { open: '08:30', close: '20:30' }, // Monday
    2: { open: '08:30', close: '20:30' }, // Tuesday
    3: { open: '08:30', close: '20:30' }, // Wednesday
    4: { open: '08:30', close: '20:30' }, // Thursday
    5: { open: '08:30', close: '20:30' }, // Friday
    6: { open: '08:30', close: '20:30' }, // Saturday
  };
  
  const hours = operatingHours[dayOfWeek];
  if (!hours) return false;
  
  const openTime = moment(hours.open, 'HH:mm');
  const closeTime = moment(hours.close, 'HH:mm');
  
  return appointmentTime.isSameOrAfter(openTime) && 
         appointmentTime.isBefore(closeTime);
};

// Parse phone number to standard format
export const parsePhoneNumber = (phone) => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Handle Indian phone numbers
  if (digits.startsWith('91') && digits.length === 12) {
    return `+${digits}`;
  } else if (digits.length === 10) {
    return `+91${digits}`;
  }
  
  return phone; // Return original if can't parse
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input to prevent XSS
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Calculate appointment end time based on services
export const calculateAppointmentEndTime = (startTime, services) => {
  const start = moment(startTime, 'HH:mm');
  
  // Default duration is 30 minutes, can be customized based on services
  let totalDuration = 30;
  
  if (services && services.length > 0) {
    // Add 15 minutes for each additional service
    totalDuration += (services.length - 1) * 15;
  }
  
  return start.add(totalDuration, 'minutes').format('HH:mm');
};

// Check for appointment conflicts
export const hasTimeConflict = (newStart, newEnd, existingAppointments) => {
  const newStartTime = moment(newStart, 'HH:mm');
  const newEndTime = moment(newEnd, 'HH:mm');
  
  return existingAppointments.some(appointment => {
    const existingStart = moment(appointment.appointmentTime, 'HH:mm');
    const existingEnd = moment(appointment.appointmentTime, 'HH:mm').add(30, 'minutes');
    
    return (newStartTime.isBefore(existingEnd) && newEndTime.isAfter(existingStart));
  });
};

// Generate available time slots for a given date
export const generateTimeSlots = (date, existingAppointments = []) => {
  const appointmentDate = moment(date);
  const dayOfWeek = appointmentDate.day();
  
  // Get operating hours for the day
  const operatingHours = {
    0: { open: '08:30', close: '17:00' }, // Sunday
    1: { open: '08:30', close: '20:30' }, // Monday
    2: { open: '08:30', close: '20:30' }, // Tuesday
    3: { open: '08:30', close: '20:30' }, // Wednesday
    4: { open: '08:30', close: '20:30' }, // Thursday
    5: { open: '08:30', close: '20:30' }, // Friday
    6: { open: '08:30', close: '20:30' }, // Saturday
  };
  
  const hours = operatingHours[dayOfWeek];
  if (!hours) return [];
  
  const slots = [];
  const start = moment(hours.open, 'HH:mm');
  const end = moment(hours.close, 'HH:mm');
  
  // Generate 30-minute slots
  while (start.isBefore(end)) {
    const slotTime = start.format('HH:mm');
    const slotEndTime = moment(start).add(30, 'minutes').format('HH:mm');
    
    // Check if slot conflicts with existing appointments
    const hasConflict = hasTimeConflict(slotTime, slotEndTime, existingAppointments);
    
    if (!hasConflict) {
      slots.push({
        time: slotTime,
        display: start.format('h:mm A'),
        available: true
      });
    }
    
    start.add(30, 'minutes');
  }
  
  return slots;
};

// Error response helper
export const createErrorResponse = (message, statusCode = 400, details = null) => {
  return {
    success: false,
    error: {
      message,
      statusCode,
      details,
      timestamp: new Date().toISOString()
    }
  };
};

// Success response helper
export const createSuccessResponse = (data, message = 'Success') => {
  return {
    success: true,
    message,
    data,
    timestamp: new Date().toISOString()
  };
};