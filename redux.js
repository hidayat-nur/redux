const redux = require('redux')

// reducer
const initialState = {
  count: 1
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return {
        ...state,
        count: state.count + action.addition
      }
    default:
      break;
  }
  return state
 }

// store
const store = redux.createStore(rootReducer)

console.log("store:", store.getState())

// action
store.dispatch({ type: 'ADD_COUNT', addition: 5})

console.log("store:", store.getState())

// subscription