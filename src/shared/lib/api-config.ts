type ApiConfig = {
  baseUrl: string;
  port: string;
  host: string;
};

export const getApiConfig = (): ApiConfig => {
  const port = import.meta.env?.VITE_NODE_SERVER_PORT || '8031';
  const host = import.meta.env?.VITE_API_HOST || 'localhost';

  // Для продакшена используем sptnk.co, для разработки - localhost
  const isProduction = import.meta.env?.MODE === 'production';
  const baseUrl = isProduction
    ? 'https://sptnk.co/admin/api'
    : import.meta.env?.VITE_API_URL || `http://${host}:${port}`;

  return {
    baseUrl,
    port,
    host,
  };
};

export const API_BASE_URL = getApiConfig().baseUrl;
