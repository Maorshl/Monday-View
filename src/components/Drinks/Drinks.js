import React from "react";
import { drinks } from "../../Data/Products.json";
import Product from "../Product";

function Drinks(props) {
  return (
    <div className="products-grid">
      {drinks.map((item, i) => {
        return <Product key={"product" + i} item={item} />;
      })}
    </div>
  );
}

export default Drinks;
