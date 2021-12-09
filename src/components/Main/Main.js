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
  const user = useSelector((state) => state.app.user);
  const cart = useSelector((state) => state.app.cart);

  useEffect(async () => {
    const { data } = await monday.api(`query {
        me {
          name
          mobile_phone
          id
          }
      }`);
    dispatch(setUser(data.me));
  }, []);

  return (
    <div className="main-container">
      {/* <TopBar /> */}
      <div className="hello-text">
        {activeSection === "main" ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4>Good Morning, {user.name}!</h4>
                <p>What would you like to have?</p>
              </div>
              <div>
                <Button
                  style={{ alignSelf: "flex-end" }}
                  onClick={() => dispatch(toCheckout())}
                >
                  Checkout
                </Button>
                <p>Total: {cart.total}₪</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className="back-button" onClick={() => dispatch(toMain())}>
                <img src={require("../../assets/pictures/MoveArrowLeft.png")} />
                Main
              </div>
              {activeSection !== "checkout" && (
                <div style={{ alignSelf: "flex-end" }}>
                  <Button onClick={() => dispatch(toCheckout())}>
                    Checkout
                  </Button>
                  <p>Total: {cart.total}₪</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      {activeSection === "main" && <Categories />}
      {activeSection === "drinks" && <Drinks />}
      {activeSection === "pastries" && <Pastries />}
      {activeSection === "sandwiches" && <Sandwiches />}
      {activeSection === "checkout" && <Checkout monday={monday} meta={meta} />}
      {activeSection === "finish" && <Finish />}
      <img
        src={require("../../assets/pictures/MoveoLogo.png")}
        style={{
          width: "20%",
          alignSelf: "center",
          margin: "5rem",
          paddingBottom: "10vh",
        }}
      />
    </div>
  );
}

export default Main;
