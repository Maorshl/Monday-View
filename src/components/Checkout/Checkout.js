import React, { useState, useEffect } from "react";
import Button from "monday-ui-react-core/dist/Button";
import Dropdown from "monday-ui-react-core/dist/Dropdown";
import TextField from "monday-ui-react-core/dist/TextField";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

function Checkout({ monday, meta }) {
  const cart = useSelector((state) => state.app.cart);
  const user = useSelector((state) => state.app.user);
  const [phoneNumber, setPhoneNumber] = useState(user.mobile_Phone);
  const [location, setLocation] = useState("");

  console.log(cart);
  const orderSummery = `
    ${cart.products.map((item) => {
      return ` ${item.name} X ${item.quantity} (${item.extra.map(
        (item) => item.name + ": " + item.option
      )})`;
    })}
    Total: ${cart.total}
  `;

  const checkout = async () => {
    const query = `mutation  ($itemName : String, $boardId : Int! , $columnValues  : JSON){
    create_item(item_name : $itemName,board_id : $boardId , column_values: $columnValues ,create_labels_if_missing: true) {
     id
    }
  }`;
    const columnValues = JSON.stringify({
      text3: phoneNumber,
      text: location,
      text7: orderSummery,
      status: { label: "In The Making" },
      date4: { date: new Date().toISOString().split("T")[0] },
      people: { personsAndTeams: [{ id: user.id, kind: "person" }] },
    });
    const variables = {
      itemName: user.name,
      boardId: meta.boardId,
      columnValues,
    };
    return await monday.api(query, { variables });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{orderSummery}</p>
      <label>Location</label>
      <Dropdown
        className="rooms-dropdown"
        size={Dropdown.size.MEDIUM}
        options={[{ label: "Room#9" }, { label: "Room#7" }]}
        onChange={(event) => {
          if (event) {
            setLocation(event.label);
          } else setLocation("");
        }}
      />
      {/* <input
        type="text"
        onChange={(event) => setLocation(event.target.value)}
      ></input> */}
      {!user.mobile_Phone && (
        <>
          <label>Phone Number</label>
          <TextField
            className="rooms-dropdown"
            onChange={(event) => setPhoneNumber(event)}
          ></TextField>
        </>
      )}
      <div>
        Total: {cart.total} {phoneNumber}
      </div>
      <Button
        onClick={checkout}
        disabled={!(phoneNumber && location && cart.products.length)}
      >
        Checkout
      </Button>
    </div>
  );
}

export default Checkout;
