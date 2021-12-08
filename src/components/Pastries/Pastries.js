import React from "react";
import { pastries } from "../../Data/Products.json";
import Product from "../Product";

function Pastries(props) {
  return (
    <div className="products-grid">
      {pastries.map((item) => {
        return <Product item={item} />;
      })}
    </div>
  );
}

export default Pastries;
