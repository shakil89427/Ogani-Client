import React, { useState } from "react";
import "./Dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Sub/Profile";
import PendingOrders from "./Sub/PendingOrders";
import CompleteOrders from "./Sub/CompletedOrders";

const Dashboard = () => {
  const [component, setComponent] = useState("profile");

  return (
    <Container className="my-3">
      <Row>
        <Col className="mb-3" sm={12} md={12} lg={3}>
          <div className="shadow rounded-3 p-2">
            <img
              className="profile-pic"
              src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
              alt=""
            />
            <span className="buttons">
              <button onClick={() => setComponent("profile")}>
                <i className="fas fa-user-alt"></i>My Profile
              </button>
              <button onClick={() => setComponent("pending")}>
                <i className="fas fa-spinner"></i>Pending Orders
              </button>
              <button onClick={() => setComponent("complete")}>
                <i className="far fa-check-circle"></i>Completed Orders
              </button>
            </span>
          </div>
        </Col>
        <Col sm={12} md={12} lg={9}>
          <div className="shadow rounded-3 p-2">
            {component === "profile" && <Profile />}
            {component === "pending" && <PendingOrders />}
            {component === "complete" && <CompleteOrders />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
