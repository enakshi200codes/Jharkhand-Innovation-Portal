import React, { useState } from 'react';

export default function LabFacilities() {
  const [activeTab, setActiveTab] = useState('all');

  const labNodes = [
    {
      id: 'LAB-HPC-001',
      name: 'Central High-Performance Computing (HPC) & AI Cluster',
      dept: 'Dept of Computer Science & Engineering • BIT Mesra',
      capacity: '64-Node GPU (NVIDIA A100 80GB) • OpenMPI • PyTorch • Slurm',
      storage: '1.2 PB Ceph Parallel Scratch',
      pricing: '100% Student Reimbursed • ₹450/hr Industry',
      status: 'Active Cluster Workloads (92% GPU Usage)',
      nextSlot: 'Auto-Validated via AISHE • Max 48 Hours',
    },
    {
      id: 'LAB-FESEM-002',
      name: 'Field Emission Scanning Electron Microscope (FE-SEM) & XRD Lab',
      dept: 'Central Instrumentation Facility • BIT Mesra',
      capacity: '0.8 nm @ 15kV / Schottky Emitter • Oxford Ultim Max EDS Detector',
      auxiliary: 'Cryo-Transfer Stage & Sputter Coater',
      status: 'Active Testing in Progress • CSIR-NML Validated',
      nextSlot: 'Next Available: Tomorrow @ 9:00 AM',
      currentProject: 'Nanostructured Bio-Filter for Arsenic Abatement in Groundwater (NIT Jamshedpur & BIT Joint Team)',
    },
    {
      id: 'LAB-MET-003',
      name: 'Metallurgical Foundry & Additive Manufacturing Testbed',
      dept: 'Materials Science Building • Dept of Metallurgical Engg',
      capacity: 'EOS M 290 Dual Laser 400W 3D Metal Sintering • DMG MORI 5-Axis CNC',
      status: 'Leased Slot Active (Tata Steel New Ventures Unit)',
      nextSlot: 'Leased under MoU #TATA-STL-3829',
      pricing: 'MSME Co-pay Eligible (Up to 60% State Subsidy)',
    }
  ];

  return (
    <div className="space-y-6">
      {/* METRICS ROW */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Active Facilities</span>
          <p className="text-2xl font-black text-slate-900">14 Testing Centers</p>
          <span className="text-[10px] font-semibold text-emerald-700">Cleanrooms, Foundry & HPC</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Open Bookings</span>
          <p className="text-2xl font-black text-slate-900">28 Pending</p>
          <span className="text-[10px] font-semibold text-emerald-700">12 Student • 16 MSME / Industry</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Utilization Rate</span>
          <p className="text-2xl font-black text-slate-900">78.4% Uptime</p>
          <span className="text-[10px] font-semibold text-emerald-700">Logged Bench-Hour Average</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">State Subsidies</span>
          <p className="text-2xl font-black text-emerald-800">₹24.8 Lakhs</p>
          <span className="text-[10px] font-semibold text-emerald-700">Disbursed via PFMS DBT Node</span>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: FACILITY CARDS */}
        <div className="lg:col-span-8 space-y-4">
          
          <div className="flex gap-2 border-b border-slate-200 pb-3 text-xs font-bold text-slate-600 overflow-x-auto">
            {['all', 'pending', 'maintenance', 'subsidies'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl transition cursor-pointer capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab === 'all' && 'All Lab Centers (14)'}
                {tab === 'pending' && 'Pending Bookings (28)'}
                {tab === 'maintenance' && 'Calibration & Maintenance'}
                {tab === 'subsidies' && 'State Subsidy Ledgers'}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {labNodes.map((lab) => (
              <div key={lab.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2 py-0.5 rounded-md">
                      {lab.id}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 mt-1">{lab.name}</h3>
                    <p className="text-[11px] text-slate-500 font-medium">{lab.dept}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    {lab.status}
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Equipment Hardware Specs</span>
                  <p className="font-bold text-slate-800">{lab.capacity}</p>
                  {lab.currentProject && (
                    <p className="text-[11px] text-emerald-800 font-semibold pt-1">
                      🔬 Active Session: {lab.currentProject}
                    </p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1 text-xs">
                  <span className="font-semibold text-slate-600">
                    🕒 {lab.nextSlot}
                  </span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 cursor-pointer">
                      View Telemetry
                    </button>
                    <button className="px-4 py-1.5 bg-emerald-800 text-white font-bold rounded-xl hover:bg-emerald-900 transition cursor-pointer shadow-xs">
                      Approve Slot Request
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-emerald-950 text-white p-6 rounded-2xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
              Dept of Higher & Tech Education
            </span>
            <h3 className="text-sm font-black uppercase text-white">
              State Testing Subsidy Guidelines
            </h3>
            
            <div className="space-y-2 text-xs border-t border-emerald-800/80 pt-3">
              <div className="flex justify-between items-center py-1">
                <span>Student Fee Reimbursement</span>
                <span className="font-bold text-emerald-300">100% Covered</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-emerald-900/60">
                <span>MSME Co-pay Rate</span>
                <span className="font-bold text-emerald-300">Up to 60% Subsidy</span>
              </div>
              <div className="flex justify-between items-center py-1 border-t border-emerald-900/60">
                <span>Disbursement Channel</span>
                <span className="font-bold text-emerald-300">PFMS Direct Transfer</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Campus Lab Custodians
            </h3>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <h4 className="text-xs font-bold text-slate-900">Office of Dean (R&D)</h4>
              <p className="text-[10px] text-slate-500">cif-dean-rd@bitmesra.ac.in</p>
              <p className="text-[10px] text-emerald-800 font-bold mt-1">Central Instrumentation Superintendent</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}