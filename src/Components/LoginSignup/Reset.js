import React from "react";

const Reset = () => {
  const id = window.location.href.split("http://localhost:3000/reset/")[1];
  console.log(id);
  return (
    <div>
      <h1>Reset</h1>
    </div>
  );
};

export default Reset;
