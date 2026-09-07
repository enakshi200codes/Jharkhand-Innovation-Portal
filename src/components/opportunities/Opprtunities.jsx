import React, { useState } from 'react';
import OpportunitiesHub from './OpportunitiesHub';

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState('Grants & Funding');

  const tabs = [
    'Grants & Funding', 'Hackathons', 'Internships', 'Mentorship', 'Competitions', 'Research Fellowships'
  ];

  const opportunitiesList = [
    {
      organization: 'JHARKHAND INNOVATION LAB',
      status: '12 Days Left',
      statusType: 'urgent',
      title: 'Grassroots AgriTech Seed Grant 2025',
      description: 'Non-dilutive grant funding of up to ₹15 Lakhs for low-cost irrigation and harvest preservation systems.',
      tags: ['₹15L Capital', 'IoT Hardware', 'Agriculture']
    },
    {
      organization: 'DEPT OF IT & E-GOV',
      status: 'Registration Open',
      statusType: 'open',
      title: 'Smart City Mobility Hackathon Ranchi',
      description: '48-hour state hackathon solving traffic density, public bus dispatch, and EV-charging slot distribution.',
      tags: ['Python', 'GIS Mapping', 'Open Data']
    },
    {
      organization: 'TATA STEEL R&D COLLABORATIVE',
      status: 'Rolling Basis',
      statusType: 'rolling',
      title: 'Tribal Handicrafts Supply Chain Fellowship',
      description: '6-month stipend fellowship connecting tribal dokra artisans with direct-to-consumer digital ledger tracing.',
      tags: ['Supply Chain', 'Field Research', 'Stipend']
    }
  ];

  return (
    <div className="bg-[#f4f7f0] min-h-screen pt-8 pb-16 px-6 lg:px-12 space-y-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <OpportunitiesHub />
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full">
              FUNDING & CAREER TRACKS
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Opportunities for You
            </h1>
          </div>
          <button className="text-xs font-bold text-emerald-800 hover:text-emerald-900 transition flex items-center gap-1 cursor-pointer">
            Explore →
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                activeTab === tab
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunitiesList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                    {item.organization}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    item.statusType === 'urgent' 
                      ? 'bg-rose-100 text-rose-700' 
                      : item.statusType === 'open' 
                      ? 'bg-emerald-200/80 text-emerald-900' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full py-2.5 bg-emerald-100/60 hover:bg-emerald-100 text-emerald-900 font-bold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1">
                View Opportunity <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Extra Section: Opportunity Ecosystem Impact Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="space-y-1">
            <p className="text-2xl font-black text-slate-900">₹4.2 Cr+</p>
            <p className="text-xs font-semibold text-emerald-800">Total Capital Sanctioned</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <p className="text-2xl font-black text-slate-900">180+</p>
            <p className="text-xs font-semibold text-emerald-800">Industry & PSU Mentors</p>
          </div>
          <div className="space-y-1 pt-4 md:pt-0">
            <p className="text-2xl font-black text-slate-900">94%</p>
            <p className="text-xs font-semibold text-emerald-800">Grant Disbursement Rate</p>
          </div>
        </div>

      </div>
    </div>
  );
}