import { INCREASE, DECREASE, REMOVE, GET_AMOUNT, GET_TOTAL } from './actions'

function reducer(state, action) {
  console.log('Reducer executed: ', { state, action })
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

  return state
}
export default reducer
