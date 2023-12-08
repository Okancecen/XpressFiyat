import React from 'react'
import './header.css'
import logo from '../../images/logo.png'

function Header() {
  return (<>
  <div className='header'>
    <div className='logo'>
      <img src={logo} alt=''/>
    </div>
    <div className='navbar-menu'>
      
    </div>
  </div>
  
  </>
  )
}

export default Header