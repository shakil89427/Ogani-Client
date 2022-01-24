import axios from "axios";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetInit = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const reset = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        `https://oganishop247.herokuapp.com/resetpassword/${e.target[0].value}`
      )
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setSuccess(true);
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
    <div className="login-signup-main">
      <ToastContainer />
      {success ? (
        <h2 className="login-h2 rounded-pill px-3">Check Inbox/Spam</h2>
      ) : (
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
                <i className="fas fa-user"></i>
                <input
                  disabled={success}
                  required
                  placeholder="Enter your Email"
                  type="email"
                />
              </div>
              <button
                disabled={success}
                type="submit"
                className="login-signup-btn"
              >
                Reset
              </button>
            </form>
            <p className="text-center mt-3 mb-1">
              <Link className="backtohome" to="/">
                Back To Home
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetInit;
