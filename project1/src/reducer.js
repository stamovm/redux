import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from './actions'

function reducer(state, action) {
  console.log('Reducer executed: ', { state, action })
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === INCREASE) {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  if (action.type === DECREASE) {
    return {
      ...state,
      count: state.count - 1,
    }
  }
  if (action.type === REMOVE) {
    console.log('ammount removed ')
    return {
      ...state,
    }
  }

  return state
}
export default reducer
