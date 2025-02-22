// src/components/SkillsSection.jsx
import { Box, Typography, LinearProgress, Grid, Container } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Import official skill icons (replace with actual image paths)
import JavaScriptIcon from './assets/skills/javascript-logo.svg';
import ReactIcon from './assets/skills/react-logo.svg';
import AngularIcon from './assets/skills/angular-logo.svg';
import VueIcon from './assets/skills/vue.js-logo.svg';
import NodeIcon from './assets/skills/node.js-logo.svg';
import PythonIcon from './assets/skills/python-logo.svg';
import MongoDBIcon from './assets/skills/mongodb-logo.svg';
import HTML5Icon from './assets/skills/html5-logo.svg';
import CSS3Icon from './assets/skills/css3-logo.svg';
import GitIcon from './assets/skills/git-logo.svg';
import DockerIcon from './assets/skills/docker-logo.svg';
import TypeScriptIcon from './assets/skills/typescript-logo.svg';
import PHPIcon from './assets/skills/php-logo.svg';
import CIcon from './assets/skills/c-logo.svg';
import CPlusPlusIcon from './assets/skills/c++-logo.svg';
import CSharpIcon from './assets/skills/chash.svg';
import SassIcon from './assets/skills/sass-logo.svg';
import WebpackIcon from './assets/skills/webpack-logo.svg';
import GraphQLIcon from './assets/skills/graphql-logo.svg';
import FirebaseIcon from './assets/skills/firebase-logo.svg';
import ExpressIcon from './assets/skills/express.js-logo.svg';
import DjangoIcon from './assets/skills/django-logo.svg';
import NextIcon from './assets/skills/next.js-logo.svg';
import PostgreSQLIcon from './assets/skills/postgresql-logo.svg';

const skills = [
  {
    name: 'JavaScript',
    level: 90,
    icon: JavaScriptIcon,
    description: 'Proficient in modern JavaScript (ES6+), including async/await, promises, and DOM manipulation.',
  },
  {
    name: 'React',
    level: 85,
    icon: ReactIcon,
    description: 'Experienced in building dynamic and responsive user interfaces with React and React Router.',
  },
  {
    name: 'Angular',
    level: 80,
    icon: AngularIcon,
    description: 'Skilled in building scalable single-page applications using Angular and TypeScript.',
  },
  {
    name: 'Vue.js',
    level: 75,
    icon: VueIcon,
    description: 'Proficient in Vue.js for building lightweight and performant web applications.',
  },
  {
    name: 'Node.js',
    level: 85,
    icon: NodeIcon,
    description: 'Skilled in building scalable backend systems and RESTful APIs using Node.js and Express.',
  },
  {
    name: 'Python',
    level: 75,
    icon: PythonIcon,
    description: 'Proficient in Python for scripting, data analysis, and backend development.',
  },
  {
    name: 'MongoDB',
    level: 80,
    icon: MongoDBIcon,
    description: 'Experienced in designing and managing NoSQL databases with MongoDB.',
  },
  {
    name: 'HTML5',
    level: 95,
    icon: HTML5Icon,
    description: 'Expert in creating semantic and accessible HTML5 structures.',
  },
  {
    name: 'CSS3',
    level: 90,
    icon: CSS3Icon,
    description: 'Proficient in modern CSS3, including Flexbox, Grid, and animations.',
  },
  {
    name: 'Git',
    level: 85,
    icon: GitIcon,
    description: 'Experienced in version control and collaboration using Git and GitHub/GitLab.',
  },
  {
    name: 'Docker',
    level: 70,
    icon: DockerIcon,
    description: 'Skilled in containerizing applications using Docker for deployment.',
  },
  {
    name: 'TypeScript',
    level: 80,
    icon: TypeScriptIcon,
    description: 'Proficient in TypeScript for building type-safe JavaScript applications.',
  },
  {
    name: 'PHP',
    level: 70,
    icon: PHPIcon,
    description: 'Experienced in server-side scripting and web development with PHP.',
  },
  {
    name: 'C',
    level: 75,
    icon: CIcon,
    description: 'Proficient in C for system programming and low-level development.',
  },
  {
    name: 'C++',
    level: 75,
    icon: CPlusPlusIcon,
    description: 'Skilled in C++ for object-oriented programming and game development.',
  },
  {
    name: 'C#',
    level: 70,
    icon: CSharpIcon,
    description: 'Experienced in C# for building Windows applications and games with Unity.',
  },
  {
    name: 'Sass',
    level: 80,
    icon: SassIcon,
    description: 'Proficient in Sass for writing modular and maintainable CSS.',
  },
  {
    name: 'Webpack',
    level: 75,
    icon: WebpackIcon,
    description: 'Skilled in bundling and optimizing frontend assets with Webpack.',
  },
  {
    name: 'GraphQL',
    level: 70,
    icon: GraphQLIcon,
    description: 'Experienced in building and consuming GraphQL APIs.',
  },
  {
    name: 'Firebase',
    level: 75,
    icon: FirebaseIcon,
    description: 'Proficient in Firebase for real-time databases, authentication, and hosting.',
  },
  {
    name: 'Express.js',
    level: 80,
    icon: ExpressIcon,
    description: 'Skilled in building RESTful APIs and backend services with Express.js.',
  },
  {
    name: 'Django',
    level: 70,
    icon: DjangoIcon,
    description: 'Experienced in building web applications with Django and Python.',
  },
  {
    name: 'Next.js',
    level: 75,
    icon: NextIcon,
    description: 'Proficient in building server-rendered React applications with Next.js.',
  },
  {
    name: 'PostgreSQL',
    level: 80,
    icon: PostgreSQLIcon,
    description: 'Experienced in designing and managing relational databases with PostgreSQL.',
  },
];

const SkillsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Card flip animation variants
  const cardVariants = {
    hidden: { opacity: 0, rotateY: 180 },
    visible: { opacity: 1, rotateY: 0 },
  };

  return (
    <Box
      id="skills"
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Skills
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" sx={{ mb: 4 }}>
            Technologies I Work With
          </Typography>
        </motion.div>

        {/* Why Choose Me? Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Why Choose Me?
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
              With a strong foundation in both frontend and backend technologies, I bring a holistic approach to software development. My expertise spans across:
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Box
                  component={motion.ul}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  sx={{ listStyleType: 'none', paddingLeft: 0 }}
                >
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    style={{ marginBottom: '8px' }}
                  >
                    🚀 Full-stack development with modern frameworks like React, Angular, and Vue.js.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={{ marginBottom: '8px' }}
                  >
                    🎨 Responsive and modern UI design with Material-UI and Tailwind CSS.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    style={{ marginBottom: '8px' }}
                  >
                    🔧 Problem-solving and debugging with a focus on clean, maintainable code.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    style={{ marginBottom: '8px' }}
                  >
                    🛠️ Backend development with Node.js, Express, and MongoDB for scalable solutions.
                  </motion.li>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        {/* Skills Grid */}
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    p: 3,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                    boxShadow: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Skill Icon with Continuous Animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      component="img"
                      src={skill.icon}
                      alt={skill.name}
                      sx={{ width: 64, height: 64, mb: 2, mx: 'auto' }}
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <Typography variant="h5" gutterBottom>
                    {skill.name}
                  </Typography>

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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;