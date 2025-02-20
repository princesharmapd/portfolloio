import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
// import dayjs from 'dayjs';
import Cards from '../components/cards/capacityplanning/CapacityPlanningCards';
import ForecastWizard from '../components/ForcastingTabcomponents/ForecastWizard';
import QueueLevelRecommendation from '../components/Tables/tab2Table/QueueLevelRecommendation';

const CapacityPlanning = () => {
  return (
    <Box sx={{ marginTop: "70px", paddingX: { xs: 0, sm: 0, md: 0 } }}>
      {/* <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#E3F2FD',
              padding: { xs: 2, sm: 0 },
              borderRadius: 1,
              minHeight: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

            }}
          >
            <Typography variant="h6" fontWeight="bold" fontSize="0.875rem" paddingLeft="10px">
              My Weekly Capacity Planning: Sep 16 - Sep 22, 2024
            </Typography>
            <Typography variant="body2" color="textSecondary" fontSize="0.75rem" paddingLeft="10px">
              As of Sept 01, 2024
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ForecastWizard />
        </Grid>
        <Grid item xs={12}>
          <QueueLevelRecommendation />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default CapacityPlanning;
