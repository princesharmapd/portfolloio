import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";

const IndicesTable = () => {
  const [indices, setIndices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("index");

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/nse/api/allIndices", {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
            Referer: "https://www.nseindia.com/",
            Accept: "application/json, text/plain, */*",
          },
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setIndices(data.data || []);
      } catch (error) {
        console.error("Error fetching indices data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndices();
  }, []);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const sortedData = [...indices].sort((a, b) =>
      isAsc
        ? a[property] > b[property]
          ? 1
          : -1
        : a[property] < b[property]
        ? 1
        : -1
    );
    setIndices(sortedData);
  };

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Typography
        variant="h6"
        sx={{ marginBottom: 1, fontWeight: "bold", fontSize: "1rem" }}
      >
        NSE Indices Performance
      </Typography>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          minHeight: 250,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <TableContainer sx={{ maxHeight: 300 }}>
            <Table size="small" sx={{ tableLayout: "fixed", width: "100%" }}>
              <TableHead>
                <TableRow>
                  {["Index", "Last", "Variation", "Change (%)", "High", "Low"].map(
                    (header) => (
                      <TableCell
                        key={header}
                        sx={{ fontSize: "0.8rem", minWidth: 100 }}
                      >
                        <TableSortLabel
                          active={orderBy === header.toLowerCase()}
                          direction={orderBy === header.toLowerCase() ? order : "asc"}
                          onClick={() => handleSort(header.toLowerCase())}
                        >
                          {header}
                        </TableSortLabel>
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {indices
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell sx={{ fontSize: "0.8rem", minWidth: 100 }}>
                        {row.index}
                      </TableCell>
                      <TableCell sx={{ fontSize: "0.8rem", minWidth: 80 }}>
                        {row.last}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "0.8rem",
                          minWidth: 80,
                          color: row.variation < 0 ? "red" : "inherit",
                          backgroundColor: row.variation < 0 ? "#ffebee" : "inherit",
                        }}
                      >
                        {row.variation}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "0.8rem",
                          minWidth: 80,
                          color: row.percentChange < 0 ? "red" : "inherit",
                          backgroundColor: row.percentChange < 0 ? "#ffebee" : "inherit",
                        }}
                      >
                        {row.percentChange}%
                      </TableCell>
                      <TableCell sx={{ fontSize: "0.8rem", minWidth: 80 }}>
                        {row.high}
                      </TableCell>
                      <TableCell sx={{ fontSize: "0.8rem", minWidth: 80 }}>
                        {row.low}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>

      {!loading && (
        <TablePagination
          component="div"
          count={indices.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ fontSize: "0.8rem" }}
        />
      )}
    </Box>
  );
};

export default IndicesTable;
