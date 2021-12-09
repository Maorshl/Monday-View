import React, { useState, useEffect } from "react";
import Button from "monday-ui-react-core/dist/Button";
import Dropdown from "monday-ui-react-core/dist/Dropdown";
import TextField from "monday-ui-react-core/dist/TextField";
// import { Toast } from "monday-ui-react-core";
import { useSelector, useDispatch } from "react-redux";
import { toFinish } from "../../redux/appSlice";
import CartProduct from "./CartProduct";
import PhoneNumber from "./PhoneNumber";
import Form from "./Form";

function Checkout({ monday, meta }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.app.cart);
  const user = useSelector((state) => state.app.user);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [location, setLocation] = useState("");

  const orderSummery = `
    ${cart.products.map((item) => {
      return ` ${item.name} X ${item.quantity} (${item.extra.map(
        (item) => item.name + ": " + item.option
      )})`;
    })}
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
    const { data } = await monday.api(query, { variables });
    if (data.create_item) {
      dispatch(toFinish());
    } else {
      setToastOpen(true);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{orderSummery}</p>
      <Form
        setLocation={setLocation}
        setPhoneNumber={setPhoneNumber}
        checkout={checkout}
        location={location}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}

export default Checkout;
