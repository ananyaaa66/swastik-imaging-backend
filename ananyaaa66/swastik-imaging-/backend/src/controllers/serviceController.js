import { prisma } from '../config/database.js';
import { logger } from '../utils/logger.js';
import { createSuccessResponse, createErrorResponse } from '../utils/helpers.js';
import { AppError, asyncHandler } from '../middleware/errorHandler.js';

// Get all service categories with their services
export const getServiceCategories = asyncHandler(async (req, res) => {
  const categories = await prisma.serviceCategory.findMany({
    where: { active: true },
    include: {
      services: {
        where: { active: true },
        orderBy: { name: 'asc' }
      }
    },
    orderBy: { name: 'asc' }
  });

  res.json(createSuccessResponse(categories));
});

// Get all services
export const getServices = asyncHandler(async (req, res) => {
  const { categoryId, search, active = true } = req.query;

  const where = {
    active: active === 'true'
  };

  if (categoryId) {
    where.categoryId = categoryId;
  }

  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } }
    ];
  }

  const services = await prisma.service.findMany({
    where,
    include: {
      category: true
    },
    orderBy: [
      { category: { name: 'asc' } },
      { name: 'asc' }
    ]
  });

  res.json(createSuccessResponse(services));
});

// Get single service
export const getService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const service = await prisma.service.findUnique({
    where: { id },
    include: {
      category: true,
      appointmentServices: {
        include: {
          appointment: {
            include: {
              patient: true
            }
          }
        }
      }
    }
  });

  if (!service) {
    throw new AppError('Service not found', 404);
  }

  res.json(createSuccessResponse(service));
});

// Create new service
export const createService = asyncHandler(async (req, res) => {
  const { name, description, categoryId, price, duration, preparation } = req.body;

  // Check if category exists
  const category = await prisma.serviceCategory.findUnique({
    where: { id: categoryId }
  });

  if (!category) {
    throw new AppError('Service category not found', 404);
  }

  const service = await prisma.service.create({
    data: {
      name,
      description,
      categoryId,
      price: price ? parseFloat(price) : null,
      duration: duration ? parseInt(duration) : null,
      preparation
    },
    include: {
      category: true
    }
  });

  logger.info(`New service created: ${name}`, { serviceId: service.id });

  res.status(201).json(createSuccessResponse(
    service,
    'Service created successfully'
  ));
});

// Update service
export const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const service = await prisma.service.findUnique({
    where: { id }
  });

  if (!service) {
    throw new AppError('Service not found', 404);
  }

  // If categoryId is being updated, check if it exists
  if (updates.categoryId) {
    const category = await prisma.serviceCategory.findUnique({
      where: { id: updates.categoryId }
    });

    if (!category) {
      throw new AppError('Service category not found', 404);
    }
  }

  const updatedService = await prisma.service.update({
    where: { id },
    data: {
      ...updates,
      price: updates.price ? parseFloat(updates.price) : undefined,
      duration: updates.duration ? parseInt(updates.duration) : undefined
    },
    include: {
      category: true
    }
  });

  logger.info(`Service updated: ${service.name}`, { serviceId: id });

  res.json(createSuccessResponse(
    updatedService,
    'Service updated successfully'
  ));
});

// Delete service (soft delete)
export const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const service = await prisma.service.findUnique({
    where: { id }
  });

  if (!service) {
    throw new AppError('Service not found', 404);
  }

  // Check if service is being used in any appointments
  const appointmentCount = await prisma.appointmentService.count({
    where: { serviceId: id }
  });

  if (appointmentCount > 0) {
    // Soft delete - mark as inactive
    await prisma.service.update({
      where: { id },
      data: { active: false }
    });

    logger.info(`Service deactivated: ${service.name}`, { serviceId: id });

    res.json(createSuccessResponse(
      null,
      'Service deactivated successfully (has existing appointments)'
    ));
  } else {
    // Hard delete if no appointments
    await prisma.service.delete({
      where: { id }
    });

    logger.info(`Service deleted: ${service.name}`, { serviceId: id });

    res.json(createSuccessResponse(
      null,
      'Service deleted successfully'
    ));
  }
});

// Create new service category
export const createServiceCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const category = await prisma.serviceCategory.create({
    data: {
      name,
      description
    }
  });

  logger.info(`New service category created: ${name}`, { categoryId: category.id });

  res.status(201).json(createSuccessResponse(
    category,
    'Service category created successfully'
  ));
});

// Update service category
export const updateServiceCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const category = await prisma.serviceCategory.findUnique({
    where: { id }
  });

  if (!category) {
    throw new AppError('Service category not found', 404);
  }

  const updatedCategory = await prisma.serviceCategory.update({
    where: { id },
    data: updates,
    include: {
      services: {
        where: { active: true }
      }
    }
  });

  logger.info(`Service category updated: ${category.name}`, { categoryId: id });

  res.json(createSuccessResponse(
    updatedCategory,
    'Service category updated successfully'
  ));
});

// Delete service category
export const deleteServiceCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await prisma.serviceCategory.findUnique({
    where: { id },
    include: {
      services: true
    }
  });

  if (!category) {
    throw new AppError('Service category not found', 404);
  }

  if (category.services.length > 0) {
    throw new AppError('Cannot delete category with existing services', 400);
  }

  await prisma.serviceCategory.delete({
    where: { id }
  });

  logger.info(`Service category deleted: ${category.name}`, { categoryId: id });

  res.json(createSuccessResponse(
    null,
    'Service category deleted successfully'
  ));
});

// Get service statistics
export const getServiceStats = asyncHandler(async (req, res) => {
  const [
    totalCategories,
    totalServices,
    activeServices,
    mostBookedServices
  ] = await Promise.all([
    prisma.serviceCategory.count({ where: { active: true } }),
    prisma.service.count(),
    prisma.service.count({ where: { active: true } }),
    prisma.service.findMany({
      include: {
        appointmentServices: true,
        category: true
      },
      orderBy: {
        appointmentServices: {
          _count: 'desc'
        }
      },
      take: 10
    })
  ]);

  const stats = {
    totalCategories,
    totalServices,
    activeServices,
    inactiveServices: totalServices - activeServices,
    mostBookedServices: mostBookedServices.map(service => ({
      id: service.id,
      name: service.name,
      category: service.category.name,
      bookingCount: service.appointmentServices.length
    }))
  };

  res.json(createSuccessResponse(stats));
});