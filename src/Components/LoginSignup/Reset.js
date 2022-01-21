import axios from "axios";
import React, { useEffect, useState } from "react";
import { isExpired } from "react-jwt";

const Reset = () => {
  const [loading, setLoading] = useState(true);
  const [tokenExpired, setTokenExpired] = useState(false);
  const [active, setActive] = useState(false);
  const token = window.location.href.split("reset/")[1];

  useEffect(() => {
    const expired = isExpired(token);
    if (expired) {
      setTokenExpired(true);
      setLoading(false);
      return;
    }
    axios
      .post("http://localhost:3000/checkresettoken", { token: token })
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setActive(true);
        }
      });
  }, [token]);
  return (
    <div>
      <h1>Reset</h1>
    </div>
  );
};

export default Reset;
