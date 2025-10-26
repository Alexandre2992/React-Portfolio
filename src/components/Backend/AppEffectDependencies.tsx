import { useEffect, useState } from "react";
import ProductList from "./ProductListEffectDependencies";

function App() {
  const [category, setCategory] = useState("");

  //select.form-select
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Sports">Sports</option>
        <option value="Clothing">Clothing</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
