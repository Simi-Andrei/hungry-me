import React from "react";
import Image1 from "../../assets/contactImage1.jpg";
import Image2 from "../../assets/contactImage2.jpg";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contactPage}>
      <h4 className={classes.title}>Ia legatura cu noi!</h4>
      <h4 className={classes.subtitle}>
        Completează formularul de mai jos pentru a ne trimite un feedback
      </h4>
      <div className={classes.page}>
        <div className={classes.left}>
          <img src={Image1} alt="Food" className={classes.image1} />
          <img src={Image2} alt="Food" className={classes.image2} />
        </div>
        <div className={classes.right}>
          <div className={classes.form}>
            <div className={classes.row1}>
              <div>
                <input type="text" placeholder="Nume" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className={classes.row2}>
              <div>
                <input type="text" placeholder="Telefon" />
              </div>
              <div>
                <input type="text" placeholder="Subiect" />
              </div>
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Mesajul tău..."
              ></textarea>
            </div>
            <div className={classes.terms}>
              <input type="checkbox" />
              <span>
                Sunt de acord cu procesarea datelor mele conform cu <br></br>
                <a href="/" type="button">
                  Politica de confidențialitate
                </a>
                .
              </span>
            </div>
            <div className={classes.submit}>
              <button type="button">Trimite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
