import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "monday-ui-react-core/dist/Button";
import TextField from "monday-ui-react-core/dist/TextField";
import RadioButton from "monday-ui-react-core/dist/RadioButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/appSlice";
import Options from "./Options";
// import RadioButtonStoryLine from "monday-ui-react-core/dist/RadioButtonStoryLine";

function MyModal({ item, onHide, show, image }) {
  const [extra, setExtra] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  const dispatch = useDispatch();
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <>
            {item.name} <p>{item.price * quantity}₪</p>
          </>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="modal-options">
            <Options options={item.options} setExtra={setExtra} />
            <img
              className="product shadow"
              src={image}
              style={{ height: "20%", width: "20%" }}
            />
          </div>
          <div style={{ margin: "auto", width: "70%" }}>
            <TextField
              id="_3"
              placeholder="Notes"
              size={TextField.sizes.LARGE}
              onChange={(event) => {
                setNote(event);
              }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="quantity-picker">
          <div
            className="plus-minus"
            onClick={() => setQuantity((prevState) => prevState + 1)}
          >
            +
          </div>
          <div>{quantity}</div>
          <div
            className="plus-minus"
            onClick={() =>
              setQuantity((prevState) =>
                prevState !== 1 ? prevState - 1 : prevState
              )
            }
          >
            -
          </div>
        </div>
        <Button
          onClick={() => {
            dispatch(
              addToCart({
                ...item,
                extra: [...extra, { name: "Notes", option: note }],
                quantity,
                price: quantity * item.price,
              })
            );
            onHide();
          }}
        >
          Add To Cart{" "}
          <img
            src={require("../../assets/pictures/ArrowRight.png")}
            style={{ height: "0.8rem", marginLeft: "0.8rem" }}
          />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
