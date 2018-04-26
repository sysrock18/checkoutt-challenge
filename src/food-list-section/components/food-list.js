import React from 'react'
import './food-list.css'
import FoodItem from '../containers/food-item'

function FoodList(props) {
  return (
    <section className="FoodList">
      <h2>Añade tus productos</h2>
      {
        props.items.map(item => 
          <FoodItem key={item.get('id')} {...item.toJS()} />
        )
        .toArray()
      }
    </section>
  )
}

export default FoodList