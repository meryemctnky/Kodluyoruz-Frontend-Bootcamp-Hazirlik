import React from 'react'
import MyForm from './myForm/index'

const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <MyForm />      
    </header>
  )
}

export default Header