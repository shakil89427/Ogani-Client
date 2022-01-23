import React, { useEffect, useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./Cart.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSetToLocal from "../Hooks/useSetToLocal";

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    user,
    cartProducts,
    setCartProducts,
    cartPdLoading,
  } = useAuth();
  const { setToLocal } = useSetToLocal();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  /* Change product quantity */
  const changeQuantity = (id, exist) => {
    let temp = [];
    for (const product of cartProducts) {
      if (product._id === id && exist) {
        product.quantity = product.quantity + 1;
        temp.push(product);
      } else if (product._id === id && !exist) {
        if (product.quantity === 1) return;
        product.quantity = product.quantity - 1;
        temp.push(product);
      } else {
        temp.push(product);
      }
    }
    setCartProducts(temp);
  };

  /* Remove product from cart */
  const removefromCart = (id) => {
    const result = cartProducts.filter((single) => single._id !== id);
    setCartProducts(result);
  };

  /* Finalize the cart */
  const update = () => {
    const temp = [];
    for (const every of cartProducts) {
      const { _id, quantity } = every;
      const newData = { _id, quantity };
      temp.push(newData);
    }
    setToLocal(user, setCartItems, { _id: cartItems._id, products: temp });
    toast.success("Cart updated Successfully", {
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

  /* Calculation */
  useEffect(() => {
    let temp = 0;
    for (const product of cartProducts) {
      temp = temp + product.price * product.quantity;
    }
    const tempTax = temp * 0.2;
    setSubtotal(temp);
    setTax(tempTax);
    setTotal(temp + tempTax);
  }, [cartProducts]);

  return (
    <div>
      <ToastContainer />
      <h1 className="text-center fw-bold cart-h1">Shopping Cart</h1>
      {cartPdLoading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      {!cartPdLoading && cartItems?.products?.length === 0 && (
        <div className="p-5 d-flex flex-column align-items-center justify-content-center">
          <h5>You didn't added any product to Cart</h5>
          <Link to="/shop">
            <button className="allbtn">Continue To Shop</button>
          </Link>
        </div>
      )}
      {!cartPdLoading && cartItems?.products?.length > 0 && (
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

          {cartProducts.map((each) => (
            <Row key={each._id} className="border-bottom py-2">
              <Col xs={4} sm={4} md={6} lg={6}>
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <button
                    onClick={() => removefromCart(each._id)}
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
                  <button onClick={() => changeQuantity(each._id, false)}>
                    -
                  </button>
                  <span>{each.quantity}</span>
                  <button onClick={() => changeQuantity(each._id, true)}>
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
          <Row className="my-5">
            {cartItems?.products?.length > 0 && (
              <Col className="ms-auto" sm={12} md={6} lg={6}>
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
            )}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Cart;
