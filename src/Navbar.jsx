// src/components/Navbar.jsx
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useTheme, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if the screen is mobile
    const [anchorEl, setAnchorEl] = useState(null); // State for managing the menu anchor
    const open = Boolean(anchorEl);

    // Handle menu open
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle menu close
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" color="default">
            <Toolbar>
                {/* Left: My Portfolio */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ flexGrow: 1 }} // Takes up remaining space on the left
                >
                    <Typography variant="h6" component="div">
                        My Portfolio
                    </Typography>
                </motion.div>

                {/* Center: Navigation Buttons (Desktop) */}
                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', justifyContent: 'center', flexGrow: 2 }} // Centers the buttons
                    >
                        <ScrollLink to="home" smooth={true} duration={500}>
                            <Button color="inherit">Home</Button>
                        </ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-70}>
                            <Button color="inherit">About</Button>
                        </ScrollLink>
                        <ScrollLink to="experience" smooth={true} duration={500} spy={true} offset={-70}>
                            <Button color="inherit">Experience</Button>
                        </ScrollLink>
                        <ScrollLink to="skills" smooth={true} duration={500} spy={true} offset={-70}>
                            <Button color="inherit">Skills</Button>
                        </ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500}>
                            <Button color="inherit">Projects</Button>
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <Button color="inherit">Contact</Button>
                        </ScrollLink>
                    </motion.div>
                )}

                {/* Right: Theme Toggle Button and Hamburger Menu (Mobile) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} // Aligns to the right
                >
                    {/* Theme Toggle Button */}
                    <IconButton onClick={toggleTheme} color="inherit">
                        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>

                    {/* Hamburger Menu (Mobile) */}
                    {isMobile && (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="menu"
                                aria-controls="mobile-menu"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="mobile-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleMenuClose}
                                MenuListProps={{
                                    'aria-labelledby': 'mobile-menu',
                                }}
                            >
                                <MenuItem onClick={handleMenuClose}>
                                    <ScrollLink to="home" smooth={true} duration={500}>
                                        Home
                                    </ScrollLink>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ScrollLink to="about" smooth={true} duration={500} spy={true} offset={-70}>
                                        About
                                    </ScrollLink>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ScrollLink to="experience" smooth={true} duration={500} spy={true} offset={-70}>
                                        Experience
                                    </ScrollLink>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ScrollLink to="skills" smooth={true} duration={500} spy={true} offset={-70}>
                                        Skills
                                    </ScrollLink>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ScrollLink to="projects" smooth={true} duration={500}>
                                        Projects
                                    </ScrollLink>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <ScrollLink to="contact" smooth={true} duration={500}>
                                        Contact
                                    </ScrollLink>
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </motion.div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;