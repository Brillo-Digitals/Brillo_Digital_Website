import { lazy, Suspense } from 'react';
import Background from './components/Background';
import Cursor from './components/Cursor';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/HomePage'));
const PortfolioCategory = lazy(() => import('./pages/PortfolioCategory'));
const PortfolioProject = lazy(() => import('./pages/PortfolioProject'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));

function App() {
  return (
    <div className="min-h-screen w-full relative selection:bg-brand/30 selection:text-white cursor-none md:cursor-auto bg-background">
      <Cursor />
      <Background />
      <Navbar />

      <main className="relative z-10 w-full overflow-hidden">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center px-6">
              <div className="glass rounded-full border border-brand/30 px-6 py-3 text-sm tracking-[0.14em] uppercase text-brand-light">
                Loading page
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/:category" element={<PortfolioCategory />} />
            <Route path="/portfolio/project/:id/:slug?" element={<PortfolioProject />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
