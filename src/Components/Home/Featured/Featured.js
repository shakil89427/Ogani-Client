import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../AuthProvider/useAuth";
import useAddToCart from "../../Hooks/useAddToCart";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Featured.css";

const Available = () => {
  const { featuredProducts, allProductsLoading } = useAuth();
  const { addSingleQuantity } = useAddToCart();

  const addtocart = (id) => {
    addSingleQuantity(id, false);
    toast.success("Successfully Added To Cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
      transition: Slide,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="text-center">
      <ToastContainer />
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
                  <p onClick={() => addtocart(product._id)}>
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
