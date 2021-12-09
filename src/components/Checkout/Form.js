import React from "react";
import Button from "monday-ui-react-core/dist/Button";
import Dropdown from "monday-ui-react-core/dist/Dropdown";
import TextField from "monday-ui-react-core/dist/TextField";
import CartProduct from "./CartProduct";
import PhoneNumber from "./PhoneNumber";
import { useSelector } from "react-redux";
import Schedule from "./Schedule";

function Form({
  setLocation,
  setPhoneNumber,
  checkout,
  location,
  phoneNumber,
  setDate,
  date,
  setJoinTo,
}) {
  const cart = useSelector((state) => state.app.cart);
  return (
    <>
      <h5>Location</h5>
      <Dropdown
        className="rooms-dropdown"
        size={Dropdown.size.MEDIUM}
        options={[
          { label: "Take away" },
          { label: "Room#9" },
          { label: "Room#7" },
          { label: "Sella Ronda" },
          { label: "Val Torens" },
          { label: "Aspen" },
        ]}
        onChange={(event) => {
          if (event) {
            setLocation(event.label);
          } else setLocation("");
        }}
      />
      <Schedule setDate={setDate} date={date} />
      <div className="checkout-form">
        <PhoneNumber setJoinTo={setJoinTo} setPhoneNumber={setPhoneNumber} />
      </div>
      <div className="checkout-button">
        <div>Total: {cart.total}₪</div>
        <Button
          onClick={checkout}
          disabled={
            !(phoneNumber.length === 10 && location && cart.products.length)
          }
        >
          Checkout
        </Button>
      </div>
    </>
  );
}

export default Form;
