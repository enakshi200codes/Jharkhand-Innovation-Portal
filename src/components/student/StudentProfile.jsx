import React from 'react';

export default function StudentProfile() {
  return (
    <div className="space-y-8">
      
      {/* WELCOME IDENTITY BANNER */}
      <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
              VERIFIED INNOVATOR CITIZEN
            </span>
            <span className="text-[10px] font-extrabold text-slate-400">ID: JHK-STD-9012</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-900">
            Welcome back, Ananya Kumari
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Department of Computer Science & Engineering • NIT Jamshedpur • Tier 1 Innovation Fellow
          </p>
        </div>

        {/* HERO STATS */}
        <div className="flex gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Active Scholar Projects</span>
            <p className="text-2xl font-black text-slate-900">02</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Sanctioned Grants</span>
            <p className="text-2xl font-black text-emerald-800">₹3,50,000</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Lab Bench Time</span>
            <p className="text-2xl font-black text-slate-900">28 hrs</p>
          </div>
        </div>
      </div>

      {/* TWO-COLUMN GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: ACTIVE PROJECTS & TOOLKIT */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* ACTIVE SCHOLAR PROJECTS */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Active Scholar Projects
              </h2>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                6 Milestones Done
              </span>
            </div>

            <div className="space-y-4">
              {/* Project Card 1 */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                    TRL 4: BENCH TESTED
                  </span>
                  <span className="text-xs font-black text-emerald-800">₹2,00,000 Sanctioned</span>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Autonomous Drone Telemetry for Sal Forest Fire Early Detection
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    14 Sensor Nodes Active • Open-Source Edge Firmware (ROS2)
                  </p>
                </div>
                <div className="flex justify-between items-center pt-1 text-xs font-bold">
                  <span className="text-slate-500">Last Telemetry Sync: 2 hrs ago</span>
                  <button className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-[11px] font-bold rounded-xl hover:bg-slate-100 transition">
                    Open Drone Workspace →
                  </button>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                    TRL 3: PROOF OF CONCEPT
                  </span>
                  <span className="text-xs font-black text-emerald-800">₹1,50,000 Sanctioned</span>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Bilingual Speech to Text for Santhali (Ol Chiki) & Mundari Dialects
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Transformer Model API • PHC Healthcare Voice Dataset
                  </p>
                </div>
                <div className="flex justify-between items-center pt-1 text-xs font-bold">
                  <span className="text-slate-500">Evaluation Phase with Nodal Panel</span>
                  <button className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-[11px] font-bold rounded-xl hover:bg-slate-100 transition">
                    View Model Dossier →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* COLLEGIATE INNOVATION TOOLKIT */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Collegiate Innovation Toolkit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <h4 className="text-xs font-extrabold text-slate-900">Vernacular Mentor Exchange</h4>
                <p className="text-[10px] text-slate-500 font-medium">Connect with local industry leads in Santhali & Mundari</p>
                <button className="mt-2 w-full py-1.5 bg-white border border-slate-200 text-slate-800 text-[11px] font-bold rounded-xl hover:bg-slate-100 transition">
                  Access Peer Panel
                </button>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <h4 className="text-xs font-extrabold text-slate-900">Digital Asset Registration</h4>
                <p className="text-[10px] text-slate-500 font-medium">Verify your student code & design rights on-chain</p>
                <button className="mt-2 w-full py-1.5 bg-white border border-slate-200 text-slate-800 text-[11px] font-bold rounded-xl hover:bg-slate-100 transition">
                  Register Asset ID
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LABS & FELLOWSHIPS */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* UNIVERSITY SHARED LABS */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              University Shared Labs & Prototyping Infrastructure
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition flex justify-between items-center cursor-pointer">
                <div>
                  <h4 className="font-extrabold text-slate-900">Advanced Prototyping & PCB FabLab</h4>
                  <p className="text-[10px] text-slate-500">BIT Mesra Central Hub</p>
                </div>
                <span className="text-emerald-800 font-bold">Book →</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition flex justify-between items-center cursor-pointer">
                <div>
                  <h4 className="font-extrabold text-slate-900">Environmental Sensor Testing Chamber</h4>
                  <p className="text-[10px] text-slate-500">NIT Jamshedpur Campus</p>
                </div>
                <span className="text-emerald-800 font-bold">Book →</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition flex justify-between items-center cursor-pointer">
                <div>
                  <h4 className="font-extrabold text-slate-900">Material Characterization Centre</h4>
                  <p className="text-[10px] text-slate-500">IIT ISM Dhanbad Facility</p>
                </div>
                <span className="text-emerald-800 font-bold">Book →</span>
              </div>
            </div>
          </div>

          {/* SANCTIONED FELLOWSHIPS & STATE HACKATHONS */}
          <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
              STATE OPPORTUNITIES
            </span>
            <h3 className="text-sm font-black uppercase text-white">
              Sanctioned Fellowships & State Hackathons
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-emerald-900/60 rounded-xl space-y-1 border border-emerald-800">
                <h4 className="font-bold text-white">Jharkhand Green Hydrogen Challenge 2025</h4>
                <p className="text-[10px] text-emerald-200">State Grant: Up to ₹10 Lakhs</p>
                <button className="w-full py-1.5 bg-white text-emerald-950 font-extrabold rounded-lg mt-1 hover:bg-slate-100 transition">
                  Apply with One-Click AISHE
                </button>
              </div>

              <div className="p-3 bg-emerald-900/60 rounded-xl space-y-1 border border-emerald-800">
                <h4 className="font-bold text-white">Birsa Munda Agri-Tech Student Fellowship</h4>
                <p className="text-[10px] text-emerald-200">Stipend: ₹25,000/month • BAU Incubator</p>
              </div>

              <div className="p-3 bg-emerald-900/60 rounded-xl space-y-1 border border-emerald-800">
                <h4 className="font-bold text-white">Jharkhand Rural Water-Tech Hackathon</h4>
                <p className="text-[10px] text-emerald-200">Jal Shakti Ministry Joint Pilot</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}