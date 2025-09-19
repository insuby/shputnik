import { App } from 'app';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'shared/i18n.ts';

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
