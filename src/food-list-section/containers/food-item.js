import React, { Component } from 'react'
import './food-item.css'
import { connect } from 'react-redux'
import { List as list } from 'immutable'

class FoodItem extends Component {

  setQuantityItem = quantity => {
    const { id } = this.props
    this.refs.quantityItem.value = quantity

    this.props.dispatch({
      type: 'SET_QUANTITY_ITEM',
      payload: {
        id,
        quantity
      }
    })
  }

  handleChangeQuantity = event => {
    let { value } = this.refs.quantityItem

    if (value > 0) {
      this.setQuantityItem(parseInt(value))
    } else {
      this.refs.quantityItem.value = 0
    }
  }

  handleClickPlus = () => {
    let { value } = this.refs.quantityItem
    this.setQuantityItem(parseInt(value) + 1)
  }

  handleClickMinus = () => {
    let { value } = this.refs.quantityItem
    value > 0 && this.setQuantityItem(value - 1)
  }

  render = () => (
    <div className="FoodItem">
      <img src={this.props.image} alt={this.props.name} />

      <div className="Info">
        <span>{this.props.name}</span>
        <span>S/{this.props.price}</span>
      </div>

      <div className="QuantityBox">
        <button onClick={this.handleClickMinus}>-</button>
        <input
          type="number"
          defaultValue={this.props.quantityItems.get(this.props.id) || 0}
          onChange={this.handleChangeQuantity}
          ref="quantityItem"
        />
        <button onClick={this.handleClickPlus}>+</button>
      </div>

      <button>AÑADIR</button>
    </div>
  )
}

function mapStateToProps(state, props) {
  let quantityResult = list()
  const quantityItems = state.get('quantityItem')

  if (quantityItems) {
    quantityResult = quantityItems
  }

  return {
    quantityItems: quantityResult
  }
}

export default connect(mapStateToProps)(FoodItem)