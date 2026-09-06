import React, { useState } from 'react';

export default function IndustryMoUs() {
  const [activeTab, setActiveTab] = useState('all');

  const grandChallenges = [
    {
      id: 'IND-CHAL-001',
      title: 'Decarbonization of Blast Furnace Slag & Low-grade Iron Ore Fines Agglomeration',
      sponsor: 'Tata Steel R&D Division',
      grant: '₹40,00,000',
      status: 'Open for Submission & Demo',
      deadline: '45 Days Remaining',
      focus: 'Agglomeration process without high thermal energy penalty in sintering plants',
    },
    {
      id: 'IND-CHAL-002',
      title: 'Real-time AI Methane Detection & Water Intrusion Early Warning',
      sponsor: 'BCCL / Coal India Limited',
      grant: '₹65,00,000',
      status: 'Open for Submission & Demo',
      deadline: '20 Days Remaining',
      focus: 'Intrinsic-safe wireless sensor node mesh for deep underground coal seams',
    }
  ];

  const techShowcase = [
    {
      id: 'TECH-TRL-701',
      title: 'Bio-alkaline Slurry Treatment for Jharia Acid Mine Drainage & Heavy Sludge',
      trl: 'TRL 8: FIELD VALIDATED',
      patent: 'Patent Granted #IN-PAT-489102',
      licensing: 'Non-Exclusive / Exclusive Commercial License',
      org: 'BIT Mesra Central Instrumentation Facility',
      copay: 'Eligible for 60% State Industry Subsidy',
    },
    {
      id: 'TECH-TRL-702',
      title: 'Direct Solar Micro-Cold Storage with Thermal Battery for Perishable Produce',
      trl: 'TRL 7: PILOT DEMONSTRATED',
      patent: 'Provisional Patent Filed #IN-2024-JHK',
      licensing: 'Technology Transfer / Commercial Manufacturing MoU',
      org: 'NIT Jamshedpur & Rural Innovators Collective',
      copay: '1:1 Matching State Co-Sponsorship Eligible',
    },
    {
      id: 'TECH-TRL-703',
      title: 'High-Tensile Dokra Bell Metal Composite for Architectural & Civic Fixtures',
      trl: 'TRL 9: MARKET READY',
      patent: 'Design Registration & GI Tag Compliant',
      licensing: 'Direct Corporate Procurement / Vendor Onboarding',
      org: 'Khunti Grassroots Cluster & Materials Dept',
      copay: 'CSR Impact Credit Approved',
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
              STATE-INDUSTRY CONNECT NODE
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
              MoU REGISTRY #JHK-IND-2025
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-900">
            Industry Innovation Exchange & Challenge Marketplace
          </h1>
          <p className="text-xs text-slate-600 font-medium mt-1">
            Co-engineer, pilot, and license campus-grown technologies to decarbonize regional industrial supply chains.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition shadow-xs">
            Export Industry Directory
          </button>
          <button className="px-4 py-2 text-xs font-bold bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 transition shadow-xs">
            + Post Industry Challenge
          </button>
        </div>
      </div>

      {/* TOP METRICS ROW */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Active Corporate MoUs</span>
          <p className="text-2xl font-black text-slate-900">18 Signed</p>
          <span className="text-[10px] font-semibold text-emerald-700">Tata Steel, BCCL, Jindal</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Commercial Tech Licenses</span>
          <p className="text-2xl font-black text-slate-900">34 Active</p>
          <span className="text-[10px] font-semibold text-emerald-700">TRL 7–9 Prototyping</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Joint R&D Capital</span>
          <p className="text-2xl font-black text-emerald-800">₹28.5 Cr</p>
          <span className="text-[10px] font-semibold text-emerald-700">Committed Industry Pool</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Total Seed Impact</span>
          <p className="text-2xl font-black text-slate-900">₹73.00 Cr</p>
          <span className="text-[10px] font-semibold text-emerald-700">1:1 State Co-Sponsorship</span>
        </div>
      </div>

      {/* TWO-COLUMN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: CHALLENGES & TECH SHOWCASE */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* SECTION 1: REVERSE PROBLEM STATEMENTS */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  INDUSTRY DEMAND PIPELINE
                </span>
                <h2 className="text-sm font-black text-slate-900 mt-1">
                  Reverse Problem Statements: Industry Grand Challenges
                </h2>
              </div>
              <span className="text-xs font-bold text-emerald-800">2 Active Calls</span>
            </div>

            <div className="space-y-4">
              {grandChallenges.map((chal) => (
                <div key={chal.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-slate-500">{chal.sponsor}</span>
                    <span className="text-sm font-black text-emerald-800">{chal.grant} Grant</span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {chal.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium">
                    {chal.focus}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                    <span className="font-bold text-amber-800">⏱ {chal.deadline}</span>
                    <button className="px-4 py-2 bg-emerald-800 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-900 transition cursor-pointer">
                      Submit Solution & Demo →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: VETTED COMMERCIAL-READY TECH SHOWCASE */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[9px] font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
                PATENTED TECHNOLOGY TRANSFER
              </span>
              <h2 className="text-sm font-black text-slate-900 mt-1">
                Vetted Commercial-Ready Technology Showcase (TRL 7–9)
              </h2>
            </div>

            <div className="space-y-4">
              {techShowcase.map((tech) => (
                <div key={tech.id} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2 py-0.5 rounded">
                      {tech.trl}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{tech.patent}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900">
                    {tech.title}
                  </h3>

                  <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1 border border-slate-100">
                    <p className="font-bold text-slate-800">Developed By: {tech.org}</p>
                    <p className="text-emerald-800 font-semibold">{tech.copay}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                    <span className="font-medium text-slate-500">{tech.licensing}</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50">
                        Request Tech Demo & NDA
                      </button>
                      <button className="px-4 py-1.5 bg-emerald-800 text-white font-bold rounded-xl hover:bg-emerald-900 transition">
                        Procure License
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: STATE SPONSORED CO-FUNDING SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 1:1 MATCHING CO-SPONSORED CHARTER */}
          <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
              STATE R&D INCENTIVE
            </span>
            <h3 className="text-base font-black leading-snug">
              1:1 Matching State Co-Sponsorship for Corporate R&D
            </h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">
              Every rupee committed by registered industry partners for campus incubation is matched 100% by the Jharkhand State Innovation Fund.
            </p>

            <div className="p-4 bg-emerald-900/60 rounded-2xl border border-emerald-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span>CSR Incubation Simulator</span>
                <span className="font-bold text-emerald-300">₹1.50 Cr Pool</span>
              </div>
              <div className="flex justify-between border-t border-emerald-800/80 pt-2">
                <span>Total Seed Impact</span>
                <span className="font-bold text-emerald-300">₹73.00 Crore</span>
              </div>
            </div>

            <button className="w-full py-2.5 bg-white text-emerald-950 font-extrabold text-xs rounded-xl hover:bg-slate-100 transition">
              Initiate Corporate Co-Sponsorship
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}