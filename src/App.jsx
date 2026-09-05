import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItWorks';
import Explore from './components/explore/Explore';
import Opportunities from './components/opportunities/Opprtunities';
import About from './components/about/About';
import Login from './components/auth/Login';
import UniversityHub from './components/university/UniversityHub';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [authMode, setAuthMode] = useState('signin');
  const [userRole, setUserRole] = useState(null);

  const handleAuthSuccess = (role) => {
    setUserRole(role);
    if (role === 'university') {
      setCurrentPage('university');
    } else {
      setCurrentPage('home');
    }
  };

const handleNavigate = (page) => {
    if (page === 'home') {
      // Dynamic Home Redirect based on persona!
      if (userRole === 'university') {
        setCurrentPage('university');
      } else {
        setCurrentPage('home'); // Public guest home page
      }
    } else if (page === 'register') {
      setAuthMode('register');
      setCurrentPage('login');
    } else if (page === 'login' || page === 'signin') {
      setAuthMode('signin');
      setCurrentPage('login');
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f0]">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} userRole={userRole} />
      
      <main>
        {currentPage === 'home' && <Hero onNavigate={handleNavigate} />}
        {currentPage === 'how-it-works' && <HowItWorks />}
        {currentPage === 'explore' && <Explore />}
        {currentPage === 'opportunities' && <Opportunities />}
        {currentPage === 'about' && <About />}
        {currentPage === 'login' && (
          <Login initialMode={authMode} key={authMode} onAuthSuccess={handleAuthSuccess} />
        )}
        {currentPage === 'university' && <UniversityHub />}
      </main>
    </div>
  );
}