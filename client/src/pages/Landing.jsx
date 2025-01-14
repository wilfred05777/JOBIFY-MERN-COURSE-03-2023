import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import Logo from '../components/Logo'
// import Logo from '../assets/images/logo.svg'

// import main from '../assets/images/main.svg'
// import Wrapper from '../assets/wrappers/LandingPage'
// import { Logo } from '../components'
// import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
// import { useAppContext } from '../context/appContext'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
        {/* <img src={Logo} alt='logo' className='logo'/> */}
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>App
          </h1>
          {/* resource for text generator https://hipsum.co/ */}
          <p>I'm baby green juice cray trust fund post-ironic. Jean shorts irony adaptogen chartreuse synth try-hard air plant snackwave tumblr. Copper mug sriracha gluten-free poutine succulents. Migas blue bottle snackwave street art chicharrones echo park. </p>

          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to="/login" className='btn register-link'>
            Login / Demo User

          </Link>
        </div>
        <img src={main} alt='main' className='main-img img'/>
      </div>

      {/* <h2>Landing</h2>
      <Link to='/register'>Login / Register</Link>
      <div className="content">Some Content</div> */}
    </Wrapper>
  )
}

// const Wrapper = styled.div`
//   background: red;
//   h1{
//     color: white;
//   }
//   .content{
//     background: blue;
//     color: yellow;
//   }
// `;

export default Landing
