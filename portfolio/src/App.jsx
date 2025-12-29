import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-nord-dark text-nord-text min-h-screen selection:bg-nord-accent/30 selection:text-nord-accent">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 sm:px-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
