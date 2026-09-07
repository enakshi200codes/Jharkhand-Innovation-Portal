import React, { useState } from 'react';

export default function GrassrootsDesk() {
  const [problemTitle, setProblemTitle] = useState('');
  const [domain, setDomain] = useState('forest');

  const activeTrials = [
    {
      id: 'TRIAL-01',
      title: 'Low-Cost Portable Solar Irrigation Pump for Sloped Terrain',
      location: 'Ormanjhi Block',
      stage: 'Stage 3/5 Prototype Review',
      progress: '60%',
      desc: 'Need affordable 1HP surface pumps transported between terraced paddy fields with rocky elevation gradients without grid electricity.',
      team: 'BIT Mesra Team',
      proposals: 6,
    },
    {
      id: 'TRIAL-02',
      title: 'Automated De-husking & Grading for Mahua & Lac Forest Produce',
      location: 'Torpa, Khunti',
      stage: 'Stage 4/5 Co-Development',
      progress: '80%',
      desc: 'Tribal SHGs spend 7 hours manually scraping stick lac. Needs ergonomic, hand-cranked or low-watt mechanical grader to preserve resin purity.',
      team: '40kg/hr Capacity',
      proposals: 4,
    },
    {
      id: 'TRIAL-03',
      title: 'Safe Drinking Water Filtration for Arsenic-prone Village Wells',
      location: 'Bishunpur, Gumla',
      stage: 'Stage 2/5 CSR Siting',
      progress: '40%',
      desc: 'Borewells in 3 hamlets show iron & arsenic contaminants. Implementing zero-electricity clay-ceramic natural filtration beds.',
      team: 'Tata Fdn Matched',
      proposals: 3,
    },
  ];

  const readySolutions = [
    {
      id: 'SOL-01',
      title: 'IoT Dialect Soil Moisture Sensor',
      creator: 'Birsa Agri Univ. • Hindi/Santhali Alerts',
      domain: 'AgriTech • TRL 7',
      fee: '₹1,400',
    },
    {
      id: 'SOL-02',
      title: 'Crop & Sal Leaf Biomass Pelletizer',
      creator: 'NIT Jamshedpur Innovators Hub',
      domain: 'Bio-Energy • Smokeless',
      fee: 'Govt Approved',
    },
    {
      id: 'SOL-03',
      title: 'Tele-Diagnostic Backpack Station',
      creator: 'RIMS Ranchi Cell • Offline sync',
      domain: 'Health • 4.8kg',
      fee: 'Sahiya Kit',
    },
  ];

  const handleSubmitProblem = (e) => {
    e.preventDefault();
    alert('Grassroots problem logged successfully! Auto-translating to Hindi & Santhali for University Solvers.');
    setProblemTitle('');
  };

  return (
    <div className="space-y-8 text-slate-800">
      
      {/* CIVIC ORGANIZATIONAL HEADER */}
      <div className="bg-[#122b1e] text-white p-8 rounded-3xl space-y-4 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-900 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
                VERIFIED GRAM ORGANIZATION
              </span>
              <span className="text-[10px] font-extrabold text-emerald-300">REG #JH-CIV-2023-881</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black">
              Chotanagpur Rural Empowerment Society
            </h1>
            <p className="text-xs text-emerald-100/80 font-medium mt-1">
              Angara Block, Ranchi District Gram Panchayat Cluster Office
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-xs font-extrabold bg-emerald-900 border border-emerald-700 px-3 py-2 rounded-xl text-emerald-200">
              District Officer: Alok Minz (JSLPS)
            </span>
          </div>
        </div>

        {/* GRASSROOTS METRICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-slate-800">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Challenges</span>
            <p className="text-xl font-black text-slate-900">04 Logged</p>
            <span className="text-[10px] font-semibold text-emerald-700">Solar pumps, Lac units</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Innovators Engaged</span>
            <p className="text-xl font-black text-emerald-800">11 Teams</p>
            <span className="text-[10px] font-semibold text-emerald-700">Student & Univ Solvers</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Submissions</span>
            <p className="text-xl font-black text-slate-900">18 Proposals</p>
            <span className="text-[10px] font-semibold text-emerald-700">Gram Sabha field logs</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Deployed Pilots</span>
            <p className="text-xl font-black text-slate-900">03 Live</p>
            <span className="text-[10px] font-semibold text-emerald-700">Field trials in Angara</span>
          </div>
        </div>
      </div>

      {/* FORM: SUBMIT PROBLEM STATEMENT */}
      <form onSubmit={handleSubmitProblem} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
          <div>
            <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
              FIELD GATEWAY
            </span>
            <h2 className="text-base font-black text-slate-900 mt-1">
              Submit Grassroots Problem Statement
            </h2>
          </div>
          <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            🌐 Hindi & Santhali Auto-Translation Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6">
            <label className="block text-xs font-extrabold text-slate-700 mb-1">
              Title of Challenge Statement *
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Solar miniature cold storage unit for perishable Mahua flowers"
              value={problemTitle}
              onChange={(e) => setProblemTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-extrabold text-slate-700 mb-1">
              District & Block *
            </label>
            <input
              type="text"
              disabled
              value="Ranchi - Angara Block"
              className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-500"
            />
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-extrabold text-slate-700 mb-1">
              Beneficiary Domain *
            </label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800 cursor-pointer"
            >
              <option value="forest">Forest Produce & Lac Collectors (SHGs)</option>
              <option value="water">Water Sanitation & Irrigation</option>
              <option value="agri">Tribal Agriculture & Soil</option>
              <option value="crafts">Handicrafts & Metallurgical Artisans</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <p className="text-[11px] text-slate-400 font-semibold">
            Assistance Available: Prototype Testing Lab • Vernacular Manual
          </p>
          <button
            type="submit"
            className="px-6 py-2.5 bg-emerald-800 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-900 transition shadow-xs cursor-pointer"
          >
            Log Challenge Statement →
          </button>
        </div>
      </form>

      {/* ACTIVE FIELD TRIALS & READY SOLUTIONS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: ACTIVE CHALLENGES & FIELD TRIALS */}
        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                FIELD TRIALS
              </span>
              <h2 className="text-base font-black text-slate-900 mt-1">
                My Active Challenges & Field Trials (3 in Progress)
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">Sorted by Latest Stage</span>
          </div>

          <div className="space-y-4">
            {activeTrials.map((t) => (
              <div key={t.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2 py-0.5 rounded">
                      {t.location}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-800">{t.stage}</span>
                  </div>
                  <span className="text-xs font-black text-slate-900">{t.progress} Complete</span>
                </div>

                <h3 className="text-sm font-extrabold text-slate-900">{t.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{t.desc}</p>

                {/* Progress Bar Visual */}
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-800 h-full rounded-full transition-all duration-300" 
                    style={{ width: t.progress }}
                  ></div>
                </div>

                <div className="flex justify-between items-center pt-2 text-xs border-t border-slate-200/60">
                  <span className="font-bold text-slate-700">{t.team} • {t.proposals} Proposals Received</span>
                  <button 
                    type="button"
                    onClick={() => alert(`Opening trial review for ${t.title}`)}
                    className="px-4 py-1.5 bg-emerald-800 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-900 transition cursor-pointer"
                  >
                    Review Progress Log →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: SOLUTIONS READY FOR PILOT & PESA GOVERNANCE */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* SOLUTIONS READY FOR PILOT */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                CERTIFIED SOLUTIONS
              </span>
              <h2 className="text-sm font-black text-slate-900 mt-1">
                Solutions Ready for Pilot
              </h2>
            </div>

            <div className="space-y-3">
              {readySolutions.map((s) => (
                <div key={s.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-extrabold text-slate-900">{s.title}</h3>
                    <span className="text-[9px] font-black uppercase bg-emerald-800 text-white px-2 py-0.5 rounded">
                      {s.fee}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">{s.creator}</p>
                  <button 
                    type="button"
                    onClick={() => alert(`Requested pilot for ${s.title}`)}
                    className="w-full py-1.5 bg-emerald-800 text-white font-extrabold text-[10px] rounded-xl hover:bg-emerald-900 transition cursor-pointer"
                  >
                    Request Pilot for Angara Block
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* PANCHAYAT & PESA GOVERNANCE CARD */}
          <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-3 shadow-sm">
            <span className="text-[9px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
              PESA GOVERNANCE
            </span>
            <h3 className="text-xs font-black uppercase text-white">Gram Sabha Siting Consent</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-emerald-900 pb-1.5">
                <span>Ranchi East Resolutions</span>
                <span className="font-extrabold text-emerald-300">Approved (03/03)</span>
              </div>
              <div className="flex justify-between border-b border-emerald-900 pb-1.5">
                <span>Honorarium Stipend Ledger</span>
                <span className="font-extrabold text-emerald-300">₹45,000 Disbursed</span>
              </div>
              <div className="flex justify-between">
                <span>Field Notes Sync</span>
                <span className="font-extrabold text-emerald-300">80% Complete</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}