import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <form className="rounded bg-white mx-auto w-50 my-2 border d-flex justify-content-between align-items-center">
        <input placeholder="What do you need" className="h-input" type="text" />
        <button className="border-0 py-1">
          <i className="fas fa-search"></i>
        </button>
      </form>
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
    </>
  );
};

export default Banner;
