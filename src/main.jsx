import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppProvider } from './context/appContext.jsx';

import './index.css';

import App from './App.jsx';

createRoot(
  document.getElementById('root'),
).render(
  <StrictMode>
    <AppProvider>
      <div className='body'>
        <div className='main-container '>
          <App />
        </div>
      </div>
    </AppProvider>
  </StrictMode>,
);
