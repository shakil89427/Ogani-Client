import React, { useEffect, useState } from "react";
import "./Details.css";
import Search from "../Search/Search";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import useAddToCart from "../Hooks/useAddToCart";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import useAuth from "../AuthProvider/useAuth";

const Details = () => {
  const { setFilterBy } = useAuth();
  const { addSingleQuantity } = useAddToCart();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/productdetails/${id}`
        );
        if (response.data) {
          setProduct(response.data.result);
          setRelatedProducts(response.data.result2);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };
    loadDetails();
  }, [id]);

  const getCatagory = (e) => {
    setFilterBy({ page: 0, catagory: e });
    navigate("/shop");
  };

  const changeinfo = (e) => {
    setInfo(e.target.innerText);
  };

  const changeQuantity = (value) => {
    if (value) {
      setQuantity(quantity + 1);
    }
    if (quantity === 1) return;
    if (!value) {
      setQuantity(quantity - 1);
    }
  };

  const addtocart = (id, value) => {
    addSingleQuantity(id, value);
    toast.success("Successfully Added To Cart", {
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

  return (
    <>
      <ToastContainer />
      <Search />
      {loading && (
        <Container className="my-5 d-flex align-items-center justify-content-center">
          <Spinner className="spin" animation="border" variant="success" />
        </Container>
      )}
      {product.name && (
        <Container className="mb-3">
          {product.name && (
            <Row className="mt-5">
              <Col sm={12} md={6} lg={6}>
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <img className="detail-img" src={product.img} alt="" />
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div className="border-bottom pb-5 mt-2">
                  <h2 className="details-name">{product.name}</h2>
                  <p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </p>
                  <p className="fw-bolder text-danger">
                    {parseFloat(product.price).toFixed(2)}$
                  </p>
                  <p>{product.description.slice(0, 200)}...</p>
                  <span className="plus-minus mt-3">
                    <button onClick={() => changeQuantity(false)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => changeQuantity(true)}>+</button>
                  </span>
                  <button
                    onClick={() => addtocart(product._id, quantity)}
                    className="allbtn"
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div className="w-25">
                    <p className="fw-bolder">Availability</p>
                    <p className="fw-bolder">Shipping</p>
                    <p className="fw-bolder">Share on</p>
                  </div>
                  <div className="w-75">
                    <p>In Stock</p>
                    <p>
                      01 day shipping.
                      <span className="text-danger fw-bolder">
                        Free pickup today
                      </span>
                    </p>
                    <p>
                      <i className="me-1 fab fa-facebook"></i>
                      <i className="me-1 fab fa-twitter"></i>
                      <i className="me-1 fab fa-instagram"></i>
                      <i className="me-1 fab fa-google-plus-square"></i>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          <p className="product-info">
            <span>
              <button
                className={info === "Description" ? "text-dark" : ""}
                onClick={changeinfo}
              >
                Description
              </button>
              <button
                className={info === "Reviews" ? "text-dark" : ""}
                onClick={changeinfo}
              >
                Reviews
              </button>
            </span>
          </p>
          <p className="fw-bolder">Product {info}</p>
          {info === "Description" && <p>{product.description}</p>}
          {info === "Reviews" && <p>Review part here</p>}
          <h3 className="fw-bolder text-center mt-5">Related Products</h3>
          <Row className="my-3 text-center">
            {relatedProducts.map((related) => (
              <Col
                key={related._id}
                className="p-3 text-center p-main"
                sm={6}
                md={4}
                lg={3}
              >
                <div className="p-single">
                  <img className="p-img" src={related.img} alt="" />
                  <span className="p-effect">
                    <Link to={`/details/${related._id}`}>
                      <p>
                        <i className="fas fa-info"></i>
                      </p>
                    </Link>
                    <p onClick={() => addtocart(related._id, false)}>
                      <i className="fas fa-cart-plus"></i>
                    </p>
                  </span>
                  <p className="name">{related.name}</p>
                  <p className="name">
                    {parseFloat(related.price).toFixed(2)}$
                  </p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <button
              onClick={() => getCatagory(product.catagory)}
              className="allbtn"
            >
              More
            </button>
          </div>
        </Container>
      )}
    </>
  );
};

export default Details;
