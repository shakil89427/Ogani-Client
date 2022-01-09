import React from "react";
import "./Details.css";
import Search from "../Search/Search";
import useAuth from "../AuthProvider/useAuth";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Details = () => {
  const { allProducts } = useAuth();
  const { id } = useParams();
  const product = allProducts.find((founded) => founded._id === id);

  return (
    <Container>
      <Search />
      <Row className="mt-5">
        <Col sm={12} md={6} lg={6}>
          <img
            className="w-75 d-block mx-auto details-img"
            src={require(`../../img/available/${product.name}.jpg`)}
            alt=""
          />
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="border-bottom pb-5 mt-2">
            <h2 className="details-name">{product.name}</h2>
            <p>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </p>
            <p className="fw-bolder text-danger">${product.price}.00</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              inventore fuga reprehenderit ipsum sit! Consequatur, accusantium,
              est deserunt quas et alias repudiandae eveniet libero officia
              velit ipsam inventore saepe corrupti consectetur reiciendis id
              natus quia quidem ipsum beatae recusandae.
            </p>
            <span className="plus-minus mt-3">
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </span>
            <button className="allbtn">ADD TO CART</button>
          </div>
          <div className="d-flex align-items-center mt-4">
            <div className="w-25">
              <p className="fw-bolder">Availability</p>
              <p className="fw-bolder">Shipping</p>
              <p className="fw-bolder">Share on</p>
            </div>
            <div className="w-75">
              <p>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
              <p>
                01 day shipping.
                <span className="text-danger fw-bolder">Free pickup today</span>
              </p>
              <p>
                <i className="me-1 fab fa-facebook"></i>
                <i className="me-1 fab fa-facebook"></i>
                <i className="me-1 fab fa-facebook"></i>
                <i className="me-1 fab fa-facebook"></i>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="d-block w-100 border-bottom">
        <p>shakil</p>
      </div>
    </Container>
  );
};

export default Details;
