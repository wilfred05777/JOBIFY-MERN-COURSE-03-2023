import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { Landing } from './pages'
import React from 'react'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />

        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
