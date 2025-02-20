import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import { AppBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem, Badge, Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from "../assets/applogo/applogo.png";

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
    <AppBar position="fixed" sx={{ backgroundColor: '#007ad9', height: "50px", zIndex: 1201 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        
        {/* Logo & Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="//" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img alt="logo" src={logo} height="20" style={{ marginRight: '5px' }} />
            <Typography sx={{ fontSize: '1rem', color: '#fff', fontWeight: 'bold' }}>
              Share Market Dashboard
            </Typography>
          </Link>
        </Box>

        
      </Toolbar>

     
    </AppBar>
  );
}
