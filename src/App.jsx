import React, { useState, Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

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
