import React, { useState } from 'react';

export default function StateRegistry({ onOpenSubmitModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedTRL, setSelectedTRL] = useState('All');

  const registryItems = [
    {
      id: 'REG-JHK-001',
      title: 'Solar Micro-Cold Storage for Smallholder Farmers',
      district: 'Ranchi Division',
      trl: 'TRL 7: PILOT VALIDATED',
      domain: 'Agri-Tech & Cold Chain',
      lead: 'Birsa Agri Analytics Lab',
      desc: 'Off-grid thermal battery micro-cold room for perishable plateau produce.',
      status: 'Grant Sanctioned',
    },
    {
      id: 'REG-JHK-002',
      title: 'Santhali & Ho Vernacular Digital Learning Slate',
      district: 'East Singhbhum',
      trl: 'TRL 6: FIELD TESTED',
      domain: 'EdTech & Vernacular',
      lead: 'XLRI Tribal Innovation Cell',
      desc: 'Low-cost e-ink interactive slate supporting Ol Chiki and Warang Chiti scripts.',
      status: 'Pilot Approved',
    },
    {
      id: 'REG-JHK-003',
      title: 'IoT Acid Mine Drainage Neutralization Telemetry',
      district: 'Dhanbad Division',
      trl: 'TRL 8: DEPLOYED',
      domain: 'Mining & Environment',
      lead: 'IIT ISM Environmental Dept',
      desc: 'Automated alkaline slurry dosing for overburden runoff in coal seams.',
      status: 'Commercial Active',
    },
    {
      id: 'REG-JHK-004',
      title: 'Lac & Mahua Bio-Degradable Food Packaging',
      district: 'Khunti District',
      trl: 'TRL 5: PROTOTYPE',
      domain: 'Bio-Agri & Circular',
      lead: 'Torpa Tribal SHG Collective',
      desc: '100% natural, edible packaging film alternative to single-use plastics.',
      status: 'Grant Eligible',
    },
    {
      id: 'REG-JHK-005',
      title: 'Low-Bandwidth Tele-Diagnostic Smart Stethoscope',
      district: 'Santhal Pargana',
      trl: 'TRL 7: CLINICAL PILOT',
      domain: 'Healthcare AI',
      lead: 'AIIMS Deoghar Joint Center',
      desc: 'Acoustic AI phonocardiogram transmitting cardiac telemetry over 2G mesh networks.',
      status: 'State Grant Approved',
    },
    {
      id: 'REG-JHK-006',
      title: 'Metallurgical Blast Furnace Slag Paver Bricks',
      district: 'West Singhbhum',
      trl: 'TRL 9: MARKET READY',
      domain: 'Civil & Upcycling',
      lead: 'CSIR-NML Jamshedpur',
      desc: 'Heavy-metal sequestered geo-polymer paver blocks engineered from industrial slag.',
      status: 'Corporate License Active',
    },
  ];

  return (
    <div className="space-y-8">
      
      {/* REGISTRY HEADER BANNER */}
      <div className="bg-[#122b1e] text-white p-8 rounded-3xl space-y-4 relative overflow-hidden shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
            STATE INNOVATIONS REGISTRY
          </span>
          <span className="text-[10px] font-extrabold text-emerald-300">24 DISTRICTS COVERED</span>
        </div>

        <h1 className="text-2xl lg:text-3xl font-black">
          Discover, Evaluate, and Collaborate on 10,480+ Verified Technologies
        </h1>
        <p className="text-xs text-emerald-100/80 max-w-3xl font-medium leading-relaxed">
          Engineered across Jharkhand's 24 districts to solve critical regional challenges in mining, agriculture, healthcare, and vernacular technology.
        </p>

        {/* SEARCH & FILTER BAR */}
        <div className="pt-2 grid grid-cols-1 md:grid-cols-12 gap-3 text-slate-800">
          <div className="md:col-span-6 bg-white rounded-2xl px-4 py-2 flex items-center gap-2 border border-slate-200">
            <span className="text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Search by keyword, technology name, or inventor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs font-semibold focus:outline-none bg-transparent"
            />
          </div>

          <div className="md:col-span-3 bg-white rounded-2xl px-3 py-2 border border-slate-200">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full text-xs font-semibold focus:outline-none bg-transparent text-slate-700"
            >
              <option value="All">All 24 Districts / Divisions</option>
              <option value="Ranchi">Ranchi Division</option>
              <option value="Dhanbad">Dhanbad Division</option>
              <option value="Singhbhum">East & West Singhbhum</option>
              <option value="Santhal">Santhal Pargana</option>
            </select>
          </div>

          <div className="md:col-span-3 bg-white rounded-2xl px-3 py-2 border border-slate-200">
            <select
              value={selectedTRL}
              onChange={(e) => setSelectedTRL(e.target.value)}
              className="w-full text-xs font-semibold focus:outline-none bg-transparent text-slate-700"
            >
              <option value="All">All Maturity Levels (TRL 1–9)</option>
              <option value="TRL 1-4">TRL 1–4: PoC & Bench Models</option>
              <option value="TRL 5-7">TRL 5–7: Pilots & Field Tested</option>
              <option value="TRL 8-9">TRL 8–9: Deployed & Market Ready</option>
            </select>
          </div>
        </div>
      </div>

      {/* FILTER RESULTS COUNTER */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-3">
        <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
          1,248 Verified Innovations Indexed
        </span>
        <span className="text-xs font-extrabold text-emerald-800">
          Updated Today • Most Recent First
        </span>
      </div>

      {/* INNOVATIONS CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-md">
                  {item.domain}
                </span>
                <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2.5 py-0.5 rounded-md">
                  {item.trl}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Lead: <strong className="text-slate-800">{item.lead}</strong> • {item.district}
                </p>
              </div>

              <p className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-extrabold text-emerald-800">{item.status}</span>
              <button
                type="button"
                onClick={() => alert(`Opening Dossier for ${item.title}`)}
                className="px-3.5 py-1.5 bg-emerald-800 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-900 transition cursor-pointer"
              >
                Inspect Tech →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM CIVIC TECHNOLOGY INVITATION CTA */}
      <div className="bg-emerald-950 text-white p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-2xl">
          <span className="text-[10px] font-black uppercase bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
            CIVIC TECHNOLOGY INVITATION
          </span>
          <h2 className="text-xl font-black">
            Have you engineered an indigenous innovation in Jharkhand?
          </h2>
          <p className="text-xs text-emerald-100/80 font-medium leading-relaxed">
            Submit your prototype, academic research, or grassroots breakthrough to the official state registry. Get certified, unlock government seed grants up to ₹50 Lakhs, and fast-track incubation.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenSubmitModal}
          className="px-6 py-3 bg-white text-emerald-950 font-extrabold text-xs rounded-xl hover:bg-slate-100 transition whitespace-nowrap shadow-xs cursor-pointer"
        >
          + Submit Innovation Docket
        </button>
      </div>

    </div>
  );
}