import nodemailer from 'nodemailer';
import { logger } from '../utils/logger.js';

// Create email transporter
export const createEmailTransporter = () => {
  const transporter = nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter;
};

// Test email configuration
export const testEmailConnection = async () => {
  try {
    const transporter = createEmailTransporter();
    await transporter.verify();
    logger.info('✅ Email configuration verified');
    return true;
  } catch (error) {
    logger.error('❌ Email configuration failed:', error);
    return false;
  }
};

// Email templates
export const emailTemplates = {
  appointmentConfirmation: (appointmentData) => ({
    subject: `Appointment Confirmation - ${appointmentData.referenceNumber}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Appointment Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #00704A; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .appointment-details { background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .footer { background-color: #00704A; color: white; padding: 15px; text-align: center; font-size: 12px; }
          .highlight { color: #00704A; font-weight: bold; }
          .services-list { list-style-type: none; padding: 0; }
          .services-list li { padding: 5px 0; border-bottom: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>SWASTIK IMAGING & DIAGNOSTICS</h1>
            <p>Appointment Confirmation</p>
          </div>
          
          <div class="content">
            <h2>Dear ${appointmentData.patient.name},</h2>
            <p>Thank you for choosing Swastik Imaging & Diagnostics. Your appointment has been successfully booked.</p>
            
            <div class="appointment-details">
              <h3>Appointment Details</h3>
              <p><strong>Reference Number:</strong> <span class="highlight">${appointmentData.referenceNumber}</span></p>
              <p><strong>Date:</strong> ${new Date(appointmentData.appointmentDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Time:</strong> ${appointmentData.appointmentTime}</p>
              <p><strong>Contact Number:</strong> ${appointmentData.patient.phone}</p>
              ${appointmentData.patient.email ? `<p><strong>Email:</strong> ${appointmentData.patient.email}</p>` : ''}
            </div>

            ${appointmentData.services && appointmentData.services.length > 0 ? `
            <div class="appointment-details">
              <h3>Selected Tests/Services</h3>
              <ul class="services-list">
                ${appointmentData.services.map(service => `<li>${service}</li>`).join('')}
              </ul>
            </div>
            ` : ''}

            <div class="appointment-details">
              <h3>Important Instructions</h3>
              <ul>
                <li>Please arrive 15 minutes before your scheduled appointment time</li>
                <li>Bring a valid photo ID proof</li>
                <li>For blood tests, fast for 8-12 hours if required</li>
                <li>Wear comfortable, loose-fitting clothing</li>
                <li>Call us if you need to reschedule or cancel</li>
              </ul>
            </div>

            <div class="appointment-details">
              <h3>Contact Information</h3>
              <p><strong>Phone:</strong> +91-7303034849</p>
              <p><strong>Email:</strong> swastikimaginganddiagnostics@gmail.com</p>
              <p><strong>Address:</strong> 26/3, Ground Floor, Old Rajinder Nagar, New Delhi-110060</p>
            </div>

            <p>We look forward to serving you. If you have any questions, please don't hesitate to contact us.</p>
          </div>
          
          <div class="footer">
            <p>Led by Dr. Shweta Singh - M.B.B.S MD RADIOLOGY (GOLD MEDALIST)</p>
            <p>Accurate. Affordable. Reliable Diagnostics.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
      SWASTIK IMAGING & DIAGNOSTICS
      Appointment Confirmation
      
      Dear ${appointmentData.patient.name},
      
      Thank you for choosing Swastik Imaging & Diagnostics. Your appointment has been successfully booked.
      
      APPOINTMENT DETAILS:
      Reference Number: ${appointmentData.referenceNumber}
      Date: ${new Date(appointmentData.appointmentDate).toLocaleDateString()}
      Time: ${appointmentData.appointmentTime}
      Contact: ${appointmentData.patient.phone}
      
      IMPORTANT INSTRUCTIONS:
      - Arrive 15 minutes early
      - Bring valid photo ID
      - Fast 8-12 hours for blood tests (if required)
      - Wear comfortable clothing
      
      CONTACT US:
      Phone: +91-7303034849
      Email: swastikimaginganddiagnostics@gmail.com
      Address: 26/3, Ground Floor, Old Rajinder Nagar, New Delhi-110060
      
      Led by Dr. Shweta Singh - M.B.B.S MD RADIOLOGY (GOLD MEDALIST)
      Accurate. Affordable. Reliable Diagnostics.
    `
  }),

  appointmentReminder: (appointmentData) => ({
    subject: `Appointment Reminder - Tomorrow at ${appointmentData.appointmentTime}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #00704A; color: white; padding: 20px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Reminder</h1>
          </div>
          <div style="padding: 20px;">
            <h2>Dear ${appointmentData.patient.name},</h2>
            <p>This is a friendly reminder about your appointment with Swastik Imaging & Diagnostics.</p>
            <p><strong>Tomorrow:</strong> ${new Date(appointmentData.appointmentDate).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${appointmentData.appointmentTime}</p>
            <p><strong>Reference:</strong> ${appointmentData.referenceNumber}</p>
            <p>Please arrive 15 minutes early and bring a valid ID proof.</p>
            <p>Contact us at +91-7303034849 if you need to reschedule.</p>
          </div>
        </div>
      </body>
      </html>
    `
  })
};

// Send email function
export const sendEmail = async (to, template) => {
  try {
    const transporter = createEmailTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject: template.subject,
      html: template.html,
      text: template.text,
    };

    const result = await transporter.sendMail(mailOptions);
    logger.info(`✅ Email sent successfully to ${to}`, { messageId: result.messageId });
    return { success: true, messageId: result.messageId };
  } catch (error) {
    logger.error(`❌ Failed to send email to ${to}:`, error);
    return { success: false, error: error.message };
  }
};