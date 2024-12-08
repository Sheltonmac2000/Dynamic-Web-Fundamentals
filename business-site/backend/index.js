const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Get email credentials from Firebase config
const emailUser = functions.config().email.user;
const emailPass = functions.config().email.pass;

// Create the transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: emailUser, // Use credentials from Firebase config
    pass: emailPass,
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  const { Name, Email, Subject, Message } = req.body;

  const mailOptions = {
    from: Email,
    to: emailUser, // The email to send messages to
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
