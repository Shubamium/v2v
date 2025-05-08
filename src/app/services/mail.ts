"use server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
export async function submitForm(
  name: string,
  mail: string,
  subject: string,
  message: string
) {
  const res = await transport.sendMail({
    from: `${process.env.MAIL_USER} <Vir2alVerse>`,
    to: process.env.MAIL_TARGET,
    subject: `[Form Submission] ${subject}`,
    text: `New submission on Vir2alverse website from ${name} - ${mail} \n \n \n MESSAGE: \n ${message}`,
  });

  if (res.accepted && res.accepted.length >= 1) {
    return true;
  } else {
    return false;
  }
}
