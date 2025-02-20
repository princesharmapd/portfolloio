import React from "react";

const ServerDown = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", color: "#d9534f" }}>⚠ Server Down ⚠</h1>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Oops! It looks like our servers are currently unavailable.
      </p>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Please try again later or contact support.
      </p>
    </div>
  );
};

export default ServerDown;
