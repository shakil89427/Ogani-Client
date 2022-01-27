import React from "react";
import "./Dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import Profile from "./Profile";

const Dashboard = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container className="my-3">
      <Row>
        <Col sm={12} md={12} lg={3}>
          <div className="border shadow rounded-3">
            <img
              className="profile-pic"
              src="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
              alt=""
            />
            <span className="buttons">
              <Link to="/dashboard">
                <button>My Profile</button>
              </Link>
              <Link to="/dashboard/pending">
                <button>Pending Orders</button>
              </Link>
              <Link to="/dashboard/completed">
                <button>Completed Orders</button>
              </Link>
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
