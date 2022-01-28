import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./Checkout.css";
import useAuth from "../AuthProvider/useAuth";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { user, cartProducts, setCartItems } = useAuth();
  const [alternative, setAlternative] = useState(false);
  const [note, setNote] = useState("");
  const [alternateValue, setAlternateValue] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getalternative = (e) => {
    setAlternateValue(e.target.value);
  };

  const getNote = (e) => {
    setNote(e.target.value);
  };

  const differentAddress = (e) => {
    setAlternative(e.target.checked);
  };

  const placeOrder = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      user,
      note,
      status: false,
      subtotal,
      tax,
      total,
      products: cartProducts,
    };
    if (alternative) {
      data.shipping = alternateValue;
    } else {
      data.shipping = user.address;
    }
    try {
      const response = await axios.post(
        "https://oganishop247.herokuapp.com/placeorder",
        data
      );
      if (response.data) {
        setCartItems({ _id: user._id, products: [] });
        setLoading(false);
        navigate("/orderdone");
      } else {
        setLoading(false);
        toast.warning("Something went wrong", {
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
      }
    } catch (error) {
      setLoading(false);
      toast.warning("Something went wrong", {
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
    }
  };

  useEffect(() => {
    let temp = 0;
    for (const product of cartProducts) {
      temp = temp + product.price * product.quantity;
    }
    const tempTax = temp * 0.2;
    setSubtotal(parseFloat(temp).toFixed(2));
    setTax(parseFloat(tempTax).toFixed(2));
    setTotal(parseFloat(temp + tempTax).toFixed(2));
  }, [cartProducts]);
  return (
    <div>
      <ToastContainer />
      {cartProducts.length === 0 && <Navigate to="/" />}
      <h1 className="text-center fw-bold checkout-h1">Checkout</h1>
      <Container className="py-5">
        <h3 className="fw-bolder mt-3 border-bottom pb-2 border-2">
          Billing Details
        </h3>
        <form onSubmit={placeOrder}>
          <Row>
            <Col sm={12} md={6} lg={8}>
              <Row className="billing-form">
                <Col sm={12} md={12} lg={6}>
                  <p>First Name</p>
                  <input value={user.firstname} readOnly type="text" />
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <p>Last Name</p>
                  <input value={user.lastname} readOnly type="text" />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <p>Address</p>
                  <input value={user.address} readOnly type="text" />
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <p>Phone</p>
                  <input value={user.phone} readOnly type="number" />
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <p>Email</p>
                  <input value={user.email} readOnly required type="email" />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <p>Order Notes</p>
                  <input onChange={getNote} type="text" />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <input
                    onClick={differentAddress}
                    className="w-auto me-2"
                    type="checkbox"
                    name="checkbox"
                  />
                  <label htmlFor="checkbox">Ship to a different address?</label>
                </Col>

                {alternative && (
                  <Col sm={12} md={12} lg={12}>
                    <p>
                      Address <sup>*</sup>
                    </p>
                    <input
                      required={alternative}
                      onChange={getalternative}
                      placeholder="Street Address"
                      type="text"
                    />
                  </Col>
                )}
              </Row>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="p-4 orders">
                <h4 className="text-center pb-2 fw-bolder border-bottom border-2">
                  Your Order
                </h4>
                <div className="border-bottom">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold">Products</h5>
                    <h5 className="fw-bold">Total</h5>
                  </div>

                  {cartProducts.map((product) => (
                    <div
                      key={product._id}
                      className="d-flex align-items-center justify-content-between"
                    >
                      <p>
                        {product.name}*({product.quantity})
                      </p>
                      <p>
                        $
                        {parseFloat(product.price * product.quantity).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-2 d-flex align-items-center justify-content-between border-bottom">
                  <h5 className="fw-bold">Subtotal</h5>
                  <h5 className="fw-bold">${subtotal}</h5>
                </div>
                <div className="mt-2 d-flex align-items-center justify-content-between border-bottom">
                  <h5 className="fw-bold">Tax</h5>
                  <h5 className="fw-bold">${tax}</h5>
                </div>
                <div className="mt-2 d-flex align-items-center justify-content-between border-bottom">
                  <h5 className="fw-bold">Total</h5>
                  <h5 className="fw-bold">${total}</h5>
                </div>
                <input
                  className="me-2 mt-3"
                  type="checkbox"
                  name="paymentMethod"
                />
                <label htmlFor="paymentMethod">Card Payment</label>
                {loading ? (
                  <Spinner
                    className="d-block mx-auto"
                    animation="border"
                    variant="success"
                  />
                ) : (
                  <button type="submit" className="mt-3 w-100 allbtn space">
                    PLACE ORDER
                  </button>
                )}
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Checkout;
