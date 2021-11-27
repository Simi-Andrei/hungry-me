import React, { useContext, useEffect, useState } from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartContext from "../../store/cart-context";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHightlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHightlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHightlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items, cartCtx.items.length]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <ShoppingCartIcon />
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
