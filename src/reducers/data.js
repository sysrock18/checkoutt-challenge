import { combineReducers } from 'redux-immutable'
import { fromJS, Map as map } from 'immutable'

const initialState = fromJS({
  items: {}
})

function data(state = initialState.get('items'), action = {}) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return state.set('items', fromJS(action.payload.items))
      break;
    default:
      return state
  }
}

export default data