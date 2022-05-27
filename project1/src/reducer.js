import { CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from './actions'
import cartItems from './cart-items'

const initStore = {
  cart: cartItems,
  total: 3,
  amount: 5,
}

function reducer(state = initStore, action) {
  if (action.type === CLEAR_CART) {
    console.log('Reducer CLEAR_CART executed: ', { state, action })
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    }
  }

  if (action.type === GET_TOTALS) {
    let total = 0
    let amount = 0
    state.cart.forEach((item) => {
      total += item.amount * item.price
      amount += item.amount
    })
    total = parseFloat(total.toFixed(2))
    return {
      ...state,
      total,
      amount,
    }
  }

  if (action.type === TOGGLE_AMOUNT) {
    console.log('Reducer TOGGLE_AMOUNT executed: ', { state, action })
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === 'inc') {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 })
          }
          if (action.payload.toggle === 'dec') {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 })
          }
        }
        return cartItem
      }),
    }
  }
  return state
}
export default reducer
