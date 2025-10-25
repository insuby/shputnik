export type FeedbackFormData = {
  name: string;
  phone: string;
  email: string;
  comment?: string;
  pageTitle: string;
};

export type FeedbackResponse = {
  success: boolean;
  message?: string;
  error?: string;
  emailResponse?: string;
};

export const sendFeedback = async (
  data: FeedbackFormData,
): Promise<FeedbackResponse> => {
  try {
    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      throw new Error('Telegram credentials not configured');
    }

    const message =
      `🔔 *Новая заявка с сайта*\n\n` +
      `👤 *Имя:* ${data.name}\n` +
      `📞 *Телефон:* ${data.phone}\n` +
      `📧 *Email:* ${data.email}\n` +
      `💬 *Комментарий:* ${data.comment || 'Не указан'}\n\n` +
      `🌐 *Страница:* ${data.pageTitle}\n` +
      `⏰ *Время:* ${new Date().toLocaleString('ru-RU')}`;

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.ok) {
      return {
        success: true,
        message: 'Сообщение успешно отправлено в Telegram',
      };
    } else {
      throw new Error(result.description || 'Ошибка отправки');
    }
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    throw error;
  }
};
