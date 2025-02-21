// src/components/ExperienceSection.jsx
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const corporateExperiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2021 - Present",
    description: [
      "Developed and maintained scalable web applications using React, Node.js, and MongoDB.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Implemented RESTful APIs and integrated third-party services.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Web Innovators",
    duration: "Jun 2019 - Dec 2020",
    description: [
      "Built responsive and user-friendly interfaces using React and Material-UI.",
      "Optimized web applications for performance and accessibility.",
      "Worked closely with designers to implement UI/UX best practices.",
    ],
  },
];

const academicExperiences = [
  {
    id: 1,
    institution: "University of Tech",
    degree: "Bachelor of Science in Computer Science",
    duration: "2016 - 2020",
    description: [
      "Graduated with honors, specializing in software development and algorithms.",
      "Completed coursework in Data Structures, Algorithms, and Web Development.",
    ],
  },
  {
    id: 2,
    institution: "Green Valley High School",
    degree: "High School Diploma",
    duration: "2012 - 2016",
    description: [
      "Achieved top grades in Mathematics and Computer Science.",
      "Participated in coding competitions and science fairs.",
    ],
  },
];

const ExperienceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false }); // Reset animations when in view again

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset to hidden state when out of view
    }
  }, [controls, inView]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="experience"
      ref={ref}
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        py: 8,
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.paper",
      }}
    >
      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(45deg, #1976d2, #2196f3)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(45deg, #dc004e, #f48fb1)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Experience
          </Typography>
        </motion.div>

        {/* Split Layout: Corporate and Academic */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Left Side: Corporate Experience */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography variant="h5" color="primary" gutterBottom>
                Corporate Experience
              </Typography>
              {corporateExperiences.map((experience, index) => (
                <Box
                  key={experience.id}
                  sx={{
                    mb: 4,
                    p: 3,
                    bgcolor: "background.default",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {experience.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {experience.company} | {experience.duration}
                  </Typography>
                  <Box
                    component={motion.ul}
                    initial="hidden"
                    animate={controls}
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    sx={{ listStyleType: "none", paddingLeft: 0 }}
                  >
                    {experience.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                        style={{ marginBottom: "8px" }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Grid>

          {/* Right Side: Academic Experience */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography variant="h5" color="primary" gutterBottom>
                Academic Background
              </Typography>
              {academicExperiences.map((experience, index) => (
                <Box
                  key={experience.id}
                  sx={{
                    mb: 4,
                    p: 3,
                    bgcolor: "background.default",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {experience.institution}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {experience.degree} | {experience.duration}
                  </Typography>
                  <Box
                    component={motion.ul}
                    initial="hidden"
                    animate={controls}
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    sx={{ listStyleType: "none", paddingLeft: 0 }}
                  >
                    {experience.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                        style={{ marginBottom: "8px" }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExperienceSection;