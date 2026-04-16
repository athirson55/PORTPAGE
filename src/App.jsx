import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="page-shell relative overflow-hidden text-slate-100">
      <div className="hero-gradient pointer-events-none" />
      <Header />
      <div className="content-wrap container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;
