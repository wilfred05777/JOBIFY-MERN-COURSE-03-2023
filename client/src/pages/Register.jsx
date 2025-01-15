// @ts-nocheck
import React from 'react'
import { useState } from 'react'
import { useAppContext } from '../context/appContext'

import { FormRow, Logo } from '../components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'

// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
  // showAlert: false
}
// if possible prefer local state
// global state

const Register = () => {
  const [values, setValues] = useState(initialState)

  // global context and useNavigate later

  // const state = useAppContext()
  // console.log(state)
  const { isLoading, showAlert, displayAlert } = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values

    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
    // console.log(e.target)
  }

  // useEffect(() => {
  //   // if (user) {
  //   //   setTimeout(() => {
  //   //     navigate('/')
  //   //   }, 3000)
  //   // }
  //   // }, [user, navigate])
  // }, [])

  return (
    <Wrapper className='full-page'>

      <form className='form'>
        <Logo/>
        <h4>Register</h4>
        <FormRow type='text' name="name" defaultValue="John" />
        <FormRow type='text' name="lastName" labelText="last name" defaultValue="Doe" />
        <FormRow type='text' name="location" defaultValue="earth" />
        <FormRow type='email' name="email" defaultValue="john@gmail.com" />
        <FormRow type='password' name="password" defaultValue="*******" />
        
        <p>
          Already a member? 
          <Link to='/login' className='member-btn'> Login</Link>
        </p> 
      </form>

      {/* <form className='form' onSubmit={onSubmit}> */}
        {/* <Logo /> */}

        {/* <h3>Register</h3> */}
        {/* <h3>{values.isMember ? 'Login' : 'Register'}</h3> */}
        {/* <h3>{values.isMember ? 'Login' : 'Register'}</h3> */}
        {/* {!values.showAlert && <Alert />} */}
        {/* {showAlert && <Alert />} */}

        {/* name input */}
        {/* {!values.isMember && ( */}
          {/* <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />, */}
        {/* )} */}

        

        {/* email input */}
        {/* <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        /> */}
        {/* password input */}
        {/* <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        /> */}

        {/* <button className='btn btn-block'>submit</button> */}

        {/* <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p> */}
      {/* </form> */}
    </Wrapper>
  )
}

export default Register
