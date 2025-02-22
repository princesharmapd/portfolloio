import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Import images
import pro1 from './assets/projects/pro1.png';
import pro2 from './assets/projects/pro2.png';
import pro3 from './assets/projects/pro3.gif';
import pro4 from './assets/projects/pro4.png';
import pro5 from './assets/projects/pro5.png';
import pro6 from './assets/projects/pro6.jpg';
import pro7 from './assets/projects/pro7.png';
import pro8 from './assets/projects/pro8.png';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A cool project showcasing modern web development techniques.',
    image: pro1,
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Another cool project with a focus on responsive design.',
    image: pro2,
    tags: ['JavaScript', 'CSS', 'Firebase'],
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Yet another cool project highlighting backend development.',
    image: pro3,
    tags: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A project focusing on AI and machine learning integration.',
    image: pro4,
    tags: ['Python', 'TensorFlow', 'Keras'],
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'A mobile app built with React Native for cross-platform development.',
    image: pro5,
    tags: ['React Native', 'Expo', 'Firebase'],
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'A full-stack e-commerce platform with payment integration.',
    image: pro6,
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 7,
    title: 'Project 7',
    description: 'A real-time chat application using WebSockets.',
    image: pro7,
    tags: ['Socket.io', 'React', 'Node.js'],
  },
  {
    id: 8,
    title: 'Project 8',
    description: 'A data visualization dashboard for analytics.',
    image: pro8,
    tags: ['D3.js', 'React', 'Express'],
  },
];

const ProjectsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: 8,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ position: 'relative', zIndex: 1 }}>
        {projects.map((project, index) => (
          <Grid item key={project.id} xs={12} sm={6} md={3}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                sx={{
                  height: '300px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
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
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;