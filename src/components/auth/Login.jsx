import React, { useState, useEffect } from 'react';

export default function Login({ initialMode = 'signin', onAuthSuccess }) {
  const [authMode, setAuthMode] = useState(initialMode);
  const [selectedRole, setSelectedRole] = useState('student');

  const handleAccountSubmit = (e) => {
    e?.preventDefault();
    if (onAuthSuccess) {
      onAuthSuccess(selectedRole);
    }
  };

  useEffect(() => {
    setAuthMode(initialMode);
  }, [initialMode]);

  const roles = [
    { id: 'student', title: 'Student', desc: 'Innovators, scholars & makers', tag: 'Individual workspace' },
    { id: 'community', title: 'Community', desc: 'Panchayats, rural collectives & local', tag: 'Grassroots/SIEG' },
    { id: 'university', title: 'University', desc: 'Academic & R&D institutions', tag: 'Institutional entity' },
    { id: 'industry', title: 'Industry', desc: 'Enterprises, startups, corporate...', tag: 'Corporate Venture' },
  ];

  const districts = [
    'Ranchi', 'Dhanbad', 'Jamshedpur (East Singhbhum)', 'Bokaro', 'Hazaribagh', 
    'Deoghar', 'Giridih', 'Ramgarh', 'Dumka', 'Gumla', 'West Singhbhum', 'Palamu'
  ];

  return (
    <div className="bg-[#f4f7f0] min-h-screen p-4 lg:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT COLUMN: State Banner */}
        <div className="lg:col-span-5 bg-emerald-950 text-white p-8 lg:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-700/50">
                GOVT OF JHARKHAND INITIATIVE
              </span>
              <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight pt-2">
                Single Window Gateway to Jharkhand's Innovation Ecosystem
              </h2>
              <p className="text-xs text-emerald-100/80 font-medium leading-relaxed">
                Unified digital infrastructure powering grassroots innovators, students, universities, enterprises, and state governance.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-emerald-800/80">
              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-emerald-900 text-emerald-300 rounded-lg text-xs">₹</span>
                <div>
                  <h4 className="text-xs font-bold text-white">₹45+ Cr State Seed Capital & Grants</h4>
                  <p className="text-[11px] text-emerald-200/70">Direct benefit transfer across incubation phases without intermediaries.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-emerald-900 text-emerald-300 rounded-lg text-xs">🏛</span>
                <div>
                  <h4 className="text-xs font-bold text-white">54 High-Tech Labs & Academic Nodes</h4>
                  <p className="text-[11px] text-emerald-200/70">Shared sandbox access at IIT ISM Dhanbad, BIT Mesra, and NIT Jamshedpur.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="p-1.5 bg-emerald-900 text-emerald-300 rounded-lg text-xs">📜</span>
                <div>
                  <h4 className="text-xs font-bold text-white">Grassroots & Tribal IP Protection</h4>
                  <p className="text-[11px] text-emerald-200/70">State-funded patent attorneys and Geographical Indication safeguards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-800/60 space-y-2 relative z-10">
            <span className="text-[9px] font-bold text-emerald-300 uppercase tracking-wider block">
              Zila Panchayat Innovator Hub • Gumla District Node
            </span>
            <p className="text-xs text-emerald-100 italic leading-relaxed">
              "The state incubation grant enabled us to pilot automated slurry pipeline safety sensors right in Jharia's open cast mines within four months."
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Auth Form */}
        <div className="lg:col-span-7 p-6 lg:p-10 space-y-6 bg-white flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Header + Tab Switcher */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {authMode === 'signin' ? 'Portal Sign In' : 'Stakeholder Onboarding'}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {authMode === 'signin' 
                    ? 'Select your portal persona and enter credentials.' 
                    : 'Register to access state innovation funds, mentors, and lab infrastructure.'
                  }
                </p>
              </div>

              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/60">
                <button
                  type="button"
                  onClick={() => setAuthMode('signin')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                    authMode === 'signin'
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => setAuthMode('register')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                    authMode === 'register'
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Create Account
                </button>
              </div>
            </div>

            {/* SHARED ROLE SELECTOR */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                Select Your Portal Persona
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setSelectedRole(r.id)}
                    className={`p-3 rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between space-y-2 ${
                      selectedRole === r.id
                        ? 'border-emerald-800 bg-emerald-50/50 ring-1 ring-emerald-800'
                        : 'border-slate-200/80 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-black text-slate-900">{r.title}</p>
                      <p className="text-[10px] text-slate-500 line-clamp-1">{r.desc}</p>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-md inline-block">
                      {r.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* DYNAMIC FORMS */}
            {authMode === 'register' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Legal Name / Authorized Lead *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Ramesh Chandra Murmu" 
                      className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Official Mobile / Email Verification *</label>
                    <input 
                      type="text" 
                      placeholder="+91 98765 43210 or email" 
                      className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Institution Roll No / AISHE Code / College *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. BIT/2022/UG/CS/084 or NIT Jsr" 
                      className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Jharkhand Domicile District *</label>
                    <select className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-800 outline-none bg-white">
                      <option value="">Select from 24 Districts</option>
                      {districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-700">Security Password *</label>
                    <input 
                      type="password" 
                      placeholder="Minimum 8 characters with 1 number & symbol" 
                      className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-800 outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input type="checkbox" id="terms" className="mt-0.5 rounded text-emerald-800 focus:ring-emerald-800" />
                  <label htmlFor="terms" className="text-[11px] text-slate-600 font-medium leading-tight">
                    I agree to the <strong>Jharkhand Civic Innovation Data Sharing Charter</strong> and confirm that any submitted IP respects tribal customary knowledge frameworks.
                  </label>
                </div>

                <button type="button" onClick={handleAccountSubmit} className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl transition cursor-pointer shadow-sm">
                  Create Civic Account & Access Portal →
                </button>
              </div>
            ) : (
              <div className="space-y-6 pt-2">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Registered Email or Mobile Number *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your registered email or phone" 
                      className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-800 outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-slate-700">Password *</label>
                      <a href="#forgot" className="text-[11px] font-bold text-emerald-800 hover:underline">Forgot Password?</a>
                    </div>
                    <input 
                      type="password" 
                      placeholder="Enter password" 
                      className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-800 outline-none"
                    />
                  </div>
                </div>

                <button type="button" onClick={handleAccountSubmit} className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl transition cursor-pointer shadow-sm">
                  Authenticate & Sign In →
                </button>
              </div>
            )}

            {/* SSO Section */}
            <div className="space-y-3 pt-2 text-center border-t border-slate-100">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                OR AUTHENTICATE VIA DIGITAL PUBLIC INFRASTRUCTURE
              </span>
              <div className="flex justify-center gap-3">
                <button type="button" className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5 cursor-pointer">
                  🛡 DigiLocker KYC
                </button>
                <button type="button" className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5 cursor-pointer">
                  🏛 MeriPehchan (Govt SSO)
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-100 pt-3 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-400 font-semibold gap-2">
            <span>256-Bit SSL Encrypted • IT Act 2000 Compliant</span>
            <span>Toll-Free Civic Helpdesk: 1800-345-6541</span>
          </div>
        </div>

      </div>
    </div>
  );
}