#!/usr/bin/env node

/**
 * Simple API test script for Swastik Imaging Backend
 * Run with: node test-api.js
 */

import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';
const client = axios.create({ baseURL: API_BASE, timeout: 5000 });

// Test colors
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

const log = (color, message) => console.log(`${colors[color]}${message}${colors.reset}`);

async function testAPI() {
  log('blue', '🧪 Testing Swastik Imaging Backend API...\n');

  const tests = [
    {
      name: 'Health Check',
      test: async () => {
        const response = await client.get('/health');
        return response.data.success === true;
      }
    },
    {
      name: 'Service Categories',
      test: async () => {
        const response = await client.get('/services/categories');
        return response.data.success === true && Array.isArray(response.data.data);
      }
    },
    {
      name: 'Services List',
      test: async () => {
        const response = await client.get('/services');
        return response.data.success === true && Array.isArray(response.data.data);
      }
    },
    {
      name: 'Available Slots',
      test: async () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const date = tomorrow.toISOString().split('T')[0];
        
        const response = await client.get(`/appointments/available-slots?date=${date}`);
        return response.data.success === true && Array.isArray(response.data.data);
      }
    },
    {
      name: 'Create Appointment',
      test: async () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const date = tomorrow.toISOString().split('T')[0];

        const appointmentData = {
          name: 'Test Patient',
          phone: '+919876543210',
          email: 'test@example.com',
          appointmentDate: date,
          appointmentTime: '10:00',
          selectedServices: ['Blood Test', 'X-Ray'],
          additionalInfo: 'Test appointment'
        };

        const response = await client.post('/appointments', appointmentData);
        
        // Store appointment ID for cleanup
        if (response.data.success) {
          global.testAppointmentId = response.data.data.id;
        }
        
        return response.data.success === true && response.data.data.referenceNumber;
      }
    },
    {
      name: 'Get Appointment',
      test: async () => {
        if (!global.testAppointmentId) {
          throw new Error('No test appointment ID available');
        }
        
        const response = await client.get(`/appointments/${global.testAppointmentId}`);
        return response.data.success === true && response.data.data.id === global.testAppointmentId;
      }
    },
    {
      name: 'Appointment Stats',
      test: async () => {
        const response = await client.get('/appointments/stats');
        return response.data.success === true && typeof response.data.data.total === 'number';
      }
    }
  ];

  let passed = 0;
  let failed = 0;

  for (const { name, test } of tests) {
    try {
      const start = Date.now();
      const result = await test();
      const duration = Date.now() - start;
      
      if (result) {
        log('green', `✅ ${name} - PASSED (${duration}ms)`);
        passed++;
      } else {
        log('red', `❌ ${name} - FAILED (assertion failed)`);
        failed++;
      }
    } catch (error) {
      log('red', `❌ ${name} - FAILED (${error.message})`);
      failed++;
    }
  }

  // Cleanup test appointment
  if (global.testAppointmentId) {
    try {
      await client.delete(`/appointments/${global.testAppointmentId}`);
      log('yellow', '🧹 Cleaned up test appointment');
    } catch (error) {
      log('yellow', '⚠️  Failed to cleanup test appointment');
    }
  }

  log('blue', `\n📊 Test Results:`);
  log('green', `   Passed: ${passed}`);
  log('red', `   Failed: ${failed}`);
  log('blue', `   Total: ${passed + failed}`);

  if (failed === 0) {
    log('green', '\n🎉 All tests passed! Backend is working correctly.');
    return true;
  } else {
    log('red', '\n💥 Some tests failed. Check the backend configuration.');
    return false;
  }
}

// Check if server is running
async function checkServer() {
  try {
    await client.get('/health');
    return true;
  } catch (error) {
    log('red', '❌ Backend server is not running or not accessible');
    log('yellow', '💡 Make sure to start the backend server with: npm run dev');
    log('yellow', '💡 Default URL: http://localhost:5000');
    return false;
  }
}

// Main execution
async function main() {
  const serverRunning = await checkServer();
  if (!serverRunning) {
    process.exit(1);
  }

  const success = await testAPI();
  process.exit(success ? 0 : 1);
}

main().catch((error) => {
  log('red', `💥 Test runner crashed: ${error.message}`);
  process.exit(1);
});