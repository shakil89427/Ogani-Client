import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Checkout.css";

const Checkout = () => {
  const [alternative, setAlternative] = useState(false);

  const differentAddress = (e) => {
    setAlternative(e.target.checked);
  };

  const placeOrder = (e) => {
    e.preventDefault();
  };
  return (
    <div>
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
                  <p>
                    First Name <sup>*</sup>
                  </p>
                  <input required type="text" />
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <p>
                    Last Name <sup>*</sup>
                  </p>
                  <input required type="text" />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <p>
                    Country <sup>*</sup>
                  </p>
                  <input required={!alternative} disabled type="text" />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <p>
                    Address <sup>*</sup>
                  </p>
                  <input
                    required={!alternative}
                    disabled
                    placeholder="Street Address"
                    type="text"
                  />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <input
                    required={!alternative}
                    disabled
                    placeholder="Apartment,suite,unite ect (optional)"
                    type="text"
                  />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <p>
                    Town/City <sup>*</sup>
                  </p>
                  <input disabled required={!alternative} type="text" />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <p>
                    Country/State
                    <sup>*</sup>
                  </p>
                  <input disabled required={!alternative} type="text" />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <p>
                    Postcode / ZIP
                    <sup>*</sup>
                  </p>
                  <input disabled required={!alternative} type="text" />
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <p>Phone</p>
                  <input type="number" />
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <p>
                    Email <sup>*</sup>
                  </p>
                  <input required type="email" />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <p>Order Notes</p>
                  <input type="text" />
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
                      Country <sup>*</sup>
                    </p>
                    <input required={alternative} type="text" />
                  </Col>
                )}
                {alternative && (
                  <Col sm={12} md={12} lg={12}>
                    <p>
                      Address <sup>*</sup>
                    </p>
                    <input
                      required={alternative}
                      placeholder="Street Address"
                      type="text"
                    />
                  </Col>
                )}
                {alternative && (
                  <Col sm={12} md={12} lg={12}>
                    <input
                      required={alternative}
                      placeholder="Apartment,suite,unite ect (optional)"
                      type="text"
                    />
                  </Col>
                )}
                {alternative && (
                  <Col sm={12} md={12} lg={12}>
                    <p>
                      Town/City <sup>*</sup>
                    </p>
                    <input required={alternative} type="text" />
                  </Col>
                )}
                {alternative && (
                  <Col sm={12} md={12} lg={12}>
                    <p>
                      Country/State
                      <sup>*</sup>
                    </p>
                    <input required={alternative} type="text" />
                  </Col>
                )}
                {alternative && (
                  <Col sm={12} md={12} lg={12}>
                    <p>
                      Postcode / ZIP
                      <sup>*</sup>
                    </p>
                    <input required={alternative} type="text" />
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
                  <div className="d-flex align-items-center justify-content-between">
                    <p>asedfwqadfe</p>
                    <p>$500</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>asedfwqadfe</p>
                    <p>$500</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>asedfwqadfe</p>
                    <p>$500</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>asedfwqadfe</p>
                    <p>$500</p>
                  </div>
                </div>
                <div className="mt-2 d-flex align-items-center justify-content-between border-bottom">
                  <h5 className="fw-bold">Subtotal</h5>
                  <h5 className="fw-bold">$500</h5>
                </div>
                <div className="mt-2 d-flex align-items-center justify-content-between border-bottom">
                  <h5 className="fw-bold">Tax</h5>
                  <h5 className="fw-bold">$500</h5>
                </div>
                <div className="mt-2 d-flex align-items-center justify-content-between border-bottom">
                  <h5 className="fw-bold">Total</h5>
                  <h5 className="fw-bold">$500</h5>
                </div>
                <input
                  className="me-2 mt-3"
                  type="checkbox"
                  name="paymentMethod"
                />
                <label htmlFor="paymentMethod">Card Payment</label>
                <button type="submit" className="mt-3 w-100 allbtn space">
                  PLACE ORDER
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Checkout;
