import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container banner p-5">
      <div className="my-5">
        <h6 className="fw-bolder fresh">FRUIT FRESH</h6>
        <h1 className="title">Vegetable</h1>
        <h1 className="title">100% Organic</h1>
        <small>Free Pickup and Delivery Available</small>
        <br />
        <button className="allbtn mt-3">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner;
