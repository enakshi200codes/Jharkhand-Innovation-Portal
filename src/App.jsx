import React, { useState, useEffect } from 'react';
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
  // Restore user role from localStorage if available
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('jh_user_role') || null;
  });

  // Restore active page or default based on logged-in user role
  const [currentPage, setCurrentPage] = useState(() => {
    const savedRole = localStorage.getItem('jh_user_role');
    const savedPage = localStorage.getItem('jh_current_page');
    if (savedRole) {
      return savedPage || savedRole;
    }
    return savedPage || 'home';
  });

  const [authMode, setAuthMode] = useState('signin');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);

  // Sync state to browser history and localStorage
  const navigateTo = (page, mode = 'signin') => {
    setCurrentPage(page);
    setAuthMode(mode);
    localStorage.setItem('jh_current_page', page);
    window.history.pushState({ page, mode }, '', `/#${page}`);
  };

  // Sync initial state entry on mount
  useEffect(() => {
    window.history.replaceState({ page: currentPage, mode: authMode }, '', `/#${currentPage}`);
  }, []);

  // Handle Browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
        localStorage.setItem('jh_current_page', event.state.page);
        if (event.state.mode) {
          setAuthMode(event.state.mode);
        }
      } else {
        const fallback = userRole || 'home';
        setCurrentPage(fallback);
        localStorage.setItem('jh_current_page', fallback);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [userRole]);

  // Handle successful login/registration
  const handleAuthSuccess = (role) => {
    setUserRole(role);
    localStorage.setItem('jh_user_role', role);
    navigateTo(role);
  };

  // Handle logout (Clear stored session)
  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem('jh_user_role');
    localStorage.removeItem('jh_current_page');
    navigateTo('home');
  };

  const handleNavigate = (page) => {
    if (page === 'logout') {
      handleLogout();
      return;
    }

    if (page === 'home') {
      if (userRole) {
        navigateTo(userRole);
      } else {
        navigateTo('home');
      }
    } else if (page === 'register') {
      navigateTo('login', 'register');
    } else if (page === 'login' || page === 'signin') {
      navigateTo('login', 'signin');
    } else {
      navigateTo(page);
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

        {/* UNIVERSITY WORKSPACE */}
        {(currentPage === 'university' || (currentPage === 'home' && userRole === 'university')) && (
          <UniversityHub 
            initialTab="overview" 
            userRole={userRole || 'university'}
            onOpenChallengeModal={handleOpenChallengeModal}
            onOpenSubmitModal={handleOpenSubmitModal}
          />
        )}

        {/* STUDENT WORKSPACE */}
        {(currentPage === 'student' || (currentPage === 'home' && userRole === 'student')) && (
          <StudentWorkspace 
            initialTab="profile" 
            onOpenChallengeModal={handleOpenChallengeModal}
            onOpenSubmitModal={handleOpenSubmitModal}
          />
        )}

        {/* INDUSTRY WORKSPACE */}
        {(currentPage === 'industry' || (currentPage === 'home' && userRole === 'industry')) && (
          <UniversityHub 
            initialTab="industry" 
            userRole={userRole || 'industry'}
            onOpenChallengeModal={handleOpenChallengeModal}
            onOpenSubmitModal={handleOpenSubmitModal}
          />
        )}

        {/* COMMUNITY WORKSPACE */}
        {(currentPage === 'community' || (currentPage === 'home' && userRole === 'community')) && (
          <div className="max-w-7xl mx-auto py-8 px-6 lg:px-12">
            <GrassrootsDesk 
              onOpenChallengeModal={handleOpenChallengeModal}
              onOpenSubmitModal={handleOpenSubmitModal}
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