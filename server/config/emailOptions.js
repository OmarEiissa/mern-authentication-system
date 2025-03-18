import transporter from "../config/nodemailer.js";

export const sendEmail = async ({ from, to, subject, text, html }) => {
  const mailOptions = {
    from: from || `"Omar Eissa Support" <${process.env.SENDER_EMAIL}>`,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error("Error sending email:", error);
  //   } else {
  //     console.log("Email send:", info.response);
  //   }
  // });
};
