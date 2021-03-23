import { SHOW_LOADER, ADD_NOTE, DEL_NOTE, FETCH_NOTES } from './Types'
const checkIterable = (obj, action) => {
  if (obj) return [...obj, action.payload]
  return [action.payload]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
    case ADD_NOTE:
      return { ...state, notes: checkIterable(state.notes, action) }
    case DEL_NOTE:
      return { ...state, notes: state.notes.filter((item) => item.id !== action.id) }
    case FETCH_NOTES:
      return { ...state, notes: action.payload, loading: false }

    default:
      return state
  }
}
