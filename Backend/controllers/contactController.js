import transporter from "../utils/nodemailer.js";

export const sendContactMail = async (req, res) => {
  const { firstName, lastName, email, phoneCode, role,phone, message,  services } = req.body;

  try {
   await transporter.sendMail({
  from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
  to: process.env.RECEIVER_EMAIL,
  replyTo: email,
  subject: `Contact Form: ${firstName} ${lastName}`,
  html: `
    <h3>New Contact Form Submission</h3>
    <p><b>Name:</b> ${firstName} ${lastName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phoneCode} ${phone}</p>
    <p><b>Role:</b> ${role}</p>
    <p><b>Message:</b> ${services}</p>
    <p><b>Message:</b> ${ message}</p>
  `,
});

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false });
  }
};
