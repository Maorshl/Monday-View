import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toDrinks, toPastries, toMain, toSandwiches } from "../redux/appSlice";
import Pastries from "../assets/pictures/Pastries.png";
import Drinks from "../assets/pictures/Drinks.png";
import Sandwiches from "../assets/pictures/Sandwiches.png";

function Product({ name }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  useEffect(() => {
    switch (name) {
      case "Drinks":
        setImage(Drinks);
        break;
      case "Pastries":
        setImage(Pastries);
        break;
      case "Sandwiches":
        setImage(Sandwiches);
        break;
      default:
        break;
    }
  });

  return (
    <div className="category-container">
      <h4>{name}</h4>
      <img
        onClick={() => navigateTo()}
        className="category-image"
        src={image}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );

  function navigateTo() {
    switch (name) {
      case "Drinks":
        dispatch(toDrinks());
        break;
      case "Pastries":
        dispatch(toPastries());
        break;
      case "Sandwiches":
        dispatch(toSandwiches());
        break;
      default:
        dispatch(toMain());
        break;
    }
  }
}

export default Product;
