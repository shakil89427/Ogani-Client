import React from "react";
import Slider from "react-slick";
import "./AvailableCatagories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../img/categories/cat-1.jpg";
import img2 from "../../../img/categories/cat-2.jpg";
import img3 from "../../../img/categories/cat-3.jpg";
import img4 from "../../../img/categories/cat-4.jpg";
import img5 from "../../../img/categories/cat-5.jpg";
import useAuth from "../../AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

const HomeSlider = () => {
  const { filterBy, setFilterBy } = useAuth();
  const navigate = useNavigate();

  const getCatagory = (e) => {
    if (e.target.innerText === "All") {
      const { catagory, ...rest } = filterBy;
      rest.page = 0;
      setFilterBy(rest);
      return navigate("/shop");
    }
    const newData = { ...filterBy };
    newData.catagory = e.target.innerText;
    newData.page = 0;
    setFilterBy(newData);
    navigate("/shop");
  };
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
      <h2 className="fw-bolder text-center">Available Catagories</h2>
      <hr className="mx-auto bg-success" />
      <Slider {...settings} className="text-center">
        <div className="availableCatagoriesdiv">
          <img className="w-100" src={img1} alt="" />
          <h6 onClick={getCatagory}>Fruits</h6>
        </div>
        <div className="availableCatagoriesdiv">
          <img className="w-100" src={img2} alt="" />
          <h6 onClick={getCatagory}>Dry Fruits</h6>
        </div>
        <div className="availableCatagoriesdiv">
          <img className="w-100" src={img3} alt="" />
          <h6 onClick={getCatagory}>Vegetables</h6>
        </div>
        <div className="availableCatagoriesdiv">
          <img className="w-100" src={img4} alt="" />
          <h6 onClick={getCatagory}>Drinks</h6>
        </div>
        <div className="availableCatagoriesdiv">
          <img className="w-100" src={img5} alt="" />
          <h6 onClick={getCatagory}>Meats</h6>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
