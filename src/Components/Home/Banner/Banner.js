import React from "react";
import "./Banner.css";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <>
      <div className="container search d-flex align-items-center">
        <form className="rounded bg-white mx-auto w-50 my-2 border d-flex justify-content-between align-items-center">
          <input
            placeholder="What do you need"
            className="h-input"
            type="text"
          />
          <button className="border-0 py-1">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="d-none w-25 d-lg-flex align-items-center justify-content-center">
          <i className="fs-3 text-white me-3 fas fa-phone-square-alt"></i>
          <span>
            <small className="fw-bolder">+65 11.188.888</small>
            <br />
            <small>support 24/7 time</small>
          </span>
        </div>
      </div>
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
      <BannerSlider />
    </>
  );
};

export default Banner;
