import { logger } from '../utils/logger.js';
import { createErrorResponse } from '../utils/helpers.js';

// Custom error class
export class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();
    
    Error.captureStackTrace(this, this.constructor);
  }
}

// Async error wrapper
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Handle Prisma errors
const handlePrismaError = (error) => {
  switch (error.code) {
    case 'P2002':
      // Unique constraint violation
      const field = error.meta?.target?.[0] || 'field';
      return new AppError(`${field} already exists`, 409);
    
    case 'P2025':
      // Record not found
      return new AppError('Record not found', 404);
    
    case 'P2003':
      // Foreign key constraint violation
      return new AppError('Referenced record does not exist', 400);
    
    case 'P2021':
      // Table not found
      return new AppError('Database table not found', 500);
    
    case 'P2022':
      // Column not found
      return new AppError('Database column not found', 500);
    
    default:
      logger.error('Unhandled Prisma error:', error);
      return new AppError('Database operation failed', 500);
  }
};

// Handle JWT errors
const handleJWTError = (error) => {
  if (error.name === 'JsonWebTokenError') {
    return new AppError('Invalid token', 401);
  }
  if (error.name === 'TokenExpiredError') {
    return new AppError('Token expired', 401);
  }
  return new AppError('Authentication failed', 401);
};

// Handle validation errors
const handleValidationError = (error) => {
  const errors = Object.values(error.errors).map(err => err.message);
  return new AppError(`Validation Error: ${errors.join('. ')}`, 400);
};

// Send error response in development
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    success: false,
    error: {
      message: err.message,
      statusCode: err.statusCode,
      stack: err.stack,
      timestamp: err.timestamp || new Date().toISOString()
    }
  });
};

// Send error response in production
const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      success: false,
      error: {
        message: err.message,
        statusCode: err.statusCode,
        timestamp: err.timestamp || new Date().toISOString()
      }
    });
  } else {
    // Programming or other unknown error: don't leak error details
    logger.error('Programming Error:', err);
    
    res.status(500).json({
      success: false,
      error: {
        message: 'Something went wrong!',
        statusCode: 500,
        timestamp: new Date().toISOString()
      }
    });
  }
};

// Global error handling middleware
export const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  
  let error = { ...err };
  error.message = err.message;
  
  // Log error
  logger.error('Error:', {
    message: err.message,
    statusCode: err.statusCode,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });
  
  // Handle specific error types
  if (err.name === 'PrismaClientKnownRequestError') {
    error = handlePrismaError(err);
  } else if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    error = handleJWTError(err);
  } else if (err.name === 'ValidationError') {
    error = handleValidationError(err);
  } else if (err.name === 'CastError') {
    error = new AppError('Invalid ID format', 400);
  }
  
  // Send error response
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(error, res);
  } else {
    sendErrorProd(error, res);
  }
};

// Handle 404 errors
export const notFoundHandler = (req, res, next) => {
  const error = new AppError(`Route ${req.originalUrl} not found`, 404);
  next(error);
};

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection:', err);
  process.exit(1);
});