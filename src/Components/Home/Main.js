import React from "react";
import Search from "../Search/Search";
import Banner from "./Banner/Banner";
import AvailableCatagories from "./AvailableCatagories/AvailableCatagories";
import Featured from "./Featured/Featured";
import Posters from "./Posters/Posters";
import FromBlog from "./FromBlog/FromBlog";

const Main = () => {
  return (
    <div>
      <Search />
      <Banner />
      <AvailableCatagories />
      <Featured />
      <Posters />
      <FromBlog />
    </div>
  );
};

export default Main;
