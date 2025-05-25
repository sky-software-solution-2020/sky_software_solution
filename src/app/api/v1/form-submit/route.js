import { sequelize } from "@/lib/db";
import FormData from "@/models/formdata";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const { form } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await sequelize.authenticate()
    await FormData.sync()

    await transporter.sendMail({
      from: `${form.name} (${form.email})`,
      to: process.env.EMAIL,
      subject: "User Contact Form",
      text: `
              Name: ${form.name}
              Email: ${form.email}
              Mobile Number: ${form.mobileNumber}
              Message: ${form.message}
            `,
      replyTo: form.email
    });

    await FormData.create({
      ...form
    })

    return Response.json({
      success: true,
      message: "Form Submit Successfully",
    }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, message: "Form Submission Failed" },
      { status: 500 }
    );
  }
}
