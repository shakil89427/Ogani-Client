import React, { useEffect, useState } from "react";
import "./Shop.css";
import useAuth from "../AuthProvider/useAuth";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Shop = () => {
  const { allProducts, searchValue, setSearchValue } = useAuth();
  const [products, setProducts] = useState([]);

  /* Set keyword to store */
  const addkeyword = (e) => {
    const newData = { ...searchValue };
    newData.keyword = e.target.value;
    setSearchValue(newData);
  };

  /* Remove keyword from store */
  const removekeyword = (e) => {
    e.preventDefault();
    const { keyword, ...rest } = searchValue;
    setSearchValue(rest);
    e.target.reset();
  };
  /* Set catagory to Store */
  const addCatagory = (e) => {
    if (e.target.innerText === "All") {
      const { catagory, ...rest } = searchValue;
      return setSearchValue(rest);
    }
    const newData = { ...searchValue };
    newData.catagory = e.target.innerText;
    setSearchValue(newData);
  };

  /* Set min max value to store */
  const addPrice = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...searchValue };
    newData[name] = value;
    setSearchValue(newData);
  };

  /* Set color to Store */
  const addColor = (e) => {
    if (e.target.name === "rainbow") {
      const { color, ...rest } = searchValue;
      return setSearchValue(rest);
    }
    const newData = { ...searchValue };
    newData.color = e.target.name;
    setSearchValue(newData);
  };

  /* Keyword filter function */
  const keywordFilter = (value) => {
    if (searchValue.keyword) {
      const result = value.filter((single) =>
        single.name.toLowerCase().includes(searchValue.keyword.toLowerCase())
      );
      return catagoryFilter(result);
    }
    catagoryFilter(value);
  };

  /* Catagory filter function */
  const catagoryFilter = (value) => {
    if (searchValue.catagory) {
      const result = value.filter(
        (single) => single.catagory === searchValue.catagory
      );
      return min(result);
    }
    min(value);
  };

  /* min price filter function */
  const min = (value) => {
    if (searchValue.min) {
      const result = value.filter((single) => single.price >= searchValue.min);
      return max(result);
    }
    max(value);
  };

  /* max price filter function */
  const max = (value) => {
    if (searchValue.max) {
      const result = value.filter((single) => single.price <= searchValue.max);
      return colorFilter(result);
    }
    colorFilter(value);
  };

  /* Color filter function */
  const colorFilter = (value) => {
    if (searchValue.color) {
      const result = value.filter(
        (single) => single.color === searchValue.color
      );
      return setProducts(result);
    }
    setProducts(value);
  };

  /* Load initial Products */
  useEffect(() => {
    if (allProducts.length === 0) return;
    if (searchValue) {
      return keywordFilter(allProducts);
    }
    setProducts(allProducts);
  }, [allProducts, searchValue]);

  const resetPrice = (e) => {
    e.preventDefault();
    e.target.reset();
    const { min, max, ...rest } = searchValue;
    setSearchValue(rest);
  };

  return (
    <div>
      <h1 className="shop-h1">Shop</h1>
      <Container>
        <Row>
          <Col className="border-end" sm={12} md={3} lg={3}>
            <h5 className="fw-bold text-center border-2 border-bottom">
              Filter
            </h5>
            <div className="filter-keyword border-bottom pb-3">
              <p className="fw-bold">Keyword</p>
              <form onSubmit={removekeyword}>
                <input
                  onChange={addkeyword}
                  value={searchValue?.keyword && searchValue?.keyword}
                  className={searchValue?.keyword && "activekeyword"}
                  placeholder="What do you need?"
                  type="text"
                />
                <button
                  type="submit"
                  className={!searchValue?.keyword && "activekeyword"}
                >
                  <i class="fas fa-backspace"></i>
                </button>
              </form>
            </div>
            <div className="filter-catagories border-bottom pb-2">
              <p className="fw-bold">Catagories</p>
              <button
                onClick={addCatagory}
                className={!searchValue?.catagory && "shopcatactive"}
              >
                All
              </button>
              <button
                onClick={addCatagory}
                className={
                  searchValue?.catagory === "Fruits" && "shopcatactive"
                }
              >
                Fruits
              </button>
              <button
                onClick={addCatagory}
                className={
                  searchValue?.catagory === "Dry Fruits" && "shopcatactive"
                }
              >
                Dry Fruits
              </button>
              <button
                onClick={addCatagory}
                className={
                  searchValue?.catagory === "Vegetables" && "shopcatactive"
                }
              >
                Vegetables
              </button>
              <button
                onClick={addCatagory}
                className={
                  searchValue?.catagory === "Drinks" && "shopcatactive"
                }
              >
                Drinks
              </button>
              <button
                onClick={addCatagory}
                className={searchValue?.catagory === "Meats" && "shopcatactive"}
              >
                Meats
              </button>
            </div>
            <div className="filter-price border-bottom pb-2">
              <p className="fw-bold">Price</p>
              <form onSubmit={resetPrice}>
                <input
                  className={searchValue?.min && "activeprice"}
                  onChange={addPrice}
                  name="min"
                  placeholder="Min"
                  type="number"
                />
                <span className="mx-1">To</span>
                <input
                  className={searchValue?.max && "activeprice"}
                  onChange={addPrice}
                  name="max"
                  placeholder="Max"
                  type="number"
                />
                <button
                  className={
                    !searchValue?.min && !searchValue?.max ? "activeprice" : ""
                  }
                  type="submit"
                >
                  All
                </button>
              </form>
            </div>
            <div className="filter-color border-bottom pb-2">
              <p className="fw-bold">Color</p>
              <button
                name="rainbow"
                onClick={addColor}
                className={
                  !searchValue?.color ? "rainbow active-color" : "rainbow"
                }
              />
              <button
                name="red"
                onClick={addColor}
                className={
                  searchValue?.color === "red" ? "red active-color" : "red"
                }
              />
              <button
                name="yellow"
                onClick={addColor}
                className={
                  searchValue?.color === "yellow"
                    ? "yellow active-color"
                    : "yellow"
                }
              />
              <button
                name="blue"
                onClick={addColor}
                className={
                  searchValue?.color === "blue" ? "blue active-color" : "blue"
                }
              />
              <button
                name="green"
                onClick={addColor}
                className={
                  searchValue?.color === "green"
                    ? "green active-color"
                    : "green"
                }
              />
              <button
                name="black"
                onClick={addColor}
                className={
                  searchValue?.color === "black"
                    ? "black active-color"
                    : "black"
                }
              />
            </div>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center"
            sm={12}
            md={9}
            lg={9}
          >
            {products.length === 0 && (
              <span>
                <h3 className="text-center mt-3">Sorry No product Found</h3>
                <p className="text-center">Try changing the filter options</p>
                <p className="text-center">OR</p>
                <p className="text-center">
                  <button className="allbtn">Back To Home</button>
                </p>
              </span>
            )}
            <Row>
              {products.map((product) => (
                <Col
                  key={product._id}
                  className="p-3 text-center p-main"
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <div className="p-single">
                    <img className="p-img" src={product.img} alt="" />
                    <span className="p-effect">
                      <p>
                        <i className="fas fa-heart"></i>
                      </p>
                      <Link to={`/details/${product._id}`}>
                        <p>
                          <i className="fas fa-info"></i>
                        </p>
                      </Link>
                      <p>
                        <i className="fas fa-cart-plus"></i>
                      </p>
                    </span>
                    <p className="name">{product.name}</p>
                    <p className="name">{product.price}.00$</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
