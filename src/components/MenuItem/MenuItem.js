import React, { useState, useContext } from "react";

import CartContext from "../../store/cart-context";
import ItemDetails from "../ItemDetails/ItemDetails";
import MenuItemForm from "../MenuItemForm/MenuItemForm";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const [detailsShown, setDetailsShown] = useState(false);
  const cartCtx = useContext(CartContext);

  const detailsHandler = () => {
    setDetailsShown(true);
  };

  const hideDetailsHandler = () => {
    setDetailsShown(false);
  };

  const addToCarthandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.item}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <h3>{props.name}</h3>
      <button className={classes.details} onClick={detailsHandler}>
        Detalii
      </button>
      {detailsShown && <ItemDetails onClose={hideDetailsHandler} />}
      <p>RON {props.price}</p>
      <div className={classes.basket}>
        <MenuItemForm id={props.id} onAddToCart={addToCarthandler} />
      </div>
    </div>
  );
};

export default MenuItem;
