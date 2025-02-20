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
  Grid,
  Button,
  TablePagination,
  TableSortLabel,
  Switch
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableChartIcon from '@mui/icons-material/TableChart';

const rows = [
  { queue: 1, hcPlan: 100, sla: '1 min', hiringReq: 20, reqDate: '9/12/2024', recommendation: 'Hire', confirm: true },
  { queue: 2, hcPlan: 200, sla: '2 min', hiringReq: 4, reqDate: '9/25/2024', recommendation: 'Hire', confirm: true },
  { queue: 3, hcPlan: 250, sla: '30 sec', hiringReq: 12, reqDate: '10/08/2024', recommendation: 'Reduce Training Hours', confirm: false },
  { queue: 4, hcPlan: 150, sla: '30 sec', hiringReq: 8, reqDate: '11/05/2024', recommendation: 'Increase Operation Hours', confirm: false },
  { queue: 5, hcPlan: 450, sla: '1 min', hiringReq: 14, reqDate: '12/1/2024', recommendation: 'Cross Skill (Server)', confirm: true },
];

const StyledTableCell = styled(TableCell)({
  backgroundColor: '#007AD9',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '10px'
});

const QueueLevelRecommendation = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('queue');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);

    rows.sort((a, b) => {
      if (a[property] < b[property]) return isAsc ? -1 : 1;
      if (a[property] > b[property]) return isAsc ? 1 : -1;
      return 0;
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', overflow: 'auto', padding: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Queue Level Recommendation</Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <PictureAsPdfIcon sx={{ fontSize: 24, cursor: 'pointer' }} />
            <TableChartIcon sx={{ fontSize: 24, cursor: 'pointer' }} />
            <Button variant="outlined" sx={{ color: '#007bff', borderColor: '#007bff' }}>View Details</Button>
          </Box>
        </Grid>

        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {['Queue', 'HC Plan', 'SLA', 'Hiring Requirement', 'Req. by date', 'Recommendation', 'Confirm', 'Actions'].map((headCell) => (
                  <StyledTableCell key={headCell}>
                    <TableSortLabel
                      active={orderBy === headCell}
                      direction={orderBy === headCell ? order : 'asc'}
                      onClick={() => handleSort(headCell.toLowerCase().replace(/\s/g, ''))}
                    >
                      {headCell}
                    </TableSortLabel>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.queue}>
                  <TableCell align="center">{row.queue}</TableCell>
                  <TableCell align="center">{row.hcPlan}</TableCell>
                  <TableCell align="center">{row.sla}</TableCell>
                  <TableCell align="center">{row.hiringReq}</TableCell>
                  <TableCell align="center">{row.reqDate}</TableCell>
                  <TableCell align="center">{row.recommendation}</TableCell>
                  <TableCell align="center">
                    <Switch checked={row.confirm} color="success" />
                    {row.confirm ? 'Yes' : 'No'}
                  </TableCell>
                  <TableCell align="center">
                    <Button size="small">Share</Button> | <Button size="small">Feedback</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default QueueLevelRecommendation;
