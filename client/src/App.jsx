// updated resource: https://github.com/john-smilga/mern-jobify-v2

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link, createBrowserRouter } from 'react-router-dom'

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from './pages'
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  }
])

function App() {

  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav>
        {/* <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Home</Link> */}
      </nav>

      <Routes>
        {/* <Route path='/' element={<div>Dashboard</div>} /> */}
        <Route path='/' element={<Landing />} />
        <Route path="/login" element={<Login/>}/>

        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
