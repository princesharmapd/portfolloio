import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabBar({ value, setValue }) {
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={{ width: '100%', position: 'fixed', top: '50px', backgroundColor: '#F4F4F4', height: "40px", marginLeft: "-9px",zIndex:99999 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ minHeight: '28px', marginTop: '0px', marginLeft: '10px' }}
        TabIndicatorProps={{
          sx: { top: '38px' }  
        }}
      >
        <Tab label="Forecasting" {...a11yProps(0)} sx={{ textTransform: 'capitalize', fontSize: '0.875rem', fontWeight: 500, minHeight: '28px' }} />
        <Tab label="Planning" {...a11yProps(1)} sx={{ textTransform: 'capitalize', fontSize: '0.875rem', fontWeight: 500, minHeight: '28px' }} />
        <Tab label="Scheduling" {...a11yProps(2)} sx={{ textTransform: 'capitalize', fontSize: '0.875rem', fontWeight: 500, minHeight: '28px' }} />
        <Tab label="RTA" {...a11yProps(3)} sx={{ textTransform: 'capitalize', fontSize: '0.875rem', fontWeight: 500, minHeight: '28px' }} />
      
      </Tabs>
    </Box>
  );
}

TabBar.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
