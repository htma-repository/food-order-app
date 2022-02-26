import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartModal, setCartModal] = useState(false);
  return (
    <CartProvider>
      <Cart onCartModal={cartModal} onSetCartModal={setCartModal} />
      <Header onSetCartModalHeader={setCartModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
