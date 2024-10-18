// lib/sendEmail.ts
import nodemailer from "nodemailer";

/**
 * Sends a password reset email.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} resetLink - The link for resetting the password.
 * @throws Will throw an error if required fields are missing or email sending fails.
 */
export async function sendPasswordResetEmail(
  to: string,
  subject: string,
  resetLink: string
): Promise<void> {
  // Validate input data
  if (!to || !subject || !resetLink) {
    throw new Error("Missing required fields");
  }

  const htmlMessage = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333;
          }
          a {
            display: inline-block;
            margin: 10px 0;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
          }
          a:hover {
            background-color: #0056b3;
          }
          p {
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Password Reset</h1>
          <p>To set your new password, please click the link below:</p>
          <a href="${resetLink}">Set Your Password</a>
          <p>This link will expire in 1 hour.</p>
          <p>If you did not request this, please ignore this email.</p>
          <p>Best regards,<br>Your Company</p>
        </div>
      </body>
    </html>
  `;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io", // Use your email provider's settings
    port: 2525,
    auth: {
      user: "5d057c3fb0efee", // Your Mailtrap username
      pass: "566e84f2fb6a02", // Your Mailtrap password
    },
  });

  // Set up email data
  const mailOptions = {
    from: process.env.EMAIL_USER || "", // sender address
    to, // list of receivers
    subject, // Subject line
    html: htmlMessage, // HTML body
  };

  try {
    // Send mail
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}
