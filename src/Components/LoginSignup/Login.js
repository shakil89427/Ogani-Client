import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import useLogin from "../Hooks/useLogin";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginSignup.css";
import axios from "axios";

const Login = () => {
  const { user, userLoading } = useAuth();
  const { login, logintoast } = useLogin();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
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
      return toast.warning("Please enter your email", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "colored",
        transition: Slide,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(true);
    axios
      .get(`http://localhost:5000/resetpassword/${email}`)
      .then((res) => {
        if (res.data) {
          setLoading(false);
          toast.success("Please Check your inbox", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "colored",
            transition: Slide,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        } else {
          setLoading(false);
          toast.error("User not found", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "colored",
            transition: Slide,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("User not found", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          theme: "colored",
          transition: Slide,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <>
      <ToastContainer />
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
          {loading && (
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
