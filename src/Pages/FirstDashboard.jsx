import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import dayjs from 'dayjs';


const FirstDashboard = () => {
  return (
    <Box sx={{ marginTop: "70px", paddingX: { xs: 0, sm: 0, md: 0 } }}>
      <Grid container spacing={2} direction="column">
        {/* Light Blue Header Section */}
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
              {dayjs().format('MMMM D, YYYY')} {/* Display Current Date */}
            </Typography>
            <Typography variant="body2" mt={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </Typography>
          </Box>
        </Grid>

        
      </Grid>
    </Box>
  );
};

export default FirstDashboard;
