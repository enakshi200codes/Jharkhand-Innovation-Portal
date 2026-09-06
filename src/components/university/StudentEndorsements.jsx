import React, { useState } from 'react';

export default function StudentEndorsements() {
  const [activeTab, setActiveTab] = useState('all');

  const submissions = [
    {
      id: 'BEZA-BITM-162025-004',
      title: 'IoT Slurry Pipeline Leak Detector for Open-Cast Coal Mines',
      category: 'MINING & HEAVY INDUSTRIES',
      trl: 'TRL 4 BENCH PROTOTYPE',
      grant: '₹5,00,000',
      lead: 'Aarav Kumar Murmu & Crew',
      leadSub: 'B.Tech Mechanical (Roll 2021UGME042)',
      guide: 'Dr. S. Roy (Dept of Mining)',
      status: 'Recommended by Departmental Review Committee',
      statusType: 'pending',
      facility: 'High-pressure hydraulic bench & Acoustic Clamp Testbed',
    },
    {
      id: '2025-HD-009',
      title: 'Solar-Assisted Lac Processing & Grading Kit',
      category: 'AGRO-TECH & TRIBAL CRAFT',
      trl: 'TRL 3 LAB PROTOTYPE',
      grant: '₹2,50,000',
      lead: 'Sunita Hansda',
      leadSub: 'Rural Tech & Production Engineering',
      guide: 'Partner: Torpa Rural SHG Collective',
      status: 'Lab Safety & Grassroots Deployment Protocol Verified',
      statusType: 'verified',
      facility: 'Field Test - Torpa Block Node',
    },
    {
      id: '4811-2025-SD-022',
      title: 'Automated Santhali & Ho Dialect Voice Translator for Primary Health Centers',
      category: 'HEALTHTECH & TRIBAL AI',
      trl: 'TRL 2 PROOF OF CONCEPT',
      grant: '₹3,50,000',
      lead: 'Vikramaditya Mahto',
      leadSub: 'Computer Science & AI Group',
      guide: 'NLP & Speech Tech Research Group',
      status: 'Review Underway: Dialect Corpus Consent Validation',
      statusType: 'review',
      facility: 'Awaiting Ethics Sub-Committee Signoff',
    }
  ];

  return (
    <div className="space-y-8 p-6 lg:p-10 max-w-7xl mx-auto">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
              AISHE U-0202 • BIT MESRA
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full">
              AY 2024-25
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-900">
            Campus Innovation Review & Student Endorsement Gateway
          </h1>
          <p className="text-xs text-slate-600 font-medium mt-1">
            Institutional screening, central laboratory safety clearance, and academic activity credit sanctions for student prototypes.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 text-xs font-bold bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition shadow-xs">
            Export Scrutiny Registry
          </button>
        </div>
      </div>

      {/* METRICS ROW */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Dossiers Under Scrutiny</span>
          <p className="text-2xl font-black text-slate-900">16 Proposals</p>
          <span className="text-[10px] font-semibold text-emerald-700">7 Awaiting Dean Seal</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Endorsed to State Seed Fund</span>
          <p className="text-2xl font-black text-slate-900">34 Sanctioned</p>
          <span className="text-[10px] font-semibold text-emerald-700">₹42.5 L Total Awarded</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Institutional Lab Clearance</span>
          <p className="text-2xl font-black text-slate-900">28 Teams</p>
          <span className="text-[10px] font-semibold text-emerald-700">All Safety Audits Passed</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">AICTE Activity Credits</span>
          <p className="text-2xl font-black text-slate-900">1,420 Points</p>
          <span className="text-[10px] font-semibold text-emerald-700">Mapped to Degree Quota</span>
        </div>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: PROPOSALS FEED */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* TAB FILTERS */}
          <div className="flex gap-2 border-b border-slate-200 pb-3 text-xs font-bold text-slate-600 overflow-x-auto">
            {['all', 'awaiting', 'safety', 'revisions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl transition cursor-pointer capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab === 'all' && 'All Submissions (16)'}
                {tab === 'awaiting' && 'Awaiting Endorsement (7)'}
                {tab === 'safety' && 'Safety Clearance (5)'}
                {tab === 'revisions' && 'Revisions Advised (4)'}
              </button>
            ))}
          </div>

          {/* SUBMISSION CARDS */}
          <div className="space-y-4">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2 py-0.5 rounded-md">
                      {sub.category}
                    </span>
                    <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                      {sub.trl}
                    </span>
                  </div>
                  <span className="text-xs font-black text-slate-900">
                    Seeking Grant: <strong className="text-emerald-800">{sub.grant}</strong>
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">{sub.title}</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">Dossier ID: {sub.id}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Lead Student / Crew</span>
                    <p className="font-bold text-slate-800">{sub.lead}</p>
                    <p className="text-[11px] text-slate-500">{sub.leadSub}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Faculty / Partner Guide</span>
                    <p className="font-bold text-slate-800">{sub.guide}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Review Status</span>
                    <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                      {sub.status}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 cursor-pointer">
                      View PDF
                    </button>
                    <button className="px-4 py-1.5 bg-emerald-800 text-white text-xs font-bold rounded-xl hover:bg-emerald-900 transition cursor-pointer shadow-xs">
                      Approve & Issue Seal
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* AICTE CREDIT MATRIX */}
          <div className="bg-emerald-950 text-white p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-emerald-300">
              AICTE Activity Matrix & Policy
            </h3>
            <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">
              Official credit mapping for university student innovators participating in state R&D challenges.
            </p>

            <div className="space-y-2 pt-2 border-t border-emerald-800/80 text-xs">
              <div className="flex justify-between items-center py-1">
                <span>TRL 1-2 Concept Design</span>
                <span className="font-bold text-emerald-300 bg-emerald-900 px-2 py-0.5 rounded">5 Pts</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-emerald-900/60">
                <span>TRL 3 Lab Prototype</span>
                <span className="font-bold text-emerald-300 bg-emerald-900 px-2 py-0.5 rounded">10 Pts</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-emerald-900/60">
                <span>TRL 4-5 Field Validated</span>
                <span className="font-bold text-emerald-300 bg-emerald-900 px-2 py-0.5 rounded">20 Pts</span>
              </div>
            </div>
          </div>

          {/* LIVE DISBURSEMENT FEED */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Recent State Approvals Feed
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  ₹2,50,000 Disbursed
                </span>
                <h4 className="text-xs font-bold text-slate-900">Bio-Degradable Mahua Flower Distillation Waste Fertilizer</h4>
                <p className="text-[10px] text-slate-500">ChemEng AISHE Endorsed • BIT Mesra</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  ₹1,00,000 Disbursed
                </span>
                <h4 className="text-xs font-bold text-slate-900">Low-Cost Silicosis Sensor for Unorganized Quarries</h4>
                <p className="text-[10px] text-slate-500">Mining Dept AISHE Endorsed • BIT Mesra</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}