import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="container search d-flex align-items-center">
      <form className="rounded bg-white mx-auto w-50 my-2 border d-flex justify-content-between align-items-center">
        <input
          placeholder="What do you need"
          className="search-input"
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
  );
};

export default Search;
