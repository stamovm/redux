import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from './actions'

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    console.log('Reducer CLEAR_CART executed: ', { state, action })
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem
    })
    return {
      ...state,
      cart: tempCart,
    }
  }
  if (action.type === DECREASE) {
    let tempCart = []
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )
      console.log('Reducer DECREASE = 1 executed: ', tempCart)
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
    }
    return {
      ...state,
      cart: tempCart,
    }
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    }
  }

  return state
}
export default reducer
