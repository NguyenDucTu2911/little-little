import nodemailer, { Transporter } from 'nodemailer';

interface EmailData {
    to: string;
    subject: string;
    text: string;
}

export async function sendEmail(emailData: EmailData) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.MAIL_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: 'your-gmail-username',
        to: emailData.to,
        subject: emailData.subject,
        text: emailData.text,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`Message sent: ${info.messageId}`);
}