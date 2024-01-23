import nodemailer from "nodemailer";

export const sendMail = ({
  subject,
  fromEmail,
  toEmail,
  otpText,
}: {
  subject: string;
  fromEmail?: string;
  toEmail: string;
  otpText: string;
}) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  let mailOptions = {
    from: fromEmail || process.env.NODEMAIL_EMAIL,
    to: toEmail,
    subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) throw new Error(error.message);
    else {
      console.log("Email sent");
      return true;
    }
  });
};
