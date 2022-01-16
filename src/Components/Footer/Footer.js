import React from "react";
import logo from "./../../img/logo.png";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-main p-2">
      <div className="container">
        <Row className="border-bottom border-2 mb-3 pb-3">
          <Col sm={12} md={6} lg={4}>
            <img className="mb-3" src={logo} alt="" />
            <p>Address: 60-49 Road 11378 New York</p>
            <p>Phone: +65 11.188.888</p>
            <p className="mb-3">Email: shakilahmed89427@gmail.com</p>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h5>Useful Links</h5>
            <div className="d-flex">
              <div className="usefull">
                <small>About Us</small>
                <small>About Our Shop</small>
                <small>Secure Shopping</small>
                <small>Delivery infomation</small>
                <small>Privacy Policy</small>
                <small>Our Sitemap</small>
              </div>
              <div className="usefull">
                <small>Who We Are</small>
                <small>Our Services</small>
                <small>Projects</small>
                <small>Contact</small>
                <small>Innovation</small>
                <small>Testimonials</small>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <h5>Join Our Newsletter Now</h5>
            <small>
              Get E-mail updates about our latest shop and special offers.
            </small>
            <form className="my-3 bg-white d-flex justify-content-between">
              <input className="f-input" type="text" />
              <button className="allbtn">SUBSCRIBE</button>
            </form>
            <div className="f-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-google-plus-square"></i>
            </div>
          </Col>
        </Row>
        <p className="text-center">
          Copyright ©2022 All rights reserved | By Shakil Ahmed
        </p>
      </div>
    </div>
  );
};

export default Footer;
