import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/diploma_v5">
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
