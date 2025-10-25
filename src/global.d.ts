declare module 'styles';

type ImportMetaEnv = {
  readonly VITE_TELEGRAM_BOT_TOKEN?: string;
  readonly VITE_TELEGRAM_CHAT_ID?: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
