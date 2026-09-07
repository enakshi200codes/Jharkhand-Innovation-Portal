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
import CreateChallengeModal from './components/submission/CreateChallengeModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [authMode, setAuthMode] = useState('signin');
  const [userRole, setUserRole] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);

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

  const handleOpenChallengeModal = () => {
    setIsChallengeModalOpen(true);
  };

  const handleOpenSubmitModal = () => {
    setIsSubmitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f0]">
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        userRole={userRole} 
        onOpenSubmitModal={handleOpenSubmitModal}
      />
      
      <main>
        {/* PUBLIC GUEST HOME */}
        {currentPage === 'home' && !userRole && (
          <Hero 
            onNavigate={handleNavigate}
            onOpenSubmitModal={handleOpenSubmitModal}
          />
        )}

        {/* INFORMATIONAL PAGES */}
        {currentPage === 'how-it-works' && <HowItWorks />}
        {currentPage === 'explore' && (
          <Explore 
            onOpenSubmitModal={handleOpenSubmitModal} 
          />
        )}
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
          <UniversityHub 
            initialTab="overview" 
            userRole={userRole || 'university'}
            onOpenChallengeModal={handleOpenChallengeModal}
          />
        )}

        {/* STUDENT WORKSPACE (Defaults to Profile View) */}
        {(currentPage === 'student' || (currentPage === 'home' && userRole === 'student')) && (
          <StudentWorkspace initialTab="profile" onOpenChallengeModal={handleOpenChallengeModal} />
        )}

        {/* INDUSTRY WORKSPACE (Defaults to Corporate MoUs View) */}
        {(currentPage === 'industry' || (currentPage === 'home' && userRole === 'industry')) && (
          <UniversityHub 
            initialTab="industry" 
            userRole={userRole || 'industry'}
            onOpenChallengeModal={handleOpenChallengeModal}
          />
        )}

        {/* COMMUNITY WORKSPACE */}
        {(currentPage === 'community' || (currentPage === 'home' && userRole === 'community')) && (
          <div className="max-w-7xl mx-auto py-8 px-6 lg:px-12">
            <GrassrootsDesk 
              onOpenChallengeModal={handleOpenChallengeModal}
            />
          </div>
        )}

        {/* STATE GOVERNANCE / ADMIN WORKSPACE */}
        {(currentPage === 'government' || currentPage === 'admin' || (currentPage === 'home' && userRole === 'admin')) && (
          <div className="max-w-7xl mx-auto py-8 px-6 lg:px-12">
            <StateGovernanceHub />
          </div>
        )}
      </main>

      {/* GLOBAL MODALS */}
      <SubmitIdeaModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />

      <CreateChallengeModal
        isOpen={isChallengeModalOpen}
        onClose={() => setIsChallengeModalOpen(false)}
        userRole={userRole}
      />
    </div>
  );
}