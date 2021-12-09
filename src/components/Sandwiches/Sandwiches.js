import React from "react";
import { sandwiches } from "../../Data/Products.json";
import Product from "../Product";

function Sandwiches(props) {
  return (
    <div className="products-grid">
      {sandwiches.map((item, i) => {
        return <Product key={"product" + i} item={item} />;
      })}
    </div>
  );
}
export default Sandwiches;
