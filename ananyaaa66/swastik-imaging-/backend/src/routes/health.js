import express from 'express';
import { prisma, testConnection } from '../config/database.js';
import { testEmailConnection } from '../config/email.js';
import { createSuccessResponse, createErrorResponse } from '../utils/helpers.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = express.Router();

// Basic health check
router.get('/', asyncHandler(async (req, res) => {
  res.json(createSuccessResponse({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  }, 'Service is healthy'));
}));

// Detailed health check
router.get('/detailed', asyncHandler(async (req, res) => {
  const checks = {
    database: false,
    email: false
  };

  // Test database connection
  try {
    checks.database = await testConnection();
  } catch (error) {
    checks.database = false;
  }

  // Test email connection
  try {
    checks.email = await testEmailConnection();
  } catch (error) {
    checks.email = false;
  }

  const allHealthy = Object.values(checks).every(check => check === true);

  res.status(allHealthy ? 200 : 503).json(createSuccessResponse({
    status: allHealthy ? 'OK' : 'DEGRADED',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    checks
  }, allHealthy ? 'All systems operational' : 'Some systems are down'));
}));

// System info (development only)
router.get('/info', asyncHandler(async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json(createErrorResponse('Access denied', 403));
  }

  const info = {
    nodeVersion: process.version,
    platform: process.platform,
    architecture: process.arch,
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  };

  res.json(createSuccessResponse(info));
}));

// Database stats
router.get('/db-stats', asyncHandler(async (req, res) => {
  const [
    appointmentCount,
    patientCount,
    serviceCount,
    categoryCount
  ] = await Promise.all([
    prisma.appointment.count(),
    prisma.patient.count(),
    prisma.service.count(),
    prisma.serviceCategory.count()
  ]);

  const stats = {
    appointments: appointmentCount,
    patients: patientCount,
    services: serviceCount,
    categories: categoryCount,
    timestamp: new Date().toISOString()
  };

  res.json(createSuccessResponse(stats));
}));

export default router;