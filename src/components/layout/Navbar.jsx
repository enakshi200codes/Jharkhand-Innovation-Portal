import React from 'react';
export default function Navbar({onNavigate, currentPage}) {
    return(
        <header className="w-full bg-[#f4f7f0] border-b border-emerald-100/60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div onClick={() => onNavigate('home')} className="flex items-center gap-3 cursor-pointer">
                    <img src="../../assets/SIH-logo.png" alt="Logo" className="h-10 w-auto object-contain"/>
                    <div className="leading-tight border-l border-slate-300 pl-3">
                        <span className="font-bold text-emerald-600 block text-base tracking-tight">Jharkhand Innovation Portal</span>
                        <span className="text-xs text-emerald-700 block -mt-1 font-medium">Government of Jharkhand</span>
                    </div>
                </div>

                <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700 bg-emerald-100/30 p-1.5 rounded-full border border-emerald-200/40">
                    <button 
            onClick={() => onNavigate('home')}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              currentPage === 'home' 
                ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
                : 'hover:text-slate-900'
            }`}
          >
            Home
          </button>
          
          <button 
            onClick={() => onNavigate('explore')}
            className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
              currentPage === 'explore' 
                ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
                : 'hover:text-slate-900'
            }`}
          >
            Explore
          </button>
          
          <button onClick={() => onNavigate('how-it-works')} className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
            currentPage === 'how-it-works' 
                ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
                : 'hover:text-slate-900'
            }`}>
            How It Works
          </button>
          <button onClick={() => onNavigate('opportunities')}
  className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
    currentPage === 'opportunities' 
      ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
      : 'hover:text-slate-900'
  }`}>
            Opportunities
          </button>
          <button onClick={() => onNavigate('about')}
  className={`px-4 py-1.5 rounded-full transition cursor-pointer ${
    currentPage === 'about' 
      ? 'bg-emerald-200/80 text-emerald-900 font-semibold shadow-xs' 
      : 'hover:text-slate-900'
  }`}>
            About
          </button>
                </nav>

                <div className="flex items-center gap-3">
                    <button onClick={() => onNavigate('login')} className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer">
                        Login
                    </button>
                    <button className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition cursor-pointer">
                        Register
                    </button>
                    <button className="px-4 py-2 text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg shadow-sm transition cursor-pointer">
                        Submit an Idea
                    </button>
                    <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center cursor-pointer text-xs">
                    👤
                    </div>
                </div>
            </div>
        </header>
    )
}