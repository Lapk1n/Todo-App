import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg  bg-primary">
      <div className="nav_logo">
        <h2>Todo App</h2>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/">
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            Информация
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
