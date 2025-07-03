import express from 'express';
import {
  getServiceCategories,
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
  createServiceCategory,
  updateServiceCategory,
  deleteServiceCategory,
  getServiceStats
} from '../controllers/serviceController.js';
import {
  validateService,
  validateServiceCategory,
  validateId
} from '../middleware/validation.js';

const router = express.Router();

// Public routes - anyone can view services
router.get('/categories', getServiceCategories);
router.get('/', getServices);
router.get('/stats', getServiceStats);
router.get('/:id', validateId, getService);

// Admin routes - these would typically need authentication
router.post('/', validateService, createService);
router.put('/:id', validateId, validateService, updateService);
router.delete('/:id', validateId, deleteService);

// Category management routes
router.post('/categories', validateServiceCategory, createServiceCategory);
router.put('/categories/:id', validateId, validateServiceCategory, updateServiceCategory);
router.delete('/categories/:id', validateId, deleteServiceCategory);

export default router;