import React from 'react'
import './App.css'
import About from './pages/About'
import Nav from './components/Nav'
import Home from './pages/Home'
import Alert from './context/alert/Alert'
import AlertProvider from './context/alert/AlertContext'
import FirebaseProvider from './context/Firebase/FirebaseContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <FirebaseProvider>
      <AlertProvider>
        <Router>
          <Nav />
          <div className="container">
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </AlertProvider>
    </FirebaseProvider>
  )
}

export default App
