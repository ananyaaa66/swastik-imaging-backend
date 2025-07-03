# Frontend Integration Guide

This guide explains how to integrate your existing React frontend with the new backend API.

## 🔄 Quick Start Integration

### 1. Install Dependencies

Add these packages to your frontend:

```bash
cd /path/to/your/frontend
npm install axios react-query
```

### 2. Create API Client

Create `src/lib/api.ts`:

```typescript
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.error?.message || 'Something went wrong';
    console.error('API Error:', message);
    throw new Error(message);
  }
);

export default apiClient;
```

### 3. Create API Service Functions

Create `src/services/appointmentService.ts`:

```typescript
import apiClient from '../lib/api';

export interface CreateAppointmentData {
  name: string;
  phone: string;
  email?: string;
  appointmentDate: string;
  appointmentTime: string;
  selectedServices: string[];
  additionalInfo?: string;
}

export interface AvailableSlot {
  time: string;
  display: string;
  available: boolean;
}

export const appointmentService = {
  // Create new appointment
  createAppointment: async (data: CreateAppointmentData) => {
    return apiClient.post('/appointments', data);
  },

  // Get available slots for a date
  getAvailableSlots: async (date: string): Promise<AvailableSlot[]> => {
    const response = await apiClient.get(`/appointments/available-slots?date=${date}`);
    return response.data;
  },

  // Get appointment by ID or reference number
  getAppointment: async (id: string) => {
    return apiClient.get(`/appointments/${id}`);
  },

  // Get services
  getServices: async () => {
    return apiClient.get('/services');
  },

  // Get service categories
  getServiceCategories: async () => {
    return apiClient.get('/services/categories');
  }
};
```

### 4. Update Your BookAppointment Component

Replace the form submission logic in `src/pages/BookAppointment.tsx`:

```typescript
import { useMutation, useQuery } from '@tanstack/react-query';
import { appointmentService } from '../services/appointmentService';

export default function BookAppointment() {
  // ... existing state and code ...

  // Fetch available slots when date changes
  const { data: availableSlots, isLoading: slotsLoading } = useQuery({
    queryKey: ['availableSlots', formData.date],
    queryFn: () => appointmentService.getAvailableSlots(formData.date),
    enabled: !!formData.date,
  });

  // Create appointment mutation
  const createAppointmentMutation = useMutation({
    mutationFn: appointmentService.createAppointment,
    onSuccess: (data) => {
      // Redirect to confirmation with real data
      const params = new URLSearchParams({
        referenceNumber: data.data.referenceNumber,
        appointmentId: data.data.id,
      });
      navigate(`/appointment-confirmation?${params.toString()}`);
    },
    onError: (error) => {
      // Show error message
      console.error('Booking failed:', error);
      // You can add toast notification here
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const appointmentData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      appointmentDate: formData.date,
      appointmentTime: formData.time,
      selectedServices: selectedTests,
      additionalInfo: formData.additionalInfo,
    };

    createAppointmentMutation.mutate(appointmentData);
  };

  // ... rest of your component

  // Update the time slot selection to use real available slots
  return (
    // ... existing JSX
    <select
      id="time"
      required
      value={formData.time}
      onChange={(e) => handleInputChange("time", e.target.value)}
      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-primary focus:border-transparent"
      disabled={slotsLoading}
    >
      <option value="">
        {slotsLoading ? 'Loading slots...' : 'Select a time slot'}
      </option>
      {availableSlots?.map((slot) => (
        <option key={slot.time} value={slot.time} disabled={!slot.available}>
          {slot.display} {!slot.available && '(Booked)'}
        </option>
      ))}
    </select>
    // ... rest of JSX
  );
}
```

### 5. Update Environment Variables

Add to your `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

### 6. Update AppointmentConfirmation Component

Modify `src/pages/AppointmentConfirmation.tsx` to fetch real appointment data:

```typescript
import { useQuery } from '@tanstack/react-query';
import { appointmentService } from '../services/appointmentService';

export default function AppointmentConfirmation() {
  const [searchParams] = useSearchParams();
  const appointmentId = searchParams.get("appointmentId");
  const referenceNumber = searchParams.get("referenceNumber");

  // Fetch appointment data from backend
  const { data: appointmentData, isLoading, error } = useQuery({
    queryKey: ['appointment', appointmentId || referenceNumber],
    queryFn: () => appointmentService.getAppointment(appointmentId || referenceNumber!),
    enabled: !!(appointmentId || referenceNumber),
  });

  if (isLoading) {
    return <div>Loading appointment details...</div>;
  }

  if (error || !appointmentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Appointment Not Found
          </h1>
          <Link to="/book-appointment">
            <Button className="bg-medical-primary hover:bg-medical-secondary text-white">
              Book New Appointment
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const appointment = appointmentData.data;

  // ... rest of component using real appointment data
}
```

## 🚀 Start Both Services

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend  
```bash
cd /path/to/frontend
npm run dev
```

## 🔧 Environment Setup

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
DATABASE_URL="postgresql://username:password@localhost:5432/swastik_imaging_db"
FRONTEND_URL=http://localhost:5173
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 📊 Testing the Integration

1. **Start both servers**
2. **Visit** `http://localhost:5173/book-appointment`
3. **Fill the form** with valid data
4. **Submit** and check if appointment is created
5. **Check backend logs** for confirmation
6. **Verify email** was sent (if configured)

## 🐛 Common Issues & Solutions

### CORS Errors
Make sure your frontend URL is in the backend's CORS configuration:
```javascript
// backend/src/middleware/security.js
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  // Add your frontend URL
];
```

### Database Connection Issues
1. Make sure PostgreSQL is running
2. Check DATABASE_URL in backend .env
3. Run `npm run db:migrate` in backend

### Email Not Working
1. Check email credentials in backend .env
2. Enable "Less secure app access" for Gmail
3. Use App Password for Gmail with 2FA

## 🎯 Next Steps

1. **Test the integration** thoroughly
2. **Add error handling** and loading states
3. **Implement real-time updates** with WebSockets
4. **Add user authentication**
5. **Create admin dashboard**
6. **Add payment integration**

## 📞 Support

If you encounter any issues:
- Check backend logs: `backend/logs/combined.log`
- Check browser console for frontend errors
- Verify environment variables are set correctly
- Test API endpoints with curl or Postman

The backend is now fully functional and ready to handle all appointment bookings with proper database persistence and email notifications!