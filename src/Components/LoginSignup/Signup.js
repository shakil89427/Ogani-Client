import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";
import "./LoginSignup.css";

const Signup = () => {
  const [data, setData] = useState(null);
  const { signup, loading, setLoading } = useAuth();

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
      return alert("password didnt matched");
    }
    if (data.password.length < 6) {
      return alert("password must be 6 character");
    }
    setLoading(true);
    signup(data);
  };
  return (
    <div className="login-signup-main">
      <div className="signup-main shadow">
        <h2 className="login-h2">Signup</h2>
        <div className="p-3">
          <form onSubmit={signupuser}>
            <input
              onChange={getData}
              name="firstname"
              required
              placeholder="First Name"
              type="text"
            />
            <input
              onChange={getData}
              name="lastname"
              required
              placeholder="Last Name"
              type="text"
            />
            <input
              onChange={getData}
              name="email"
              required
              placeholder="Email"
              type="email"
            />
            <input
              onChange={getData}
              name="password"
              required
              placeholder="Password"
              type="password"
            />
            <input
              onChange={getData}
              name="password2"
              required
              className="w-100"
              placeholder="Password Again"
              type="password"
            />
            <button type="submit" className="login-signup-btn">
              Signup
            </button>
          </form>

          <p className="mt-5 text-center text-white">
            Already Registered?
            <Link to={!loading ? "/login" : "#"}>
              <button className="new">Login</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
