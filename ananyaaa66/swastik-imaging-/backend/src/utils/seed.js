import { PrismaClient } from '@prisma/client';
import { logger } from './logger.js';

const prisma = new PrismaClient();

// Service categories and services data
const serviceData = [
  {
    category: 'Ultrasound & Imaging',
    description: 'Advanced ultrasound and imaging services',
    services: [
      { name: 'Ultrasound', description: 'General ultrasound imaging', duration: 30 },
      { name: 'Color Doppler', description: 'Color Doppler ultrasound study', duration: 45 },
      { name: 'Level II Scans', description: 'Detailed fetal anomaly scan', duration: 60 },
      { name: '3D/4D Ultrasound', description: '3D and 4D ultrasound imaging', duration: 45 },
      { name: 'TVS and TRUS', description: 'Transvaginal and Transrectal ultrasound', duration: 30 },
      { name: 'USG Guided FNAC and BIOPSY', description: 'Ultrasound guided procedures', duration: 60 }
    ]
  },
  {
    category: 'Advanced Radiology',
    description: 'State-of-the-art radiology services',
    services: [
      { name: 'CT Scan', description: 'Computed Tomography scan', duration: 30 },
      { name: 'MRI Scan', description: 'Magnetic Resonance Imaging', duration: 60 },
      { name: 'X-Ray', description: 'Digital X-ray imaging', duration: 15 },
      { name: 'Interventional Radiology', description: 'Minimally invasive procedures', duration: 90 }
    ]
  },
  {
    category: 'Cardiac Diagnostics',
    description: 'Comprehensive cardiac evaluation',
    services: [
      { name: 'ECG', description: 'Electrocardiogram', duration: 15 },
      { name: '2D ECHO', description: '2D Echocardiography', duration: 30 },
      { name: 'Stress ECHO', description: 'Stress Echocardiography', duration: 45 }
    ]
  },
  {
    category: 'Laboratory Tests',
    description: 'Complete laboratory testing services',
    services: [
      { name: 'Complete Blood Count (CBC)', description: 'Full blood count analysis', duration: 15 },
      { name: 'Lipid Profile', description: 'Cholesterol and lipid analysis', duration: 15 },
      { name: 'Liver Function Tests', description: 'Comprehensive liver function panel', duration: 15 },
      { name: 'Kidney Function Tests', description: 'Renal function assessment', duration: 15 },
      { name: 'Thyroid Function Tests', description: 'Complete thyroid panel', duration: 15 },
      { name: 'Diabetes Panel', description: 'Blood glucose and HbA1c', duration: 15 },
      { name: 'Tumor Markers', description: 'Cancer marker analysis', duration: 15 },
      { name: 'Urine Analysis', description: 'Complete urine examination', duration: 10 },
      { name: 'Blood Sugar', description: 'Fasting and random glucose', duration: 10 },
      { name: 'HbA1c', description: 'Glycated hemoglobin test', duration: 15 },
      { name: 'ESR', description: 'Erythrocyte Sedimentation Rate', duration: 10 },
      { name: 'CRP', description: 'C-Reactive Protein', duration: 15 }
    ]
  },
  {
    category: 'Health Packages',
    description: 'Comprehensive health checkup packages',
    services: [
      { name: 'Basic Health Check Up', description: 'Essential health screening', duration: 60 },
      { name: 'Executive Health Package', description: 'Comprehensive executive checkup', duration: 120 },
      { name: 'Diabetes Screening', description: 'Complete diabetes evaluation', duration: 30 },
      { name: 'Cardiac Health Package', description: 'Heart health assessment', duration: 90 },
      { name: 'Women\'s Health Package', description: 'Women-specific health screening', duration: 90 },
      { name: 'Senior Citizen Package', description: 'Geriatric health assessment', duration: 120 }
    ]
  },
  {
    category: 'Consultation',
    description: 'Medical consultation services',
    services: [
      { name: 'General Consultation', description: 'General medical consultation', duration: 30 },
      { name: 'Report Analysis', description: 'Medical report review and analysis', duration: 20 },
      { name: 'Second Opinion', description: 'Expert second opinion', duration: 30 },
      { name: 'Health Counseling', description: 'Health and lifestyle counseling', duration: 45 }
    ]
  }
];

// Operating hours data
const operatingHoursData = [
  { dayOfWeek: 0, openTime: '08:30', closeTime: '17:00' }, // Sunday
  { dayOfWeek: 1, openTime: '08:30', closeTime: '20:30' }, // Monday
  { dayOfWeek: 2, openTime: '08:30', closeTime: '20:30' }, // Tuesday
  { dayOfWeek: 3, openTime: '08:30', closeTime: '20:30' }, // Wednesday
  { dayOfWeek: 4, openTime: '08:30', closeTime: '20:30' }, // Thursday
  { dayOfWeek: 5, openTime: '08:30', closeTime: '20:30' }, // Friday
  { dayOfWeek: 6, openTime: '08:30', closeTime: '20:30' }  // Saturday
];

async function seedDatabase() {
  try {
    logger.info('🌱 Starting database seeding...');

    // Clear existing data (optional - comment out in production)
    logger.info('🧹 Clearing existing data...');
    await prisma.appointmentService.deleteMany();
    await prisma.appointment.deleteMany();
    await prisma.patient.deleteMany();
    await prisma.service.deleteMany();
    await prisma.serviceCategory.deleteMany();
    await prisma.operatingHours.deleteMany();

    // Seed operating hours
    logger.info('⏰ Seeding operating hours...');
    for (const hours of operatingHoursData) {
      await prisma.operatingHours.create({
        data: hours
      });
    }

    // Seed service categories and services
    logger.info('🏥 Seeding service categories and services...');
    for (const categoryData of serviceData) {
      const category = await prisma.serviceCategory.create({
        data: {
          name: categoryData.category,
          description: categoryData.description
        }
      });

      logger.info(`📁 Created category: ${category.name}`);

      for (const serviceInfo of categoryData.services) {
        const service = await prisma.service.create({
          data: {
            name: serviceInfo.name,
            description: serviceInfo.description,
            duration: serviceInfo.duration,
            categoryId: category.id
          }
        });

        logger.info(`  ✅ Created service: ${service.name}`);
      }
    }

    // Create some sample patients and appointments (optional)
    logger.info('👥 Creating sample data...');
    
    const samplePatient = await prisma.patient.create({
      data: {
        name: 'Sample Patient',
        phone: '+919999999999',
        email: 'sample@example.com'
      }
    });

    // Get a sample service for the appointment
    const sampleService = await prisma.service.findFirst();
    
    if (sampleService) {
      const sampleAppointment = await prisma.appointment.create({
        data: {
          referenceNumber: 'SID000001',
          appointmentDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
          appointmentTime: '10:00',
          status: 'PENDING',
          patientId: samplePatient.id
        }
      });

      await prisma.appointmentService.create({
        data: {
          appointmentId: sampleAppointment.id,
          serviceId: sampleService.id
        }
      });

      logger.info(`📅 Created sample appointment: ${sampleAppointment.referenceNumber}`);
    }

    logger.info('✅ Database seeding completed successfully!');

    // Print summary
    const [categoriesCount, servicesCount, patientsCount, appointmentsCount] = await Promise.all([
      prisma.serviceCategory.count(),
      prisma.service.count(),
      prisma.patient.count(),
      prisma.appointment.count()
    ]);

    logger.info('📊 Seeding Summary:');
    logger.info(`   Categories: ${categoriesCount}`);
    logger.info(`   Services: ${servicesCount}`);
    logger.info(`   Patients: ${patientsCount}`);
    logger.info(`   Appointments: ${appointmentsCount}`);

  } catch (error) {
    logger.error('❌ Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run seeding if called directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  seedDatabase()
    .then(() => {
      logger.info('🎉 Seeding completed!');
      process.exit(0);
    })
    .catch((error) => {
      logger.error('💥 Seeding failed:', error);
      process.exit(1);
    });
}

export default seedDatabase;