import React from 'react'
import './header.css'

function Header(props) {
  return (
    <div className="Header">
      {props.children}
    </div>
  )
}

export default Header