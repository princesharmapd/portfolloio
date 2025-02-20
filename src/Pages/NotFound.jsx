import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", color: "#d9534f" }}>🚧 Page Under Development 🚧</h1>
      <p style={{ fontSize: "16px", color: "#555" }}>
        The page you are looking for is currently under development.
      </p>
      <p style={{ fontSize: "16px", color: "#555" }}>Please check back later or return to the home page.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007ad9",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#005fa3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007ad9")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
