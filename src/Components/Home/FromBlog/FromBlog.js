import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../img/blog/blog-3.jpg";
import img2 from "../../../img/blog/blog-4.jpg";
import img3 from "../../../img/blog/blog-5.jpg";

const FromBlog = () => {
  return (
    <Container className="mb-5">
      <h2 className="fw-bolder text-center">From The Blogs</h2>
      <hr className="mx-auto bg-success" />
      <Row className="blog-row">
        <Col className="mb-3" sm={12} md={6} lg={4}>
          <div className="p-2">
            <img src={img1} alt="" />
            <p className="text-secondary">
              <i className="me-1 far fa-calendar"></i>May 4,2020
              <i className="ms-2 me-1 far fa-comment"></i>5
            </p>
            <h5>6 ways to prepare breakfast for 30</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quidem ab obcaecati quisquam exercitationem dicta culpa quo earum
              eos sed.
            </p>
            <button>
              Read More<i className="ms-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </Col>
        <Col className="mb-3" sm={12} md={6} lg={4}>
          <div className="p-2">
            <img src={img2} alt="" />
            <p className="text-secondary">
              <i className="me-1 far fa-calendar"></i>May 4,2020
              <i className="ms-2 me-1 far fa-comment"></i>5
            </p>
            <h5>6 ways to prepare breakfast for 30</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quidem ab obcaecati quisquam exercitationem dicta culpa quo earum
              eos sed.
            </p>
            <button>
              Read More<i className="ms-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </Col>
        <Col className="mb-3" sm={12} md={6} lg={4}>
          <div className="p-2">
            <img src={img3} alt="" />
            <p className="text-secondary">
              <i className="me-1 far fa-calendar"></i>May 4,2020
              <i className="ms-2 me-1 far fa-comment"></i>5
            </p>
            <h5>6 ways to prepare breakfast for 30</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quidem ab obcaecati quisquam exercitationem dicta culpa quo earum
              eos sed.
            </p>
            <button>
              Read More<i className="ms-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FromBlog;
