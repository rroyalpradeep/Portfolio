import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "yuvi4650@gmail.com",
                pass: "hsgl fkxv dbkh jhsv",
            },
        });

        const mailOptions = {
            from: email,
            to: "yuvi4650@gmail.com",
            subject: "New Form Submission from Portfolio",
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
}
