import React from "react";
import "./Header.css";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <div className="main-nav">
      <Navbar className="container" expand={false}>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <div className="ms-auto">
          <div className="me-5 d-none d-lg-inline">
            <Link className="navitem" to="/">
              Home
            </Link>
            <Link className="navitem" to="/">
              Shop
            </Link>
            <Link className="navitem" to="/">
              Blog
            </Link>
            <Link className="navitem" to="/">
              Contact
            </Link>
            <Link className="navitem" to="/">
              Dashboard
            </Link>
          </div>
          <Link className="cart" to="/">
            <i className="me-1 fas fa-heart"></i>
            <sup>0</sup>
          </Link>
          <Link className="mx-3 cart" to="/">
            <i className="me-1 fas fa-cart-plus"></i>
            <sup>0</sup>
          </Link>
          <Link className="d-none d-lg-inline" to="/">
            <img
              className="profile"
              src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
              alt=""
            />
          </Link>
          <button className="border-0 text-secondary d-none d-lg-inline ms-1">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
        <Navbar.Toggle
          className="d-sm-inline d-lg-none p-0 border-0"
          aria-controls="offcanvasNavbar"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className=" w-auto border-0"
        >
          <Offcanvas.Header className="py-2 mb-1 canvas-head" closeButton>
            <img src={logo} alt="" />
          </Offcanvas.Header>
          <Offcanvas.Body className="canvas-body p-0">
            <Nav className="justify-content-end flex-grow-1">
              <Link className="mx-auto" to="/">
                <img
                  className="profile"
                  src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
                  alt=""
                />
              </Link>
              <p className="px-5 text-center">Md Shaki Ahmed</p>
              <Link className="navitem" to="/">
                Home
              </Link>
              <Link className="navitem" to="/">
                Shop
              </Link>
              <Link className="navitem" to="/">
                Blog
              </Link>
              <Link className="navitem" to="/">
                Contact
              </Link>
              <Link className="navitem" to="/">
                Dashboard
              </Link>
            </Nav>
            <div className="mt-3 d-flex align-items-center justify-content-center">
              <i className="p-3 rounded-circle bg-secondary text-white  me-3 fas fa-phone-square-alt"></i>
              <span>
                <small className="fw-bolder">+65 11.188.888</small>
                <br />
                <small>support 24/7 time</small>
              </span>
            </div>
          </Offcanvas.Body>
          <button className="w-100 allbtn">
            Logout<i className="ms-2 fas fa-sign-out-alt"></i>
          </button>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};

export default Header;
