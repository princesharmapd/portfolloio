import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      if (code) {
        await authService.getToken(code);
        navigate("/"); // Redirect to landing page
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Authenticating...</div>;
};

export default Callback;
