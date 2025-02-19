import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  // Configura il trasportatore di Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Invia l'email
    const data = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nuovo messaggio da ${name}: ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\nMessaggio: ${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Messaggio:</strong> ${message}</p>`,
    });
    return NextResponse.json(
      { message: "Email inviata con successo!", data },
      { status: 200 }
    );
  } catch (err) {
    console.error("Errore durante l'invio della mail", err);
    return NextResponse.json({ message: "Errore durante l'invio", err });
  }
}
