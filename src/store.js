import { createStore } from 'redux'
import data from './reducers/data'
import { Map as map } from 'immutable'


const store = createStore(
  data,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store