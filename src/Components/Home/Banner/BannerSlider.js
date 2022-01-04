import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../img/categories/cat-1.jpg";
import img2 from "../../../img/categories/cat-2.jpg";
import img3 from "../../../img/categories/cat-3.jpg";
import img4 from "../../../img/categories/cat-4.jpg";
import img5 from "../../../img/categories/cat-5.jpg";

const BannerSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container my-3">
      <Slider {...settings} className="text-center">
        <div className="bannersliderdiv">
          <img className="w-100" src={img1} alt="" />
          <h6 className="bannersliderbtn">Fruits</h6>
        </div>
        <div className="bannersliderdiv">
          <img className="w-100" src={img2} alt="" />
          <h6 className="bannersliderbtn">Dry Fruits</h6>
        </div>
        <div className="bannersliderdiv">
          <img className="w-100" src={img3} alt="" />
          <h6 className="bannersliderbtn">Vegetables</h6>
        </div>
        <div className="bannersliderdiv">
          <img className="w-100" src={img4} alt="" />
          <h6 className="bannersliderbtn">Drinks</h6>
        </div>
        <div className="bannersliderdiv">
          <img className="w-100" src={img5} alt="" />
          <h6 className="bannersliderbtn">Meat</h6>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
