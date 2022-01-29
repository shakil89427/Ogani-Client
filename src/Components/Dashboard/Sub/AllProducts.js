import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const AllProducts = () => {
  const [catagory, setCatagory] = useState(null);
  const [color, setColor] = useState(null);
  const [data, setData] = useState({});

  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (!color || !catagory) {
      return alert("please complete all value");
    }
    data.color = color;
    data.catagory = catagory;
    data.reviews = [];
    console.log(data);
  };
  return (
    <div>
      <h3 className="fw-bold border-bottom pb-2">All Products</h3>
      <Row>
        <Col sm={12} md={12} lg={4}>
          <h5>Add New Product</h5>
          <form onSubmit={addProduct}>
            <input
              name="name"
              onChange={getData}
              required
              className="w-100 my-2"
              placeholder="Product Name"
              type="text"
            />
            <input
              name="price"
              onChange={getData}
              required
              className="w-100 my-2"
              placeholder="Product Price"
              type="number"
            />
            <input
              name="img"
              onChange={getData}
              required
              className="w-100 my-2"
              placeholder="Product Image link"
              type="url"
            />
            <span className="dashboard-catagory">
              <p className="fw-bold my-2">Catagory</p>
              <button
                className={catagory === "Fruits" ? "cactived" : ""}
                onClick={() => setCatagory("Fruits")}
              >
                Fruits
              </button>
              <button
                className={catagory === "Vegetables" ? "cactived" : ""}
                onClick={() => setCatagory("Vegetables")}
              >
                Vegetables
              </button>
              <button
                className={catagory === "Dry Fruits" ? "cactived" : ""}
                onClick={() => setCatagory("Dry Fruits")}
              >
                Dry Fruits
              </button>
              <button
                className={catagory === "Meats" ? "cactived" : ""}
                onClick={() => setCatagory("Meats")}
              >
                Meats
              </button>
              <button
                className={catagory === "Drinks" ? "cactived" : ""}
                onClick={() => setCatagory("Drinks")}
              >
                Drinks
              </button>
            </span>
            <span className="dashboard-color">
              <p className="fw-bold my-2">Color</p>
              <button
                onClick={() => setColor("red")}
                className={color === "red" ? "actived red" : "red"}
              ></button>
              <button
                onClick={() => setColor("green")}
                className={color === "green" ? "actived green" : "green"}
              ></button>
              <button
                onClick={() => setColor("blue")}
                className={color === "blue" ? "actived blue" : "blue"}
              ></button>
              <button
                onClick={() => setColor("yellow")}
                className={color === "yellow" ? "actived yellow" : "yellow"}
              ></button>
              <button
                onClick={() => setColor("black")}
                className={color === "black" ? "actived black" : "black"}
              ></button>
            </span>
            <textarea
              name="description"
              onChange={getData}
              required
              className="w-100 my-2"
              rows="5"
            ></textarea>
            <button className="allbtn" type="submit">
              Submit
            </button>
          </form>
        </Col>
        <Col sm={12} md={12} lg={8}>
          <h5>Existing Products</h5>
        </Col>
      </Row>
    </div>
  );
};

export default AllProducts;
