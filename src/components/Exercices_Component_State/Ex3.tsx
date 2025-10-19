import React, { useState } from "react";

function Ex3() {
  const [cart, setCart] = useState({
    discont: 0.1,
    items: [
      { id: 1, tittle: "Product 1", quantity: 1 },
      { id: 2, tittle: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((itemProduct) =>
        itemProduct.id === 1
          ? { ...itemProduct, quantity: itemProduct.quantity + 1 }
          : itemProduct
      ),
    });
    console.log(cart.items);
    //cart.map((cart) => (cart.id === 1 ? { ...cart, quantity: 2 } : cart))
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ display: "block" }}
        onClick={handleClick}
      >
        Add one quantity to product 1
      </button>
    </div>
  );
}

export default Ex3;
