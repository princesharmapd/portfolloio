import React from 'react';
import { Grid } from '@mui/material';
import './CapacityPlanningCards.css';

const data = {
  metrics: [
    {
      title: 'Current Headcount Availability',
      value: 4330,
      delta: '+4%',
      positive: true,
    },
    {
      title: 'Gaps to be addressed',
      value: 450,
      delta: '+15',
      positive: true,
    },
    {
      title: 'Current Utilization',
      value: '92%',
      delta: '+2%',
      positive: true,
    },
  ],
  sla: {
    title: 'Service Level Agreement (SLA)',
    levels: ['Basic', 'Pro Support', 'Pro Support Plus', 'Pro Support One'],
    times: ['2 min', '1 min', '30 Sec', '30 Sec'],
  },
};

const CapacityPlanningCards = () => {
  return (
    <Grid container spacing={2}>
      {data.metrics.map((metric, index) => (
        <Grid key={index} item xs={12} sm={4} md={2.5}>
          <div className="metric-card">
            <h3 className="card-title no-border">{metric.title}</h3>
            <div className="card-content">
              <div className="value-container">
                <div className="main-value">{metric.value}</div>
                <div className={`delta-value ${metric.positive ? 'positive' : 'negative'}`}>
                  <span className="arrow">{metric.positive ? '↑' : '↓'}</span> {metric.delta}
                </div>
              </div>
            </div>
          </div>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={4.5}>
        <div className="sla-card">
          <h3 className="sla-title">{data.sla.title}</h3>
          <div className="sla-table">
            <div className="sla-row sla-header">
              {data.sla.levels.map((level, index) => (
                <div key={index} className="sla-cell">{level}</div>
              ))}
            </div>
            <div className="sla-row">
              {data.sla.times.map((time, index) => (
                <div key={index} className="sla-cell bold">{time}</div>
              ))}
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default CapacityPlanningCards;
