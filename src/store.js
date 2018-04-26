import { createStore } from 'redux'
import data from './reducers/data'
import { fromJS, Map as map } from 'immutable'
import { loadState, saveState } from './localStorage' 

const persistedState = loadState()

const store = createStore(
  data,
  fromJS(persistedState),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    quantityItem: store.getState().get('quantityItem'),
    addedItems: store.getState().get('addedItems')
  })
})

export default store