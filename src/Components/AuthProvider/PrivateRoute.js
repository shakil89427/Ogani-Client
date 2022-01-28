import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { isExpired, decodeToken } from "react-jwt";
import { Navigate, useLocation } from "react-router";
import useAuth from "./useAuth";

const PrivateRoute = ({ children }) => {
  const { user, setUser, userLoading } = useAuth();
  const location = useLocation();
  const accesstoken = localStorage.getItem("accessToken");
  const expired = isExpired(accesstoken);
  const decoded = decodeToken(accesstoken);

  useEffect(() => {
    if (expired) {
      setUser({});
      localStorage.removeItem("accessToken");
      <Navigate to="/login" state={{ location }} />;
    }
  }, []);

  if (userLoading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }
  if (!user?.email) {
    return <Navigate to="/login" state={{ location }} />;
  }
  if (user?.email === decoded?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ location }} />;
};

export default PrivateRoute;
