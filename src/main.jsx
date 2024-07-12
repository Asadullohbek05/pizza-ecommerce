import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LanguageContextProvider from './context/LanguageContext.jsx'

import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
      <ToastContainer autoClose={2000} />
    </LanguageContextProvider>
  </React.StrictMode>,
)
