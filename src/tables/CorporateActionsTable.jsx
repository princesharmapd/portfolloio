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

const CorporateActionsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetch("http://localhost:5000/api/homecorporate")
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error("Error fetching data:", error))
            .finally(() => setLoading(false)); // Hide loader once data is fetched
    }, []);

    const filteredData = data.filter(item =>
        item.comp.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase()) ||
        item.subject.toLowerCase().includes(search.toLowerCase())
    );

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper sx={{ padding: 2, margin: "auto", maxWidth: 600, position: "relative" }}>
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
                            <TableCell sx={{ fontSize: "12px" }}><b>Symbol</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Company</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Subject</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Ex-Date</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Record Date</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.symbol}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.comp}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.subject}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.exDate}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.recDate}</TableCell>
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

export default CorporateActionsTable;
