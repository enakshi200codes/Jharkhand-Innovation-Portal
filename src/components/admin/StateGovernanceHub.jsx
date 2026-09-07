import React, { useState } from 'react';

export default function StateGovernanceHub() {
  const auditLogs = [
    {
      id: 'AUD-001',
      type: 'INDUSTRY VERIFICATION',
      typeColor: 'bg-blue-100 text-blue-900',
      subject: 'Tata Steel Innovation Lab submitted CSR & R&D partnership credentials for advanced manufacturing.',
      entity: 'East Singhbhum • Industry',
      state: 'Pending Govt Approval',
      stateColor: 'text-amber-800 font-extrabold',
    },
    {
      id: 'AUD-002',
      type: 'ESCALATION PROJECT CLEARANCE',
      typeColor: 'bg-red-100 text-red-900',
      subject: 'Solar cold-storage for Gumla lac farmers flagged for fast-track DST tribal incentive.',
      entity: 'Gumla • Student & Community',
      state: 'Fast-Track Sanction',
      stateColor: 'text-emerald-800 font-extrabold',
    },
    {
      id: 'AUD-003',
      type: 'PROMOTIONAL PILOT CLEARANCE',
      typeColor: 'bg-emerald-100 text-emerald-900',
      subject: 'Automated Drone Survey for Coal Mine Reforestation approved by Mining Nodal Officer.',
      entity: 'Dhanbad • Industry & Univ',
      state: 'Active Pilot',
      stateColor: 'text-emerald-800 font-extrabold',
    },
  ];

  const districtTelemetry = [
    { district: 'Ranchi (Capital)', ideas: '3,420', projects: '840', grant: '₹14.8 Cr', index: '211.2 (High)' },
    { district: 'Dhanbad', ideas: '2,810', projects: '620', grant: '₹12.4 Cr', index: '184.2 (High)' },
    { district: 'East Singhbhum (JSR)', ideas: '2,650', projects: '590', grant: '₹8.9 Cr', index: '162.0 (High)' },
    { district: 'Bokaro', ideas: '1,720', projects: '280', grant: '₹3.9 Cr', index: '94.0 (Mid)' },
  ];

  return (
    <div className="space-y-8 text-slate-800">
      
      {/* STATE SECRETARY HEADER BANNER */}
      <div className="bg-[#122b1e] text-white p-8 rounded-3xl space-y-4 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-900 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
                STATE GOVERNANCE CONSOLE
              </span>
              <span className="text-[10px] font-extrabold text-emerald-300">GOVT OF JHARKHAND • FY 2025-26</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black">
              Shri R.K. Soren, IAS
            </h1>
            <p className="text-xs text-emerald-100/80 font-medium mt-1">
              State Innovation Secretary • Department of Information Technology & e-Governance
            </p>
          </div>

          <button 
            type="button"
            onClick={() => alert('Generating State Briefing PDF...')}
            className="px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl transition cursor-pointer shadow-xs"
          >
            📄 Generate State Briefing (PDF)
          </button>
        </div>

        {/* STATE OPERATIONAL METRICS */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 pt-2 text-slate-800">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Ideas</span>
            <p className="text-xl font-black text-slate-900">12,450</p>
            <span className="text-[10px] font-semibold text-emerald-700">Across 24 Districts</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Projects</span>
            <p className="text-xl font-black text-emerald-800">3,180</p>
            <span className="text-[10px] font-semibold text-emerald-700">TRL 4–9 Verified</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Grant Outlay</span>
            <p className="text-xl font-black text-slate-900">₹45.20 Cr</p>
            <span className="text-[10px] font-semibold text-emerald-700">PFMS Direct Node</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Districts Active</span>
            <p className="text-xl font-black text-slate-900">24 / 24</p>
            <span className="text-[10px] font-semibold text-emerald-700">100% Coverage</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Panchayat Nodes</span>
            <p className="text-xl font-black text-slate-900">4,350</p>
            <span className="text-[10px] font-semibold text-emerald-700">Gram Sabhas Linked</span>
          </div>
        </div>
      </div>

      {/* GRAPH ROW 1: THROUGHPUT OVER TIME + CATEGORY BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* GRAPH 1: INNOVATION ACTIVITY OVER TIME (SVG LINE CHART) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                STATE CLOUD GRID
              </span>
              <h2 className="text-base font-black text-slate-900 mt-1">
                Innovation Activity & Throughput Over Time
              </h2>
            </div>
            <span className="text-xs font-bold text-emerald-800">Monthly Throughput (+34%)</span>
          </div>

          {/* SVG Line Graph */}
          <div className="pt-2">
            <div className="h-44 w-full relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#065f46" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#065f46" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Area Fill */}
                <path
                  d="M 0,130 Q 80,90 160,110 T 320,40 T 500,20 L 500,150 L 0,150 Z"
                  fill="url(#chartGrad)"
                />

                {/* Stroke Line */}
                <path
                  d="M 0,130 Q 80,90 160,110 T 320,40 T 500,20"
                  fill="none"
                  stroke="#065f46"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Data Points */}
                <circle cx="0" cy="130" r="4" fill="#065f46" />
                <circle cx="160" cy="110" r="4" fill="#065f46" />
                <circle cx="320" cy="40" r="4" fill="#065f46" />
                <circle cx="500" cy="20" r="5" fill="#065f46" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 border-t border-slate-100 pt-2">
              <span>Q1 FY25 (Ideas Submitted)</span>
              <span>Q2 FY25 (Projects Launched)</span>
              <span>Q3 FY25 (State Challenges)</span>
              <span className="text-emerald-800 font-black">Q4 FY25 (Deployed Pilots)</span>
            </div>
          </div>
        </div>

        {/* GRAPH 2: CATEGORY DONUT / BAR BREAKDOWN */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
            <div>
              <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                STRATEGIC FOCUS
              </span>
              <h2 className="text-base font-black text-slate-900 mt-1">
                Innovation by Category
              </h2>
            </div>
            <span className="text-xs font-bold text-emerald-800">12,450 Ideas</span>
          </div>

          <div className="space-y-3 pt-1">
            {[
              { label: 'Technology & IT', pct: '28%', color: 'bg-emerald-900' },
              { label: 'Agriculture & Forest', pct: '24%', color: 'bg-emerald-800' },
              { label: 'Healthcare & Tribal Welfare', pct: '18%', color: 'bg-emerald-700' },
              { label: 'Environment & Energy', pct: '14%', color: 'bg-emerald-600' },
              { label: 'Mining & Industrial Safety', pct: '10%', color: 'bg-emerald-500' },
              { label: 'Social Impact & Education', pct: '6%', color: 'bg-emerald-400' },
            ].map((cat) => (
              <div key={cat.label} className="space-y-1">
                <div className="flex justify-between text-xs font-bold text-slate-800">
                  <span>{cat.label}</span>
                  <span className="font-extrabold">{cat.pct}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`${cat.color} h-full rounded-full`} style={{ width: cat.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* GEOSPATIAL TELEMETRY & AUDIT LOG */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* DISTRICT TELEMETRY TABLE */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
            <div>
              <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                GEOSPATIAL TELEMETRY
              </span>
              <h2 className="text-base font-black text-slate-900 mt-1">
                District Innovation Index
              </h2>
            </div>
            <button className="text-xs font-bold text-emerald-800 hover:underline">Export CSV</button>
          </div>

          <div className="space-y-3">
            {districtTelemetry.map((d) => (
              <div key={d.district} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-extrabold text-slate-900">{d.district}</h3>
                  <p className="text-[10px] text-slate-500 font-medium">
                    {d.ideas} Ideas • {d.projects} Projects
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-black text-emerald-800 block">{d.grant}</span>
                  <span className="text-[9px] font-extrabold text-slate-400">Index: {d.index}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODERATION QUEUE & EXECUTIVE AUDIT */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                MODERATION QUEUE
              </span>
              <h2 className="text-base font-black text-slate-900 mt-1">
                Executive Audit Log & Flagged Submissions
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">Secretary e-Gov</span>
          </div>

          <div className="space-y-3">
            {auditLogs.map((log) => (
              <div key={log.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${log.typeColor}`}>
                    {log.type}
                  </span>
                  <span className={`text-xs ${log.stateColor}`}>{log.state}</span>
                </div>
                <p className="text-xs font-bold text-slate-900">{log.subject}</p>
                <div className="flex justify-between items-center pt-2 border-t border-slate-200/60 text-[11px]">
                  <span className="text-slate-400 font-medium">{log.entity}</span>
                  <button 
                    type="button"
                    onClick={() => alert(`Authorized ${log.id}`)}
                    className="px-3 py-1 bg-emerald-800 text-white font-extrabold rounded-lg hover:bg-emerald-900 transition cursor-pointer"
                  >
                    Authorize →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}