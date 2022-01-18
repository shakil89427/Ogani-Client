import React from "react";
import "./Shop.css";
import useAddToCart from "../Hooks/useAddToCart";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import useAuth from "../AuthProvider/useAuth";

const Shop = () => {
  const { allProducts, allProductsLoading, filterBy, setFilterBy, count } =
    useAuth();
  const { addSingleQuantity } = useAddToCart();

  /* Remove keyword from field */
  const removeKeyword = () => {
    const { name, ...rest } = filterBy;
    rest.page = 0;
    setFilterBy(rest);
  };

  /* Get catagory */
  const getCatagory = (e) => {
    if (e.target.innerText === "All") {
      const { catagory, ...rest } = filterBy;
      rest.page = 0;
      return setFilterBy(rest);
    }
    const newData = { ...filterBy };
    newData.catagory = e.target.innerText;
    newData.page = 0;
    setFilterBy(newData);
  };

  /* Get min max Price */
  const getPrice = (e) => {
    e.preventDefault();
    if (!parseInt(e.target[0].value) && !parseInt(e.target[1].value)) return;
    const newData = { ...filterBy };
    newData.page = 0;
    newData.price = {};
    if (parseInt(e.target[0].value) === 1) {
      newData.price.$gt = 1;
    }
    if (parseInt(e.target[0].value) > 1) {
      newData.price.$gt = parseInt(e.target[0].value) - 1;
    }
    if (parseInt(e.target[1].value)) {
      newData.price.$lt = parseInt(e.target[1].value) + 1;
    }
    setFilterBy(newData);
    e.target.reset();
  };

  /* Reset min max Price */
  const resetPrice = () => {
    const { price, ...rest } = filterBy;
    rest.page = 0;
    setFilterBy(rest);
  };

  /* Get color */
  const getColor = (e) => {
    if (e.target.name === "rainbow") {
      const { color, ...rest } = filterBy;
      rest.page = 0;
      return setFilterBy(rest);
    }
    const newData = { ...filterBy };
    newData.color = e.target.name;
    newData.page = 0;
    setFilterBy(newData);
  };

  const changePage = (value) => {
    if (value) {
      const newData = { ...filterBy };
      newData.page = newData.page + 1;
      return setFilterBy(newData);
    }
    if (filterBy?.page === 0) return;
    if (!value) {
      const newData = { ...filterBy };
      newData.page = newData.page - 1;
      return setFilterBy(newData);
    }
  };

  return (
    <>
      {allProductsLoading && (
        <div className="w-100 spin my-5 d-flex align-items-center justify-content-center">
          <Spinner className="spin" animation="border" variant="success" />
        </div>
      )}

      <div className={allProductsLoading ? "blur mb-5" : "mb-5"}>
        <Search />
        <h1 className="shop-h1">Shop</h1>
        <Container>
          <Row>
            <Col className="border-end" sm={12} md={3} lg={3}>
              <h5 className="fw-bold text-center border-2 border-bottom">
                Filter
              </h5>
              <div className="filter-keyword border-bottom pb-3">
                <p className="fw-bold">Keyword</p>
                <form>
                  <input
                    disabled
                    className={filterBy?.name?.$regex && "activekeyword"}
                    value={filterBy?.name?.$regex}
                    placeholder="No keyword Added"
                    type="text"
                  />
                  <button
                    className={!filterBy?.name?.$regex && "activekeyword"}
                    onClick={removeKeyword}
                    type="reset"
                  >
                    <i className="fas fa-backspace"></i>
                  </button>
                </form>
              </div>
              <div className="filter-catagories border-bottom pb-2">
                <p className="fw-bold">Catagories</p>
                <button
                  className={!filterBy?.catagory ? "shopcatactive" : ""}
                  disabled={allProductsLoading}
                  onClick={getCatagory}
                >
                  All
                </button>
                <button
                  className={
                    filterBy?.catagory === "Fruits" ? "shopcatactive" : ""
                  }
                  disabled={allProductsLoading}
                  onClick={getCatagory}
                >
                  Fruits
                </button>
                <button
                  className={
                    filterBy?.catagory === "Dry Fruits" ? "shopcatactive" : ""
                  }
                  disabled={allProductsLoading}
                  onClick={getCatagory}
                >
                  Dry Fruits
                </button>
                <button
                  className={
                    filterBy?.catagory === "Vegetables" ? "shopcatactive" : ""
                  }
                  disabled={allProductsLoading}
                  onClick={getCatagory}
                >
                  Vegetables
                </button>
                <button
                  className={
                    filterBy?.catagory === "Drinks" ? "shopcatactive" : ""
                  }
                  disabled={allProductsLoading}
                  onClick={getCatagory}
                >
                  Drinks
                </button>
                <button
                  className={
                    filterBy?.catagory === "Meats" ? "shopcatactive" : ""
                  }
                  disabled={allProductsLoading}
                  onClick={getCatagory}
                >
                  Meats
                </button>
              </div>
              <div className="filter-price border-bottom pb-2">
                <p className="fw-bold">Price</p>
                <form onSubmit={getPrice}>
                  <input
                    disabled={filterBy?.price?.$gt || allProductsLoading}
                    min="1"
                    placeholder="Min"
                    type="number"
                  />
                  <span className="mx-1">To</span>
                  <input
                    disabled={filterBy?.price?.$lt || allProductsLoading}
                    min="1"
                    placeholder="Max"
                    type="number"
                  />
                  <button
                    className={filterBy?.price ? "shopcatactive" : ""}
                    disabled={allProductsLoading}
                    type="submit"
                  >
                    {filterBy?.price ? "Added" : "Add"}
                  </button>
                  <button
                    className={!filterBy?.price ? "shopcatactive" : ""}
                    disabled={allProductsLoading || !filterBy?.price}
                    onClick={resetPrice}
                    type="reset"
                  >
                    {!filterBy?.price ? "All" : "Reset"}
                  </button>
                </form>
              </div>
              <div className="filter-color border-bottom pb-2">
                <p className="fw-bold">Color</p>
                <button
                  disabled={allProductsLoading}
                  onClick={getColor}
                  className={
                    !filterBy?.color ? "active-color rainbow" : "rainbow"
                  }
                  name="rainbow"
                />
                <button
                  disabled={allProductsLoading}
                  onClick={getColor}
                  className={
                    filterBy?.color === "red" ? "active-color red" : "red"
                  }
                  name="red"
                />
                <button
                  disabled={allProductsLoading}
                  onClick={getColor}
                  className={
                    filterBy?.color === "yellow"
                      ? "active-color yellow"
                      : "yellow"
                  }
                  name="yellow"
                />
                <button
                  disabled={allProductsLoading}
                  onClick={getColor}
                  className={
                    filterBy?.color === "blue" ? "active-color blue" : "blue"
                  }
                  name="blue"
                />
                <button
                  disabled={allProductsLoading}
                  onClick={getColor}
                  className={
                    filterBy?.color === "green" ? "active-color green" : "green"
                  }
                  name="green"
                />
                <button
                  disabled={allProductsLoading}
                  onClick={getColor}
                  className={
                    filterBy?.color === "black" ? "active-color black" : "black"
                  }
                  name="black"
                />
              </div>
            </Col>
            <Col sm={12} md={9} lg={9}>
              {!allProductsLoading && allProducts.length === 0 && (
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
                        <p
                          onClick={() => addSingleQuantity(product._id, false)}
                        >
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
              {allProducts.length > 0 && (
                <div className="mt-3">
                  {filterBy?.page !== 0 && (
                    <button
                      disabled={allProductsLoading}
                      onClick={() => changePage(false)}
                      className="allbtn me-1 float-start"
                    >
                      <i className="me-1 fas fa-arrow-left"></i>Prev
                    </button>
                  )}
                  {count !== filterBy?.page + 1 && (
                    <button
                      disabled={allProductsLoading}
                      onClick={() => changePage(true)}
                      className="allbtn ms-1 float-end"
                    >
                      Next<i className="ms-1 fas fa-arrow-right"></i>
                    </button>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Shop;
