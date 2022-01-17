import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [disable, setDisable] = useState(false);
  const login = (e) => {
    e.preventDefault();
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const reset = () => {
    if (!email) {
      return alert("email not found");
    }
    setDisable(true);
  };
  return (
    <div className="login-signup-main">
      <div className="login-main shadow">
        <h2 className="login-h2">Login</h2>
        <div className="p-3">
          <form onSubmit={login}>
            <div className="input-div">
              <i class="fas fa-user"></i>
              <input
                disabled={disable}
                onChange={getEmail}
                required
                placeholder="Enter your Email"
                type="email"
              />
            </div>
            <div className="input-div">
              <i class="fas fa-lock"></i>
              <input
                disabled={disable}
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
              disabled={disable}
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
            <button>
              <i class="me-2 fab fa-google"></i>Login With Google
            </button>
            <p className="mt-5 text-white">
              New Member?
              <Link className="newmember" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
