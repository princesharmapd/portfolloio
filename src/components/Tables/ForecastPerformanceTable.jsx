import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import axios from 'axios';

const endpoints = [
  { name: 'Market Status', url: '/api/marketStatus' },
  { name: '52 Week HL Summary', url: '/api/live-analysis-52Week-hlsummary' },
  { name: '52 Week Low', url: '/api/live-analysis-52Week?index=low' },
  { name: 'Online 52 Week High', url: '/api/online52NewHigh' },
  { name: 'Most Active Monthly', url: '/api/mostActiveMonthly' },
  { name: 'Price Band Hitters', url: '/api/live-analysis-price-band-hitter' },
  { name: 'Market Snapshot', url: '/api/snapshot-capital-market-ews' },
  { name: 'Circulars', url: '/api/circulars' },
  { name: 'Latest Circulars', url: '/api/latest-circular' },
];

const MultiApiTables = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const results = {};
      for (let endpoint of endpoints) {
        try {
          const response = await axios.get(endpoint.url);
          results[endpoint.name] = response.data;
        } catch (error) {
          results[endpoint.name] = { error: 'Failed to fetch data' };
        }
      }
      setData(results);
    };
    fetchData();
  }, []);

  return (
    <Box style={{ width: '98%', fontSize: '12px' }}>
      {endpoints.map((endpoint) => (
        <Paper key={endpoint.name} style={{ width: '100%', overflow: 'auto', padding: 12, marginBottom: 20 }}>
          <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '8px' }}>
            {endpoint.name}
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {data[endpoint.name] && data[endpoint.name][0] &&
                    Object.keys(data[endpoint.name][0]).map((key) => (
                      <TableCell key={key} style={{ fontWeight: 'bold', fontSize: '12px' }}>{key}</TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data[endpoint.name] && Array.isArray(data[endpoint.name]) ? (
                  data[endpoint.name].map((row, index) => (
                    <TableRow key={index}>
                      {Object.values(row).map((value, i) => (
                        <TableCell key={i} style={{ fontSize: '12px' }}>{JSON.stringify(value)}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={10} style={{ fontSize: '12px', color: 'red' }}>
                      {data[endpoint.name]?.error || 'No data available'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ))}
    </Box>
  );
};

export default MultiApiTables;