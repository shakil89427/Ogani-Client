import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import "./LoginSignup.css";

const Login = () => {
  const { user, login, loading, setLoading } = useAuth();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const getlocation = useLocation();
  const path = getlocation?.state?.location;

  const loginUser = (e) => {
    e.preventDefault();
    setLoading(true);
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
          {!loading && <h2 className="login-h2">Login</h2>}
          {loading && (
            <h2 className="login-h2">
              <Spinner className="spin" animation="border" variant="success" />
            </h2>
          )}
          <div className="p-3">
            <form onSubmit={loginUser}>
              <div className="input-div">
                <i class="fas fa-user"></i>
                <input
                  disabled={loading}
                  onChange={getEmail}
                  required
                  placeholder="Enter your Email"
                  type="email"
                />
              </div>
              <div className="input-div">
                <i class="fas fa-lock"></i>
                <input
                  onChange={getPassword}
                  disabled={loading}
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
                disabled={loading}
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
              <button disabled={loading}>
                <i class="me-2 fab fa-google"></i>Login With Google
              </button>
            </div>
            <p className="mt-5 text-center text-white">
              New Member?
              <Link to={!loading ? "/signup" : "#"}>
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
