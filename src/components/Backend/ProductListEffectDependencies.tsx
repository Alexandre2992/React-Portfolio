import React, { useEffect, useState } from "react";

interface Props {
  //{ category }: Props or { category }: {category:string}
  category: string;
}

const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);

  //call back function
  useEffect(() => {
    console.log("Fetching products in", category);
    if (category === "Sports") setProducts(["Product 1", "Product 2"]);
    //we are updating a state so it triggers another render. We must tell react to stop after one render to avoid infinite render loop
    else if (category === "Clothing") setProducts(["Product 3", "Product 4"]);
    else setProducts([]);
  }, [category]); //array of dependencies (can be props or state, if any of these values changes react will rerun our effect), [] means the effect is not dependent on any values so it will be executed only once

  return (
    <>
      <div>{category}</div>
      <ul>
        {products.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
//<> and </> is a React Fragment, a way to group multiple elements without adding an extra <div> or other tag to the DOM.
//React requires a component’s return to have one top-level element. Without a Fragment, you can’t return both <div>{category}</div> and <ul> side by side because they’re two separate elements. The Fragment wraps them together, like an invisible box, so React is happy but no extra <div> shows up in the browser.
