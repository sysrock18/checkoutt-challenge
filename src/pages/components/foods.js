import React from 'react'
import './foods.css'

function Foods(props) {
  return (
    <section className="Foods">
      {
        props.items.map(item => 
          <p key={item.get('id')}>
            {item.get('name')}
          </p>
        )
        .toArray()
      }
    </section>
  )
}

export default Foods