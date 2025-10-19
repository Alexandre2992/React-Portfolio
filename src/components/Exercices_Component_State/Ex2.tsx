import React, { useState } from "react";

function Ex2() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Oregons"],
    });
    console.log(pizza);
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ display: "block" }}
        onClick={handleClick}
      >
        Add Oregons
      </button>
      Pizza ingridients: {pizza.toppings}
    </div>
  );
}

export default Ex2;
