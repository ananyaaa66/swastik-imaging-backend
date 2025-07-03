import express from 'express';
import appointmentRoutes from './appointments.js';
import serviceRoutes from './services.js';
import healthRoutes from './health.js';
import { createSuccessResponse } from '../utils/helpers.js';

const router = express.Router();

// API welcome route
router.get('/', (req, res) => {
  res.json(createSuccessResponse({
    message: 'Welcome to Swastik Imaging & Diagnostics API',
    version: '1.0.0',
    endpoints: {
      appointments: '/api/appointments',
      services: '/api/services',
      health: '/api/health'
    },
    documentation: 'Visit /api/docs for API documentation (coming soon)',
    support: {
      phone: '+91-7303034849',
      email: 'swastikimaginganddiagnostics@gmail.com'
    }
  }, 'API is running successfully'));
});

// Mount route modules
router.use('/appointments', appointmentRoutes);
router.use('/services', serviceRoutes);
router.use('/health', healthRoutes);

export default router;