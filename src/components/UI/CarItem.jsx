import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="12" md="6" sm="6" className="mb-5">
    <div className="searchItem">
      <img
        src={imgUrl}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{carName}</h1>
        <span className="siSubtitle">
        {model}
        </span>
        <span className="siPrice">LKR {price}</span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <button className="siCheckButton">More Details</button>
          <button className="siCheckButton">Book Now</button>
        </div>
      </div>
    </div>
    </Col>
  );
};

export default CarItem;
