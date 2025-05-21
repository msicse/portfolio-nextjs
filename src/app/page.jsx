import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {  return (
    <main>
      <SEO />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Education />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}