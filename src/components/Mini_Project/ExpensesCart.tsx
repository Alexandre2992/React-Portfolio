import React, { useState } from "react";

interface Props {
  products: string[];
  onClear: (product: string) => void;
}

const ExpensesCart = ({ products, onClear }: Props) => {
  return (
    <>
      <div>Description</div>
      <ul>
        {products.map((item) => (
          <li key={item}>
            {item}
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => onClear(item)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExpensesCart;
