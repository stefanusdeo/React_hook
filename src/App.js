import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import Meal from './components/Meal/Meal';
import CartProvider from './store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCart = () => {
    setCartShow(true);
  };

  const closeCart = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onCloseCart={closeCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
