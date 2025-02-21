// src/components/AboutSection.jsx
import { Box, Typography, Container } from "@mui/material";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
    triggerOnce: false, // Allow animations to replay
  });

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
      id="about"
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
        <AnimatePresence>
          {inView && (
            <>
              {/* Heading */}
              <motion.div
                key="heading"
                initial="hidden"
                animate={controls}
                exit="hidden" // Reset animation on exit
                variants={textVariants}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="h4" color="primary" gutterBottom>
                  About Me
                </Typography>
              </motion.div>

              {/* Name and Experience */}
              <motion.div
                key="name"
                initial="hidden"
                animate={controls}
                exit="hidden" // Reset animation on exit
                variants={textVariants}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                
                <Typography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
                  Full Stack Developer | 4+ Years of Experience
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                key="description"
                initial="hidden"
                animate={controls}
                exit="hidden" // Reset animation on exit
                variants={textVariants}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ maxWidth: "100%" }}
              >
                <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                  I am a passionate Full Stack Developer with over 4 years of experience in building scalable and modern web applications. My expertise spans across both frontend and backend technologies, and I have a proven track record of delivering high-quality, user-friendly applications.
                </Typography>

                {/* Skills Section */}
                <Box sx={{ textAlign: "left", mb: 4 }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Skills & Expertise
                  </Typography>
                  <Box
                    component={motion.ul}
                    initial="hidden"
                    animate={controls}
                    exit="hidden" // Reset animation on exit
                    variants={textVariants}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    sx={{ listStyleType: "none", paddingLeft: 0 }}
                  >
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      style={{ marginBottom: "8px" }}
                    >
                      🚀 <strong>Frontend:</strong> React, Next.js, Redux, HTML, CSS, JavaScript (ES6+)
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      style={{ marginBottom: "8px" }}
                    >
                      🛠️ <strong>Backend:</strong> Node.js, Express, MongoDB, RESTful APIs, GraphQL
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                      style={{ marginBottom: "8px" }}
                    >
                      🔧 <strong>Tools:</strong> Git, Docker, AWS, CI/CD pipelines
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                      style={{ marginBottom: "8px" }}
                    >
                      🎨 <strong>UI/UX:</strong> Material-UI, Tailwind CSS, Figma
                    </motion.li>
                  </Box>
                </Box>

                {/* Call to Action */}
                <motion.div
                  initial="hidden"
                  animate={controls}
                  exit="hidden" // Reset animation on exit
                  variants={textVariants}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <Typography variant="body1" color="textSecondary" sx={{ mt: 4 }}>
                    Let's build something amazing together! Feel free to reach out to me for collaborations or job opportunities.
                  </Typography>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default AboutSection;