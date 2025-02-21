// src/components/HeroSection.jsx
import { Box, Typography, Button } from '@mui/material';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Replace with your photo
import myPhoto from './assets/react.svg'; // Adjust the path to your photo

const HeroSection = () => {
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
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
    tap: { scale: 0.9 },
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
      id="home"
      ref={ref}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, row on desktop
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left-align on desktop
        background: 'linear-gradient(45deg, #1976d2, #2196f3)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        gap: { xs: 4, md: 8 }, // Add gap between photo and text
        px: { xs: 2, md: 4 }, // Add padding on the sides
      }}
    >
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, #1976d2, #2196f3)',
          zIndex: 0,
        }}
      />

      {/* Floating Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />

      {/* Left Side: Photo */}
      <AnimatePresence>
        {inView && (
          <motion.div
            key="photo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }} // Reset animation when out of view
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={myPhoto}
              alt="My Photo"
              sx={{
                width: { xs: '200px', md: '300px' },
                height: { xs: '200px', md: '300px' },
                borderRadius: '50%',
                border: '4px solid white',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Side: Text and Button */}
      <AnimatePresence>
        {inView && (
          <Box
            key="text"
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' }, // Center on mobile, left-align on desktop
              zIndex: 2,
            }}
          >
            {/* Heading */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: '0.5rem',
                }}
              >
                {'Prince Sharma'.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </Typography>
            </motion.div>

            {/* Subheading */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h4"
                sx={{
                  mt: 2,
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: '0.5rem',
                }}
              >
                {'Full Stack Developer | 4+ Years of Experience'.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </Typography>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mt: 2,
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                  color: 'text.secondary',
                }}
              >
                Building scalable and modern web applications
              </Typography>
            </motion.div>

            {/* Button */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 4, fontSize: { xs: '1rem', sm: '1.2rem' }, px: 4, py: 2 }}
              >
                View Projects
              </Button>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default HeroSection;