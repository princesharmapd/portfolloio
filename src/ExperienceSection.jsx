// src/components/ExperienceSection.jsx
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const corporateExperiences = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    company: "Aligned Automation services pvt. ltd.",
    duration: "March 2023 - Present",
    description: [
      "Built scalable web apps using React, Node.js, and MongoDB.",
      "Designed RESTful APIs and integrated third-party services.",
      "Collaborated with cross-functional teams to deliver high-quality solutions.",
    ],
  },
  {
    id: 2,
    title: "Technical support Engineer",
    company: "Aligned Automation services pvt. ltd.",
    duration: "June 2021 - Feburary 2023",
    description: [
      "Developed responsive UIs using React and Material-UI.",
      "Optimized web apps for performance and accessibility.",
      "Worked with designers to implement UI/UX best practices.",
    ],
  },
];

const academicExperiences = [
  {
    id: 1,
    institution: "Assam Down Town University",
    degree: "Bachelor of Cloud Technology and Information Security",
    duration: "2019 - 2024",
    description: [
      "Specialized in cloud computing, cybersecurity, and secure software development.",
      "Hands-on experience with AWS, Azure, and Google Cloud.",
      "Proficient in Python, Java, and C++ for scalable applications.",
    ],
  },
  {
    id: 2,
    institution: "Rajagopal Polytechnic College",
    degree: "Electronics and Communication Engineering",
    duration: "2015 - 2018",
    description: [
      "Expertise in electronics, embedded systems, and signal processing.",
      "Developed IoT and robotics projects using C and Python.",
      "Achieved top grades in Mathematics and Computer Science.",
    ],
  },
  {
    id: 3,
    institution: "Model Higher Secondary School Kohima",
    degree: "11th and 12th Science",
    duration: "2012 - 2014",
    description: [
      "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
      "Participated in coding competitions and science fairs.",
      "Developed strong analytical and problem-solving skills.",
    ],
  },
  {
    id: 4,
    institution: "Chandmari Higher Secondary School Kohima",
    degree: "1st to 10th Standard",
    duration: "2012 - 2016",
    description: [
      "Strong academic foundation in Mathematics and Computer Science.",
      "Participated in coding competitions and science fairs.",
      "Developed teamwork and time management skills.",
    ],
  },
];

const ExperienceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Variants for sliding animations
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
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
        transition={{ duration: 2, delay: 0.5 }}
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
        transition={{ duration: 2, delay: 0.7 }}
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
          variants={slideFromLeft} // Slide from left
          transition={{ duration: 1.5, delay: 0.2 }}
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
              variants={slideFromLeft} // Slide from left
              transition={{ duration: 1.5, delay: 0.4 }}
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
                    variants={slideFromLeft} // Slide from left
                    transition={{ duration: 1.5, delay: 0.6 + index * 0.3 }}
                    sx={{ listStyleType: "none", paddingLeft: 0 }}
                  >
                    {experience.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 + i * 0.3 }}
                        style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}
                      >
                        <Box
                          component="span"
                          sx={{
                            width: "6px",
                            height: "6px",
                            bgcolor: "primary.main",
                            borderRadius: "50%",
                            mr: 1,
                          }}
                        />
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
              variants={slideFromRight} // Slide from right
              transition={{ duration: 1.5, delay: 0.6 }}
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
                    variants={slideFromRight} // Slide from right
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.3 }}
                    sx={{ listStyleType: "none", paddingLeft: 0 }}
                  >
                    {experience.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 + i * 0.3 }}
                        style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}
                      >
                        <Box
                          component="span"
                          sx={{
                            width: "6px",
                            height: "6px",
                            bgcolor: "primary.main",
                            borderRadius: "50%",
                            mr: 1,
                          }}
                        />
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