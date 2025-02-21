// src/components/ProjectsSection.jsx
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A cool project showcasing modern web development techniques.',
    image: 'https://via.placeholder.com/300',
    link: 'https://example.com',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Another cool project with a focus on responsive design.',
    image: 'https://via.placeholder.com/300',
    link: 'https://example.com',
    tags: ['JavaScript', 'CSS', 'Firebase'],
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Yet another cool project highlighting backend development.',
    image: 'https://via.placeholder.com/300',
    link: 'https://example.com',
    tags: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A project focusing on AI and machine learning integration.',
    image: 'https://via.placeholder.com/300',
    link: 'https://example.com',
    tags: ['Python', 'TensorFlow', 'Keras'],
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'A mobile app built with React Native for cross-platform development.',
    image: 'https://via.placeholder.com/300',
    link: 'https://example.com',
    tags: ['React Native', 'Expo', 'Firebase'],
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'A full-stack e-commerce platform with payment integration.',
    image: 'https://via.placeholder.com/300',
    link: 'https://example.com',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 7,
    title: 'Project 7',
    description: 'A real-time chat application using WebSockets.',
    image: 'https://via.placeholder.com/300',
    link: 'https://example.com',
    tags: ['Socket.io', 'React', 'Node.js'],
  },
  {
    id: 8,
    title: 'Project 8',
    description: 'A data visualization dashboard for analytics.',
    image: 'https://via.placeholder.com/300',
    link: 'https://example.com',
    tags: ['D3.js', 'React', 'Express'],
  },
];

const ProjectsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false }); // Reset animations when in view again

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Reset to hidden state when out of view
    }
  }, [controls, inView]);

  // Card animation variants
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 4 === 0 ? -50 : index % 4 === 1 ? 50 : 0, // Left, Right, or No X movement
      y: index < 4 ? -50 : 50, // Top or Bottom movement
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: 8,
        bgcolor: 'background.paper', // White background
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 4, md: 6 }, // Add space on the left and right
      }}
    >
      {/* Main Content */}
      <Typography variant="h2" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
        {projects.map((project, index) => (
          <Grid item key={project.id} xs={12} sm={6} md={3}> {/* 4 columns on medium screens and up */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              custom={index} // Pass index to determine animation direction
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                sx={{
                  height: '300px', // Smaller height
                  width: '100%', // Full width of the grid item
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '12px', // Rounded corners
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow
                }}
              >
                <CardMedia
                  component="img"
                  height="140" // Smaller image height
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }} // Ensure images are the same size
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        sx={{ mr: 1, mb: 1, bgcolor: 'primary.main', color: 'white', fontSize: '0.75rem' }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 'auto', borderRadius: '0 0 12px 12px' }} // Rounded bottom corners
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;