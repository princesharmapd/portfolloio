import React, { useState } from 'react';
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
  IconButton,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
  TextField,
  TablePagination,
  TableSortLabel
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import BusinessIcon from '@mui/icons-material/Business';

const rows = [
  { queue: 1, forecast: 100, accuracyLastWeek: '1%', trends: '+5%', rootCause: 'Service Launch', rcaStatus: 'Confirmed', recommendation: 'Connect with business leader for new services', actionOwner: 'Business Leader' },
  { queue: 2, forecast: 200, accuracyLastWeek: '-2%', trends: '+3%', rootCause: 'Unexpected Holiday', rcaStatus: 'In progress', recommendation: 'Arrange for work from home option. Change SLA', actionOwner: 'Forecast Team' },
  { queue: 3, forecast: 250, accuracyLastWeek: '-15%', trends: '+12%', rootCause: 'Algorithm Update', rcaStatus: 'Confirmed', recommendation: 'Factor considered, Data repository build in progress', actionOwner: 'Data Team' },
  { queue: 4, forecast: 150, accuracyLastWeek: '-18%', trends: '+8%', rootCause: 'CTE Unavailable', rcaStatus: 'Confirmed', recommendation: 'WFM to hire technical engineers to meet high call vol.', actionOwner: 'WFM Team' },
  { queue: 5, forecast: 450, accuracyLastWeek: '5%', trends: '+14%', rootCause: 'New Product Launch', rcaStatus: 'In progress', recommendation: 'Change SLA, Update Website and answering machine', actionOwner: 'Comms. Team' },
];

const ForecastPerformanceTable = () => {
  const [selectedQueue, setSelectedQueue] = useState('');
  const [data, setData] = useState(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('queue');

  const handleQueueChange = (event) => {
    setSelectedQueue(event.target.value);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setData([...data].sort((a, b) => (isAsc ? (a[property] > b[property] ? 1 : -1) : (a[property] < b[property] ? 1 : -1))));
  };

  return (
    <Box style={{ width: '98%', fontSize: '12px' }}>
      <Paper style={{ width: '100%', overflow: 'auto', padding: 12 }}>
        <Grid container alignItems="center">
          <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '14px', marginRight: '8px' }}>
            Forecast Performance
          </Typography>
          <Box style={{ backgroundColor: '#f0f0f0', padding: '4px 8px', borderRadius: '4px' }}>
            <Typography variant="body2" style={{ fontSize: '12px' }}>
              Average Forecast Accuracy 96%
            </Typography>
          </Box>
        </Grid>

        <Box display="flex" justifyContent="flex-end" style={{ marginTop: -30 }}>
          <FormControl style={{ minWidth: 180 }} size="small">
            <InputLabel style={{ fontSize: '12px' }}>Select Queue</InputLabel>
            <Select value={selectedQueue} onChange={handleQueueChange} label="Select Queue">
              {rows.map((row) => (
                <MenuItem key={row.queue} value={row.queue} style={{ fontSize: '12px' }}>Queue {row.queue}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="outlined" style={{ marginLeft: 12, fontSize: '12px' }}>View Details</Button>
        </Box>

        <TableContainer style={{ marginTop: 12 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow style={{ backgroundColor: '#007AD9' }}>
                {['Queue', 'Forecast', 'Accuracy last week', 'Trends', 'Root cause', 'Rca status', 'Recommendation', 'Action owner'].map((headCell) => (
                  <TableCell key={headCell} style={{ backgroundColor: '#007AD9', color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 8, fontSize: '12px' }}>
                    <TableSortLabel active={orderBy === headCell.toLowerCase().replace(/ /g, '')} direction={orderBy === headCell.toLowerCase().replace(/ /g, '') ? order : 'asc'} onClick={() => handleSort(headCell.toLowerCase().replace(/ /g, ''))}>
                      {headCell}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.queue}>
                  <TableCell align="center" style={{ fontSize: '12px' }}>{row.queue}</TableCell>
                  <TableCell align="center" style={{ fontSize: '12px' }}>{row.forecast}</TableCell>
                  <TableCell align="center" style={{ fontSize: '12px' }}>{row.accuracyLastWeek}</TableCell>
                  <TableCell align="center" style={{ fontSize: '12px', color: row.trends.startsWith('+') ? 'green' : 'red' }}>
                    {row.trends} {row.trends.startsWith('+') ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />}
                  </TableCell>
                  <TableCell align="center"><TextField value={row.rootCause} variant="outlined"
                    size="small"
                    fullWidth
                    InputProps={{ style: { fontSize: '12px', height: '30px' } }}
                    InputLabelProps={{ style: { fontSize: '10px' } }} /></TableCell>
                  <TableCell align="center"><Chip label={row.rcaStatus} style={{ backgroundColor: row.rcaStatus === 'Confirmed' ? '#e6ffe6' : '#fff5e6', color: row.rcaStatus === 'Confirmed' ? 'green' : 'orange', fontSize: '10px' }} size="small" /></TableCell>
                  <TableCell align="center" style={{ fontSize: '12px' }}>{row.recommendation}</TableCell>
                  <TableCell align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TextField
                      value={row.actionOwner}
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputProps={{ style: { fontSize: '12px', height: '30px' } }}
                      InputLabelProps={{ style: { fontSize: '10px' } }}
                    />
                    <BusinessIcon style={{ marginLeft: 8, fontSize: '16px' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ForecastPerformanceTable;
