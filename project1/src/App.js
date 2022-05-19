import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

import cartItems from './cart-items'

import { createStore } from 'redux'
import reducer from './reducer'
import { INCREASE, DECREASE, REMOVE, GET_AMOUNT, GET_TOTAL } from './actions'

const initStore = {
  count: 3,
  name: 'Jack',
}

const store = createStore(reducer, initStore)
store.dispatch({ type: DECREASE })
store.dispatch({ type: INCREASE })
store.dispatch({ type: INCREASE })
console.log(store.getState())

function App() {
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
