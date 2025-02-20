import React, { useState } from "react";
import IndicesPerformance from "./IndicesPerformance";


export default function Dashboard() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div style={{ flexGrow: 1,paddingTop:"20px" }}>
          {tabValue === 0 && <IndicesPerformance />}
          
        </div>
      </div>
    </div>
  );
}
