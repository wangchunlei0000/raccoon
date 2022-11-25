import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";

const basename = import.meta.env.VITE_GITHUB_CI ? '/raccoon/' : ''

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={basename}>

    <App />
    </Router>
  </React.StrictMode>
)
