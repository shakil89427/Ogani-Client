import React from "react";
import { Link } from "react-router-dom";
import error from "../../img/error.jpg";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center pb-5">
      <img className="img-fluid" src={error} alt="" />
      <Link to="/">
        <button className="allbtn">Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
