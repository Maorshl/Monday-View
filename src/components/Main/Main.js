import React, { useEffect, useState } from "react";
// import data from "../../Data/Products.json";
// import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./Categories";
import { toMain } from "../../redux/appSlice";
import Button from "monday-ui-react-core/dist/Button";
import Drinks from "../Drinks/Drinks";
import Pastries from "../Pastries/Pastries";
import Sandwiches from "../Sandwiches/Sandwiches";
import TopBar from "../Main/TopBar";
import Checkout from "../Checkout/Checkout";
import { toCheckout, setUser } from "../../redux/appSlice";
import Finish from "../Checkout/Finish";

function Main({ monday, meta }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const activeSection = useSelector((state) => state.app.activeSection);
  const cart = useSelector((state) => state.app.cart);

  useEffect(async () => {
    const { data } = await monday.api(`query {
        me {
          name
          mobile_phone
          id
          }
      }`);
    console.log(data.me);
    dispatch(setUser(data.me));
  }, []);

  return (
    <div className="main-container">
      {/* <TopBar /> */}
      <div className="hello-text">
        {activeSection === "main" ? (
          <>
            <h4>Good Morning, {name}!</h4>
            <p>What would you like to have?</p>
            <p>Total: {cart.total}₪</p>
            <Button onClick={() => dispatch(toCheckout())}>CheckOut</Button>
          </>
        ) : (
          <>
            <Button onClick={() => dispatch(toMain())}>Main</Button>
            {activeSection !== "checkout" && (
              <Button onClick={() => dispatch(toCheckout())}>CheckOut</Button>
            )}
            <p>Total: {cart.total}₪</p>
          </>
        )}
      </div>
      {activeSection === "main" && <Categories />}
      {activeSection === "drinks" && <Drinks />}
      {activeSection === "pastries" && <Pastries />}
      {activeSection === "sandwiches" && <Sandwiches />}
      {activeSection === "checkout" && <Checkout monday={monday} meta={meta} />}
      {activeSection === "finish" && <Finish monday={monday} meta={meta} />}
    </div>
  );
}

export default Main;
