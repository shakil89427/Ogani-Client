import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "./useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="user bg-info d-flex align-items-center justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!user?._id) {
    return <Navigate to="/" state={{ location }} />;
  }
  return children;
};

export default PrivateRoute;
