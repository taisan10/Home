import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); // Ensure env variables are loaded before transporter is created

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default transporter;


