import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";
import "./TopCard.css";

const Card = ({ index, value, change, percentChange, loading }) => {
  const isNegative = change < 0;
  const arrowIcon = isNegative ? "▼" : "▲";
  const changeColor = isNegative ? "red" : "green";

  return (
    <div className="card">
      {loading ? (
        <div className="card-loading">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="card-title">{index}</div>
          <div className="card-value">{value.toFixed(2)}</div>
          <div className="card-change" style={{ color: changeColor }}>
            {arrowIcon} {change.toFixed(2)} ({percentChange.toFixed(2)}%)
          </div>
        </>
      )}
    </div>
  );
};

const TopCard = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiEndpoints = [
    { name: "NIFTY 50", path: "/api/card1" },
    { name: "NIFTY NEXT 50", path: "/api/card2" },
    { name: "NIFTY MIDCAP SELECT", path: "/api/card3" },
    { name: "NIFTY BANK", path: "/api/card4" },
    { name: "NIFTY FINANCIAL SERVICES", path: "/api/card5" },
  ];

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const responses = await Promise.all(
          apiEndpoints.map((endpoint) =>
            fetch(`http://localhost:5000${endpoint.path}`).then((res) => res.json())
          )
        );

        const formattedData = responses.map((data, index) => ({
          index: apiEndpoints[index].name,
          value: data.closePrice || 0,
          change: data.change || 0,
          percentChange: data.percentChange || 0,
        }));

        setMarketData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <Grid container spacing={2} className="top-card-container">
      {error && <div className="error">Error: {error}</div>}
      {marketData.length === 0 || loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Card loading={true} />
            </Grid>
          ))
        : marketData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Card {...item} loading={false} />
            </Grid>
          ))}
    </Grid>
  );
};

export default TopCard;
