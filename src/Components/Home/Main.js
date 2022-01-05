import React from "react";
import Available from "./Available/Available";
import Banner from "./Banner/Banner";
import Posters from "./Posters/Posters";

const Main = () => {
  return (
    <div>
      <Banner />
      <Available />
      <Posters />
    </div>
  );
};

export default Main;
