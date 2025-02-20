import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    TablePagination,
    CircularProgress,
    Box
} from "@mui/material";

const MarketIndicesTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetch("http://localhost:5000/api/allIndices")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error))
            .finally(() => setLoading(false));
    }, []);

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper sx={{ padding: 2, margin: "auto", maxWidth: 800, position: "relative" }}>
            {loading && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        zIndex: 10
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
            <TextField
                label="Search..."
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                onChange={(e) => setSearch(e.target.value)}
            />
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#f0f0f0" }}>
                            <TableCell sx={{ fontSize: "12px" }}><b>Index</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Last Price</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Change</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Change (%)</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.name}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.lastPrice}</TableCell>
                                    <TableCell
                                        sx={{
                                            fontSize: "12px",
                                            color: row.change > 0 ? "green" : "red"
                                        }}
                                    >
                                        {row.change}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontSize: "12px",
                                            color: row.changePercent > 0 ? "green" : "red"
                                        }}
                                    >
                                        {row.changePercent}%
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default MarketIndicesTable;
