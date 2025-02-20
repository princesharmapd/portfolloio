import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import IndicesTable from '../components/Tables/IndicesTable';
import Chartsindices from "../components/charts/Chartsindices";

const IndicesPerformance = () => {
  return (
    <Box sx={{ marginTop: "30px", paddingX: { xs: 2, sm: 4, md: 6 } }}>
      <Grid container spacing={2} direction="column">
        {/* Header */}
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "#E3F2FD",
              padding: 2,
              borderRadius: 1,
              minHeight: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" fontSize="1rem">
              NSE Indices Performance
            </Typography>
            <Typography variant="body2" color="textSecondary" fontSize="0.75rem">
              Live market updates
            </Typography>
          </Box>
        </Grid>
<Chartsindices />
        {/* Display Indices Data */}
        <IndicesTable />
      </Grid>
    </Box>
  );
};

export default IndicesPerformance;
