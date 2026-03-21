
import Background from './components/Background';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import Github from './components/Github';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import { Routes, Route, Link } from 'react-router-dom';
import PortfolioCategory from './pages/PortfolioCategory';
import BlogList from './pages/BlogList';

function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 px-6 md:px-12 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center">
          <Link to="/">
            <img src="/b_d_logo.png" alt="Brillo Digitals" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-brand transition-colors text-text/80">Home</a>
          <a href="#about" className="hover:text-brand transition-colors text-text/80">About</a>
          <a href="#expertise" className="hover:text-brand transition-colors text-text/80">Expertise</a>
          <a href="#portfolio" className="hover:text-brand transition-colors text-text/80">Portfolio</a>
          <a href="#github" className="hover:text-brand transition-colors text-text/80">Open Source</a>
          <a href="#blog" className="hover:text-brand transition-colors text-text/80">Blog</a>
          <a href="#contact" className="hover:text-brand transition-colors text-text/80">Contact</a>
        </div>
      </nav>

      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <Github />
      <Skills />
      <BlogSection />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full relative selection:bg-brand/30 selection:text-white cursor-none md:cursor-auto bg-background">
      <Cursor />
      <Background />

      <main className="relative z-10 w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:category" element={<PortfolioCategory />} />
          <Route path="/blog" element={<BlogList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
