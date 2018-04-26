import { combineReducers } from 'redux-immutable'
import { fromJS, Map as map } from 'immutable'

const initialState = fromJS({
  items: {},
  quantityItem: {},
  addedItems: []
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

function toggleItemsCheckout(state = initialState.get('addedItems'), action = {}) {
  switch (action.type) {
    case 'TOGGLE_ADD_ITEM':
      const index = state.indexOf(action.payload)

      if (index >= 0) {
        return state.delete(index)
      } else {
        return state.push(action.payload)
      }
      break
    
    default:
      return state
  }
}

export const getAddedItems = (state, id) => state.get('addedItems')

export const getQuantityItemById = (state, id) => state.get('quantityItem').get(id.toString())


export default combineReducers({
  items: data,
  quantityItem,
  addedItems: toggleItemsCheckout
})