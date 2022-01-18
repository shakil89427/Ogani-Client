import React, { useEffect, useState } from "react";
import "./Shop.css";
import useAddToCart from "../Hooks/useAddToCart";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Shop = () => {
  const { addSingleQuantity } = useAddToCart();
  const [filterBy, setFilterBy] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  /* Get keyword from input */
  const getKeyword = (e) => {
    e.preventDefault();
    setFilterBy({ name: { $regex: e.target[0].value, $options: "i" } });
  };

  /* Remove keyword from field */
  const removeKeyword = () => {
    const { name, ...rest } = filterBy;
    setFilterBy(rest);
  };

  /* Get catagory */
  const getCatagory = (e) => {
    if (e.target.innerText === "All") {
      const { catagory, ...rest } = filterBy;
      return setFilterBy(rest);
    }
    const newData = { ...filterBy };
    newData.catagory = e.target.innerText;
    setFilterBy(newData);
  };

  /* Get min max Price */
  const getPrice = (e) => {
    e.preventDefault();
    const newData = { ...filterBy };
    newData.price = {};
    if (e.target[0].value) {
      newData.price.$gt = parseInt(e.target[0].value) - 1;
    }
    if (e.target[1].value) {
      newData.price.$lt = parseInt(e.target[1].value) + 1;
    }
    setFilterBy(newData);
  };

  /* Reset min max Price */
  const resetPrice = () => {
    const { price, ...rest } = filterBy;
    setFilterBy(rest);
  };

  /* Get color */
  const getColor = (e) => {
    if (e.target.name === "rainbow") {
      const { color, ...rest } = filterBy;
      return setFilterBy(rest);
    }
    const newData = { ...filterBy };
    newData.color = e.target.name;
    setFilterBy(newData);
  };

  const changePage = (value) => {
    if (value) {
      return setPage(page + 1);
    }
    if (!value) {
      return setPage(page - 1);
    }
  };

  /* Load Products */
  useEffect(() => {
    setLoading(true);
    axios
      .post("http://localhost:5000/allproducts", { page, filterBy })
      .then((res) => {
        setCount(Math.ceil(res.data.count / 8));
        setAllProducts(res.data.result);
        setLoading(false);
      });
  }, [filterBy, page]);

  return (
    <div className="mb-5">
      <h1 className="shop-h1">Shop</h1>
      <Container>
        <Row>
          <Col className="border-end" sm={12} md={3} lg={3}>
            <h5 className="fw-bold text-center border-2 border-bottom">
              Filter
            </h5>
            <div className="filter-keyword border-bottom pb-3">
              <p className="fw-bold">Keyword</p>
              <form onSubmit={getKeyword}>
                <input placeholder="What do you need?" type="text" />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
                <button onClick={removeKeyword} type="reset">
                  <i className="fas fa-backspace"></i>
                </button>
              </form>
            </div>
            <div className="filter-catagories border-bottom pb-2">
              <p className="fw-bold">Catagories</p>
              <button onClick={getCatagory}>All</button>
              <button onClick={getCatagory}>Fruits</button>
              <button onClick={getCatagory}>Dry Fruits</button>
              <button onClick={getCatagory}>Vegetables</button>
              <button onClick={getCatagory}>Drinks</button>
              <button onClick={getCatagory}>Meats</button>
            </div>
            <div className="filter-price border-bottom pb-2">
              <p className="fw-bold">Price</p>
              <form onSubmit={getPrice}>
                <input required placeholder="Min" type="number" />
                <span className="mx-1">To</span>
                <input required placeholder="Max" type="number" />
                <button type="submit">Apply</button>
                <button onClick={resetPrice} type="reset">
                  Reset
                </button>
              </form>
            </div>
            <div className="filter-color border-bottom pb-2">
              <p className="fw-bold">Color</p>
              <button onClick={getColor} name="rainbow" />
              <button onClick={getColor} name="red" />
              <button onClick={getColor} name="yellow" />
              <button onClick={getColor} name="blue" />
              <button onClick={getColor} name="green" />
              <button onClick={getColor} name="black" />
            </div>
          </Col>
          <Col className="shop-div" sm={12} md={9} lg={9}>
            {loading && (
              <div className=" my-5 d-flex align-items-center justify-content-center">
                <Spinner animation="border" variant="success" />
              </div>
            )}
            {!loading && allProducts.length === 0 && (
              <span>
                <h3 className="text-center mt-3">Sorry No product Found</h3>
                <p className="text-center">Try changing the filter options</p>
                <p className="text-center">OR</p>
                <p className="text-center">
                  <Link to="/">
                    <button className="allbtn">Back To Home</button>
                  </Link>
                </p>
              </span>
            )}

            <Row>
              {allProducts.map((product) => (
                <Col
                  key={product._id}
                  className="p-3 text-center p-main"
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <div className="p-single">
                    <img className="p-img" src={product.img} alt="" />
                    <span className="p-effect">
                      <Link to={`/details/${product._id}`}>
                        <p>
                          <i className="fas fa-info"></i>
                        </p>
                      </Link>
                      <p onClick={() => addSingleQuantity(product._id, false)}>
                        <i className="fas fa-cart-plus"></i>
                      </p>
                    </span>
                    <p className="name">{product.name}</p>
                    <p className="name">
                      {parseFloat(product.price).toFixed(2)}$
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
            {!loading && allProducts.length > 0 && (
              <div className="text-center">
                {page !== 0 && (
                  <button
                    onClick={() => changePage(false)}
                    className="allbtn me-1"
                  >
                    <i class="me-1 fas fa-arrow-left"></i>Prev
                  </button>
                )}
                {count !== page + 1 && (
                  <button
                    onClick={() => changePage(true)}
                    className="allbtn ms-1"
                  >
                    Next<i class="ms-1 fas fa-arrow-right"></i>
                  </button>
                )}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
