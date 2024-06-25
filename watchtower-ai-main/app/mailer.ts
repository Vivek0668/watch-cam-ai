import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: "vivek000888888@gmail.com",
    pass: "vivek000888888@gmail.com",
  },
});

const sendMail = (subject: string, text: string) => {
  const mailOptions = {
    from: `"watchcam" <${"vivek00088888@gmail.com"}>`,
    to: 'vivek00088888@gmail.com', // Change to your recipient email
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

export default sendMail;
