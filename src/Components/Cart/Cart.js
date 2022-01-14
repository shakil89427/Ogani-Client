import React, { useEffect, useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import { Col, Container, Row } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const { loading, allProducts, cartItems } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartItems.user) {
      const temp = [];
      for (const product of cartItems.products) {
        const result = allProducts.find(
          (single) => single._id === product.productId
        );
        product.img = result.img;
        product.name = result.name;
        temp.push(product);
      }
      setProducts(temp);
    }
  }, [cartItems]);
  return (
    <div>
      <h1 className="text-center fw-bold cart-h1">Shopping Cart</h1>
      <Container>
        <Row className="border-bottom py-2">
          <Col xs={4} sm={4} md={6} lg={6}>
            <h5 className="fw-bolder">Products</h5>
          </Col>
          <Col xs={8} sm={8} md={6} lg={6}>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="fw-bolder">Price</h5>
              <h5 className="fw-bolder">Quantity</h5>
              <h5 className="fw-bolder">Total</h5>
            </div>
          </Col>
        </Row>

        {products.map((each) => (
          <Row className="border-bottom py-2">
            <Col xs={4} sm={4} md={6} lg={6}>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <img className="cart-img" src={each.img} alt="" />
                <h5>{each.name}</h5>
              </div>
            </Col>
            <Col xs={8} sm={8} md={6} lg={6}>
              <div className="d-flex align-items-center justify-content-between">
                <h5>{each.price}</h5>
              </div>
            </Col>
          </Row>
        ))}

        <div className="mt-3 d-flex align-items-center justify-content-between">
          <button className="allbtn space">CONTINUE SHOPPING</button>
          <button className="allbtn space"> UPADATE CART</button>
        </div>
        <Row className="my-5 coupon">
          <Col
            className="mb-3 d-flex flex-column align-items-center justify-content-center"
            sm={12}
            md={6}
            lg={6}
          >
            <h5 className="fw-bolder">Discount Codes</h5>
            <input type="text" />
            <button className="allbtn space">APPLY COUPON</button>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="cart-total">
              <h5 className="fw-bolder">Cart Total</h5>
              <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <h6 className="fw-bloder">Subtotal</h6>
                <h6 className="fw-bloder text-danger">$500</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <h6 className="fw-bloder">Tax</h6>
                <h6 className="fw-bloder text-danger">$100</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3">
                <h6 className="fw-bloder">Total</h6>
                <h6 className="fw-bloder text-danger">$600</h6>
              </div>
              <button className="allbtn w-100 space">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
