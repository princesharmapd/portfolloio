import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Card, CardContent } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const NiftyFinServiceBarChart = () => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/executivegraph')
            .then(response => response.json())
            .then(data => {
                if (data.upper?.AllSec?.data) {
                    const formattedData = data.upper.AllSec.data.map(item => ({
                        name: item.symbol,
                        y: parseFloat(item.ltp),
                        change: parseFloat(item.change),
                        percentChange: parseFloat(item.pChange),
                        highPrice: item.highPrice,
                        lowPrice: item.lowPrice,
                        yearHigh: item.yearHigh,
                        yearLow: item.yearLow,
                        volume: item.totalTradedVol,
                        turnover: item.turnover
                    }));
                    setChartData(formattedData);
                    console.log('Formatted Data:', formattedData);
                }
            })
            .catch(error => console.error('Error fetching data:', error))
            .finally(() => setLoading(false));
    }, []);

    const options = {
        chart: {
            type: 'column',
            height: 600,
            zoomType: ''
        },
        title: {
            text: 'Top Gainers (Upper Circuit Stocks)'
        },
        xAxis: {
            type: 'category',
            title: { text: 'Stock Symbol' }
        },
        yAxis: {
            type: 'logarithmic',
            title: { text: 'Latest Traded Price (LTP)' },
            min: 1,
            opposite: false
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<b>{point.key}</b><br/>',
            pointFormat: `
                <b>LTP:</b> {point.y}<br/>
                <b>Change:</b> {point.change} ({point.percentChange}%)<br/>
                <b>High Price:</b> {point.highPrice}<br/>
                <b>Low Price:</b> {point.lowPrice}<br/>
                <b>52W High:</b> {point.yearHigh}<br/>
                <b>52W Low:</b> {point.yearLow}<br/>
                <b>Volume:</b> {point.volume}M<br/>
                <b>Turnover:</b> ₹{point.turnover} Cr
            `
        },
        series: [{
            name: 'LTP',
            data: chartData,
            colorByPoint: true
        }],
        rangeSelector: { enabled: false },
        navigator: { enabled: false },
        scrollbar: { enabled: false }
    };

    return (
        <Card sx={{ p: 2, position: 'relative', boxShadow: 3 }}>
            {loading && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        zIndex: 10
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
            <CardContent>
                <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
            </CardContent>
        </Card>
    );
};

export default NiftyFinServiceBarChart;
