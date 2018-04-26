import React from 'react'
import './badge-cart.css'

function BadgeCart(props) {
  return (
    <div className="BadgeCart">
      {props.addedItems.length}
    </div>
  )
}

export default BadgeCart