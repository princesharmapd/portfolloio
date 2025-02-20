import React, { useState } from 'react';
import {
  Grid, Card as MuiCard, CardContent, Typography,
  Dialog, DialogTitle, DialogContent, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Button, Paper
} from '@mui/material';
import './ForecastingCards.css';

const Card = ({ title, data, onClick }) => {
  return (
    <MuiCard className="card" variant="outlined">
      <CardContent>
        <Typography className="card-title" variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <div className="card-body">
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <div key={index} className="data-item">
                <Typography variant="body2" style={{ fontSize: '0.7rem' }}>
                  <strong>{item.name}:</strong> {item.percentage}% - {item.count} queues
                </Typography>
              </div>
            ))
          ) : (
            Object.keys(data).map((key) => (
              <div key={key} className="data-item">
                <Typography
                  variant="body2"
                  style={{
                    fontSize: '0.7rem',
                    cursor: key.includes("Forecasted Queues") || key.includes("Peak Volume/Day") ? 'pointer' : 'default',
                    color: key.includes("Forecasted Queues") || key.includes("Peak Volume/Day") ? 'blue' : 'inherit'
                  }}
                  onClick={key.includes("Forecasted Queues") || key.includes("Peak Volume/Day") ? () => onClick(key) : null}
                >
                  <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {data[key]}
                </Typography>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </MuiCard>
  );
};

const ForecastingCards = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);

  const data = {
    forecastData: {
      totalQueuesCallsForecasted: {
        Queues: 530,
        Calls: '480K'
      },
      peakCallVolume: {
        'Avg Volume / Day / Queue': 110,
        'Peak Volume/Day (8 Queue)': '140 Calls',
        'Peak Days': '9/17/2024 | 9/19/2024'
      },
      queueLevelVariance: {
        'Over Forecasted Queues': 123,
        'Under Forecasted Queues': 97
      },
      topDrivers: [
        { name: 'New Pdt Launch', percentage: 3, count: 60 },
        { name: 'Software update', percentage: 1.7, count: 23 },
        { name: 'Contract Renewals', percentage: 2.1, count: 10 }
      ]
    },
    queueVarianceDetails: {
      'Over Forecasted Queues': [
        { queue: 1, type: 'Over forecasted', previous: 800, latest: 875, impact: '9%', week: '9/17/2024', driver: 'New Product Launch' },
        { queue: 2, type: 'Over forecasted', previous: 795, latest: 890, impact: '12%', week: '9/17/2024', driver: 'Software Update' },
        { queue: 3, type: 'Over forecasted', previous: 650, latest: 750, impact: '15%', week: '9/17/2024', driver: 'Software Update' },
        { queue: 4, type: 'Over forecasted', previous: 725, latest: 790, impact: '9%', week: '9/17/2024', driver: 'Contract Renewals' }
      ],
      'Under Forecasted Queues': [
        { queue: 1, type: 'Under forecasted', previous: 850, latest: 940, impact: '11%', week: '9/19/2024', driver: 'New Product Launch' },
        { queue: 2, type: 'Under forecasted', previous: 770, latest: 650, impact: '-16%', week: '9/19/2024', driver: 'New Product Launch' },
        { queue: 3, type: 'Under forecasted', previous: 810, latest: 690, impact: '-15%', week: '9/19/2024', driver: 'Service Launch' },
        { queue: 4, type: 'Under forecasted', previous: 730, latest: 590, impact: '-19%', week: '9/19/2024', driver: 'Social Media Trend' }
      ],
      'Peak Volume/Day (8 Queue)': [
        { queue: 1, calls: 125, increasedBy: '2%', week: '9/17/2024', driver: 'New Product Launch' },
        { queue: 2, calls: 1155, increasedBy: '1.50%', week: '9/17/2024', driver: 'Software Update' },
        { queue: 3, calls: 890, increasedBy: '3%', week: '9/18/2024', driver: 'Marketing Campaign' },
        { queue: 4, calls: 620, increasedBy: '1.20%', week: '9/19/2024', driver: 'Customer Feedback' },
        { queue: 5, calls: 780, increasedBy: '2.80%', week: '9/20/2024', driver: 'Seasonal Demand' }
      ]
    }
  };

  const handleCardClick = (key) => {
    let title = key;

    if (key === 'Peak Volume/Day (8 Queue)') {
      title = 'Peak Volume';
      setTableHeaders(['Queue', '# of Calls', 'Increased By', 'Week', 'Driver']);
      setTableData(data.queueVarianceDetails[key]);
    } else if (key === 'Over Forecasted Queues') {
      title = 'Queue Level Volume Variance';
      setTableHeaders(['Queue', 'Type', 'Previous', 'Latest', 'Impact', 'Week', 'Driver']);
      setTableData(data.queueVarianceDetails[key]);
    } else if (key === 'Under Forecasted Queues') {
      title = 'Queue Level Volume Variance';
      setTableHeaders(['Queue', 'Type', 'Previous', 'Latest', 'Impact', 'Week', 'Driver']);
      setTableData(data.queueVarianceDetails[key]);
    }

    setDialogTitle(title);
    setOpenDialog(true);
  };

  // Map headers to data keys
  const headerToKeyMap = {
    'Queue': 'queue',
    '# of Calls': 'calls',
    'Increased By': 'increasedBy',
    'Week': 'week',
    'Driver': 'driver',
    'Type': 'type',
    'Previous': 'previous',
    'Latest': 'latest',
    'Impact': 'impact'
  };
  const titleMap = {
    totalQueuesCallsForecasted: 'Total Queues / Calls Forecasted',
    peakCallVolume: 'Peak Call Volume',
    queueLevelVariance: 'Queue Level Volume Variance',
    topDrivers: 'Top Drivers'
  };
  return (
    <>
      <Grid container spacing={2} justifyContent="flex-start">
        {Object.keys(data.forecastData).map((key, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              title={
                <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                  {titleMap[key] || key}
                </span>
              }
              data={data.forecastData[key]}
              onClick={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="md">
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow style={{ backgroundColor: '#007bff', color: 'white' }}>
                  {tableHeaders.map((header, index) => (
                    <TableCell key={index} style={{ color: 'white', fontWeight: 'bold', fontSize: '0.75rem' }}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    {tableHeaders.map((header, idx) => (
                      <TableCell key={idx} style={{ fontSize: '0.7rem', padding: '4px' }}>
                        {row[headerToKeyMap[header]]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container spacing={2} justifyContent="flex-end" style={{ marginTop: 10 }}>
            <Button variant="contained" style={{ backgroundColor: 'gray', color: 'white' }}>
              Download CSV
            </Button>
            <Button variant="contained" color="primary" style={{ marginLeft: 10 }}>
              More Details
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ForecastingCards;