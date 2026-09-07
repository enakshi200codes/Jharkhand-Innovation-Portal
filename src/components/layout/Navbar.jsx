import React, { useState } from 'react';
import logo from '../../assets/SIH-logo.png';

export default function Navbar({ onNavigate, currentPage, userRole, onOpenSubmitModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Config map for custom role display titles and icons
  const roleConfig = {
    university: { label: 'R&D Dashboard', badge: '🏛 Academic Node', icon: '🏛' },
    student: { label: 'Student Hub', badge: '🎓 Innovator Workspace', icon: '🎓' },
    community: { label: 'Community Desk', badge: '🌾 Grassroots/SIEG', icon: '🌾' },
    industry: { label: 'Corporate Portal', badge: '💼 Venture Sandbox', icon: '💼' },
    government: { label: 'State Governance', badge: '🏛️ IAS Console', icon: '🏛️' },
  };

  const activeRole = roleConfig[userRole];

  const handleMobileNav = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#f4f7f0] border-b border-emerald-100/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* LOGO & BRAND */}
        <div 
          onClick={() => handleMobileNav('home')} 
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="h-9 sm:h-10 w-auto object-contain"/>
          <div className="leading-tight border-l border-slate-300 pl-3">
            <span className="font-bold text-emerald-600 block text-sm sm:text-base tracking-tight">
              Jharkhand Innovation Portal
            </span>
            <span className="text-[10px] sm:text-xs text-emerald-700 block -mt-1 font-medium">
              Government of Jharkhand
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION TABS */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700 bg-emerald-100/30 p-1.5 rounded-full border border-emerald-200/40">
          <button 
            type="button"
            onClick={() => onNavigate('home')}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              currentPage === 'home' || currentPage === userRole
                ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
                : 'hover:text-slate-900'
            }`}
          >
            {activeRole ? activeRole.label : 'Home'}
          </button>

          <button 
            type="button"
            onClick={() => onNavigate('explore')}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              currentPage === 'explore' 
                ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
                : 'hover:text-slate-900'
            }`}
          >
            Explore
          </button>

          <button 
            type="button"
            onClick={() => onNavigate('how-it-works')} 
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              currentPage === 'how-it-works' 
                ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
                : 'hover:text-slate-900'
            }`}
          >
            How It Works
          </button>

          <button 
            type="button"
            onClick={() => onNavigate('opportunities')}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              currentPage === 'opportunities' 
                ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
                : 'hover:text-slate-900'
            }`}
          >
            Opportunities
          </button>

          <button 
            type="button"
            onClick={() => onNavigate('about')}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              currentPage === 'about' 
                ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
                : 'hover:text-slate-900'
            }`}
          >
            About
          </button>
        </nav>

        {/* RIGHT DESKTOP ACTIONS + MOBILE HAMBURGER BUTTON */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-3">
            {activeRole ? (
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider bg-emerald-800 text-white px-3 py-1.5 rounded-full shadow-xs">
                  {activeRole.badge}
                </span>
                <div className="w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center cursor-pointer text-xs font-bold border border-emerald-700">
                  {activeRole.icon}
                </div>
              </div>
            ) : (
              <>
                <button 
                  type="button"
                  onClick={() => onNavigate('login')} 
                  className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer"
                >
                  Login
                </button>
                <button 
                  type="button"
                  onClick={() => onNavigate('register')} 
                  className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer"
                >
                  Register
                </button>
              </>
            )}
          </div>

          <button 
            type="button"
            onClick={onOpenSubmitModal}
            className="hidden xs:block px-3.5 sm:px-4 py-2 text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg shadow-sm transition cursor-pointer"
          >
            Submit Idea
          </button>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-emerald-800 focus:outline-none cursor-pointer"
          >
            <span className="text-xl font-black">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN PANEL */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          {activeRole && (
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-2xl border border-emerald-100 mb-2">
              <span className="text-xs font-black text-emerald-900">{activeRole.label}</span>
              <span className="text-[10px] font-extrabold uppercase bg-emerald-800 text-white px-2.5 py-1 rounded-full">
                {activeRole.badge}
              </span>
            </div>
          )}

          <div className="flex flex-col space-y-1 text-xs font-extrabold text-slate-700">
            <button 
              type="button" 
              onClick={() => handleMobileNav('home')}
              className={`p-2.5 text-left rounded-xl ${currentPage === 'home' || currentPage === userRole ? 'bg-emerald-100 text-emerald-900' : 'hover:bg-slate-50'}`}
            >
              {activeRole ? activeRole.label : 'Home'}
            </button>
            <button 
              type="button" 
              onClick={() => handleMobileNav('explore')}
              className={`p-2.5 text-left rounded-xl ${currentPage === 'explore' ? 'bg-emerald-100 text-emerald-900' : 'hover:bg-slate-50'}`}
            >
              Explore
            </button>
            <button 
              type="button" 
              onClick={() => handleMobileNav('how-it-works')}
              className={`p-2.5 text-left rounded-xl ${currentPage === 'how-it-works' ? 'bg-emerald-100 text-emerald-900' : 'hover:bg-slate-50'}`}
            >
              How It Works
            </button>
            <button 
              type="button" 
              onClick={() => handleMobileNav('opportunities')}
              className={`p-2.5 text-left rounded-xl ${currentPage === 'opportunities' ? 'bg-emerald-100 text-emerald-900' : 'hover:bg-slate-50'}`}
            >
              Opportunities
            </button>
            <button 
              type="button" 
              onClick={() => handleMobileNav('about')}
              className={`p-2.5 text-left rounded-xl ${currentPage === 'about' ? 'bg-emerald-100 text-emerald-900' : 'hover:bg-slate-50'}`}
            >
              About
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {!activeRole && (
              <div className="grid grid-cols-2 gap-2">
                <button 
                  type="button" 
                  onClick={() => handleMobileNav('login')}
                  className="py-2.5 text-center bg-slate-100 text-slate-800 rounded-xl text-xs font-bold"
                >
                  Login
                </button>
                <button 
                  type="button" 
                  onClick={() => handleMobileNav('register')}
                  className="py-2.5 text-center bg-slate-100 text-slate-800 rounded-xl text-xs font-bold"
                >
                  Register
                </button>
              </div>
            )}

            <button 
              type="button" 
              onClick={() => { setMobileMenuOpen(false); onOpenSubmitModal(); }}
              className="w-full py-2.5 text-center bg-emerald-800 text-white rounded-xl text-xs font-extrabold shadow-xs"
            >
              Submit an Idea
            </button>
          </div>
        </div>
      )}
    </header>
  );
}