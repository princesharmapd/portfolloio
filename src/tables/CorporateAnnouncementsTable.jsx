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
    IconButton,
    CircularProgress,
    Box
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

const CorporateAnnouncementsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetch("http://localhost:5000/api/homecorporateannouncemnet")
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.error("Error fetching data:", error))
            .finally(() => setLoading(false));
    }, []);

    const filteredData = data.filter(item =>
        item.sm_name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase())
    );

    const handleDownload = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.download = url.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                            <TableCell sx={{ fontSize: "12px" }}><b>Symbol</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Company</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Announcement Type</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Date</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Details</b></TableCell>
                            <TableCell sx={{ fontSize: "12px" }}><b>Download</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.symbol}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.sm_name}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.desc}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.an_dt}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>{row.attchmntText}</TableCell>
                                    <TableCell sx={{ fontSize: "12px" }}>
                                        <IconButton
                                            onClick={() => handleDownload(row.attchmntFile)}
                                            size="small"
                                            color="primary"
                                        >
                                            <DownloadIcon />
                                        </IconButton>
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

export default CorporateAnnouncementsTable;
