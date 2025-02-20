import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import Chart from "react-apexcharts";

const MarketOverview = () => {
  const [indices, setIndices] = useState([]);
  const [marketStatus, setMarketStatus] = useState(null);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [weekHighLow, setWeekHighLow] = useState([]);
  const [advancesDeclines, setAdvancesDeclines] = useState(null);
  const [sectorPerformance, setSectorPerformance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMarketOverview();
  }, []);

  const fetchMarketOverview = async () => {
    try {
      const [
        indicesRes,
        statusRes,
        gainersRes,
        losersRes,
        weekHighLowRes,
        advancesDeclinesRes,
        sectorRes,
      ] = await Promise.all([
        axios.get("/api/nse/api/allIndices"),
        axios.get("/api/nse/api/marketStatus"),
        axios.get("/api/nse/api/equity-stockIndices?index=NIFTY%2050"),
        axios.get("/api/nse/api/equity-stockIndices?index=NIFTY%2050"),
        axios.get("/api/nse/api/52WeekHighLow"),
        axios.get("/api/nse/api/marketTurnover"),
        axios.get("/api/nse/api/sectorPerformance"),
      ]);

      setIndices(indicesRes.data.data);
      setMarketStatus(statusRes.data);
      setGainers(gainersRes.data.data.slice(0, 5));
      setLosers(losersRes.data.data.slice(-5));
      setWeekHighLow(weekHighLowRes.data.data.slice(0, 5));
      setAdvancesDeclines(advancesDeclinesRes.data);
      setSectorPerformance(sectorRes.data);
    } catch (error) {
      console.error("Error fetching market data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Chart Configurations
  const indicesChartOptions = {
    chart: { type: "donut" },
    labels: indices.map((index) => index.indexName),
  };

  const indicesChartSeries = indices.map((index) => index.last);

  const sectorChartOptions = {
    chart: { type: "bar" },
    xaxis: { categories: sectorPerformance.map((sector) => sector.name) },
  };

  const sectorChartSeries = [
    {
      name: "Sector Performance (%)",
      data: sectorPerformance.map((sector) => sector.changePercent),
    },
  ];

  return (
    <Container sx={{ paddingBottom: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Market Overview
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {/* Market Status */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Market Status</Typography>
                <Typography color={marketStatus?.marketState === "Open" ? "green" : "red"}>
                  {marketStatus?.marketState}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Indices Performance */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Indices Performance</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell>Last Price</TableCell>
                        <TableCell>Change</TableCell>
                        <TableCell>% Change</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {indices.map((index, i) => (
                        <TableRow key={i}>
                          <TableCell>{index.indexName}</TableCell>
                          <TableCell>{index.last}</TableCell>
                          <TableCell style={{ color: index.change > 0 ? "green" : "red" }}>
                            {index.change}
                          </TableCell>
                          <TableCell style={{ color: index.pChange > 0 ? "green" : "red" }}>
                            {index.pChange}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Top Gainers & Losers */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Top Gainers</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Last Price</TableCell>
                        <TableCell>% Change</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {gainers.map((stock, i) => (
                        <TableRow key={i}>
                          <TableCell>{stock.symbol}</TableCell>
                          <TableCell>{stock.lastPrice}</TableCell>
                          <TableCell style={{ color: "green" }}>{stock.pChange}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Top Losers</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Last Price</TableCell>
                        <TableCell>% Change</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {losers.map((stock, i) => (
                        <TableRow key={i}>
                          <TableCell>{stock.symbol}</TableCell>
                          <TableCell>{stock.lastPrice}</TableCell>
                          <TableCell style={{ color: "red" }}>{stock.pChange}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Indices Pie Chart */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Indices Distribution</Typography>
                <Chart options={indicesChartOptions} series={indicesChartSeries} type="donut" width="100%" />
              </CardContent>
            </Card>
          </Grid>

          {/* Sector Performance Chart */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Sector Performance</Typography>
                <Chart options={sectorChartOptions} series={sectorChartSeries} type="bar" height={300} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default MarketOverview;
