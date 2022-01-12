import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import "./Search.css";

const Search = () => {
  const { searchValue, setSearchValue } = useAuth();
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const getValue = (e) => {
    setValue(e.target.value);
  };

  const submit = (e) => {
    const newData = { ...searchValue };
    newData.keyword = value;
    setSearchValue(newData);
    navigate("./shop");
  };

  return (
    <div className="search d-flex align-items-center">
      <form
        onSubmit={submit}
        className="rounded bg-white mx-auto w-50 my-2 border d-flex justify-content-between align-items-center"
      >
        <input
          onChange={getValue}
          placeholder="What do you need"
          className="search-input"
          type="text"
        />
        <button type="submit" className="border-0 py-1">
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
