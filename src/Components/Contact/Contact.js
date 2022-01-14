import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center fw-bold contact-h1">Contact Us</h1>
      <Container>
        <Row className="p-5">
          <Col sm={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-3">
                <i class="contact-i fas fa-phone-alt"></i>
              </h3>
              <h4 className="fw-bolder">Phone</h4>
              <p className="text-secondary">+01-3-8888-6868</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-3">
                <i class="contact-i fas fa-map-marker-alt"></i>
              </h3>
              <h4 className="fw-bolder">Address</h4>
              <p className="text-secondary">60-49 Road 11378 New York</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-3">
                <i class="contact-i far fa-clock"></i>
              </h3>
              <h4 className="fw-bolder">Open time</h4>
              <p className="text-secondary">10:00 am to 23:00 pm</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="mb-3">
                <i class="contact-i far fa-envelope"></i>
              </h3>
              <h4 className="fw-bolder">Email</h4>
              <p className="text-secondary">shakilahmed89427@gmail.com</p>
            </div>
          </Col>
        </Row>
        <h3 className="fw-bolder text-center">Leave Message</h3>
        <form className="px-5 pb-5">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <input
                name="name"
                required
                placeholder="Name"
                className="message-input"
                type="text"
              />
            </Col>
            <Col sm={12} md={6} lg={6}>
              <input
                placeholder="Email"
                className="message-input"
                type="email"
                name="email"
                required
              />
            </Col>
            <Col sm={12} md={12} lg={12}>
              <textarea
                name="message"
                required
                placeholder="Write your message"
                className="message-input"
                rows="7"
              />
            </Col>
          </Row>
          <button className="allbtn d-block mx-auto mt-2">SEND MESSAGE</button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
