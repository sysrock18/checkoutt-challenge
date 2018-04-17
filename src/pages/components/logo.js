import React from 'react'
import './logo.css'
import logo from '../../../images/comidas.png'

function Logo(props) {
  return (
    <div className="Logo">
      <img src={logo} alt={'logo'} />
    </div>
  )
}

export default Logo