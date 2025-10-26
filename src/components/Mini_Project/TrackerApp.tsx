import React, { useState } from "react";
import ExpensesCart from "./ExpensesCart";

function App() {
  const [productsItems, setProducts] = useState(["Milk", "Eggs"]);

  const clearProducts = (product: string) => {
    setProducts(productsItems.filter((item) => item !== product)); //For item = "Milk": "Milk" !== "Milk" is false, so "Milk" is excluded.
  };

  return (
    <div>
      <ExpensesCart products={productsItems} onClear={clearProducts} />
    </div>
  );
}

export default App;
