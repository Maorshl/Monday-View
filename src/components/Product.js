import React, { useState } from "react";
import Button from "monday-ui-react-core/dist/Button";
import MyModal from "./Modal/MyModal";
import BigHot from "../assets/pictures/BigHot.png";
import SmallHot from "../assets/pictures/Drinks.png";

function Product({ item }) {
  const [modalShow, setModalShow] = React.useState(false);
  const image = item.image === "BigHot" ? BigHot : SmallHot;
  return (
    <>
      <div className="product-container">
        <div className="product">
          <img
            onClick={() => setModalShow(true)}
            className="product shadow"
            src={require("../assets/pictures".concat(item.image))}
            style={{ height: "100%", width: "100%", width: "12vw" }}
            alt={item.name}
          />
        </div>
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
