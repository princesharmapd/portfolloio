// src/App.jsx
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Layout from './Layout';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';

function App({ toggleTheme, isDarkMode }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Layout id="root">
  <HeroSection />
  <AboutSection />
  <ExperienceSection />
  <SkillsSection />
  <ProjectsSection />
  <ContactSection />
</Layout>
      <Footer />
    </>
  );
}

export default App;