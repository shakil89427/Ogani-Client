import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from "./useAuth";

const PrivateRoute = ({ children }) => {
  const { user, userLoading } = useAuth();
  const location = useLocation();

  if (userLoading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ location }} />;
};

export default PrivateRoute;
