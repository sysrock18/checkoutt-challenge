import React, { Component } from 'react'
import './food-item.css'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import { getAddedItems, getQuantityItemById } from '../../reducers/data'

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
    let value = parseInt(this.refs.quantityItem.value)

    if (value >= 0) {
      this.setQuantityItem(value)
    } else {
      this.refs.quantityItem.value = this.props.quantityItem
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

  handleClickAddToggle = event => {
    event.preventDefault()
    
    const { id } = this.props
    
    this.props.dispatch({
      type: 'TOGGLE_ADD_ITEM',
      payload: id
    })
  }

  render = () => (
    <div className="FoodItem">
      <img src={this.props.image} alt={this.props.name} />

      <div className="Info">
        <div>{this.props.name}</div>
        <div>S/{this.props.price}</div>
      </div>

      <div className="QuantityBox">
        <button onClick={this.handleClickMinus}>-</button>
        <input
          ref="quantityItem"
          type="number"
          defaultValue={this.props.quantityItem || 0}
          onChange={this.handleChangeQuantity}
        />
        <button onClick={this.handleClickPlus}>+</button>
      </div>

      <button onClick={this.handleClickAddToggle}>
        {this.props.addedItem.indexOf(this.props.id) >= 0 ? 'QUITAR' : 'AÑADIR'}
      </button>
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    quantityItem: getQuantityItemById(state, props.id),
    addedItem: getAddedItems(state).toJS()
  }
}

export default connect(mapStateToProps)(FoodItem)