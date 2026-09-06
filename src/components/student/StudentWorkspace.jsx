import React, { useState } from 'react';
import StudentProfile from './StudentProfile';

export default function StudentWorkspace({ initialTab = 'profile' }) {
  // Set default activeTab to 'profile'
  const [activeTab, setActiveTab] = useState(initialTab);
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  const myProjects = [
    {
      id: 'JHIP-MIN-2025-084',
      title: 'IoT Slurry Pipeline Leak Detector for Open-Cast Coal Mines',
      category: 'MINING, SAFETY & CORE INFRASTRUCTURE',
      trl: 'TRL 4: BENCH PROTOTYPE',
      grant: '₹1,50,000 Sanctioned',
      status: 'On Track',
      milestone: 'Milestone 3 of 4: Telemetry Data Logging & Slurry Pipeline Calibration',
      progress: 80,
      disbursements: [
        { label: 'Tranche 1: Lab Prototyping', amount: '₹50,000', status: 'Disbursed via PFMS' },
        { label: 'Tranche 2: Field Deployment', amount: '₹1,00,000', status: 'Approved for Release' },
      ]
    },
    {
      id: 'JHIP-AGR-2025-019',
      title: 'Solar-Assisted Lac Processing & Grading Kit',
      category: 'TRIBAL AGRO-CRAFTS & RURAL VALUE ADDITION',
      trl: 'TRL 4: LAB VALIDATED',
      grant: '₹1,50,000 Sanctioned',
      status: 'Grant Approved',
      milestone: 'Milestone 2 of 4: Field Testing with Torpa Barat SHG Collective',
      progress: 50,
      disbursements: [
        { label: 'Tranche 1: Lab Prototyping', amount: '₹50,000', status: 'Disbursed' },
      ]
    },
    {
      id: 'JHIP-AI-2025-112',
      title: 'Automated Santhali & Ho Dialect Voice Translator for Primary Health Centers',
      category: 'HEALTHCARE AI & LINGUISTIC INCLUSIVITY',
      trl: 'TRL 3: PROOF OF CONCEPT',
      grant: 'Under Screening',
      status: 'Desk Screening Review Underway',
      milestone: 'Assigned Committee: AI & Indigenous Linguistics State Panel',
      progress: 25,
      disbursements: []
    }
  ];

  const opportunities = [
    {
      id: 'OPP-001',
      type: 'INDUSTRY FELLOWSHIP',
      title: 'BCCL Mine Automation Student Research Fellowship',
      org: 'Bharat Coking Coal Limited, Dhanbad',
      stipend: '₹25,000 / month',
      duration: '6 Months (3 Seats)',
      focus: 'Edge-computing sensor nodes in underground mine seams',
    },
    {
      id: 'OPP-002',
      type: 'INCUBATOR COHORT',
      title: 'IIT ISM Dhanbad Clean-Tech Incubation Cohort 2025',
      org: 'IIT ISM Central Research Facility',
      stipend: 'Up to ₹10 Lakhs (TIDE 2.0)',
      duration: '12 Months',
      focus: 'Battery telemetry & clean energy prototypes',
    },
    {
      id: 'OPP-003',
      type: 'CORPORATE INTERNSHIP',
      title: 'Tata Steel CSR Grassroots Innovation Internship',
      org: 'Tata Steel Sustainability Foundation, Jamshedpur',
      stipend: '₹18,000 / month',
      duration: '4 Open Positions',
      focus: 'Decentralized lac processing machines & low-cost solar threshing',
    }
  ];

  const teammateRequests = [
    {
      id: 'TEAM-001',
      project: 'Low-Power LoRaWAN Telemetry Box for Santhal Pargana Soil Moisture',
      lead: 'Priya Soren',
      leadDept: 'Electrical Engg • NIT Jamshedpur',
      targetRole: 'React Native & LoRa Firmware Developer',
      skills: ['LoRaWAN', 'React Native', 'C', 'Low Power Circuits'],
      match: '82% High Match',
      desc: 'Deploying 30 ground nodes in Dumka and Deoghar cluster farms. Looking for a hardware/app dev peer to build real-time field visualization.',
      time: 'Posted 2 days ago'
    },
    {
      id: 'TEAM-002',
      project: 'Computer Vision Drone for Forest Fire Early Warning in Saranda Forest',
      lead: 'Vikramaditya Mahto',
      leadDept: 'CSE • BIT Mesra',
      targetRole: 'Embedded Hardware & Drone Flight Controller Specialist',
      skills: ['PX4/ArduPilot', 'Edge AI', 'Jetson Nano', 'ROS2'],
      match: '75% Match',
      desc: 'Building a tethered autonomous surveillance fixed-wing prototype equipped with dual thermal sensors to detect subsurface peat fires.',
      time: 'Posted yesterday'
    }
  ];

  return (
    <div className="bg-[#f4f7f0] min-h-screen pt-6 pb-16 px-6 lg:px-12 space-y-8 text-slate-800">
      
      {/* TOP USER HEADER */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-800 tracking-wider">
            <span className="bg-emerald-100 px-2 py-0.5 rounded-md">VERIFIED STUDENT CITIZEN</span>
            <span>• NIT JAMSHEDPUR</span>
            <span>• B.TECH MECHANICAL</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1">
            Ananya Kumari
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Lead Innovator ID #JHK-STD-9012 • Tier 1 Scholar • 100 Activity Credits Sanctioned
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-xs font-bold rounded-xl shadow-xs hover:bg-slate-50 transition">
            Export Dossier (PDF)
          </button>
          <button className="px-4 py-2 bg-emerald-800 text-white text-xs font-extrabold rounded-xl shadow-xs hover:bg-emerald-900 transition">
            + Submit New Innovation
          </button>
        </div>
      </div>

      {/* SUB-NAVIGATION TAB BAR */}
      <div className="max-w-7xl mx-auto flex gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
            activeTab === 'profile' ? 'bg-emerald-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          My Profile & Skills
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('portfolio')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
            activeTab === 'portfolio' ? 'bg-emerald-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          My Innovations & Portfolio
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('opportunities')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
            activeTab === 'opportunities' ? 'bg-emerald-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          Student Opportunities & Grants
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('teammates')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer ${
            activeTab === 'teammates' ? 'bg-emerald-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          Student Teammate Finder
        </button>
      </div>

      {/* VIEW 0: MY PROFILE & SKILLS */}
      {activeTab === 'profile' && (
        <div className="max-w-7xl mx-auto space-y-6">
          <StudentProfile />
        </div>
      )}

      {/* VIEW 1: MY INNOVATIONS & PORTFOLIO */}
      {activeTab === 'portfolio' && (
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Screened & Approved</span>
              <p className="text-2xl font-black text-slate-900">3 Prototypes</p>
              <p className="text-[10px] text-emerald-700 font-semibold">Ready for Scaling</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Field Pilots</span>
              <p className="text-2xl font-black text-slate-900">2 Running</p>
              <p className="text-[10px] text-emerald-700 font-semibold">Gumla & Torpa Blocks</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Grants Disbursed</span>
              <p className="text-2xl font-black text-emerald-800">₹1.50 Lakhs</p>
              <p className="text-[10px] text-slate-400 font-medium">State Seed Treasury Fund</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Innovation Credits</span>
              <p className="text-2xl font-black text-slate-900">450 Points</p>
              <p className="text-[10px] text-emerald-700 font-semibold">Tier 1 Scholar Tier</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex gap-2 border-b border-slate-200 pb-3 text-xs font-bold text-slate-600 overflow-x-auto">
                {['all', 'active', 'approved', 'revisions'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setPortfolioFilter(f)}
                    className={`px-3 py-1.5 rounded-lg transition capitalize ${
                      portfolioFilter === f ? 'bg-emerald-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {f === 'all' && 'All (3)'}
                    {f === 'active' && 'Active Field Pilots (2)'}
                    {f === 'approved' && 'Approved (1)'}
                    {f === 'revisions' && 'Needs Revisions (0)'}
                  </button>
                ))}
              </div>

              {myProjects.map((p) => (
                <div key={p.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2 py-0.5 rounded-md">
                        {p.category}
                      </span>
                      <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">
                        {p.trl}
                      </span>
                    </div>
                    <span className="text-xs font-black text-emerald-800">{p.grant}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{p.title}</h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Dossier ID: {p.id}</p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-700">{p.milestone}</span>
                      <span className="font-black text-emerald-800">{p.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-800 h-full rounded-full" style={{ width: `${p.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-bold text-slate-500">Status: <strong className="text-slate-900">{p.status}</strong></span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50">
                        View Reviewer Remarks
                      </button>
                      <button className="px-4 py-1.5 bg-emerald-800 text-white text-xs font-bold rounded-xl hover:bg-emerald-900 transition">
                        Manage Milestones →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-4">
                <span className="text-[10px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2.5 py-1 rounded-full">
                  STATE IP FACILITATION SCHEME
                </span>
                <h3 className="text-lg font-black leading-snug">100% Free Patent & IP Fast-Track</h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">
                  Your prototype detector is officially eligible for 100% state-reimbursed patent filing under the Jharkhand Student Innovation Charter.
                </p>
                <button className="w-full py-2.5 bg-white text-emerald-950 font-extrabold text-xs rounded-xl hover:bg-slate-100 transition">
                  Book Attorney Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: STUDENT OPPORTUNITIES & GRANTS */}
      {activeTab === 'opportunities' && (
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bg-emerald-900 text-white p-8 rounded-3xl space-y-4 relative overflow-hidden">
            <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
              FLAGSHIP STATE PROGRAM
            </span>
            <h2 className="text-2xl font-black">Jharkhand State Innovation Challenge 2025</h2>
            <p className="text-xs text-emerald-100 max-w-2xl leading-relaxed">
              Curated state-vetted civic grants, corporate research internships, hackathons, and incubation cohorts across Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((o) => (
              <div key={o.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md">
                      {o.type}
                    </span>
                    <span className="text-xs font-black text-emerald-800">{o.stipend}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">{o.title}</h3>
                  <p className="text-xs font-semibold text-slate-500">{o.org}</p>
                </div>
                <button className="px-4 py-2 bg-emerald-800 text-white text-xs font-extrabold rounded-xl hover:bg-emerald-900 transition cursor-pointer">
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: STUDENT TEAMMATE FINDER */}
      {activeTab === 'teammates' && (
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Student Teammate Finder & Peer Collaboration Network
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Connect with co-builders across NIT Jamshedpur, BIT Mesra, and IIT ISM Dhanbad for joint prototyping grants.
              </p>
            </div>
            <button className="px-4 py-2 bg-emerald-800 text-white text-xs font-extrabold rounded-xl hover:bg-emerald-900 transition">
              + Post a Teammate Request
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              {teammateRequests.map((req) => (
                <div key={req.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2 py-0.5 rounded-md">
                        {req.time}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 mt-1">{req.project}</h3>
                    </div>
                    <span className="text-xs font-extrabold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-full">
                      {req.match}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl">
                    {req.desc}
                  </p>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Target Role Needed:</span>
                    <p className="text-xs font-extrabold text-emerald-800">{req.targetRole}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div className="text-xs">
                      <span className="font-bold text-slate-800 block">{req.lead}</span>
                      <span className="text-[10px] text-slate-400">{req.leadDept}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50">
                        Direct Message
                      </button>
                      <button className="px-4 py-1.5 bg-emerald-800 text-white text-xs font-bold rounded-xl hover:bg-emerald-900 transition">
                        Request to Join Project
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-4">
                <span className="text-[10px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
                  State Collaboration Guidelines
                </span>
                <h3 className="text-sm font-black uppercase text-white">Equitable Student IP Rights</h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">
                  Inter-campus student teams receive an extra 15% prototype grant allocation under the Jharkhand Sandbox Charter.
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}