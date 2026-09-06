import React from 'react';
import logo from '../../assets/SIH-logo.png';

export default function Navbar({ onNavigate, currentPage, userRole, onOpenSubmitModal }) {
  // Config map for custom role display titles and icons
  const roleConfig = {
    university: { label: 'R&D Dashboard', badge: '🏛 Academic Node', icon: '🏛' },
    student: { label: 'Student Hub', badge: '🎓 Innovator Workspace', icon: '🎓' },
    community: { label: 'Community Desk', badge: '🌾 Grassroots/SIEG', icon: '🌾' },
    industry: { label: 'Corporate Portal', badge: '💼 Venture Sandbox', icon: '💼' },
  };

  const activeRole = roleConfig[userRole];

  return (
    <header className="w-full bg-[#f4f7f0] border-b border-emerald-100/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO & BRAND */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain"/>
          <div className="leading-tight border-l border-slate-300 pl-3">
            <span className="font-bold text-emerald-600 block text-base tracking-tight">
              Jharkhand Innovation Portal
            </span>
            <span className="text-xs text-emerald-700 block -mt-1 font-medium">
              Government of Jharkhand
            </span>
          </div>
        </div>

        {/* MAIN NAVIGATION TABS */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700 bg-emerald-100/30 p-1.5 rounded-full border border-emerald-200/40">
          
          {/* HOME / ROLE DASHBOARD TAB */}
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

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          {activeRole ? (
            /* LOGGED IN ROLE BADGE */
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider bg-emerald-800 text-white px-3 py-1.5 rounded-full shadow-xs">
                {activeRole.badge}
              </span>
              <div className="w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center cursor-pointer text-xs font-bold border border-emerald-700">
                {activeRole.icon}
              </div>
            </div>
          ) : (
            /* GUEST STATE */
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

          <button 
            type="button"
            onClick={onOpenSubmitModal}
            className="px-4 py-2 text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg shadow-sm transition cursor-pointer"
          >
            Submit an Idea
          </button>
        </div>

      </div>
    </header>
  );
}