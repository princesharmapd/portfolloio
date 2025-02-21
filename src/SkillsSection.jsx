// src/components/SkillsSection.jsx
import { Box, Typography, LinearProgress } from '@mui/material';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, DataObject, Storage, Terminal } from '@mui/icons-material'; // Icons for skills

const skills = [
  {
    name: 'JavaScript',
    level: 90,
    icon: <Code fontSize="large" />,
    description: 'Proficient in modern JavaScript (ES6+), including async/await, promises, and DOM manipulation.',
  },
  {
    name: 'React',
    level: 85,
    icon: <DataObject fontSize="large" />,
    description: 'Experienced in building dynamic and responsive user interfaces with React and React Router.',
  },
  {
    name: 'Node.js',
    level: 80,
    icon: <Storage fontSize="large" />,
    description: 'Skilled in building scalable backend systems and RESTful APIs using Node.js and Express.',
  },
  {
    name: 'Python',
    level: 75,
    icon: <Terminal fontSize="large" />,
    description: 'Proficient in Python for scripting, data analysis, and backend development.',
  },
];

const SkillsSection = () => {
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
      id="skill"
      ref={ref}
      sx={{ py: 8, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}
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
      <Typography variant="h2" align="center" gutterBottom>
        Skills
      </Typography>
      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 2, display: 'flex', flexWrap: 'wrap', gap: 4, position: 'relative', zIndex: 1 }}>
        {/* Left Side Content */}
        <AnimatePresence>
          {inView && (
            <motion.div
              key="left-content"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }} // Reset animation when out of view
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ flex: 1, minWidth: 300 }}
            >
              <Typography variant="h4" gutterBottom>
                Why Choose Me?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                With a strong foundation in both frontend and backend technologies, I bring a holistic approach to software development. My expertise spans across:
              </Typography>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ listStyleType: 'none', paddingLeft: 0 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ marginBottom: '8px' }}
                >
                  🚀 Full-stack development
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  style={{ marginBottom: '8px' }}
                >
                  🎨 Responsive and modern UI design
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  style={{ marginBottom: '8px' }}
                >
                  🔧 Problem-solving and debugging
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Side Content (Skills Cards) */}
        <AnimatePresence>
          {inView && (
            <Box
              key="right-content"
              sx={{ flex: 2, minWidth: 300 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }} // Reset animation when out of view
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box sx={{ mb: 4, p: 3, bgcolor: 'background.default', borderRadius: 2, boxShadow: 3 }}>
                    {/* Skill Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        {skill.icon}
                        <Typography variant="h5">{skill.name}</Typography>
                      </Box>
                    </motion.div>

                    {/* Skill Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    >
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {skill.description}
                      </Typography>
                    </motion.div>

                    {/* Animated Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.6 }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{ height: 10, borderRadius: 5 }}
                      />
                    </motion.div>
                  </Box>
                </motion.div>
              ))}
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default SkillsSection;