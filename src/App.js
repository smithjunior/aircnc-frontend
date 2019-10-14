import React from 'react'
import './App.css'
import logo from './assets/logo.svg'
function App() {
  return (
    <div className='container'>
      <img src={logo} alt='Aircnc' />
      <div className='content'>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa!
        </p>
        <form action=''>
          <label htmlFor='email'>E-MAIL *</label>
          <input
            type='email'
            id='emaisl'
            placeholder='Seu melhor email' />
          <button type='submit' className='btn'> Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default App
