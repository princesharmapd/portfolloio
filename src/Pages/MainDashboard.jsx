import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import dayjs from 'dayjs';
import TopCard from '../components/cards/TopCard';
import NiftyFinServiceChart from '../charts/NiftyFinServiceChart';
import CorporateActionsTable from '../tables/CorporateActionsTable';
import BoardMeetingsTable from '../tables/BoardMeetingsTable';
import CorporateAnnouncementsTable from '../tables/CorporateAnnouncementsTable';
import MarketIndicesTable from '../tables/MarketIndicesTable';

const MainDashboard = () => {
  return (
    <Box sx={{ marginTop: "70px", paddingX: { xs: 0, sm: 0, md: 0 } }}>
      <Grid container spacing={2} direction="column">
        {/* Light Blue Header Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "#0D47A1",
              padding: { xs: 3, sm: 4 },
              borderRadius: 2,
              boxShadow: 3,
              color: "#fff",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Executive Dashboard
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {dayjs().format("dddd, MMMM D, YYYY")}
            </Typography>
            <Typography variant="body1" mt={2} sx={{ fontSize: "0.95rem", opacity: 0.9 }}>
              Gain insights into key performance metrics and strategic forecasts to drive business success.
            </Typography>
          </Box>
        </Grid>

        {/* Centered Cards Component */}
        <Grid item xs={12} sm={6} md={4}>
          <TopCard />
        </Grid>

        {/* Forecast Wizard Section */}
        <Grid item xs={12} sm={6} md={4}>
          <NiftyFinServiceChart />
        </Grid>

        {/* Corporate Actions & Board Meetings (Side by Side) */}
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <CorporateActionsTable />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <MarketIndicesTable /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <BoardMeetingsTable />
            </Grid>
            <Grid item xs={12} md={6}>
              <CorporateAnnouncementsTable />
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default MainDashboard;
