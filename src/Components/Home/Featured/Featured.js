import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../AuthProvider/useAuth";
import "./Featured.css";

const Available = () => {
  const { allProducts } = useAuth();
  const [products, setProducts] = useState([]);
  const [border, setborder] = useState("All");

  useEffect(() => {
    setProducts(allProducts.slice(0, 8));
  }, [allProducts]);

  const changeCatagory = (e) => {
    setborder(e.target.innerText);
    if (e.target.innerText === "All") {
      return setProducts(allProducts.slice(0, 8));
    }
    const filtered = allProducts.filter(
      (product) => product.catagory === e.target.innerText
    );
    setProducts(filtered);
  };
  return (
    <div className="text-center">
      <h2 className="fw-bolder">Featured Products</h2>
      <hr className="mx-auto bg-success" />
      <p>
        <button
          className={border === "All" ? "active" : "inactive"}
          onClick={changeCatagory}
        >
          All
        </button>
        <button
          className={border === "Fruits" ? "active" : "inactive"}
          onClick={changeCatagory}
        >
          Fruits
        </button>
        <button
          className={border === "Dry Fruits" ? "active" : "inactive"}
          onClick={changeCatagory}
        >
          Dry Fruits
        </button>
        <button
          className={border === "Drinks" ? "active" : "inactive"}
          onClick={changeCatagory}
        >
          Drinks
        </button>
        <button
          className={border === "Vegetables" ? "active" : "inactive"}
          onClick={changeCatagory}
        >
          Vegetables
        </button>
        <button
          className={border === "Meats" ? "active" : "inactive"}
          onClick={changeCatagory}
        >
          Meats
        </button>
      </p>
      <Container>
        <Row>
          {products.map((product) => (
            <Col
              key={product._id}
              className="p-3 text-center available-main"
              sm={6}
              md={4}
              lg={3}
            >
              <div className="available-single">
                <img
                  className="available-img"
                  src={require(`../../../img/available/${product.name}.jpg`)}
                  alt=""
                />
                <p className="available-effect">
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
                </p>
                <p className="name">{product.name}</p>
                <p className="name">{product.price}.00$</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Available;
