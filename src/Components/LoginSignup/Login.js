import React from "react";
import { Spinner } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import useLogin from "../Hooks/useLogin";
import "./LoginSignup.css";

const Login = () => {
  const { user, userLoading } = useAuth();
  const { login, logintoast } = useLogin();
  const getlocation = useLocation();
  const path = getlocation?.state?.location;

  const loginUser = (e) => {
    e.preventDefault();
    login({ email: e.target[0].value, password: e.target[1].value });
  };

  return (
    <>
      {logintoast && logintoast}
      {user._id && path && <Navigate to={path} />}
      {user._id && !path && <Navigate to="/" />}
      <div className="login-signup-main">
        <div className="login-main shadow">
          {!userLoading && <h2 className="login-h2">Login</h2>}
          {userLoading && (
            <h2 className="login-h2">
              <Spinner animation="border" variant="success" />
            </h2>
          )}
          <div className="p-3">
            <form onSubmit={loginUser}>
              <div className="input-div">
                <i className="fas fa-user"></i>
                <input
                  disabled={userLoading}
                  required
                  placeholder="Enter your Email"
                  type="email"
                />
              </div>
              <div className="input-div">
                <i className="fas fa-lock"></i>
                <input
                  disabled={userLoading}
                  required
                  placeholder="Enter your Password"
                  type="password"
                />
              </div>
              <div className="resetpass">
                <Link to="/resetinit">
                  <button type="button">Forgot Password</button>
                </Link>
              </div>
              <button
                disabled={userLoading}
                type="submit"
                className="login-signup-btn"
              >
                Login
              </button>
            </form>
            <p className="mt-5 text-center text-white">
              New Member?
              <Link to={!userLoading ? "/signup" : "#"}>
                <button className="new">Signup</button>
              </Link>
            </p>
            <p className="text-center">
              <Link className="backtohome" to="/">
                Back To Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
