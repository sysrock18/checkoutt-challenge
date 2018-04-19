import React from 'react'
import './food-list.css'
import FoodItem from '../containers/food-item'

function FoodList(props) {
  return (
    <section className="FoodList">
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