import { useState, useContext } from "react";

import React from "react";
import Modal from "../Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "../CartItem/CartItem";
import OrderDetails from "../OrderDetails/OrderDetails";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [orderDetailsShown, setOrderDetailsShown] = useState(false);

  const showOrderDetailsHandler = () => {
    setOrderDetailsShown(true);
  };

  const hideOrderDetailsHandler = () => {
    setOrderDetailsShown(false);
  };

  const cartCtx = useContext(CartContext);

  const totalAmount = `RON ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes.items}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  if (cartItems.length === 0) {
    return <p>The basket is empty</p>;
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.close} onClick={props.onClose}>
          Închide
        </button>
        {hasItems && (
          <button onClick={showOrderDetailsHandler} className={classes.order}>
            Comandă
          </button>
        )}
        {orderDetailsShown && (
          <OrderDetails onClose={hideOrderDetailsHandler} />
        )}
      </div>
    </Modal>
  );
};

export default Cart;
