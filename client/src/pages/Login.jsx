import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'
import { FormRow, Logo } from '../components'


const Login = () => {
  return (
      <Wrapper>
          <form className='form'>
            <Logo/>
            <h4>Login Page</h4>
             <FormRow type="email" name="email" defaultValue="john@gmail.com"/>
              <FormRow type="password" name="password" defaultValue="secret123" />
              
              <button type='submit' className='btn btn-block'>Submit</button>
              
              <button type='button' className='btn btn-block'>Explore the app</button>
              
                <p>
                Not a member yet? 
                <Link to='/register' className='member-btn'> Register</Link>
                </p> 
          </form>
        {/* <Link to='/register'>Register Page</Link> */}
    </Wrapper>
  )
}

export default Login