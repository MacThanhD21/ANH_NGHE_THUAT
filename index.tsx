import React from 'react';
import ReactDOM from 'react-dom/client';
// Fix: The "not a module" error was resolved by implementing App.tsx correctly.
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
