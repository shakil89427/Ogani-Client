import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";

const Signup = () => {
  const signup = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-signup-main">
      <div className="signup-main shadow">
        <h2 className="login-h2">Signup</h2>
        <div className="p-3">
          <form onSubmit={signup}>
            <input required placeholder="First Name" type="text" />
            <input required placeholder="Last Name" type="text" />
            <input required placeholder="Email" type="email" />
            <input required placeholder="Password" type="password" />
            <input
              required
              className="w-100"
              placeholder="Password Again"
              type="password"
            />
            <button type="submit" className="login-signup-btn">
              Signup
            </button>
          </form>

          <div className="my-2 text-center alternate-sign">
            <p className="mt-5 text-white">
              One of Us?
              <Link className="newmember" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
