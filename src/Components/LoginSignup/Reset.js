import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { isExpired } from "react-jwt";

const Reset = () => {
  const [loading, setLoading] = useState(true);
  const [tokenExpired, setTokenExpired] = useState(false);
  const [active, setActive] = useState(false);
  const [success, setSuccess] = useState(false);
  const token = window.location.href.split("reset/")[1];

  useEffect(() => {
    const expired = isExpired(token);
    if (expired) {
      setTokenExpired(true);
      setLoading(false);
      return;
    }
    axios
      .post("http://localhost:5000/checkresettoken", { token: token })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setActive(true);
        }
      });
  }, [token]);

  const reset = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:5000/confirmreset", {
        token,
        pass: e.target[1].value,
      })
      .then((res) => {
        setLoading(false);
        setActive(false);
        setSuccess(true);
      });
  };
  return (
    <div className="login-signup-main">
      {tokenExpired && <h5>Sorry link Expired</h5>}
      {success && <h5>Success please login</h5>}
      {loading && <Spinner animation="border" variant="success" />}
      {active && (
        <div className="login-main shadow">
          <div className="p-3">
            <form onSubmit={reset}>
              <div className="input-div">
                <i className="fas fa-lock"></i>
                <input
                  required
                  placeholder="Enter New Password"
                  type="password"
                />
              </div>
              <div className="input-div">
                <i className="fas fa-lock"></i>
                <input
                  required
                  placeholder="Re-enter your Password"
                  type="password"
                />
              </div>
              <button type="submit" className="login-signup-btn">
                Reset
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reset;
