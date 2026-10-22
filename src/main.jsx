import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. Import HashRouter instead of BrowserRouter
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap App in HashRouter and set the basename */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)