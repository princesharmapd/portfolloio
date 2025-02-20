import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Step,
    StepLabel,
    Stepper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = ["Base Data", "Influencing Factors", "Other Critical Factors", "View Generated Forecast"];

const stepContents = [
    ["New Product", "New Offering", "New Site", "New Social Media Platform"],
    ["Market Trends", "Economic Factors", "Customer Behavior"],
    ["Competitor Analysis", "Supply Chain", "Regulatory Changes"],
    []
];

const queueForecastData = [
    { queue: 1, forecast: 100 },
    { queue: 2, forecast: 200 },
    { queue: 3, forecast: 300 },
    { queue: 4, forecast: 230 },
    { queue: 5, forecast: 400 }
];

const ForecastWizard = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState(Array(steps.length).fill(false));

    const [openDialog, setOpenDialog] = useState(false);

    const handleNext = () => {
        const newCompleted = [...completed];
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        const newCompleted = [...completed];
        newCompleted[activeStep - 1] = false; 
        setCompleted(newCompleted);
        setActiveStep((prev) => prev - 1);
    };
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                mt: 5,
                p: 2,
                borderRadius: 1,
                bgcolor: "#f5f5f5",
                paddingLeft: { xs: 1, sm: 2 }, 
                paddingRight: { xs: 1, sm: 2 },
                overflowX: "hidden",
                boxSizing: "border-box",
                marginTop: "-25px"
            }}
        >
            <Typography fontWeight="bold" gutterBottom fontSize="15px">
                Forecast Simulation Wizard
            </Typography>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepLabel
                            icon={completed[index] ? <CheckCircleIcon color="success" /> : index + 1}
                            sx={{ "& .MuiStepLabel-label": { fontSize: "12px", marginTop: "5px" } }} 
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>


            <Box sx={{ mt: 1 }}>
                {activeStep < steps.length - 1 ? (
                    <Grid container spacing={2}>
                        {stepContents[activeStep].map((title, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card variant="outlined">
                                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Typography gutterBottom fontSize="14px">
                                            {title}
                                        </Typography>
                                        <Button variant="contained" size="small" sx={{ width: "150px", textTransform: "none" }}>
                                            Use existing data
                                        </Button>
                                        <Typography variant="body2" textAlign="center" sx={{ my: 1 }}>
                                            or
                                        </Typography>

                                        <input
                                            type="file"
                                            id={`file-input-${index}`}
                                            style={{ display: "none" }}
                                            onChange={(event) => handleFileSelect(event, index)}
                                        />

                                        <Button
                                            variant="outlined"
                                            size="small"
                                            sx={{ width: "150px", textTransform: "none" }}
                                            onClick={() => document.getElementById(`file-input-${index}`).click()}
                                        >
                                            Browse
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                ) : (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}> 
                            <Card variant="outlined" sx={{ height: "100%" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                    <Typography fontSize="12px" fontWeight="bold" textAlign="center">
                                        Queue Level Forecast
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            sx={{ textTransform: "capitalize", fontSize: "10px" }} 
                                            onClick={handleOpenDialog}
                                        >
                                            View Details
                                        </Button>
                                    </Box>

                                    <TableContainer component={Paper} sx={{ flexGrow: 1 }}>
                                        <Table>
                                            <TableHead>
                                                <TableRow sx={{ height: "26px" }}> 
                                                    <TableCell
                                                        sx={{
                                                            backgroundColor: "#1976d2",
                                                            color: "#fff",
                                                            fontWeight: "bold",
                                                            fontSize: "10px",
                                                            padding: "2px",
                                                            height: "26px",
                                                            borderRight: "1px solid white", 
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Queue
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            backgroundColor: "#1976d2",
                                                            color: "#fff",
                                                            fontWeight: "bold",
                                                            fontSize: "10px",
                                                            padding: "2px",
                                                            height: "26px",
                                                            borderLeft: "1px solid white", 
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Default Forecast
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {queueForecastData.map((row) => (
                                                    <TableRow key={row.queue} sx={{ height: "22px" }}> 
                                                        <TableCell sx={{ fontSize: "10px", padding: "2px", height: "22px", textAlign: "center" }}>
                                                            {row.queue}
                                                        </TableCell>
                                                        <TableCell sx={{ fontSize: "10px", padding: "2px", height: "22px", textAlign: "center" }}>
                                                            {row.forecast}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                )}
            </Box>


            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                    flexDirection: { xs: "column", sm: "row" }, 
                    alignItems: "center",
                }}
            >
                <Button
                    disabled={activeStep === 0}
                    variant="outlined"
                    onClick={handleBack}
                    size="small"
                    sx={{
                        mb: 2,
                        textTransform: "capitalize", 
                        "@media (max-width: 600px)": {
                            marginBottom: "1rem",
                        },
                    }}
                >
                    Back
                </Button>
                {activeStep === steps.length - 1 ? (
                    <Button
                        variant="contained"
                        color="success"
                        size="small"
                        sx={{ textTransform: "capitalize" }} 
                    >
                        Compare (last simulation)
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        onClick={handleNext}
                        size="small"
                        sx={{ textTransform: "capitalize" }} 
                    >
                        Next
                    </Button>
                )}
            </Box>


            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Forecast Details</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        Here you can add additional details or a more in-depth explanation of the forecast.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Queue 1: {queueForecastData[0].forecast}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ForecastWizard;
