import React, { useEffect, useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import { Col, Container, Row } from "react-bootstrap";
import "./Cart.css";
import { Link } from "react-router-dom";
import useSetToLocal from "../Hooks/useSetToLocal";

const Cart = () => {
  const { allProducts, cartItems, setCartItems, user } = useAuth();
  const { setToLocal } = useSetToLocal();
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  /* Load Cart items */
  useEffect(() => {
    if (cartItems?.products && allProducts.length > 0) {
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
  }, [allProducts, cartItems]);

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
    setToLocal(user, setCartItems, { _id: cartItems._id, products });
  };

  /* Calculation */
  useEffect(() => {
    let temp = 0;
    for (const product of products) {
      temp = temp + product.price * product.quantity;
    }
    const tempTax = temp * 0.2;
    setSubtotal(temp);
    setTax(tempTax);
    setTotal(temp + tempTax);
  }, [products]);

  const applyCoupon = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-center fw-bold cart-h1">Shopping Cart</h1>
      {cartItems?.products?.length === 0 && (
        <div className="p-5 d-flex flex-column align-items-center justify-content-center">
          <h5>You didn't added any product to Cart</h5>
          <Link to="/shop">
            <button className="allbtn">Continue To Shop</button>
          </Link>
        </div>
      )}
      {cartItems?.products?.length > 0 && (
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
            <Row key={each.productId} className="border-bottom py-2">
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
                <h6 className="ms-1">{parseFloat(each.price).toFixed(2)}$</h6>
                <span className="plus-minus">
                  <button onClick={() => changeQuantity(each.productId, false)}>
                    -
                  </button>
                  <span>{each.quantity}</span>
                  <button onClick={() => changeQuantity(each.productId, true)}>
                    +
                  </button>
                </span>

                <h6>{parseFloat(each.price * each.quantity).toFixed(2)}$</h6>
              </Col>
            </Row>
          ))}

          <div className="mt-3 d-flex align-items-center justify-content-between">
            <Link to="/shop">
              <button className="allbtn space">SHOP</button>
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
              <form className="text-center" onSubmit={applyCoupon}>
                <input
                  className="w-100"
                  required
                  placeholder="Enter here"
                  type="text"
                />
                <button type="submit" className="allbtn space">
                  APPLY COUPON
                </button>
              </form>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="cart-total">
                <h5 className="fw-bolder">Cart Total</h5>
                <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                  <h6 className="fw-bloder">Subtotal</h6>
                  <h6 className="fw-bloder text-danger">
                    {parseFloat(subtotal).toFixed(2)}$
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                  <h6 className="fw-bloder">Tax</h6>
                  <h6 className="fw-bloder text-danger">
                    {parseFloat(tax).toFixed(2)}$
                  </h6>
                </div>
                <div className="d-flex align-items-center justify-content-between py-3">
                  <h6 className="fw-bloder">Total</h6>
                  <h6 className="fw-bloder text-danger">
                    {parseFloat(total).toFixed(2)}$
                  </h6>
                </div>
                <Link to="/checkout">
                  <button className="allbtn w-100 space">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Cart;
