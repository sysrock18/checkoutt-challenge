import { combineReducers } from 'redux-immutable'
import { fromJS, Map as map } from 'immutable'


const initialSate = fromJS({
  items: {}
})

function data(state = initialSate.get('items'), action = {}) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return state.set('items', fromJS(action.payload.items))
      break;
    default:
      return state
  }
}

export default data