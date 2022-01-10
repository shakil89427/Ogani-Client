import React, { useEffect, useState } from "react";
import "./Details.css";
import Search from "../Search/Search";
import useAuth from "../AuthProvider/useAuth";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Details = () => {
  const { allProducts } = useAuth();
  const { id } = useParams();
  const [captureId, setCaptureId] = useState(id);
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [info, setInfo] = useState("Description");

  useEffect(() => {
    if (allProducts.length === 0) return;
    setProduct(allProducts.find((founded) => founded._id === captureId));
  }, [allProducts, captureId]);

  useEffect(() => {
    if (!product.name) return;
    setRelatedProducts(
      allProducts
        .filter(
          (founded) =>
            founded.catagory === product.catagory && founded._id !== product._id
        )
        .slice(0, 4)
    );
  }, [product]);

  const changeinfo = (e) => {
    setInfo(e.target.innerText);
  };

  const changeId = (value) => {
    setCaptureId(value);
  };
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, officia? Neque corrupti quo ratione doloribus explicabo pariatur ipsam delectus fugit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, officia? Neque corrupti quo ratione doloribus explicabo pariatur ipsam delectus fugit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, officia? Neque corrupti quo ratione doloribus explicabo pariatur ipsam delectus fugit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, officia? Neque corrupti quo ratione doloribus explicabo pariatur ipsam delectus fugit.";
  const reviews =
    "ujkldhfuivsadehfuiualouwewkhflruwquiweluwfhwywajklwydfhewkjfhweuirfhwewkjfaehbsnsfsjkesashsmbLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, officia? Neque corrupti quo ratione doloribus explicabo pariatur ipsam delectus fugit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, officia? Neque corrupti quo ratione doloribus explicabo parfkmjsnsfbasemnjsfbefef";

  return (
    <Container>
      <Search id="top" />
      {product.name && (
        <Row className="mt-5">
          <Col sm={12} md={6} lg={6}>
            <div className="w-75 mx-auto">
              <img
                className="w-100"
                src={require(`../../img/available/${product.name}.jpg`)}
                alt=""
              />
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
              <p className="fw-bolder text-danger">${product.price}.00</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                inventore fuga reprehenderit ipsum sit! Consequatur,
                accusantium, est deserunt quas et alias repudiandae eveniet
                libero officia velit ipsam inventore saepe corrupti consectetur
                reiciendis id natus quia quidem ipsum beatae recusandae.
              </p>
              <span className="plus-minus mt-3">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </span>
              <button className="allbtn">ADD TO CART</button>
            </div>
            <div className="d-flex align-items-center mt-4">
              <div className="w-25">
                <p className="fw-bolder">Availability</p>
                <p className="fw-bolder">Shipping</p>
                <p className="fw-bolder">Share on</p>
              </div>
              <div className="w-75">
                <p>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                <p>
                  01 day shipping.
                  <span className="text-danger fw-bolder">
                    Free pickup today
                  </span>
                </p>
                <p>
                  <i className="me-1 fab fa-facebook"></i>
                  <i className="me-1 fab fa-facebook"></i>
                  <i className="me-1 fab fa-facebook"></i>
                  <i className="me-1 fab fa-facebook"></i>
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
      <p>Product {info}</p>
      {info === "Description" && <p>{description}</p>}
      {info === "Reviews" && <p>{reviews}</p>}
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
              <img
                className="p-img"
                src={require(`../../img/available/${related.name}.jpg`)}
                alt=""
              />
              <span className="p-effect">
                <p>
                  <i className="fas fa-heart"></i>
                </p>
                <a href="#top">
                  <p onClick={() => changeId(related._id)}>
                    <i className="fas fa-info"></i>
                  </p>
                </a>
                <p>
                  <i className="fas fa-cart-plus"></i>
                </p>
              </span>
              <p className="name">{related.name}</p>
              <p className="name">{related.price}.00$</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Details;
