import React, { useEffect, useState } from "react";
import "./Shop.css";
import useAuth from "../AuthProvider/useAuth";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { Col, Container, Row } from "react-bootstrap";

const Shop = () => {
  const { allProducts, searchValue } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (allProducts.length === 0) return;
    setProducts(allProducts);
    console.log(allProducts);
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
              <button>All</button>
              <button>Fruits</button>
              <button>Dry Fruits</button>
              <button>Vegetables</button>
              <button>Drinks</button>
              <button>Meats</button>
            </div>
            <div className="filter-price border-bottom pb-2">
              <p className="fw-bold">Price</p>
              <form>
                <input placeholder="Min" type="number" />
                <input placeholder="Max" type="number" />
                <br />
                <button>Go</button>
              </form>
            </div>
            <div className="filter-color border-bottom pb-2">
              <p className="fw-bold">Color</p>
              <button className="red" />
              <button className="yellow" />
              <button className="blue" />
              <button className="green" />
              <button className="black" />
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
