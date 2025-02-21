// src/components/Footer.jsx
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.paper', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        <Typography variant="body2" sx={{ mt: 2 }}>
          © 2025 Prince Sharma. All rights reserved.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;