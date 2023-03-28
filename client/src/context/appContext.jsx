// @ts-nocheck
import React, { useReducer, useContext, useEffect } from 'react'

import axios from 'axios'

import { DISPLAY_ALERT, CLEAR_ALERT } from './actions'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: ''
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  return (
    <AppContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
