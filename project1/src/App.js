import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

import cartItems from './cart-items'

import { createStore } from 'redux'

const initStore = {
  count: 3,
}

function reducer(state, action) {
  console.log('reducer', state, action)
  return state
}

const store = createStore(reducer, initStore)
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
