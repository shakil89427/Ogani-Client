import React, { useEffect, useState } from "react";
import "./Shop.css";
import useAuth from "../AuthProvider/useAuth";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { Col, Container, Row } from "react-bootstrap";

const Shop = () => {
  const { allProducts, searchValue, setSearchValue } = useAuth();
  const [products, setProducts] = useState([]);
  const [catagoryValue, setCatagoryValue] = useState("All");
  const [minmax, setMinmax] = useState({});

  const addColor = (e) => {
    searchValue.color = e.target.className;
    setSearchValue(searchValue);
  };

  const getPrice = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...minmax };
    newData[name] = value;
    setMinmax(newData);
  };

  const addPrice = (e) => {
    e.preventDefault();
    searchValue.price = minmax;
    setSearchValue(searchValue);
  };

  useEffect(() => {
    if (allProducts.length === 0) return;
    setProducts(allProducts);
  }, [allProducts]);
  return (
    <div>
      <Search />
      <h1 className="shop-h1">Shop</h1>
      <Container>
        <Row>
          <Col className="border-end" sm={12} md={3} lg={3}>
            <h5 className="fw-bold text-center border-2 border-bottom">
              Filter
            </h5>
            <div className="filter-catagories border-bottom pb-2">
              <p className="fw-bold">Catagories</p>
              <button className={catagoryValue === "All" && "shopcatactive"}>
                All
              </button>
              <button className={catagoryValue === "Fruits" && "shopcatactive"}>
                Fruits
              </button>
              <button
                className={catagoryValue === "Dry Fruits" && "shopcatactive"}
              >
                Dry Fruits
              </button>
              <button
                className={catagoryValue === "Vegetables" && "shopcatactive"}
              >
                Vegetables
              </button>
              <button className={catagoryValue === "Drinks" && "shopcatactive"}>
                Drinks
              </button>
              <button className={catagoryValue === "Meats" && "shopcatactive"}>
                Meats
              </button>
            </div>
            <div className="filter-price border-bottom pb-2">
              <p className="fw-bold">Price</p>
              <form onSubmit={addPrice}>
                <input
                  onChange={getPrice}
                  name="min"
                  placeholder="Min"
                  type="number"
                />
                <input
                  onChange={getPrice}
                  name="max"
                  placeholder="Max"
                  type="number"
                />
                <button type="submit">Go</button>
              </form>
            </div>
            <div className="filter-color border-bottom pb-2">
              <p className="fw-bold">Color</p>
              <button onClick={addColor} className="red" />
              <button onClick={addColor} className="yellow" />
              <button onClick={addColor} className="blue" />
              <button onClick={addColor} className="green" />
              <button onClick={addColor} className="black" />
            </div>
          </Col>
          <Col sm={12} md={9} lg={9}>
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
