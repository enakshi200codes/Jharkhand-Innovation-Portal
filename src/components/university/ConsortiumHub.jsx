import React, { useState } from 'react';

export default function ConsortiumHub() {
  const [selectedFacility, setSelectedFacility] = useState('All');

  const sharedFacilities = [
    {
      id: 'LAB-01',
      name: 'FE-SEM (Field Emission Scanning Electron Microscope)',
      lab: 'IIT (ISM) Dhanbad • Central Research Facility',
      specs: 'Resolution down to 0.8nm, equipped with EDS & EBSD detectors for metallurgical characterization.',
      status: 'AVAILABLE',
      hoursUsed: '420 Hours Booked',
    },
    {
      id: 'LAB-02',
      name: 'Bilingual Speech Acoustic Testing Chamber',
      lab: 'XLRI Tribal Innovation Cell • Jamshedpur',
      specs: 'Anechoic sound isolation booth optimized for Santhali, Mundari, and Ho voice dataset capture.',
      status: 'SLOTS OPEN',
      hoursUsed: '310 Hours Booked',
    },
    {
      id: 'LAB-03',
      name: 'Soil Microbiome Sequencing Rig',
      lab: 'Birsa Agricultural University • Ranchi',
      specs: 'High-throughput Illumina benchtop sequencer for acidic plateau soil microbial metagenomics.',
      status: 'AVAILABLE',
      hoursUsed: '380 Hours Booked',
    },
    {
      id: 'LAB-04',
      name: 'Induction Melting & Dhukra Metallurgical Lab',
      lab: 'CSIR-NML Jamshedpur & NIT Jamshedpur Hub',
      specs: 'Vacuum induction furnace for low-carbon steel slag upcycling and artisanal alloy research.',
      status: 'LIMITED SLOTS',
      hoursUsed: '310 Hours Booked',
    },
  ];

  const triageQueue = [
    {
      id: 'TRG-084',
      title: 'Mines Early Warning Seismic Accoustics',
      student: 'Ankit Lakra (Ph.D. Scholar)',
      inst: 'IIT (ISM) Dhanbad',
      status: 'Under Endorsement Review',
    },
    {
      id: 'TRG-085',
      title: 'Santhali Vernacular OCR Pedagogical Slate',
      student: 'Team Dhalbhum (B.Tech)',
      inst: 'NIT Jamshedpur',
      status: 'Lab Access Requested',
    },
    {
      id: 'TRG-086',
      title: 'Lac-based Biodegradable Food Film',
      student: 'Torpa Tribal SHG Collective',
      inst: 'Birsa Agri / XLRI Joint',
      status: 'IP Cell Screening',
    },
  ];

  const techTransferPipeline = [
    {
      title: 'State Mineral Waste Upcycling & Slag Repurposing Initiative',
      stage: 'ACTIVE MOU (INDUSTRY)',
      partner: 'Tata Steel Innovation Lab',
      valuation: '₹42 Lakh Grant Outlay',
      badgeColor: 'bg-emerald-100 text-emerald-900',
    },
    {
      title: 'Lac-based Bio-polymers for Food Packaging & AgriTech',
      stage: 'TRL READY FOR TRANSFER',
      partner: 'Birsa Agri & Khunti Collectorate',
      valuation: 'Patent Pending (IN-2025-084)',
      badgeColor: 'bg-emerald-100 text-emerald-900',
    },
    {
      title: 'Heavy Metal Adsorbent Fly Ash Zeolite Matrix',
      stage: 'PILOT TESTING PHASE',
      partner: 'Dhanbad Mining Corridor',
      valuation: 'Field Validation (TRL-6)',
      badgeColor: 'bg-blue-100 text-blue-900',
    },
    {
      title: 'Cold-chain Vaccine Container Using Phase Change Biomaterial',
      stage: 'CLINICAL TRIAL DEPLOYMENT',
      partner: 'RIMS Ranchi & Health Dept',
      valuation: 'TRL-7 Validated',
      badgeColor: 'bg-purple-100 text-purple-900',
    },
    {
      title: 'Bio-Char Soil Amendment for Acidic Plateau Soil',
      stage: 'FIELD DEMO STAGE',
      partner: 'Gumla & West Singhbhum SHGs',
      valuation: 'Gram Sabha Endorsed',
      badgeColor: 'bg-amber-100 text-amber-900',
    },
  ];

  return (
    <div className="space-y-8 text-slate-800">
      
      {/* CONSORTIUM HEADER BANNER */}
      <div className="bg-[#122b1e] text-white p-8 rounded-3xl space-y-4 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-900 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
                STATE R&D CONSORTIUM HUB
              </span>
              <span className="text-[10px] font-extrabold text-emerald-300">IIT (ISM) DHANBAD • TECHNOLOGY INNOVATION HUB</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black">
              Jharkhand Academic & R&D Consortium
            </h1>
            <p className="text-xs text-emerald-100/80 font-medium mt-1 max-w-3xl">
              Unifying 42 higher education institutions, shared supercomputing labs, and state technology transfer cells across 24 districts.
            </p>
          </div>

          <button 
            type="button"
            onClick={() => alert('Initiating Joint Institutional Call...')}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs rounded-xl transition cursor-pointer shadow-xs shrink-0"
          >
            + Create Inter-Inst Call
          </button>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-slate-800">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Institutions</span>
            <p className="text-xl font-black text-slate-900">42 Onboarded</p>
            <span className="text-[10px] font-semibold text-emerald-700">AISHE Verified Nodes</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Joint Calls</span>
            <p className="text-xl font-black text-emerald-800">3 Live Calls</p>
            <span className="text-[10px] font-semibold text-emerald-700">R&D Co-Funding Active</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Shared Lab Hours</span>
            <p className="text-xl font-black text-slate-900">1,420 Hours</p>
            <span className="text-[10px] font-semibold text-emerald-700">Cross-Institutional Access</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sanctioned R&D Grants</span>
            <p className="text-xl font-black text-slate-900">₹18.40 Cr</p>
            <span className="text-[10px] font-semibold text-emerald-700">14 Active Fellowships</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: INTER-INSTITUTIONAL SHARED FACILITIES */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
              RESOURCE SHARING
            </span>
            <h2 className="text-base font-black text-slate-900 mt-1">
              Inter-Institutional Shared Facilities
            </h2>
          </div>

          <div className="flex gap-2">
            <button 
              type="button"
              onClick={() => alert('Opening Shared Lab Booking Portal...')}
              className="px-4 py-1.5 bg-emerald-800 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-900 transition cursor-pointer"
            >
              Book Test Bench →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sharedFacilities.map((lab) => (
            <div key={lab.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-black uppercase bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                    {lab.id}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    • {lab.status}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">{lab.name}</h3>
                <p className="text-[11px] font-bold text-emerald-900">{lab.lab}</p>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{lab.specs}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-xs">
                <span className="font-extrabold text-slate-500">{lab.hoursUsed}</span>
                <button 
                  type="button"
                  onClick={() => alert(`Reserving slots for ${lab.name}`)}
                  className="px-3 py-1 bg-emerald-800 text-white font-bold text-[11px] rounded-lg hover:bg-emerald-900 transition cursor-pointer"
                >
                  Reserve Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: STUDENT TRIAGE QUEUE & TECH TRANSFER PIPELINE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: STUDENT & GRASSROOTS PROTOTYPE TRIAGE QUEUE */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
            <div>
              <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                EVALUATION QUEUE
              </span>
              <h2 className="text-base font-black text-slate-900 mt-1">
                Student & Grassroots Prototype Triage Queue
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {triageQueue.map((item) => (
              <div key={item.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-extrabold text-slate-400">{item.id}</span>
                  <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xs font-extrabold text-slate-900">{item.title}</h3>
                <p className="text-[10px] text-slate-500 font-medium">Lead: {item.student} • {item.inst}</p>
                <button 
                  type="button"
                  onClick={() => alert(`Reviewing triage docket ${item.id}`)}
                  className="w-full py-1.5 bg-emerald-800 text-white font-extrabold text-[10px] rounded-xl hover:bg-emerald-900 transition cursor-pointer"
                >
                  Review Triage Dossier →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: TECHNOLOGY TRANSFER & COMMERCIALIZATION PIPELINE */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
            <div>
              <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                COMMERCIALIZATION PIPELINE
              </span>
              <h2 className="text-base font-black text-slate-900 mt-1">
                Technology Transfer & Commercialization Pipeline
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">TRL 6–9 Technologies</span>
          </div>

          <div className="space-y-3">
            {techTransferPipeline.map((pipe, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded ${pipe.badgeColor}`}>
                    {pipe.stage}
                  </span>
                  <span className="text-[11px] font-black text-emerald-800">{pipe.valuation}</span>
                </div>
                <h3 className="text-xs font-extrabold text-slate-900">{pipe.title}</h3>
                <p className="text-[10px] text-slate-500 font-medium">Partner / Ecosystem: {pipe.partner}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}