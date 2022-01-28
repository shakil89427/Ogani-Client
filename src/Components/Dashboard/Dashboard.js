import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Sub/Profile";
import PendingOrders from "./Sub/PendingOrders";
import CompleteOrders from "./Sub/CompletedOrders";
import CancelledOrders from "./Sub/CancelledOrders";
import axios from "axios";
import useAuth from "../AuthProvider/useAuth";

const Dashboard = () => {
  const { user, userLoading } = useAuth();
  const [component, setComponent] = useState("profile");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let param = "";
    if (user.role === "user") {
      param = user._id;
    }
    if (user.role === "admin") {
      param = "admin";
    }
    const loadOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/loadorders/${param}`
        );
        setOrders(response.data);
      } catch (error) {}
    };
    loadOrders();
  }, [user, userLoading]);

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
              <button onClick={() => setComponent("cancelled")}>
                <i className="far fa-window-close"></i>Cancelled Orders
              </button>
            </span>
          </div>
        </Col>
        <Col sm={12} md={12} lg={9}>
          <div className="shadow rounded-3 p-2">
            {component === "profile" && <Profile />}
            {component === "pending" && <PendingOrders orders={orders} />}
            {component === "complete" && <CompleteOrders orders={orders} />}
            {component === "cancelled" && <CancelledOrders orders={orders} />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
