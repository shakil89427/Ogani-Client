import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import "./Search.css";

const Search = () => {
  const { searchValue, setSearchValue } = useAuth();
  const navigate = useNavigate();

  const search = () => {
    navigate("/shop");
  };

  const changeValue = (e) => {
    const newData = { ...searchValue };
    newData.keyword = e.target.value;
    setSearchValue(newData);
  };

  const remove = (e) => {
    e.preventDefault();
    e.target.reset();
    const { keyword, ...rest } = searchValue;
    setSearchValue(rest);
  };
  return (
    <div className="search d-flex align-items-center">
      <form
        onSubmit={remove}
        className="rounded bg-white mx-auto w-50 my-2 border d-flex justify-content-between align-items-center"
      >
        <input
          required
          onChange={changeValue}
          placeholder="What do you need"
          className="search-input"
          type="text"
        />
        <button type="submit" className="border-0 py-1 me-2">
          <i class="fas fa-backspace"></i>
        </button>
        <button onClick={search} className="border-0 py-1">
          <i class="fas fa-search"></i>
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
