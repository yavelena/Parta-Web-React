import React from "react"
import ReactDom from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from './App'
import './styles.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Parta-Web-React">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
