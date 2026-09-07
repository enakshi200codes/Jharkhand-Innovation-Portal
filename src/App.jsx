import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import SubmitIdeaModal from './components/submission/SubmitIdeaModal';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItWorks';
import Explore from './components/explore/Explore';
import Opportunities from './components/opportunities/Opprtunities';
import About from './components/about/About';
import Login from './components/auth/Login';
import UniversityHub from './components/university/UniversityHub';
import StudentWorkspace from './components/student/StudentWorkspace';
import GrassrootsDesk from './components/university/GrassrootsDesk';
import StateGovernanceHub from './components/admin/StateGovernanceHub';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [authMode, setAuthMode] = useState('signin');
  const [userRole, setUserRole] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const handleAuthSuccess = (role) => {
    setUserRole(role);
    // Route directly to the persona view when signed in
    setCurrentPage(role); 
  };

  const handleNavigate = (page) => {
    if (page === 'home') {
      if (userRole) {
        setCurrentPage(userRole);
      } else {
        setCurrentPage('home');
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
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        userRole={userRole} 
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />
      
      <main>
        {/* PUBLIC GUEST HOME */}
        {currentPage === 'home' && !userRole && (
          <Hero onNavigate={handleNavigate} />
        )}

        {/* INFORMATIONAL PAGES */}
        {currentPage === 'how-it-works' && <HowItWorks />}
        {currentPage === 'explore' && <Explore />}
        {currentPage === 'opportunities' && <Opportunities />}
        {currentPage === 'about' && <About />}

        {/* AUTH PAGE */}
        {currentPage === 'login' && (
          <Login 
            initialMode={authMode} 
            key={authMode} 
            onAuthSuccess={handleAuthSuccess} 
          />
        )}

        {/* UNIVERSITY WORKSPACE (Defaults to Overview) */}
        {(currentPage === 'university' || (currentPage === 'home' && userRole === 'university')) && (
          <UniversityHub initialTab="overview" />
        )}

        {/* STUDENT WORKSPACE (Defaults to Profile View) */}
        {(currentPage === 'student' || (currentPage === 'home' && userRole === 'student')) && (
          <StudentWorkspace initialTab="profile" />
        )}

        {/* INDUSTRY WORKSPACE (Defaults to Corporate MoUs View) */}
        {(currentPage === 'industry' || (currentPage === 'home' && userRole === 'industry')) && (
          <UniversityHub initialTab="industry" />
        )}

        {(currentPage === 'community' || (currentPage === 'home' && userRole === 'community')) && (
          <div className="max-w-7xl mx-auto py-8 px-6 lg:px-12">
            <GrassrootsDesk />
          </div>
        )}

        {(currentPage === 'government' || currentPage === 'admin' || (currentPage === 'home' && userRole === 'admin')) && (
  <div className="max-w-7xl mx-auto py-8 px-6 lg:px-12">
    <StateGovernanceHub />
  </div>
)}
      </main>

      {/* GLOBAL SUBMIT IDEA MODAL */}
      <SubmitIdeaModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </div>
  );
}