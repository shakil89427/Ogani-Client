import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../AuthProvider/useAuth";
import useAddToCart from "../../Hooks/useAddToCart";
import "./Featured.css";

const Available = () => {
  const { featuredProducts, allProductsLoading } = useAuth();
  const { addSingleQuantity } = useAddToCart();

  return (
    <div className="text-center">
      <h2 className="fw-bolder">Featured Products</h2>
      <hr className="mx-auto bg-success" />
      <Container>
        {allProductsLoading && featuredProducts.length === 0 && (
          <Spinner animation="border" variant="success" />
        )}
        <Row>
          {featuredProducts.map((product) => (
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
                  <Link to={`/details/${product._id}`}>
                    <p>
                      <i className="fas fa-info"></i>
                    </p>
                  </Link>
                  <p onClick={() => addSingleQuantity(product._id, false)}>
                    <i className="fas fa-cart-plus"></i>
                  </p>
                </span>
                <p className="name">{product.name}</p>
                <p className="name">{parseFloat(product.price).toFixed(2)}$</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Available;
