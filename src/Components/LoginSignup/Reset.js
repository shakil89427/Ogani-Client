import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { isExpired } from "react-jwt";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reset = () => {
  const [tokenExpired, setTokenExpired] = useState(false);
  const [checkToken, setCheckToken] = useState(true);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const token = window.location.href.split("reset/")[1];

  useEffect(() => {
    const expired = isExpired(token);
    if (expired) {
      setTokenExpired(true);
      setCheckToken(false);
      return;
    }
    axios
      .post("https://oganishop247.herokuapp.com/checkresettoken", {
        token: token,
      })
      .then((res) => {
        if (res.data) {
          setCheckToken(false);
          setActive(true);
        } else {
          setTokenExpired(true);
          setCheckToken(false);
          return;
        }
      });
  }, [token]);

  const reset = (e) => {
    e.preventDefault();
    if (e.target[0].value !== e.target[1].value) {
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
    if (e.target[0].value.length < 6) {
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
    setLoading(true);
    axios
      .post("https://oganishop247.herokuapp.com/confirmreset", {
        token,
        pass: e.target[1].value,
      })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        setActive(false);
      });
  };
  return (
    <div className="login-signup-main">
      <ToastContainer />
      {checkToken && <Spinner animation="border" variant="success" />}
      {tokenExpired && (
        <h2 className="login-h2 rounded-pill px-3">Invalid link</h2>
      )}
      {success && (
        <h2 className="login-h2 rounded-pill px-3">Success Please Login</h2>
      )}
      {active && (
        <div className="login-main shadow">
          <h2 className="login-h2">
            {loading ? (
              <Spinner animation="border" variant="success" />
            ) : (
              "Reset Password"
            )}
          </h2>
          <div className="p-3">
            <form onSubmit={reset}>
              <div className="input-div">
                <i className="fas fa-lock"></i>
                <input
                  disabled={success}
                  required
                  placeholder="Enter New Password"
                  type="password"
                />
              </div>
              <div className="input-div">
                <i className="fas fa-lock"></i>
                <input
                  disabled={success}
                  required
                  placeholder="Re-enter your Password"
                  type="password"
                />
              </div>
              <button
                disabled={success}
                type="submit"
                className="login-signup-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reset;
