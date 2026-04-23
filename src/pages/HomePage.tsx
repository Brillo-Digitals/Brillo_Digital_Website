import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Portfolio from '../components/Portfolio';
import Github from '../components/Github';
import Skills from '../components/Skills';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
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
};

export default HomePage;
