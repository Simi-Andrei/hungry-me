import React from "react";
import { CgClose } from "react-icons/cg";

import classes from "./ItemDetails.module.css";

const ItemDetails = (props) => {
  return (
    <div className={classes.details}>
      <h3 className={classes.detailsTitle}>
        Cele mai proaspete ingrediente, alese cu grijă pentru tine
      </h3>
      <CgClose className={classes.close} onClick={props.onClose} />
    </div>
  );
};

export default ItemDetails;
