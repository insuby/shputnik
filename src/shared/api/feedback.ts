import { API_BASE_URL } from '../lib/api-config';

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
    const response = await fetch(`${API_BASE_URL}/api/node/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    throw error;
  }
};
