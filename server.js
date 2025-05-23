import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = 8031;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post('/api/node/send-email', (req, res) => {
  const { name, phone, email, comment } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USERNAME,
    to: ['SALES@DZEN-PAY.COM', 'product@dzen-pay.com'],
    subject: 'Новая заявка с формы',
    text: `
      Имя: ${name}
      Телефон: ${phone}
      Email: ${email}
      Комментарий: ${comment}
    `,
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке письма:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Письмо успешно отправлено:', info.response);
    res.status(200).send(`Email sent: ${info.response}`);
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});