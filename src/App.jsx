import React, { useState, Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartModal, setCartModal] = useState(false);
  return (
    <Fragment>
      <Cart onCartModal={cartModal} onSetCartModal={setCartModal} />
      <Header onSetCartModalHeader={setCartModal} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
