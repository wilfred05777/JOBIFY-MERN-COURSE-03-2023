import React from 'react'
import { Link } from 'react-router-dom'
// import main from '../assets/images/main.svg'
// import Wrapper from '../assets/wrappers/LandingPage'
// import { Logo } from '../components'
// import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
// import { useAppContext } from '../context/appContext'

const Landing = () => {
  return (
    <div>
      <h2>Landing</h2>
      <Link to='/register'>Login / Register</Link>
    </div>
  )
}

export default Landing
