import React, { useState } from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./OfferSlider.css";
import { Offers } from "../../helpers/Offers";
import Modal from "../Modal/Modal";

const OfferSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = Offers.length;

  const nextImageHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImageHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Offers) || Offers.length <= 0) {
    return null;
  }

  return (
    <Modal onClose={props.onClose}>
      <div className="slider">
        <div
          className="sliderInner"
          style={{ backgroundImage: `url(${Offers[current].image})` }}
        >
          <div className="sliderCover">
            <h3 className="sliderTitle">{Offers[current].title}</h3>
            <p className="sliderText">{Offers[current].text}</p>
          </div>
        </div>
        <BsChevronLeft className="prevItem" onClick={prevImageHandler} />
        <BsChevronRight className="nextItem" onClick={nextImageHandler} />
        <button className="closeButton" onClick={props.onClose}>
          Închide
        </button>
      </div>
    </Modal>
  );
};

export default OfferSlider;
