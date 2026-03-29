
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
import { Routes, Route } from 'react-router-dom';
import PortfolioCategory from './pages/PortfolioCategory';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import Navbar from './components/Navbar';

function Home() {
  return (
    <>


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
      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:category" element={<PortfolioCategory />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
