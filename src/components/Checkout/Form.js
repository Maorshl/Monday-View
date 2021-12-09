import React from "react";
import Button from "monday-ui-react-core/dist/Button";
import Dropdown from "monday-ui-react-core/dist/Dropdown";
import TextField from "monday-ui-react-core/dist/TextField";
import CartProduct from "./CartProduct";
import PhoneNumber from "./PhoneNumber";
import { useSelector } from "react-redux";

function Form({
  setLocation,
  setPhoneNumber,
  checkout,
  location,
  phoneNumber,
}) {
  const cart = useSelector((state) => state.app.cart);
  return (
    <>
      <label>Location</label>
      <Dropdown
        className="rooms-dropdown"
        size={Dropdown.size.MEDIUM}
        options={[
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
      <div className="checkout-form">
        <PhoneNumber setPhoneNumber={setPhoneNumber} />
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
