# Swastik Imaging & Diagnostics - Backend API

A comprehensive backend API for the Swastik Imaging & Diagnostics appointment booking system. Built with Node.js, Express, Prisma, and PostgreSQL.

## 🚀 Features

- **Appointment Management**: Complete CRUD operations for appointments
- **Service Management**: Manage diagnostic services and categories
- **Patient Management**: Track patient information and history
- **Email Notifications**: Automated appointment confirmations
- **Time Slot Management**: Check availability and prevent conflicts
- **Data Validation**: Comprehensive input validation and sanitization
- **Security**: Rate limiting, CORS, security headers
- **Logging**: Structured logging with Winston
- **Database**: PostgreSQL with Prisma ORM
- **Error Handling**: Centralized error handling with proper HTTP status codes

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn
- Git

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd swastik-imaging-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
NODE_ENV=development
PORT=5000
DATABASE_URL="postgresql://username:password@localhost:5432/swastik_imaging_db?schema=public"
JWT_SECRET=your-super-secret-jwt-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=http://localhost:5173
```

### 4. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed the database with initial data
npm run db:seed
```

### 5. Start the Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## 🐳 Docker Setup

### Using Docker Compose (Recommended)
```bash
# Start all services (backend + database)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Docker Build
```bash
# Build the image
docker build -t swastik-backend .

# Run the container
docker run -p 5000:5000 --env-file .env swastik-backend
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - List appointments (with filtering)
- `GET /api/appointments/:id` - Get appointment by ID
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment
- `GET /api/appointments/available-slots` - Get available time slots
- `GET /api/appointments/stats` - Get appointment statistics

#### Services
- `GET /api/services` - List all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service
- `GET /api/services/categories` - List service categories
- `POST /api/services/categories` - Create service category

#### Health Check
- `GET /api/health` - Basic health check
- `GET /api/health/detailed` - Detailed system health
- `GET /api/health/db-stats` - Database statistics

### Request Examples

#### Create Appointment
```bash
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "+919999999999",
    "email": "john@example.com",
    "appointmentDate": "2024-02-01",
    "appointmentTime": "10:00",
    "selectedServices": ["Blood Test", "X-Ray"],
    "additionalInfo": "Patient has diabetes"
  }'
```

#### Get Available Slots
```bash
curl "http://localhost:5000/api/appointments/available-slots?date=2024-02-01"
```

#### List Services
```bash
curl "http://localhost:5000/api/services"
```

## 🗄️ Database Schema

### Main Entities

1. **Patient** - Patient information
2. **Appointment** - Appointment details
3. **Service** - Diagnostic services
4. **ServiceCategory** - Service categorization
5. **AppointmentService** - Many-to-many relationship
6. **OperatingHours** - Business hours
7. **BlockedDate** - Holiday/blocked dates

### Key Relationships
- Patient → Appointments (One-to-Many)
- Appointment → Services (Many-to-Many via AppointmentService)
- ServiceCategory → Services (One-to-Many)

## 🔒 Security Features

- **Rate Limiting**: Prevents abuse and DoS attacks
- **CORS**: Configured for frontend domains
- **Input Validation**: Comprehensive validation using express-validator
- **Sanitization**: XSS protection through input sanitization
- **Security Headers**: Using Helmet.js
- **Error Handling**: Secure error responses

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `EMAIL_PASS`

### Template Customization
Email templates are located in `src/config/email.js`. You can customize:
- Appointment confirmation emails
- Reminder emails
- Cancellation notifications

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📊 Monitoring & Logging

### Logs
- **Location**: `logs/` directory
- **Levels**: error, warn, info, debug
- **Format**: JSON (production) / Pretty (development)

### Health Checks
- `GET /api/health` - Basic health status
- `GET /api/health/detailed` - Database and email connectivity
- `GET /api/health/db-stats` - Database statistics

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL=your-production-database-url
JWT_SECRET=your-production-jwt-secret
EMAIL_HOST=your-smtp-host
EMAIL_USER=your-production-email
EMAIL_PASS=your-production-password
FRONTEND_URL=https://your-frontend-domain.com
```

### Deploy to Cloud Platforms

#### Heroku
```bash
# Add Heroku remote
heroku git:remote -a your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set DATABASE_URL=your-database-url

# Deploy
git push heroku main
```

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### AWS/GCP/Azure
Use the Docker image with your cloud provider's container service.

## 🔧 Development

### Database Operations
```bash
# Reset database
npm run db:reset

# View database in browser
npm run db:studio

# Create new migration
npx prisma migrate dev --name migration-name
```

### Code Quality
```bash
# Lint code
npm run lint

# Format code
npm run format
```

## 📞 Support

For support and questions:
- **Phone**: +91-7303034849
- **Email**: swastikimaginganddiagnostics@gmail.com
- **Address**: 26/3, Ground Floor, Old Rajinder Nagar, New Delhi-110060

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📈 Roadmap

- [ ] User authentication for patients
- [ ] Admin dashboard
- [ ] Payment integration
- [ ] SMS notifications
- [ ] Appointment reminders
- [ ] Report generation
- [ ] API documentation with Swagger
- [ ] Real-time notifications