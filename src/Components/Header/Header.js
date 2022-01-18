import "./Header.css";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import useAuth from "../AuthProvider/useAuth";
import useLogout from "../Hooks/useLogout";

const Header = () => {
  const { user, cartItems } = useAuth();
  const { logout } = useLogout();

  return (
    <div className="main-nav">
      <Navbar className="container" expand={false}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="ms-auto">
          <div className="me-5 d-none d-lg-inline">
            <Link className="navitem" to="/">
              Home
            </Link>
            <Link className="navitem" to="/shop">
              Shop
            </Link>
            <Link className="navitem" to="/blog">
              Blog
            </Link>
            <Link className="navitem" to="/contact">
              Contact
            </Link>
          </div>
          <Link className="mx-3 cart" to="/cart">
            <i className="me-1 fas fa-cart-plus"></i>
            <sup>{cartItems?.products?.length}</sup>
          </Link>
          <span className="d-none d-lg-inline">
            {user._id && (
              <span>
                <Link to="/profile">
                  <img
                    className="profile"
                    src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
                    alt=""
                  />
                </Link>
                <button
                  onClick={logout}
                  className="border-0 text-secondary ms-1"
                >
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </span>
            )}

            {!user._id && (
              <Link className="user" to="/login">
                <i className="fas fa-user"></i>
              </Link>
            )}
          </span>
        </div>
        <Navbar.Toggle
          className="d-sm-inline d-lg-none p-0 border-0"
          aria-controls="offcanvasNavbar"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="d-lg-none w-auto border-0"
        >
          <Offcanvas.Header className="py-2 mb-1 canvas-head" closeButton>
            <img src={logo} alt="" />
          </Offcanvas.Header>
          <Offcanvas.Body className="canvas-body p-0">
            <Nav className="justify-content-end flex-grow-1">
              {user._id && (
                <span className="text-center px-5">
                  <Link to="/profile">
                    <img
                      className="profile"
                      src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
                      alt=""
                    />
                  </Link>
                  <p>{user.firstname}</p>
                </span>
              )}
              {!user._id && (
                <p className="text-center mt-3">
                  <Link className="user" to="/login">
                    <i className="fas fa-user"></i>
                  </Link>
                </p>
              )}
              <Link className="navitem" to="/">
                Home
              </Link>
              <Link className="navitem" to="/shop">
                Shop
              </Link>
              <Link className="navitem" to="/blog">
                Blog
              </Link>
              <Link className="navitem" to="/contact">
                Contact
              </Link>
            </Nav>
            <div className="mt-3 d-flex align-items-center justify-content-center">
              <i className="p-2 rounded-circle bg-secondary text-white  me-3 fas fa-phone-square-alt"></i>
              <span>
                <small className="fw-bolder">+65 11.188.888</small>
                <br />
                <small>support 24/7 time</small>
              </span>
            </div>
          </Offcanvas.Body>
          <button onClick={logout} className="w-100 allbtn">
            Logout<i className="ms-2 fas fa-sign-out-alt"></i>
          </button>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};

export default Header;
