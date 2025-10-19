import React, { useState } from "react";
import NaveBar from "./NaveBar";
import Cart from "./Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const clearItems = () => {
    setCartItems([]);
  };

  return (
    <div>
      <NaveBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={clearItems} />
    </div>
  );
}

export default App;
