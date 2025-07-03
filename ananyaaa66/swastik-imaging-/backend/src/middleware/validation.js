import { body, param, query, validationResult } from 'express-validator';
import { isValidEmail, parsePhoneNumber, isValidAppointmentDate } from '../utils/helpers.js';

// Middleware to handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: {
        message: 'Validation failed',
        details: errors.array(),
        statusCode: 400
      }
    });
  }
  
  next();
};

// Appointment validation rules
export const validateAppointment = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s.]+$/)
    .withMessage('Name can only contain letters, spaces, and dots'),
  
  body('phone')
    .trim()
    .custom((value) => {
      const parsed = parsePhoneNumber(value);
      if (!parsed.match(/^\+91\d{10}$/) && !parsed.match(/^\d{10}$/)) {
        throw new Error('Invalid phone number format');
      }
      return true;
    }),
  
  body('email')
    .optional({ checkFalsy: true })
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  
  body('appointmentDate')
    .isISO8601()
    .withMessage('Invalid date format')
    .custom((value) => {
      if (!isValidAppointmentDate(value)) {
        throw new Error('Appointment date must be within the next 30 days');
      }
      return true;
    }),
  
  body('appointmentTime')
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage('Invalid time format (HH:MM)')
    .custom((value, { req }) => {
      const date = new Date(req.body.appointmentDate);
      const dayOfWeek = date.getDay();
      
      // Basic time validation - you can enhance this with operating hours check
      const hour = parseInt(value.split(':')[0]);
      if (hour < 8 || hour > 20) {
        throw new Error('Appointment time must be within operating hours');
      }
      return true;
    }),
  
  body('selectedServices')
    .isArray({ min: 1 })
    .withMessage('At least one service must be selected')
    .custom((services) => {
      if (services.some(service => typeof service !== 'string' || service.trim() === '')) {
        throw new Error('All services must be valid strings');
      }
      return true;
    }),
  
  body('additionalInfo')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Additional information cannot exceed 500 characters'),
  
  handleValidationErrors
];

// Update appointment validation
export const validateAppointmentUpdate = [
  param('id')
    .isUUID()
    .withMessage('Invalid appointment ID'),
  
  body('status')
    .optional()
    .isIn(['PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'NO_SHOW'])
    .withMessage('Invalid appointment status'),
  
  body('appointmentDate')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format'),
  
  body('appointmentTime')
    .optional()
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage('Invalid time format (HH:MM)'),
  
  handleValidationErrors
];

// Service validation rules
export const validateService = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Service name must be between 2 and 200 characters'),
  
  body('categoryId')
    .isUUID()
    .withMessage('Invalid category ID'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  
  body('price')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  
  body('duration')
    .optional()
    .isInt({ min: 5, max: 240 })
    .withMessage('Duration must be between 5 and 240 minutes'),
  
  handleValidationErrors
];

// Service category validation
export const validateServiceCategory = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Category name must be between 2 and 100 characters'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  
  handleValidationErrors
];

// Query parameter validation for appointments
export const validateAppointmentQuery = [
  query('date')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format'),
  
  query('status')
    .optional()
    .isIn(['PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'NO_SHOW'])
    .withMessage('Invalid status filter'),
  
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  handleValidationErrors
];

// ID parameter validation
export const validateId = [
  param('id')
    .isUUID()
    .withMessage('Invalid ID format'),
  
  handleValidationErrors
];

// Available slots validation
export const validateAvailableSlots = [
  query('date')
    .isISO8601()
    .withMessage('Date is required and must be in valid format')
    .custom((value) => {
      if (!isValidAppointmentDate(value)) {
        throw new Error('Date must be within the next 30 days');
      }
      return true;
    }),
  
  handleValidationErrors
];

// Admin login validation
export const validateAdminLogin = [
  body('email')
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  
  handleValidationErrors
];

// Contact form validation
export const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),
  
  body('phone')
    .optional()
    .trim()
    .isMobilePhone('en-IN')
    .withMessage('Invalid phone number'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
  
  handleValidationErrors
];