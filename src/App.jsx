import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AuthProvider from "./context/AuthContext";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import Topbar from "./components/TopBar";
import NotFound from "./Pages/NotFound";
import ServerDown from "./Pages/ServerDown";
import Unauthorized from "./Pages/Unauthorized";
import MarketOverview from "./Pages/MarketOverview";
// import Callback from "./Pages/Callback";

const App = () => {
  return (
    // <AuthProvider>
      <Router>
        <div style={{ display: "flex", flexDirection: "column"}}>
          <Topbar />
          <Routes>
            <Route path="portfolloio//" element={<LandingPage />} />
            {/* <Route path="/auth/callback" element={<Callback />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/executive" element={<MarketOverview />} />

            <Route path="/server-down" element={<ServerDown />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    // </AuthProvider>
  );
};

export default App;
