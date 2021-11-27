import React, { useState } from "react";

import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../../components/MenuItem/MenuItem";
import bannerImage from "../../assets/bannerImage.jpg";
import classes from "./Menu.module.css";

import { RiFridgeLine } from "react-icons/ri";
import { FaPizzaSlice, FaHamburger, FaWineGlassAlt } from "react-icons/fa";
import { BiFoodMenu, BiDrink } from "react-icons/bi";
import { CgBowl, CgCoffee } from "react-icons/cg";
import { GiCakeSlice, GiFrenchFries, GiSlicedBread } from "react-icons/gi";
import { IoBeerOutline } from "react-icons/io5";
import OfferSlider from "../../components/OfferSlider/OfferSlider";
import { Offers } from "../../helpers/Offers";

const Menu = () => {
  const [items, setItems] = useState(MenuList);
  const [searchTerm, setSearchTerm] = useState("");
  const [cat, setCat] = useState("Toate produsele");
  const [offerShown, setOfferShown] = useState(false);

  const showOfferHandler = () => {
    setOfferShown(true);
  };

  const hideOfferHandler = () => {
    setOfferShown(false);
  };

  const buttonHandler = (e) => {
    let target = e.target.value;

    if (target === "all") {
      setItems(MenuList);
      setCat("Toate produsele");
    } else if (target === "pizza") {
      setItems(MenuList.filter((item) => item.category === "Pizza"));
      setCat("Pizza");
    } else if (target === "burgeri") {
      setItems(MenuList.filter((item) => item.category === "Burger"));
      setCat("Burgeri");
    } else if (target === "supe") {
      setItems(MenuList.filter((item) => item.category === "Supa"));
      setCat("Supe");
    } else if (target === "traditionale") {
      setItems(MenuList.filter((item) => item.category === "Traditional"));
      setCat("Tradiționale");
    } else if (target === "deserturi") {
      setItems(MenuList.filter((item) => item.category === "Desert"));
      setCat("Prăjituri");
    } else if (target === "garnituri") {
      setItems(MenuList.filter((item) => item.category === "Garnitura"));
      setCat("Garnituri");
    } else if (target === "brutarie") {
      setItems(MenuList.filter((item) => item.category === "Brutarie"));
      setCat("Brutărie");
    } else if (target === "vinuri") {
      setItems(MenuList.filter((item) => item.category === "Vin"));
      setCat("Vinuri");
    } else if (target === "bere") {
      setItems(MenuList.filter((item) => item.category === "Bere"));
      setCat("Bere");
    } else if (target === "bauturi-calde") {
      setItems(MenuList.filter((item) => item.category === "Bautura Calda"));
      setCat("Băuturi Calde");
    } else if (target === "racoritoare") {
      setItems(MenuList.filter((item) => item.category === "Racoritoare"));
      setCat("Răcoritoare");
    }
  };

  return (
    <div className={classes.menu}>
      <div
        className={classes.banner}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className={classes.bannerCover}>
          <h2 className={classes.bannerTitle}>
            De când ne știm, pe gustul tău!
          </h2>
          <button className={classes.offers} onClick={showOfferHandler}>
            Oferte
          </button>
          {offerShown && (
            <OfferSlider slides={Offers} onClose={hideOfferHandler} />
          )}
          <div className={classes.filterButtons}>
            <div className={classes.menuButton}>
              <button value="all" onClick={buttonHandler}>
                <RiFridgeLine className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Toate</span>
            </div>
            <div className={classes.menuButton}>
              <button value="pizza" onClick={buttonHandler}>
                <FaPizzaSlice className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Pizza</span>
            </div>
            <div className={classes.menuButton}>
              <button value="burgeri" onClick={buttonHandler}>
                <FaHamburger className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Burgeri</span>
            </div>
            <div className={classes.menuButton}>
              <button value="supe" onClick={buttonHandler}>
                <CgBowl className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Supe</span>
            </div>
            <div className={classes.menuButton}>
              <button value="traditionale" onClick={buttonHandler}>
                <BiFoodMenu className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Tradiționale</span>
            </div>
            <div className={classes.menuButton}>
              <button value="deserturi" onClick={buttonHandler}>
                <GiCakeSlice className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Deserturi</span>
            </div>
            <div className={classes.menuButton}>
              <button value="garnituri" onClick={buttonHandler}>
                <GiFrenchFries className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Garnituri</span>
            </div>
            <div className={classes.menuButton}>
              <button value="brutarie" onClick={buttonHandler}>
                <GiSlicedBread className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Brutărie</span>
            </div>
            <div className={classes.menuButton}>
              <button value="vinuri" onClick={buttonHandler}>
                <FaWineGlassAlt className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Vinuri</span>
            </div>
            <div className={classes.menuButton}>
              <button value="bere" onClick={buttonHandler}>
                <IoBeerOutline className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Bere</span>
            </div>
            <div className={classes.menuButton}>
              <button value="bauturi-calde" onClick={buttonHandler}>
                <CgCoffee className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Băuturi Calde</span>
            </div>
            <div className={classes.menuButton}>
              <button value="racoritoare" onClick={buttonHandler}>
                <BiDrink className={classes.iconButton} />
              </button>
              <span className={classes.tooltiptext}>Răcoritoare</span>
            </div>
          </div>
        </div>
      </div>
      <h3 className={classes.menuListTitle}>&ndash; {cat} &ndash;</h3>
      <div className={classes.input}>
        <input
          type="text"
          placeholder="Cauta..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className={classes.menuList}>
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => {
            return (
              <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
      </div>
      <div className={classes.menuFooter}></div>
    </div>
  );
};

export default Menu;
