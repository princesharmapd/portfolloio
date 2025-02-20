import React, { useState } from "react";
import MainDashboard from "./MainDashboard";
import FirstDashboard from "./FirstDashboard";
import Analytics from "./Analytics";
import TabBar from "../components/TabBar";

export default function Dashboard() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <TabBar value={tabValue} setValue={setTabValue} />
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div style={{ flexGrow: 1, padding: "20px" }}>
          {tabValue === 0 && <MainDashboard />}
          {tabValue === 1 && <FirstDashboard />}
          {tabValue === 2 && <Analytics />}
        </div>
      </div>
    </div>
  );
}
