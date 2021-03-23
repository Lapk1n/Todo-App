import React, { useContext, useReducer } from 'react'
import { reducer } from './FirebaseReducer'
import axios from 'axios'
import { SHOW_LOADER, ADD_NOTE, DEL_NOTE, FETCH_NOTES } from './Types'
const FirebaseContext = React.createContext()
const url = process.env.REACT_APP_DB_URL

export const useFirebaseProvider = () => {
  return useContext(FirebaseContext)
}

export default function FirebaseProvider({ children }) {
  const initialState = {
    notes: [],
    loading: false,
  } // Является образцом state. Дальнейшие изменения по данному образцу

  const [state, dispatch] = useReducer(reducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchNotes = async () => {
    showLoader()
    const res = await axios.get(`${url}/notes.json`)
    let payload

    if (res.data !== null) {
      payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        }
      })
    } else {
      payload = null
    }
    dispatch({ type: FETCH_NOTES, payload })
  }

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    }

    try {
      const res = await axios.post(`${url}/notes.json`, note)

      const payload = {
        ...note,
        id: res.data.name,
      }

      dispatch({ type: ADD_NOTE, payload })
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const delNote = async (id) => {
    dispatch({ type: DEL_NOTE, id })
    await axios.delete(`${url}/notes/${id}.json`)
  }

  // console.log(state) // Объект state существует в памяти, но физически его нет

  return <FirebaseContext.Provider value={{ notes: state.notes, loading: state.loading, addNote, delNote, fetchNotes, showLoader }}>{children}</FirebaseContext.Provider>
}
