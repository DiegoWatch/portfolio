import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { PortfolioRouter } from './PortfolioRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import Aos from 'aos';

Aos.init({
  once: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
