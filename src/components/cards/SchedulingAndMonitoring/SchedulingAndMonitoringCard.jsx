import React from 'react';
import { Grid } from '@mui/material';
import './SchedulingAndMonitoringCard.css';

const SmallCard = ({ title, value, change, changeType, subText }) => {
  return (
    <div className="small-card">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
      <div className={`card-change ${changeType}`}>{change}</div>
      {subText && <div className="card-subtext">{subText}</div>}
    </div>
  );
};

const SmallCardsGrid = () => {
  const cardData = [
    { title: 'Forecast Accuracy', value: '+5%', change: '\u2191 4', changeType: 'positive' },
    { title: 'Capacity Plan Accuracy', value: '95%', change: '\u2191 4', changeType: 'positive' },
    { title: 'SLA Achievement', value: '80%', change: '\u2191 4', changeType: 'positive' },
    { title: 'CSAT 85%', value: '85%', change: '\u2191 4', changeType: 'positive' },
    { title: 'Utilization Rate', value: '77%', change: '\u2191 4', changeType: 'positive' },
    { title: 'Average Call Handling', value: '2:09 min', change: '\u2193 39 secs', changeType: 'negative' },
    { title: 'Erroneous Call Rate', value: '170', change: '14', changeType: 'neutral', subText: '0.20% of all calls' },
    { title: 'Mean Latency', value: '22 ms', change: '\u2193 08ms', changeType: 'negative', subText: '21ms for 90%' },
    { title: 'Call Abandonment Rate', value: '2%', change: '\u2191 4', changeType: 'positive' },
    { title: 'Schedule Adherence', value: '85%', change: '\u2191 4', changeType: 'positive' },
  ];

  return (
    <Grid container spacing={2} className="cards-container">
      {cardData.map((card, index) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
          <SmallCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SmallCardsGrid;