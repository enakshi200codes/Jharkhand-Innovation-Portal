import React, { useState } from 'react';

export default function GrassrootsDesk() {
  const [activeSector, setActiveSector] = useState('all');

  const communityProjects = [
    {
      id: 'SIEG-AGR-2025-08',
      title: 'Solar-Thermal Dehydration Chamber for Mahua & Forest Produce',
      problem: '40% Post-Harvest Degradation & Smoke Contamination in Forest Belt',
      grant: '₹15,00,000',
      grantLabel: 'Seed Grant Allocation',
      clusters: 'Active Pilot Clusters in Khunti & Simdega',
      incomeMultiplier: '+320%',
      pahReduction: '0.0% PAH',
      payback: '14 Months',
      status: 'Phase 3 Standby • Verified Legal & IPR Assets',
      collab: 'Birsa Agricultural University & Khunti Tribal SHGs',
    },
    {
      id: 'SIEG-ENV-2025-12',
      title: 'Low-Cost Bamboo Gravity Water Filtration Array',
      problem: 'High Turbidity & Iron Content in Remote Hill Hamlets',
      grant: '₹2,50,000',
      grantLabel: 'Grassroots Grant',
      clusters: 'Deployed in West Singhbhum & Netarhat',
      incomeMultiplier: '+150%',
      pahReduction: '98% Iron Removed',
      payback: '6 Months',
      status: 'Active Field Deployment',
      collab: 'CSIR-NML & Local Gram Sabha Council',
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* METRICS ROW */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Grassroots Projects</span>
          <p className="text-2xl font-black text-slate-900">48 Active</p>
          <span className="text-[10px] font-semibold text-emerald-700">11 Districts Covered</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Community Grant Fund</span>
          <p className="text-2xl font-black text-emerald-800">₹1.85 Crores</p>
          <span className="text-[10px] font-semibold text-emerald-700">Direct Gram Sabha Transfer</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">SHG Beneficiaries</span>
          <p className="text-2xl font-black text-slate-900">3,200 Women</p>
          <span className="text-[10px] font-semibold text-emerald-700">100% Tribal Collective Coverage</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Field Pilot Uptime</span>
          <p className="text-2xl font-black text-slate-900">94.2%</p>
          <span className="text-[10px] font-semibold text-emerald-700">Verified by State Council</span>
        </div>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: GRASSROOTS PROJECTS */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex gap-2 border-b border-slate-200 pb-3 text-xs font-bold text-slate-600 overflow-x-auto">
            {['all', 'agro', 'crafts', 'sanitation'].map((t) => (
              <button
                key={t}
                onClick={() => setActiveSector(t)}
                className={`px-4 py-2 rounded-xl transition cursor-pointer capitalize whitespace-nowrap ${
                  activeSector === t
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {t === 'all' && 'All Community Projects (48)'}
                {t === 'agro' && 'Agro & Forest Produce'}
                {t === 'crafts' && 'Tribal Handicrafts'}
                {t === 'sanitation' && 'Water & Sanitation'}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {communityProjects.map((p) => (
              <div key={p.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[9px] font-black uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                      {p.id}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mt-1">{p.title}</h3>
                    <p className="text-[11px] text-slate-500 font-medium">{p.problem}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-black text-emerald-800 block">{p.grant}</span>
                    <span className="text-[9px] font-bold uppercase text-slate-400">{p.grantLabel}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-center text-xs">
                  <div>
                    <span className="text-[9px] font-bold uppercase text-slate-400 block">Income Multiplier</span>
                    <span className="font-black text-emerald-800">{p.incomeMultiplier}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase text-slate-400 block">Health Benefit</span>
                    <span className="font-black text-slate-800">{p.pahReduction}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase text-slate-400 block">Est. Payback</span>
                    <span className="font-black text-slate-800">{p.payback}</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1 text-xs">
                  <span className="font-semibold text-slate-600 bg-emerald-50 text-emerald-900 px-2.5 py-1 rounded-lg">
                    🌾 {p.clusters}
                  </span>
                  <button className="px-4 py-1.5 bg-emerald-800 text-white font-bold rounded-xl hover:bg-emerald-900 transition cursor-pointer shadow-xs">
                    View Project Dossier →
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-emerald-950 text-white p-6 rounded-2xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
              State Innovation Council
            </span>
            <h3 className="text-sm font-black uppercase text-white">
              Socio-Economic & Ecological Impact
            </h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">
              Verified legal and IPR assets are directly co-owned by rural innovators and Gram Sabha collectives.
            </p>
            <button className="w-full py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl transition cursor-pointer">
              View Stakeholder Log
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}