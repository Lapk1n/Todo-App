import React, { useEffect } from 'react'
import '../App.css'
import Form from '../components/Form'
import Notes from '../components/Notes'
import Loader from '../components/Loader'
import { useFirebaseProvider } from '../context/Firebase/FirebaseContext'
function Home() {
  const { fetchNotes, notes, delNote } = useFirebaseProvider()

  const loading = useFirebaseProvider().loading

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="home">
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} delNote={delNote} />}
    </div>
  )
}

export default Home
