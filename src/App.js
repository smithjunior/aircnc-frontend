import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'

import './App.css'
import logo from './assets/logo.svg'

function App() {
  return (
    <div className='container'>
      <img src={logo} alt='Aircnc' />
      <div className='content'>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    </div>
  )
}

export default App
