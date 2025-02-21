// src/components/ContactSection.jsx
import { Box, Typography, TextField, Button, Grid, IconButton, Container } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { LinkedIn, GitHub, Email, Phone, LocationOn } from '@mui/icons-material';

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false }); // Reset animations when in view again

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Reset to hidden state when out of view
    }
  }, [controls, inView]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Floating shape animation variants
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.paper',
      }}
    >
      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, #1976d2, #2196f3)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, #dc004e, #f48fb1)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Contact Me
          </Typography>
        </motion.div>

        {/* Grid Layout: Contact Details and Form */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Left Side: Contact Details */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography variant="h5" color="primary" gutterBottom>
                Get in Touch
              </Typography>
              <Box sx={{ textAlign: 'left', mt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <LocationOn color="primary" />
                  <Typography variant="body1" color="textSecondary">
                    New Delhi, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Email color="primary" />
                  <Typography variant="body1" color="textSecondary">
                    prince.sharma@example.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Phone color="primary" />
                  <Typography variant="body1" color="textSecondary">
                    +91 98765 43210
                  </Typography>
                </Box>
              </Box>

              {/* Social Media Links */}
              <Typography variant="h6" color="primary" gutterBottom sx={{ mt: 4 }}>
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                >
                  <LinkedIn fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://github.com"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                >
                  <GitHub fontSize="large" />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side: Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box
                component={motion.form}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                sx={{
                  p: 3,
                  bgcolor: 'background.default',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ py: 1.5 }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;