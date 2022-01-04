import React from "react";
import "./Header.css";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <form className="bg-white mx-auto shadow rounded w-50 d-flex justify-content-between align-items-center">
          <input
            placeholder="What do you need"
            className="h-input"
            type="text"
          />
          <i className="py-auto px-2 fas fa-search"></i>
        </form>
        <Link className="ms-auto me-3 cart" to="/">
          <i className="fas fa-cart-plus"></i>
          <sup>0</sup>
        </Link>
        <Navbar.Toggle
          className="p-0 border-0"
          aria-controls="offcanvasNavbar"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="w-auto border-0"
        >
          <Offcanvas.Header className="py-2 mb-1 canvas-head" closeButton>
            <img src={logo} alt="" />
          </Offcanvas.Header>
          <Offcanvas.Body className="canvas-body p-0">
            <Nav className="justify-content-end flex-grow-1">
              <Link className="mx-auto" to="/">
                <img className="profile" src={logo} alt="" />
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
      </Container>
    </Navbar>
  );
};

export default Header;
