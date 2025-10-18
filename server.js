import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config();

const PORT = process.env.NODE_SERVER_PORT || 8031;
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

const sendTelegramNotification = async (data) => {
  const { name, phone, email, comment } = data;

  const message = `🔔 *Новая заявка с сайта*\n\n` +
    `👤 *Имя:* ${name}\n` +
    `📞 *Телефон:* ${phone}\n` +
    `📧 *Email:* ${email}\n` +
    `💬 *Комментарий:* ${comment || 'Не указан'}\n\n` +
    `⏰ *Время:* ${new Date().toLocaleString('ru-RU')}`;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  try {
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown'
    });
    console.log('Telegram уведомление отправлено:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке Telegram уведомления:', error.response?.data || error.message);
    throw error;
  }
};

app.post('/api/node/send-email', async (req, res) => {
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

  const results = {
    email: { success: false, error: null },
    telegram: { success: false, error: null }
  };

  // Отправляем email (если настроен)
  if (process.env.SMTP_HOST && process.env.SMTP_USERNAME && process.env.SMTP_PASSWORD) {
    try {
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Ошибка при отправке письма:', error);
            reject(error);
          } else {
            console.log('Письмо успешно отправлено:', info.response);
            resolve(info);
          }
        });
      });
      results.email = { success: true, error: null };
    } catch (emailError) {
      console.error('Ошибка при отправке email:', emailError);
      results.email = { success: false, error: emailError.message };
    }
  } else {
    console.log('SMTP не настроен, пропускаем отправку email');
  }

  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    try {
      await sendTelegramNotification({ name, phone, email, comment });
      results.telegram = { success: true, error: null };
    } catch (telegramError) {
      console.error('Ошибка при отправке Telegram уведомления:', telegramError);
      results.telegram = { success: false, error: telegramError.message };
    }
  } else {
    console.log('Telegram не настроен, пропускаем отправку уведомлений');
  }

  const hasSuccess = results.email.success || results.telegram.success;

  if (hasSuccess) {
    res.status(200).json({
      success: true,
      message: 'Сообщение успешно отправлено',
      results: results
    });

    return;
  }

  res.status(500).json({
    success: false,
    error: 'Не удалось отправить заявку ни одним способом',
    results: results
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Telegram Bot Token: ${process.env.TELEGRAM_BOT_TOKEN ? 'Настроен' : 'Не найден'}`);
  console.log(`Telegram Chat ID: ${process.env.TELEGRAM_CHAT_ID ? 'Настроен' : 'Не найден'}`);
});