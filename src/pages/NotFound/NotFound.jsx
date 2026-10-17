import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <h1>404</h1>
      {/* <Link to="/"> */}
      <button onClick={() => navigate(-1)}>back</button>
      {/* </Link> */}
    </div>
  );
}
