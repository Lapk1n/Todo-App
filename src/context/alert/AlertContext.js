import React, { useContext, useReducer } from 'react'
const AlertContext = React.createContext()

const SHOW_ALERT = 'SHOW_ALERT'
const HIDE_ALERT = 'HIDE_ALERT'

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, visible: true, text: action.text, value: action.value }
    case HIDE_ALERT:
      return { ...state, visible: false }
    default:
      return state
  }
}
export const useAlertProvider = () => {
  return useContext(AlertContext)
}

export default function AlertProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { visible: false })
  const show = (text, value) => dispatch({ type: SHOW_ALERT, text, value })
  const hide = () => dispatch({ type: HIDE_ALERT })

  return <AlertContext.Provider value={{ alert: state, show, hide }}>{children}</AlertContext.Provider>
}
