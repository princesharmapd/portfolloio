import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box, CircularProgress, Typography, Paper, Grid } from "@mui/material";

const ChartsIndices = () => {
  const [indices, setIndices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/nse/api/allIndices", {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
            Referer: "https://www.nseindia.com/",
            Accept: "application/json, text/plain, */*",
          },
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setIndices(data.data.slice(0, 10)); // Always show top 10
      } catch (error) {
        console.error("Error fetching indices data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndices();
  }, []);

  // Extracting data for charts
  const indexNames = indices.map((item) => item.index);
  const lastPrices = indices.map((item) => item.last);
  const percentChanges = indices.map((item) => item.percentChange);
  const advances = indices.reduce((acc, item) => acc + parseInt(item.advances || 0), 0);
  const declines = indices.reduce((acc, item) => acc + parseInt(item.declines || 0), 0);

  return (
    <Box sx={{ width: "100%", padding: 1 }}>
      {/* Heading */}
      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "10px", marginBottom: 1, textAlign: "center" }}>
        NSE Indices Charts (Top 10)
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <CircularProgress size={24} />
        </Box>
      ) : (
        <Grid container spacing={1}>
          {/* Pie Chart: Advances vs Declines */}
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: 1, height: "100%" }}>
              <Typography variant="subtitle2" align="center" sx={{ fontSize: "9px", fontWeight: "bold" }}>
                Advances vs Declines
              </Typography>
              <ApexCharts
                options={{
                  chart: { type: "pie" },
                  labels: ["Advances", "Declines"],
                  colors: ["#28a745", "#dc3545"],
                  legend: { fontSize: "8px" },
                  tooltip: { style: { fontSize: "12px" } }, // Keeping tooltip font size readable
                }}
                series={[advances, declines]}
                type="pie"
                height={300}
              />
            </Paper>
          </Grid>

          {/* Donut Chart: Last Prices */}
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ padding: 1, height: "100%" }}>
              <Typography variant="subtitle2" align="center" sx={{ fontSize: "9px", fontWeight: "bold" }}>
                Indices Last Prices
              </Typography>
              <ApexCharts
                options={{
                  chart: { type: "donut" },
                  labels: indexNames,
                  legend: { fontSize: "8px" },
                  tooltip: { style: { fontSize: "12px" } }, // Keeping tooltip font size readable
                }}
                series={lastPrices}
                type="donut"
                height={300}
              />
            </Paper>
          </Grid>

          {/* Column Chart: % Change */}
          <Grid item xs={12} lg={4}>
            <Paper sx={{ padding: 1, height: "100%" }}>
              <Typography variant="subtitle2" align="center" sx={{ fontSize: "9px", fontWeight: "bold" }}>
                % Change in Indices
              </Typography>
              <ApexCharts
                options={{
                  chart: { type: "bar" },
                  xaxis: {
                    categories: indexNames,
                    labels: { style: { fontSize: "8px" } },
                  },
                  yaxis: { labels: { style: { fontSize: "8px" } } },
                  colors: percentChanges.map((value) => (value < 0 ? "#FF4560" : "#008FFB")),
                  legend: { fontSize: "8px" },
                  tooltip: { style: { fontSize: "12px" } }, // Keeping tooltip font size readable
                }}
                series={[{ name: "% Change", data: percentChanges }]}
                type="bar"
                height={300}
              />
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ChartsIndices;
