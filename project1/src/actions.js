export const REMOVE = 'REMOVE'
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT'
export const GET_TOTALS = 'GET_TOTALS'
export const CLEAR_CART = 'CLEAR_CART'

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } }
}

export const toggleAmount = (id, toggle) => {
  return { type: TOGGLE_AMOUNT, payload: { id, toggle } }
}
