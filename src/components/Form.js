import React, { useState } from 'react'
import { useAlertProvider } from '../context/alert/AlertContext'
import { useFirebaseProvider } from '../context/Firebase/FirebaseContext'

export default function Form() {
  const [value, setValue] = useState('')
  const { show, hide } = useAlertProvider()
  const { addNote } = useFirebaseProvider()

  const validation = (e) => {
    e.preventDefault()
    if (value.trim()) {
      addNote(value)
      show('Заметка создана', 'success')
      setTimeout(hide, 2000)
      setValue('')
    } else {
      show('Нельзя создать пустую заметку')
      setTimeout(hide, 2000)
    }
  }
  return (
    <form onSubmit={(e) => validation(e)}>
      <div className="form-group">
        <input onChange={(e) => setValue(e.target.value)} value={value} type="text" className="form-control" placeholder="Введите название заметки" />
      </div>
    </form>
  )
}
