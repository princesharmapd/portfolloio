// src/components/Navbar.jsx
import { AppBar, Toolbar, Typography, Button, IconButton, useTheme } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const theme = useTheme();

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

                {/* Center: Navigation Buttons */}
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

                {/* Right: Theme Toggle Button */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }} // Aligns to the right
                >
                    <IconButton onClick={toggleTheme} color="inherit">
                        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </motion.div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;