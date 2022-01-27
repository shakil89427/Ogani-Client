import React from "react";
import "./Dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Profile from "./Profile";

const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  return (
    <Container className="my-3">
      <Row>
        <Col className="mb-3" sm={12} md={12} lg={3}>
          <div className="border shadow rounded-3">
            <img
              className="profile-pic"
              src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
              alt=""
            />
            <span className="buttons">
              <button onClick={() => navigate("/dashboard")}>
                <i className="fas fa-user-alt"></i>My Profile
              </button>
              <button onClick={() => navigate("/dashboard/pending")}>
                <i className="fas fa-spinner"></i>Pending Orders
              </button>
              <button onClick={() => navigate("/dashboard/completed")}>
                <i className="far fa-check-circle"></i>Completed Orders
              </button>
            </span>
          </div>
        </Col>
        <Col sm={12} md={12} lg={9}>
          <div className="border shadow rounded-3">
            {path === "/dashboard" || path === "/dashboard/" ? (
              <Profile />
            ) : (
              <Outlet />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
