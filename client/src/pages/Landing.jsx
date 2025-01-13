import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// import main from '../assets/images/main.svg'
// import Wrapper from '../assets/wrappers/LandingPage'
// import { Logo } from '../components'
// import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
// import { useAppContext } from '../context/appContext'

const Landing = () => {
  return (
    <Wrapper>
      <h2>Landing</h2>
      <Link to='/register'>Login / Register</Link>
      <div className="content">Some Content</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: red;
  h1{
    color: white;
  }
  .content{
    background: blue;
    color: yellow;
  }
`;

export default Landing
