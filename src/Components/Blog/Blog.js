import React from "react";
import "./Blog.css";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../img/blog/blog-1.jpg";
import img2 from "../../img/blog/blog-2.jpg";
import img3 from "../../img/blog/blog-3.jpg";
import img4 from "../../img/blog/blog-4.jpg";
import img5 from "../../img/blog/blog-5.jpg";
import img6 from "../../img/blog/blog-6.jpg";

const Blog = () => {
  return (
    <Container>
      <h3 className="text-center fw-bold border-bottom">All Blog</h3>
      <Row className="blog-row">
        <Col className="mb-3" sm={12} md={6} lg={4}>
          <div className="shadow p-2">
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
          <div className="shadow p-2">
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
          <div className="shadow p-2">
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
        <Col className="mb-3" sm={12} md={6} lg={4}>
          <div className="shadow p-2">
            <img src={img4} alt="" />
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
          <div className="shadow p-2">
            <img src={img5} alt="" />
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
          <div className="shadow p-2">
            <img src={img6} alt="" />
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

export default Blog;
