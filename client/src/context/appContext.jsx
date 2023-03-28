// @ts-nocheck
import React, { useReducer, useContext, useEffect } from 'react'

import axios from 'axios'

import { DISPLAY_ALERT, CLEAR_ALERT } from './actions'

const intialState = {
  isLoading: true,
  showAlert: false
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
    <AppContext.Provider value={(displayAlert, clearAlert)}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, intialState, useAppContext }
