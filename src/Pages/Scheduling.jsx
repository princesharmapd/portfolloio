import React from 'react';
import { Box, Typography, Grid, Button, TextField, Card, CardContent } from '@mui/material';
// import dayjs from 'dayjs';
import SchedulingAndMonitoringCard from '../components/cards/SchedulingAndMonitoring/SchedulingAndMonitoringCard';
import PlanVsAvailabilityChart from '../components/charts/schedulingAndmonitoring/PlanVsAvailabilityChart';

const Scheduling = () => {
  return (
    <Box sx={{ marginTop: "70px", paddingX: { xs: 0, sm: 0, md: 0 } }}>
      {/* <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#E3F2FD',
              padding: { xs: 2, sm: 3 },
              borderRadius: 1
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Forecasting
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {dayjs().format('MMMM D, YYYY')}
            </Typography>
            <Typography variant="body2" mt={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <SchedulingAndMonitoringCard />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: "350px", paddingRight: "5px", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>
                    <Typography variant="h6" fontWeight="bold">
                      Plan VS Availability
                    </Typography>
                    <Button variant="outlined" size="small">View Detail</Button>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <PlanVsAvailabilityChart />
                  </Box>
                </CardContent>
              </Card>
            </Grid>


            <Grid item xs={12} md={6}>
              <Card sx={{ height: "350px", paddingLeft: "5px", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>
                    <Typography variant="h6" fontWeight="bold">
                      SLA Comparison <Typography variant="caption">(Last 5 weeks - Next 5 weeks)</Typography>
                    </Typography>
                    <TextField size="small" variant="outlined" placeholder="Search Entitlement" />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <PlanVsAvailabilityChart />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: "350px", paddingRight: "5px", display: "flex", flexDirection: "column" }}>

              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: "350px", paddingLeft: "5px", display: "flex", flexDirection: "column" }}>
              </Card>
            </Grid>

          </Grid>
        </Grid>

      </Grid> */}
    </Box>
  );
};

export default Scheduling;
