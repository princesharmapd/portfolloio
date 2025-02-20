import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TablePagination,
  Card,
  CardContent
} from '@mui/material';

const ForcastingFirstTable = () => {
  const [forecastData, setForecastData] = useState([
    { queue: 1, defaultForecast: 100, newForecast: 89, change: '-5%', reason: 'New Product Launch', factor: 'New Product Launch', impactedQueues: '1,2,5,7', quantifiableImpact: 89 },
    { queue: 2, defaultForecast: 200, newForecast: 214, change: '+8%', reason: 'New Product Launch', factor: 'Software Update', impactedQueues: '10,12,6', quantifiableImpact: 214 },
    { queue: 3, defaultForecast: 300, newForecast: 330, change: '*5%', reason: 'Support Service Launch', factor: 'Contract Renewals', impactedQueues: '4,3', quantifiableImpact: 330 },
    { queue: 4, defaultForecast: 230, newForecast: 220, change: '-2%', reason: 'Regional Festival', factor: 'Service Outage', impactedQueues: '9,13', quantifiableImpact: 220 },
    { queue: 5, defaultForecast: 400, newForecast: 430, change: '+9%', reason: 'Algorithm Update', factor: 'Policy Changes', impactedQueues: '8,14', quantifiableImpact: 430 }
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState(null);
  const [selectedQueue, setSelectedQueue] = useState(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleViewDetails = (data) => {
    setDialogData(data);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDropdownChange = (event) => {
    setSelectedQueue(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0); 
  };

  const getPaginatedData = (data) => {
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="-15px" marginBottom="10px" >
                <h3 style={{ fontSize: "18px" }}>Weekly Forecast Comparison</h3>
                <Box display="flex" alignItems="center">
                  <FormControl >
                    <InputLabel>Queue</InputLabel>
                    <Select
                      value={selectedQueue}
                      onChange={handleDropdownChange}
                      sx={{
                        height: '30px', 
                        width: '130px', 
                        padding: '0px 10px', 
                      }}
                    >
                      {forecastData.map((row) => (
                        <MenuItem key={row.queue} value={row.queue}>Queue {row.queue}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button onClick={() => handleViewDetails(forecastData.find((row) => row.queue === selectedQueue))} style={{ fontSize: "12px" }}>
                    View Details
                  </Button>
                </Box>
              </Box>
              <TableContainer component={Paper} sx={{ margin: 0, padding: 0 }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ height: "20px" }}>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Queue</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Default Forecast</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>New Forecast</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Change from Last Week</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Reason</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Review</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getPaginatedData(forecastData).map((row) => (
                      <TableRow key={row.queue} sx={{ height: "45px" }}>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>{row.queue}</TableCell>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>{row.defaultForecast}</TableCell>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>{row.newForecast}</TableCell>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>{row.change}</TableCell>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>{row.reason}</TableCell>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>
                          <span
                            onClick={() => handleViewDetails(row)}
                            style={{ fontSize: "11px", color: "#007AD9", cursor: "pointer", textDecoration: "underline" }}
                          >
                            Share
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={forecastData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="-15px" marginBottom="10px" >
                <h3 style={{ fontSize: "18px" }}>Impacting Factors</h3>
                <Box display="flex" alignItems="center">
                  <FormControl >
                    <InputLabel>Queue</InputLabel>
                    <Select
                      value={selectedQueue}
                      onChange={handleDropdownChange}
                      sx={{
                        height: '30px',
                        width: '130px',
                        padding: '0px 10px',
                      }}
                    >
                      {forecastData.map((row) => (
                        <MenuItem key={row.queue} value={row.queue}>Queue {row.queue}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button onClick={() => handleViewDetails(forecastData.find((row) => row.queue === selectedQueue))} style={{ fontSize: "12px" }}>
                    View Details
                  </Button>
                </Box>
              </Box>
              <TableContainer component={Paper} sx={{ margin: 0, padding: 0 }}>
                <Table sx={{ borderCollapse: "collapse" }}>
                  <TableHead>
                    <TableRow sx={{ height: "20px" }}>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Factor</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Queues Impacted</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Quantifiable Impact</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Queue-level Details</TableCell>
                      <TableCell sx={{ backgroundColor: '#007AD9', color: 'white', fontSize: "11px", padding: "2px 4px" }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getPaginatedData(forecastData).map((row) => (
                      <TableRow key={row.queue} sx={{ height: "45px" }}>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>{row.factor}</TableCell>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>{row.impactedQueues}</TableCell>
                        <TableCell sx={{ fontSize: "11px", padding: "2px 4px" }}>{row.quantifiableImpact}</TableCell>
                        <TableCell sx={{ padding: "2px 4px" }}>
                          <span
                            onClick={() => handleViewDetails(row)}
                            style={{ fontSize: "11px", color: "#007AD9", cursor: "pointer", textDecoration: "underline" }}
                          >
                            Check details
                          </span>
                        </TableCell>
                        <TableCell sx={{ padding: "2px 4px" }}>
                          <span style={{ fontSize: "11px", color: "#007AD9", cursor: "pointer", textDecoration: "underline" }}>
                            Approval
                          </span>
                          {" | "}
                          <span style={{ fontSize: "11px", color: "#007AD9", cursor: "pointer", textDecoration: "underline" }}>
                            Feedback
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={forecastData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{dialogData?.reason || 'Details'}</DialogTitle>
        <DialogContent>
          {dialogData && (
            <div>
              <p><strong>Factor:</strong> {dialogData.factor}</p>
              <p><strong>Impacted Queues:</strong> {dialogData.impactedQueues}</p>
              <p><strong>Quantifiable Impact:</strong> {dialogData.quantifiableImpact}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ForcastingFirstTable;
