import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logoImage.png";
import CartButton from "../CartButton/CartButton";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.leftside}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Link to="/" className={classes.brand}>
          Hungry Me
        </Link>
      </div>
      <div className={classes.rightside}>
        <CartButton onClick={props.onShowCart} />
        <Link to="/">Home</Link>
        <Link to="/menu">Meniu</Link>
        <Link to="/about">Despre</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
