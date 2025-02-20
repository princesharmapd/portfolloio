import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import Topbar from "./components/TopBar";
import NotFound from "./Pages/NotFound";
import ServerDown from "./Pages/ServerDown";
import Unauthorized from "./Pages/Unauthorized";

const App = () => {
  return (
    <Router basename="/portfolloio">
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Topbar />
        <Routes>
          <Route path="//" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/server-down" element={<ServerDown />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
