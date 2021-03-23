import React from 'react'
import { useAlertProvider } from '../context/alert/AlertContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function Notes({ notes, delNote }) {
  if (!notes || notes == null) notes = []

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note, index) => (
        <CSSTransition key={note.id} timeout={800} classNames={'note'}>
          <li className="list-group-item">
            <div className="list-group-item-content">
              <strong>
                <span>{index + 1}.</span>
                {note.title}
                <small>({new Date().toLocaleDateString()})</small>
              </strong>
            </div>
            <button onClick={() => delNote(note.id)} type="button" className="btn btn-outline-danger btn-sm">
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}
