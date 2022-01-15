import React, { useEffect, useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import { Col, Container, Row } from "react-bootstrap";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { allProducts, cartItems, setToLocal } = useAuth();
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);

  /* Load Cart items */
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

  /* Change product quantity */
  const changeQuantity = (id, exist) => {
    let temp = [];
    for (const product of products) {
      if (product.productId === id && exist) {
        product.quantity = product.quantity + 1;
        temp.push(product);
      } else if (product.productId === id && !exist) {
        if (product.quantity === 1) return;
        product.quantity = product.quantity - 1;
        temp.push(product);
      } else {
        temp.push(product);
      }
    }
    setProducts(temp);
  };

  /* Remove product from cart */
  const removefromCart = (id) => {
    const result = products.filter((single) => single.productId !== id);
    setProducts(result);
  };

  /* Finalize the cart */
  const update = () => {
    cartItems.products = products;
    setToLocal(cartItems);
  };

  /* Calculation */
  useEffect(() => {
    let temp = 0;
    for (const product of products) {
      temp = temp + product.price * product.quantity;
    }
    const tempTax = temp * 0.2;
    setPrice(parseFloat(temp).toFixed(2));
    setTax(parseFloat(tempTax).toFixed(2));
  }, [products]);
  return (
    <div>
      <h1 className="text-center fw-bold cart-h1">Shopping Cart</h1>
      <Container>
        <Row className="border-bottom py-2">
          <Col xs={4} sm={4} md={6} lg={6}>
            <h5 className="fw-bolder">Products</h5>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-between"
            xs={8}
            sm={8}
            md={6}
            lg={6}
          >
            <h5 className="fw-bolder">Price</h5>
            <h5 className="fw-bolder">Quantity</h5>
            <h5 className="fw-bolder">Total</h5>
          </Col>
        </Row>

        {products.map((each) => (
          <Row className="border-bottom py-2">
            <Col xs={4} sm={4} md={6} lg={6}>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <button
                  onClick={() => removefromCart(each.productId)}
                  className="border-0 me-2 mb-2"
                >
                  X
                </button>
                <img className="cart-img me-3 mb-2" src={each.img} alt="" />
                <h6>{each.name}</h6>
              </div>
            </Col>
            <Col
              className="d-flex align-items-center justify-content-between"
              xs={8}
              sm={8}
              md={6}
              lg={6}
            >
              <h6 className="ms-1">{each.price}.00$</h6>
              <span className="plus-minus">
                <button onClick={() => changeQuantity(each.productId, false)}>
                  -
                </button>
                <span>{each.quantity}</span>
                <button onClick={() => changeQuantity(each.productId, true)}>
                  +
                </button>
              </span>
              <h6>{each.price * each.quantity}.00$</h6>
            </Col>
          </Row>
        ))}

        <div className="mt-3 d-flex align-items-center justify-content-between">
          <Link to="/shop">
            <button className="allbtn space">CONTINUE SHOPPING</button>
          </Link>
          <button onClick={update} className="allbtn space">
            UPADATE CART
          </button>
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
                <h6 className="fw-bloder text-danger">{price}$</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <h6 className="fw-bloder">Tax</h6>
                <h6 className="fw-bloder text-danger">{tax}$</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3">
                <h6 className="fw-bloder">Total</h6>
                <h6 className="fw-bloder text-danger">0</h6>
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
