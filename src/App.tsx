import SubtleBackground from './components/SubtleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Clients from './components/Clients';
import Impact from './components/Impact';
import Approach from './components/Approach';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B1220] text-[#F5F7FA] overflow-x-hidden">
      {/* Subtle Background */}
      <SubtleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        
        <div className="section-divider" />
        <About />
        
        <div className="section-divider" />
        <Skills />
        
        <div className="section-divider" />
        <Experience />
        
        <div className="section-divider" />
        <Clients />
        
        <div className="section-divider" />
        <Impact />
        
        <div className="section-divider" />
        <Approach />
        
        <div className="section-divider" />
        <Certifications />
        
        <div className="section-divider" />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
