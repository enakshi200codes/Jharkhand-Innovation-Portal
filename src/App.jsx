import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItWorks';
import Explore from './components/explore/Explore';
import Opportunities from './components/opportunities/Opprtunities';
import About from './components/about/About';
import Login from './components/auth/Login';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#f4f7f0]">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === 'home' && <Hero onNavigate={setCurrentPage} />}
      {currentPage === 'how-it-works' && <HowItWorks />}
      {currentPage === 'explore' && <Explore />}
      {currentPage === 'login' && <Login onSwitchToRegister={() => setCurrentPage('register')} />}
      {currentPage === 'opportunities' && <Opportunities/>}
      {currentPage === 'about' && <About/>}
    </div>
  );
}