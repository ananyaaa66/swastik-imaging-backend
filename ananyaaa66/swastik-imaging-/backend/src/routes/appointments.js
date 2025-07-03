import express from 'express';
import {
  createAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  cancelAppointment,
  getAvailableSlots,
  getAppointmentStats
} from '../controllers/appointmentController.js';
import {
  validateAppointment,
  validateAppointmentUpdate,
  validateId,
  validateAvailableSlots,
  validateAppointmentQuery
} from '../middleware/validation.js';
import { appointmentRateLimit } from '../middleware/security.js';

const router = express.Router();

// Public routes
router.post('/', appointmentRateLimit, validateAppointment, createAppointment);
router.get('/available-slots', validateAvailableSlots, getAvailableSlots);
router.get('/stats', getAppointmentStats);

// Routes that might need authentication in the future
router.get('/', validateAppointmentQuery, getAppointments);
router.get('/:id', validateId, getAppointment);
router.put('/:id', validateAppointmentUpdate, updateAppointment);
router.delete('/:id', validateId, cancelAppointment);

export default router;