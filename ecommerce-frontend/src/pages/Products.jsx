import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
        </div>
      ))}
    </div>
  );
}

export default Products;
