import React from 'react';
import './index.css';
import Hero from './components/Hero';
import InteractiveShowcase from './components/InteractiveShowcase';
import DashboardCards from './components/DashboardCards';
import BeliefBreaker from './components/BeliefBreaker';
import Solution from './components/Solution';
import InteractiveSolutions from './components/InteractiveSolutions';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Videos from './components/Videos';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <InteractiveShowcase />
      <DashboardCards />
      <BeliefBreaker />
      <Solution />
      <InteractiveSolutions />
      <Testimonials />
      <Videos />
      <Differentials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      
      <a href="https://wa.me/5554992977120" target="_blank" rel="noreferrer" className="fixed-whatsapp" aria-label="Abrir WhatsApp">
        <svg fill="#fff" width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.13.559 4.195 1.621 6L.266 23.36l5.503-1.446c1.78.966 3.774 1.476 5.86 1.476 6.645 0 12.03-5.385 12.03-12.03S18.275 0 11.63 0z"/>
        </svg>
      </a>
    </div>
  );
}
