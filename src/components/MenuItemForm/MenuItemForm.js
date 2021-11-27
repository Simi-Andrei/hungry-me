import React, { useRef, useState } from "react";

import Input from "../Input/Input";
import classes from "./MenuItemForm.module.css";

const MenuItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>Adauga in cos</button>
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MenuItemForm;
