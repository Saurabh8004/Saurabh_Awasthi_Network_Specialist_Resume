import NetworkCanvas from './components/NetworkCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Clients from './components/Clients';
import Impact from './components/Impact';
import NetworkOps from './components/NetworkOps';
import ProblemSolving from './components/ProblemSolving';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#05070A] text-gray-200 overflow-x-hidden">
      {/* Animated Network Background */}
      <NetworkCanvas />
      
      {/* Grid overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        
        <div className="section-divider" />
        <About />
        
        <div className="section-divider" />
        <Capabilities />
        
        <div className="section-divider" />
        <Experience />
        
        <div className="section-divider" />
        <Clients />
        
        <div className="section-divider" />
        <Impact />
        
        <div className="section-divider" />
        <NetworkOps />
        
        <div className="section-divider" />
        <ProblemSolving />
        
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
