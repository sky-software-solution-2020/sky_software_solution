import nodemailer from "nodemailer";

export async function POST(req, res) {
  const { name, email, mobileNumber, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    const data = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.EMAIL,
      subject: "User Contact Form",
      text: `
              Name: ${name}
              Email: ${email}
              Mobile Number: ${mobileNumber}
              Message: ${message}
            `,
    });

    return Response.json({
      success: true,
      data: data,
      message: "Form Submit Successfully",
    });
  } catch (error) {
    return res.json(
      { success: false, message: "Form Submission Failed" },
      { status: 500 }
    );
  }
}
