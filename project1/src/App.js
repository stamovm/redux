import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

import cartItems from './cart-items'

import { createStore } from 'redux'
import reducer from './reducer'
import { INCREASE, DECREASE, REMOVE, GET_AMOUNT, GET_TOTAL } from './actions'
import { Provider } from 'react-redux'

const initStore = {
  cart: cartItems,
  total: 4,
  amount: 5,
}

const store = createStore(reducer, initStore)

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
