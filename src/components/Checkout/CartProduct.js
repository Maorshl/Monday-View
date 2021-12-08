import React from "react";

function CartProduct({ item }) {
  return (
    <div className="cart-product">
      <p>{item.name}</p>
      <p>{item.price}₪</p>
      <p>X{item.quantity}</p>
    </div>
  );
}

export default CartProduct;
