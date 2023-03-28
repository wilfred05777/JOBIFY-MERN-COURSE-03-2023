import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './context/appContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* https://github.com/john-smilga/mern-course-jobify */}
    {/* <AppProvider> */}
    <App />
    {/* </AppProvider> */}
  </React.StrictMode>
)
