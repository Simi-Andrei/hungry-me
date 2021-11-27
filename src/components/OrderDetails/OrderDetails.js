import React from "react";
import classes from "./OrderDetails.module.css";

const OrderDetails = (props) => {
  return (
    <div className={classes.orderDetails}>
      <h2>Finalizează comanda</h2>
      <p>Adresă de livrare: </p>
      <div>
        <label htmlFor="address">Str:</label>
        <input type="text" />
        <label htmlFor="address">Nr:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="address">Bl:</label>
        <input type="text" />
        <label htmlFor="address">Apt:</label>
        <input type="text" />
      </div>
      <p>Detalii plată:</p>
      <div>
        <label htmlFor="card">Nr. card:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="date">Data exp.:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="cvv">CVV nr.:</label>
        <input type="text" />
      </div>

      <div className={classes.orderButtons}>
        <button onClick={props.onClose} className={classes.orderBack}>
          Înapoi
        </button>
        <button onClick={props.onClose} className={classes.orderPlace}>
          Comandă
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
