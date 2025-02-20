import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        authService.redirectToSSO(); // Redirects to PCF SSO
      } else {
        const userData = await authService.getUser();
        setUser(userData);
      }
      setLoading(false);
    };

    authenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
