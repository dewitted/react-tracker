import { createStore, combineReducers } from 'redux'
import balanceReducer from './reducer-balance'
// import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  balance: balanceReducer
})

const store = createStore(
  rootReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
)

export default store
