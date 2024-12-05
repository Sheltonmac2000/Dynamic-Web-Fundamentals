/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// This is for the contact form 
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure your email credentials
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email provider (e.g., Gmail, Outlook, etc.)
  auth: {
    user: "support@tovelaaccounting.com", // Your email address
    pass: "your-email-password", // Your email password
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const { Name, Email, Subject, Message } = req.body;

  const mailOptions = {
    from: Email,
    to: "support@tovelaaccounting.com",
    subject: Subject,
    text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});