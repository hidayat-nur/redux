import { createStore } from "redux"

// reducer
const initialState = {
  count: 1
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return {
        ...state,
        count: state.count + action.value
      }
    case 'REDUCE_COUNT':
      return {
        ...state,
        count: state.count - action.value
      }
    default:
      break;
  }
  return state
 }

// store
const store = createStore(rootReducer)

console.log("store 1:", store.getState())


// subscription
store.subscribe(() => {
  console.log("store change:", store.getState())
})

// action
store.dispatch({ type: 'ADD_COUNT', value: 5})
store.dispatch({ type: 'REDUCE_COUNT', value: 3})

console.log("store 2:", store.getState())