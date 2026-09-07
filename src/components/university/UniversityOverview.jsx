import React from 'react';

export default function UniversityOverview() {
  const equipmentNodes = [
    {
      id: 'HPC-001',
      title: 'Central High-Performance Computing (HPC) & AI Cluster',
      desc: 'Dedicated deep learning and large-scale simulation nodes configured with CUDA & Slurm.',
      status: 'Active Cluster Workloads',
      nextSlot: 'Auto-Validated via AISHE • Max 48 Hours',
    },
    {
      id: 'FESEM-002',
      title: 'FE-SEM Field Emission Scanning Electron Microscope & XRD Lab',
      desc: 'Advanced nanotechnology & metallurgy sample characterization unit.',
      status: 'CSIR-NML Validated',
      nextSlot: 'Next Open Slot: Tomorrow, 9:00 AM',
    },
    {
      id: 'AM-003',
      title: 'Foundry & Additive Manufacturing Testbed',
      desc: 'Dual Laser 3D Metal Sintering & 5-Axis CNC Precision Lathe.',
      status: 'Leased Slot Active (Tata Steel)',
      nextSlot: 'Resolution: 20 Micron Layering',
    }
  ];

  const verificationQueue = [
    {
      id: 'PROP-084',
      title: 'IoT Slurry Pipeline Leak Detector',
      student: 'Aarav Kumar Murmu',
      campus: 'NIT Jamshedpur & BIT Mesra Joint',
      trl: 'TRL 4',
      status: 'Pending Dean Seal',
    },
    {
      id: 'PROP-019',
      title: 'Solar Assisted Lac Processing & Grading Kit',
      student: 'Sunita Hembrom',
      campus: 'BIT Mesra & Torpa SHG',
      trl: 'TRL 4',
      status: 'Approved for State Grant',
    },
    {
      id: 'PROP-112',
      title: 'Automated Santhali & Ho Dialect Voice Translator',
      student: 'Vikramaditya Mahto',
      campus: 'BIT Mesra Dept of CSE',
      trl: 'TRL 3',
      status: 'Under Screening Review',
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* INSTITUTIONAL SIGNATORY BANNER */}
      <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
              AISHE CODE: U-0202
            </span>
            <span className="text-[10px] font-extrabold text-slate-400">STATE R&D CONSORTIUM NODE #JHK-IPR-04</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-900">
            Birla Institute of Technology, Mesra, Ranchi
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Dean (R&D) & Institutional Signatory: Prof. (Dr.) A. K. Choudhury • DST & IPR Facilitation Cell
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button 
      onClick={() => alert('Opening Create University Challenge Form...')}
      className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 cursor-pointer transition"
    >
      + Post Campus Challenge
    </button>
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl shadow-xs hover:bg-slate-50 cursor-pointer transition">
            Export Utilization Docket (PFMS)
          </button>
          <button className="px-4 py-2 bg-emerald-800 text-white text-xs font-extrabold rounded-xl shadow-xs hover:bg-emerald-900 cursor-pointer transition">
            Book CIPAM Patent Attorney
          </button>
        </div>
      </div>

      {/* CORE METRICS ROW */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Active Lab Facilities</span>
          <p className="text-2xl font-black text-slate-900">14 Centers</p>
          <span className="text-[10px] font-semibold text-emerald-700">Cleanrooms, Foundry & HPC</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Industry MoUs</span>
          <p className="text-2xl font-black text-slate-900">34 Active</p>
          <span className="text-[10px] font-semibold text-emerald-700">Tata Steel, BCCL, Jindal</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Student Proposals</span>
          <p className="text-2xl font-black text-slate-900">18 Pending</p>
          <span className="text-[10px] font-semibold text-emerald-700">Awaiting Dean Seal</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Campus Patent Filings</span>
          <p className="text-2xl font-black text-emerald-800">64 Filings</p>
          <span className="text-[10px] font-semibold text-emerald-700">18 Published • 8 Granted</span>
        </div>
      </div>

      {/* TWO-COLUMN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* SECTION 1: INSTITUTIONAL TESTING EQUIPMENT */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                Institutional Testing Equipment & Supercomputing
              </h2>
              <span className="text-xs font-bold text-emerald-800">14 Equipment Nodes</span>
            </div>

            <div className="space-y-4">
              {equipmentNodes.map((node) => (
                <div key={node.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2 py-0.5 rounded">
                      {node.id}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-800">{node.status}</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900">{node.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{node.desc}</p>
                  <div className="flex justify-between items-center pt-2 text-xs font-bold border-t border-slate-200/60">
                    <span className="text-slate-500">{node.nextSlot}</span>
                    <button className="text-emerald-800 hover:underline">View Telemetry →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: STUDENT RESEARCH ENDORSEMENT QUEUE */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Student Research Endorsement & AISHE Verification Queue
                </h2>
                <p className="text-[11px] text-slate-500">
                  Review pending student innovation dockets requiring Dean (R&D) seal for State Seed Grants.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {verificationQueue.map((item) => (
                <div key={item.id} className="p-4 bg-white rounded-2xl border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                        {item.trl}
                      </span>
                      <span className="text-xs font-extrabold text-slate-900">{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.student} • <span className="font-semibold">{item.campus}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50">
                      View Dossier
                    </button>
                    <button className="px-4 py-1.5 bg-emerald-800 text-white font-bold text-xs rounded-xl hover:bg-emerald-900 transition">
                      Endorse & Digital Seal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* AICTE MATRIX & STATE TESTING SUBSIDY */}
          <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
              STATE GAZETTE CHARTER
            </span>
            <h3 className="text-sm font-black uppercase text-white">
              State Testing Subsidy Guidelines
            </h3>
            <div className="space-y-2 text-xs border-t border-emerald-800/80 pt-3">
              <div className="flex justify-between">
                <span>100% Student Fee Reimbursement</span>
                <span className="font-bold text-emerald-300">via DHTE</span>
              </div>
              <div className="flex justify-between border-t border-emerald-900/60 pt-2">
                <span>PFMS Direct Node</span>
                <span className="font-bold text-emerald-300">Active</span>
              </div>
              <div className="flex justify-between border-t border-emerald-900/60 pt-2">
                <span>AICTE Activity Point Matrix</span>
                <span className="font-bold text-emerald-300">20 Points / TRL</span>
              </div>
            </div>
          </div>

          {/* INSTITUTIONAL PORTALS */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Institutional Portals & Helpdesks
            </h4>
            <div className="space-y-2 text-xs font-bold">
              <div className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition flex justify-between items-center cursor-pointer">
                <span>Technology Transfer Office (TTO)</span>
                <span className="text-emerald-800">Open →</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition flex justify-between items-center cursor-pointer">
                <span>CIPAM Patent Facilitation Cell</span>
                <span className="text-emerald-800">Open →</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}