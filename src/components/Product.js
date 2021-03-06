import React, { useState } from "react";
import Button from "monday-ui-react-core/dist/Button";
import MyModal from "./Modal/MyModal";
import BigHot from "../assets/pictures/BigHot.png";
import SmallHot from "../assets/pictures/Drinks.png";

function Product({ item }) {
  const [modalShow, setModalShow] = React.useState(false);
  const image = require("../assets/pictures".concat(item.image));
  return (
    <>
      <div className="product-container">
        <div
          className="product shadow"
          onClick={() => setModalShow(true)}
          style={{
            backgroundImage: `url(${image})`,
            width: "100%",
            height: "10rem",
            backgroundColor: "white",
            backgroundSize: item.contain ? "contain" : "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="name-price">
          <p>{item.name}</p>
          <small>{item.price}₪</small>
        </div>
      </div>
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={item}
        image={image}
      />
    </>
  );
}

export default Product;
