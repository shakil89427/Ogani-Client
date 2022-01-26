import React from "react";
import { Spinner } from "react-bootstrap";
import { isExpired, decodeToken } from "react-jwt";
import { Navigate, useLocation } from "react-router";
import useAuth from "./useAuth";

const PrivateRoute = ({ children }) => {
  const { user, setUser, userLoading } = useAuth();
  const location = useLocation();

  if (userLoading) {
    return <Spinner animation="border" variant="success" />;
  } else {
    const accesstoken = localStorage.getItem("accessToken");
    const expired = isExpired(accesstoken);
    const decoded = decodeToken(accesstoken);
    if (expired) {
      setUser({});
      localStorage.removeItem("accessToken");
      return <Navigate to="/login" state={{ location }} />;
    }
    if (!user?.email) {
      return <Navigate to="/login" state={{ location }} />;
    }
    if (user?.email === decoded?.email) {
      return children;
    }
  }
};

export default PrivateRoute;
