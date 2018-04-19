import { combineReducers } from 'redux-immutable'
import { fromJS, Map as map } from 'immutable'

const initialState = fromJS({
  items: {},
  quantityItem: {}
})

function data(state = initialState.get('items'), action = {}) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return action.payload.items.reduce(
        (items, item) => items.set(item.id, map(item)),
        state,
      )
      break

    default:
      return state
  }
}

function quantityItem(state = initialState.get('quantityItem'), action = {}) {
  switch (action.type) {
    case 'SET_QUANTITY_ITEM':
      return state.set(action.payload.id, action.payload.quantity)
      break
    
    default:
      return state
  }
}

export default combineReducers({
  items: data,
  quantityItem
})