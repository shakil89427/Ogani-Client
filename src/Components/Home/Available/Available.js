import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Available.css";

const Available = () => {
  const [products, setProducts] = useState([]);
  const [catagory, setCatagory] = useState(products);
  const [border, setborder] = useState("all");

  useEffect(() => {
    axios.get("./data.json").then((res) => {
      setProducts(res.data);
      setCatagory(res.data.slice(0, 6));
    });
  }, []);

  const changeCatagory = (e) => {
    setborder(e.target.name);
    if (e.target.name === "all") {
      return setCatagory(products.slice(0, 6));
    }
    const filtered = products.filter(
      (product) => product.catagory === e.target.name
    );
    setCatagory(filtered);
  };
  return (
    <div className="text-center">
      <h2 className="fw-bolder">Available Products</h2>
      <hr className="mx-auto bg-success" />
      <p>
        <button
          className={border === "all" ? "active" : "inactive"}
          name="all"
          onClick={changeCatagory}
        >
          All
        </button>
        <button
          className={border === "fruits" ? "active" : "inactive"}
          name="fruits"
          onClick={changeCatagory}
        >
          Fruits
        </button>
        <button
          className={border === "dryfruits" ? "active" : "inactive"}
          name="dryfruits"
          onClick={changeCatagory}
        >
          Dry Fruits
        </button>
        <button
          className={border === "drinks" ? "active" : "inactive"}
          name="drinks"
          onClick={changeCatagory}
        >
          Drinks
        </button>
        <button
          className={border === "vegetables" ? "active" : "inactive"}
          name="vegetables"
          onClick={changeCatagory}
        >
          Vegetables
        </button>
        <button
          className={border === "meats" ? "active" : "inactive"}
          name="meats"
          onClick={changeCatagory}
        >
          Meats
        </button>
      </p>
      <Container>
        <Row>
          {catagory.map((product) => (
            <Col className="text-center" sm={10} md={6} lg={4}>
              <div className="available-single my-2 py-2">
                <img
                  className="img-fluid rounded-circle shadow p-3"
                  src={require(`../../../img/available/${product.name}.jpg`)}
                  alt=""
                />
                <p className="name">{product.name}</p>
                <p className="fw-bolder m-0">
                  <i className="available-icon fas fa-heart"></i>
                  {product.price}.00$
                  <i className="available-icon fas fa-cart-plus"></i>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <button className="allbtn rounded mt-2">See More</button>
    </div>
  );
};

export default Available;
