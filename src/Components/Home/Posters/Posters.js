import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import poster1 from "../../../img/banner/banner-1.jpg";
import poster2 from "../../../img/banner/banner-2.jpg";

const Posters = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col sm={10} md={6} lg={6}>
          <img className="w-100" src={poster1} alt="" />
        </Col>
        <Col sm={10} md={6} lg={6}>
          <img className="w-100" src={poster2} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Posters;
