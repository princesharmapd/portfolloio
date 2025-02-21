import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { AppBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from "../assets/applogo/stocks-logo.svg";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationMenuAnchorEl, setNotificationMenuAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const notificationOpen = Boolean(notificationMenuAnchorEl);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleNotificationMenu = (event) => setNotificationMenuAnchorEl(event.currentTarget);
  const handleNotificationClose = () => setNotificationMenuAnchorEl(null);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#007ad9', height: "50px" }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', height: '100%', marginTop: "-5px" }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Wrap in Link to navigate to "/" */}
          <Link to="portfolloio//" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img alt="logo" src={logo} height="20" style={{ marginRight: '5px' }} />
            <Typography sx={{ fontSize: '1rem', color: '#fff', fontWeight: 'bold' }}>
              NSE Data Analysis
            </Typography>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <IconButton color="inherit" onClick={handleNotificationMenu}>
            <Badge badgeContent={100} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Typography sx={{ marginLeft: '10px', borderLeft: '2px solid white', height: '30px', paddingRight: "10px", fontSize: "15px" }} />
          <Avatar onClick={handleMenu} sx={{ cursor: 'pointer', marginRight: '10px', width: 30, height: 30, fontSize: "15px" }}>JS</Avatar>
          <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: "12px" }}>John Smith</Typography>
        </div>
      </Toolbar>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => console.log('Profile clicked')}>Profile</MenuItem>
        <MenuItem onClick={() => console.log('Logout clicked')}>Logout</MenuItem>
      </Menu>
      <Menu anchorEl={notificationMenuAnchorEl} open={notificationOpen} onClose={handleNotificationClose}>
        <MenuItem onClick={handleNotificationClose}>Notification 1</MenuItem>
        <MenuItem onClick={handleNotificationClose}>Notification 2</MenuItem>
        <MenuItem onClick={handleNotificationClose}>Notification 3</MenuItem>
      </Menu>
    </AppBar>
  );
}
