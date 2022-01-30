import React, { useState } from "react";
import "./Dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Sub/Profile";
import PendingOrders from "./Sub/PendingOrders";
import CompleteOrders from "./Sub/CompletedOrders";
import CancelledOrders from "./Sub/CancelledOrders";
import useAuth from "../AuthProvider/useAuth";
import AllProducts from "./Sub/AllProducts";

const Dashboard = () => {
  const { user } = useAuth();
  const [component, setComponent] = useState("profile");

  return (
    <Container className="my-3">
      <Row>
        <Col className="mb-3" sm={12} md={12} lg={3}>
          <div className="shadow rounded-3 p-2">
            <img
              className="profile-pic"
              src={
                user.img
                  ? user.img
                  : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              }
              alt=""
            />
            <span className="buttons">
              <button onClick={() => setComponent("profile")}>
                <i className="fas fa-user-alt"></i>My Profile
              </button>
              <button onClick={() => setComponent("pending")}>
                <i className="fas fa-spinner"></i>Pending Orders
              </button>
              <button onClick={() => setComponent("completed")}>
                <i className="far fa-check-circle"></i>Completed Orders
              </button>
              <button onClick={() => setComponent("cancelled")}>
                <i className="far fa-window-close"></i>Cancelled Orders
              </button>
              {user.role === "admin" && (
                <button onClick={() => setComponent("allproducts")}>
                  <i className="fas fa-border-all"></i>All Products
                </button>
              )}
            </span>
          </div>
        </Col>
        <Col sm={12} md={12} lg={9}>
          <div className="shadow rounded-3 p-2">
            {component === "profile" && <Profile />}
            {component === "pending" && <PendingOrders />}
            {component === "completed" && <CompleteOrders />}
            {component === "cancelled" && <CancelledOrders />}
            {component === "allproducts" && <AllProducts />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
