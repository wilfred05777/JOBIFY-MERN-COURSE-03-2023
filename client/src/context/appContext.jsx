import React, { useState, useReducer, useContext } from 'react'

import reducer from './reducer'
import { DISPLAY_ALERT } from './actions'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

// const AppContext = React.createContext()
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  // const [state, setState] = useState(initialState)

  const [state, dispatch] = useReducer(initialState)

  // const displayAlert = () => {
  //   dispatch({ type: DISPLAY_ALERT })
  // clearAlert()
  // }
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value })
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

// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
