import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './config/database.js';
import { testEmailConnection } from './config/email.js';
import { logger } from './utils/logger.js';
import { 
  generalRateLimit, 
  securityHeaders, 
  corsOptions, 
  requestLogger,
  sanitizeInput
} from './middleware/security.js';
import { globalErrorHandler, notFoundHandler } from './middleware/errorHandler.js';
import apiRoutes from './routes/index.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Trust proxy (important for rate limiting and IP detection)
app.set('trust proxy', 1);

// Security middleware
app.use(securityHeaders);
app.use(cors(corsOptions));

// Request parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Security and logging middleware
app.use(generalRateLimit);
app.use(requestLogger);
app.use(sanitizeInput);

// Health check route (before API routes)
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Swastik Imaging & Diagnostics API Server',
    version: '1.0.0',
    status: 'Running',
    timestamp: new Date().toISOString(),
    api: '/api'
  });
});

// API routes
app.use('/api', apiRoutes);

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(globalErrorHandler);

// Start server function
const startServer = async () => {
  try {
    // Test database connection
    const dbConnected = await testConnection();
    if (!dbConnected) {
      logger.error('Failed to connect to database. Server not started.');
      process.exit(1);
    }

    // Test email connection (non-blocking)
    const emailConnected = await testEmailConnection();
    if (!emailConnected) {
      logger.warn('Email service connection failed. Email notifications will not work.');
    }

    // Start HTTP server
    const server = app.listen(PORT, () => {
      logger.info(`🚀 Server running on port ${PORT}`);
      logger.info(`📊 Environment: ${process.env.NODE_ENV}`);
      logger.info(`🔗 API URL: http://localhost:${PORT}/api`);
      logger.info(`💊 Health Check: http://localhost:${PORT}/api/health`);
      
      if (process.env.NODE_ENV === 'development') {
        logger.info(`📝 Available endpoints:`);
        logger.info(`   GET  /api - API information`);
        logger.info(`   GET  /api/health - Health check`);
        logger.info(`   POST /api/appointments - Create appointment`);
        logger.info(`   GET  /api/appointments - List appointments`);
        logger.info(`   GET  /api/services - List services`);
        logger.info(`   GET  /api/services/categories - List service categories`);
      }
    });

    // Graceful shutdown
    const gracefulShutdown = () => {
      logger.info('Received shutdown signal. Gracefully shutting down...');
      server.close(() => {
        logger.info('HTTP server closed.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);

  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Start the server
startServer();