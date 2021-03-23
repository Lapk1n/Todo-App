import React from 'react'
import { useAlertProvider } from './AlertContext'
import { CSSTransition } from 'react-transition-group'

export default function Alert() {
  const { alert, hide } = useAlertProvider()

  return (
    <CSSTransition in={alert.visible} classNames="alert" mountOnEnter unmountOnExit timeout={500}>
      <div className={`alert alert-${alert.value || 'warning'} alert-dismissible`} role="alert" onClick={hide}>
        <strong>{alert.text}</strong>
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  )
}
