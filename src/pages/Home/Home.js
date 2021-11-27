import React from "react";

import { Link } from "react-router-dom";
import homePageImage from "../../assets/homePageImage.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.page}>
      <div
        className={classes.banner}
        style={{ backgroundImage: `url(${homePageImage})` }}
      >
        <div className={classes.page}>
          <div className={classes.left}>
            <h1>Hungry Me</h1>
            <p>GIVE ME FOOD!</p>
            <Link to="menu">
              <button>ORDER NOW</button>
            </Link>
          </div>
          <div className={classes.right}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
