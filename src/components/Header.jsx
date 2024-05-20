import './App.css'
import th from '../images/th.jpg'
import React from 'react'

const Header = () => {
  return (
    <><div className="header-content">
    <img src={th} alt="our logo" />
    <h1>Google Keep</h1></div>
    </>
  )
}

export default Header