// @ts-nocheck
import React, { useState, useReducer, useContext } from 'react'

import reducer from './reducer'
import { DISPLAY_ALERT } from './actions'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

const onSubmit = (e) => {
  e.preventDefault()
  const { name, email, password, isMember } = values
  if (!email || !password || (!isMember && !name)) {
    displayAlert()
    return
  }
  console.log(values)
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState)

  // global state and useNavigate

  // const displayAlert() =>{
  //   dispatch({type:DISPLAY_ALERT})
  // }

  const displayAlert = () => {
    dispatch({
      type: DISPLAY_ALERT
    })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
