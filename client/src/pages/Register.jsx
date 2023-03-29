// @ts-nocheck
import React from 'react'
import { useAppContext } from '../context/appContext'

import { FormRow, Logo } from '../components'

import Wrapper from '../assets/wrappers/RegisterPage'
import { useState } from 'react'

// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}
// if possible prefer local state
// global state

const Register = () => {
  const { isLoading, showAlert } = useAppContext()
  const [values, setValues] = useState(initialState)

  // global context and useNavigate later

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

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  useEffect(() => {
    // if (user) {
    //   setTimeout(() => {
    //     navigate('/')
    //   }, 3000)
    // }
    // }, [user, navigate])
  }, [])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        {/* <h3>Register</h3> */}
        {/* <h3>{values.isMember ? 'Login' : 'Register'}</h3> */}
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button className='btn btn-block'>submit</button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
    // <Wrapper className='full-page'>
    //   <form className='form' onSubmit={onSubmit}>
    //     <Logo />
    //     <h3>Login</h3>

    //     {/* name field */}
    //     <div className='form-row'>
    //       <label htmlFor='name' className='form-label'>
    //         name
    //       </label>

    //       <input
    //         type='text'
    //         value={values.name}
    //         name='name'
    //         onChange={handleChange}
    //         className='form-input'
    //       />
    //     </div>

    //     <button type='submit' className='btn btn-block'>
    //       submit
    //     </button>
    //   </form>
    // </Wrapper>
  )
}

export default Register
