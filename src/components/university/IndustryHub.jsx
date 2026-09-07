import React, { useState } from 'react';

export default function IndustryHub() {
  const [selectedSkill, setSelectedSkill] = useState('All');

  const challenges = [
    {
      id: 'CH-2024-SLAG-05',
      title: 'Slag Repurposing & Heavy Metal Leaching Prevention in Tailing Ponds',
      desc: 'Targeting novel geochemical stabilization and value extraction of mineral tailings for construction-grade geopolymer applications.',
      grantPool: '₹15 Lakh Pool',
      submissions: '8 Submissions Received',
      shortlisted: '2 Shortlisted Prototypes (TRL-5)',
      deadline: '15 Oct 2025',
      badge: 'EVALUATION PHASE',
      badgeColor: 'bg-amber-100 text-amber-900',
    },
    {
      id: 'CH-2024-AGRI-14',
      title: 'Low-Power Solar Cold-Storage for Forest Produce (Mahua & Lac)',
      desc: 'Decentralized 500kg micro-cold vaults driven by thermal battery storage to prevent spoilage and extend distress sale window.',
      location: 'Khunti Tribal SHG Collective & Birsa Agri University (Murhu Block)',
      badge: 'LIVE FIELD PILOT',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      telemetry: 'Unit 12 Online',
    },
    {
      id: 'CH-2024-EDGE-02',
      title: 'Real-Time Conveyor Belt Tear Detection using Edge AI',
      desc: 'Ultra-fast visual anomaly scanning at 4.2m/s bulk material transfer lines in coal and limestone handling facilities.',
      proposals: '14 Student & Startup Proposals',
      badge: 'SCOUTING PHASE',
      badgeColor: 'bg-blue-100 text-blue-900',
    },
  ];

  const talentList = [
    {
      id: 'TAL-01',
      name: 'Ramesh Murmu',
      role: 'NIT Jamshedpur • 4th Year B.Tech',
      trl: 'TRL-5 Hardware Creator',
      desc: 'Built an edge LoRaWAN vibration logger for underground heavy mining equipment, pilot validated.',
      skills: ['Prototyping', 'LoRaWAN', 'C++'],
    },
    {
      id: 'TAL-02',
      name: 'Sneha Kumari',
      role: 'BIT Sindri • M.Tech AI & Robotics',
      trl: 'Top Innovator Dhanbad Hub',
      desc: 'Published researcher in drone-based thermal anomaly detection for power plant chimney inspections.',
      skills: ['PyTorch', 'Edge AI', 'Drone Imagery'],
    },
    {
      id: 'TAL-03',
      name: 'Ankit Lakra',
      role: 'IIT ISM Dhanbad • Ph.D. Scholar',
      trl: 'Mining & Geo-Engineering',
      desc: 'Specialist in acoustic emission sensors for opencast mine slope stability prediction.',
      skills: ['Rock Mechanics', 'Sensor Networks', 'MATLAB'],
    },
  ];

  return (
    <div className="space-y-8">
      
      {/* CORPORATE DESK HEADER BANNER */}
      <div className="bg-[#122b1e] text-white p-8 rounded-3xl space-y-4 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-900 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
                VERIFIED CORPORATE DESK
              </span>
              <span className="text-[10px] font-extrabold text-emerald-300">IND-2025B84 • JAMSHEDPUR</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black">
              Tata Steel Innovation & Sustainability Lab
            </h1>
            <p className="text-xs text-emerald-100/80 font-medium mt-1">
              Engage Jharkhand's Top 50+ Engineering Colleges & Grassroots Makers to Solve Technical Challenges.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              type="button"
              onClick={() => alert('Launching Challenge Wizard...')}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition cursor-pointer shadow-xs"
            >
              + Post New Challenge
            </button>
          </div>
        </div>

        {/* OPERATIONS & GRANTS METRICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-slate-800">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Challenges</span>
            <p className="text-xl font-black text-slate-900">3 Live Calls</p>
            <span className="text-[10px] font-semibold text-emerald-700">12 Solutions Received</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sponsored Field Pilots</span>
            <p className="text-xl font-black text-emerald-800">4 Pilots Active</p>
            <span className="text-[10px] font-semibold text-emerald-700">₹42L Outlay Disbursed</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active University MoUs</span>
            <p className="text-xl font-black text-slate-900">3 Institutions</p>
            <span className="text-[10px] font-semibold text-emerald-700">IIT ISM • BIT Mesra • NIT JSR</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Talent Scouted</span>
            <p className="text-xl font-black text-slate-900">38 Candidates</p>
            <span className="text-[10px] font-semibold text-emerald-700">8 Interview Clearances</span>
          </div>
        </div>
      </div>

      {/* ACTIVE CORPORATE PROGRAMS & CHALLENGES */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
              PROGRAM MANAGEMENT
            </span>
            <h2 className="text-base font-black text-slate-900 mt-1">
              Active Corporate Challenges & Field Pilots
            </h2>
          </div>
          <span className="text-xs font-bold text-emerald-800">Track Applications & Milestones</span>
        </div>

        <div className="space-y-4">
          {challenges.map((c) => (
            <div key={c.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                  <span className="text-[10px] font-extrabold text-slate-400">{c.id}</span>
                </div>
                {c.deadline && <span className="text-xs font-extrabold text-amber-800">⏱ Deadline {c.deadline}</span>}
                {c.telemetry && <span className="text-xs font-extrabold text-emerald-800">📡 {c.telemetry}</span>}
              </div>

              <h3 className="text-sm font-extrabold text-slate-900">{c.title}</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{c.desc}</p>

              {c.location && (
                <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded-xl text-xs font-bold text-emerald-950">
                  📍 Deployment Site: {c.location}
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                <div className="flex gap-4 text-slate-500 font-bold text-[11px]">
                  {c.grantPool && <span>{c.grantPool}</span>}
                  {c.submissions && <span>{c.submissions}</span>}
                  {c.proposals && <span>{c.proposals}</span>}
                </div>

                <div className="flex gap-2">
                  <button 
                    type="button"
                    onClick={() => alert(`Reviewing submissions for ${c.id}`)}
                    className="px-4 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl transition cursor-pointer"
                  >
                    Evaluate Submissions →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STUDENT TALENT DISCOVERY & SKILLS SEARCH */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
              TALENT PIPELINE
            </span>
            <h2 className="text-base font-black text-slate-900 mt-1">
              Student Talent Discovery & Skills Search
            </h2>
          </div>

          <div className="flex gap-1 overflow-x-auto text-xs font-bold">
            {['All', 'Embedded Tech', 'Computer Vision', 'Metallurgy', 'Agri-Tech'].map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => setSelectedSkill(skill)}
                className={`px-3 py-1 rounded-xl transition cursor-pointer ${
                  selectedSkill === skill ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {talentList.map((t) => (
            <div key={t.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">{t.name}</h3>
                    <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                  </div>
                  <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                    {t.trl}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">{t.desc}</p>

                <div className="flex flex-wrap gap-1">
                  {t.skills.map((s) => (
                    <span key={s} className="text-[9px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex gap-2">
                <button 
                  type="button"
                  onClick={() => alert(`Offered Internship to ${t.name}`)}
                  className="w-1/2 py-2 bg-emerald-800 text-white font-extrabold text-[11px] rounded-xl hover:bg-emerald-900 transition cursor-pointer"
                >
                  Offer Internship
                </button>
                <button 
                  type="button"
                  onClick={() => alert(`Invited ${t.name} to challenge`)}
                  className="w-1/2 py-2 border border-slate-300 text-slate-800 font-extrabold text-[11px] rounded-xl hover:bg-slate-100 transition cursor-pointer"
                >
                  Invite to Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UNIVERSITY LAB & ACADEMIC TESTING PARTNERSHIPS */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div>
            <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
              SHARED LAB ACCESS
            </span>
            <h2 className="text-base font-black text-slate-900 mt-1">
              University Lab & Academic Testing Partnerships
            </h2>
          </div>
          <button className="text-xs font-bold text-emerald-800 hover:underline">Browse All State Networks →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
            <div>
              <span className="text-[9px] font-black uppercase text-slate-400">IIT ISM CENTRAL RESEARCH FACILITY</span>
              <h3 className="text-xs font-extrabold text-slate-900">HR-TEM & XPS Alloy Characterization Bench</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">Next Slot: Tomorrow, 11:00 AM</p>
            </div>
            <button 
              type="button"
              onClick={() => alert('Booking Test Bench...')}
              className="px-4 py-2 bg-emerald-800 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-900 transition cursor-pointer shrink-0"
            >
              Book Bench
            </button>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
            <div>
              <span className="text-[9px] font-black uppercase text-slate-400">BIT MESRA HIGH-PERFORMANCE COMPUTING</span>
              <h3 className="text-xs font-extrabold text-slate-900">64-Node GPU Cluster for Edge Inference & Fluid Sim</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">Quota Available: 400 GPU hrs</p>
            </div>
            <button 
              type="button"
              onClick={() => alert('Requesting Compute Time...')}
              className="px-4 py-2 bg-emerald-800 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-900 transition cursor-pointer shrink-0"
            >
              Request Compute
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}