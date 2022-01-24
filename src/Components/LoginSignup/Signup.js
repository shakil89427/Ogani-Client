import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import useSignup from "../Hooks/useSignup";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginSignup.css";

const Signup = () => {
  const { userLoading, user } = useAuth();
  const { signup, signuptoast } = useSignup();
  const [data, setData] = useState(null);

  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };
  const signupuser = (e) => {
    e.preventDefault();
    if (data.password !== data.password2) {
      return toast.warning("Password Didn't Matched", {
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
    if (data.password.length < 6) {
      return toast.warning("Minimum password 6 character", {
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
    signup(data);
  };
  return (
    <div className="login-signup-main">
      <ToastContainer />
      {signuptoast && signuptoast}
      {user?._id && <Navigate to="/" />}
      <div className="signup-main shadow">
        {!userLoading && <h2 className="login-h2">Signup</h2>}
        {userLoading && (
          <h2 className="login-h2">
            <Spinner animation="border" variant="success" />
          </h2>
        )}
        <div className="p-3">
          <form onSubmit={signupuser}>
            <input
              onChange={getData}
              name="firstname"
              required
              disabled={userLoading}
              placeholder="First Name"
              type="text"
            />
            <input
              onChange={getData}
              disabled={userLoading}
              name="lastname"
              required
              placeholder="Last Name"
              type="text"
            />
            <input
              onChange={getData}
              disabled={userLoading}
              name="email"
              required
              placeholder="Email"
              type="email"
            />
            <input
              onChange={getData}
              disabled={userLoading}
              name="password"
              required
              placeholder="Password"
              type="password"
            />
            <input
              onChange={getData}
              disabled={userLoading}
              name="password2"
              required
              className="w-100"
              placeholder="Password Again"
              type="password"
            />
            <button
              disabled={userLoading}
              type="submit"
              className="login-signup-btn"
            >
              Signup
            </button>
          </form>

          <p className="mt-5 text-center text-white">
            Already Registered?
            <Link to={!userLoading ? "/login" : "#"}>
              <button className="new">Login</button>
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
  );
};

export default Signup;
