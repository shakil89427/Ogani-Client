import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import useLogin from "../Hooks/useLogin";
import "./LoginSignup.css";

const Login = () => {
  const { user, userLoading } = useAuth();
  const { login } = useLogin();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const getlocation = useLocation();
  const path = getlocation?.state?.location;

  const loginUser = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const reset = () => {
    if (!email) {
      return alert("email not found");
    }
    alert(email);
  };
  return (
    <>
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
                  onChange={getEmail}
                  required
                  placeholder="Enter your Email"
                  type="email"
                />
              </div>
              <div className="input-div">
                <i className="fas fa-lock"></i>
                <input
                  onChange={getPassword}
                  disabled={userLoading}
                  required
                  placeholder="Enter your Password"
                  type="password"
                />
              </div>
              <div className="resetpass">
                <button onClick={reset} type="button">
                  Forgot Password
                </button>
              </div>
              <button
                disabled={userLoading}
                type="submit"
                className="login-signup-btn"
              >
                Login
              </button>
            </form>
            <p className="my-2 text-center text-secondary">
              -----------OR-----------
            </p>
            <div className="my-2 text-center alternate-sign">
              <button disabled={userLoading}>
                <i className="me-2 fab fa-google"></i>Login With Google
              </button>
            </div>
            <p className="mt-5 text-center text-white">
              New Member?
              <Link to={!userLoading ? "/signup" : "#"}>
                <button className="new">Signup</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
