import React from "react";
import { useSelector } from "react-redux";
import TextField from "monday-ui-react-core/dist/TextField";

function PhoneNumber({ setPhoneNumber }) {
  const user = useSelector((state) => state.app.user);
  return (
    <>
      {!user.mobile_Phone && (
        <>
          <label>Phone Number</label>
          <TextField
            className="rooms-dropdown"
            onChange={(event) => setPhoneNumber(event)}
          ></TextField>
        </>
      )}
    </>
  );
}

export default PhoneNumber;
