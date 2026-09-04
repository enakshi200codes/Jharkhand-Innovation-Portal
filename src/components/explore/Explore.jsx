import React, { useState } from 'react';

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Technology', 'Education', 'Healthcare', 'Agriculture', 'Environment', 'Social Impact'
  ];

  const projects = [
    {
      domain: 'AGRICULTURE',
      status: 'Field Pilot',
      title: 'Solar Cold Storage for Ranchi Vegetable Farmers',
      description: 'Micro-chambers powered by decentralized PV arrays allowing smallholders to prevent peri-urban vegetable spoilage.',
      creator: 'Birsa Agricultural Univ',
      location: 'Ranchi, Jharkhand'
    },
    {
      domain: 'EDUCATION',
      status: 'Active Testing',
      title: 'Santhali Language Digital Learning & Ol Chiki Kit',
      description: 'An interactive pedagogical tablet interface promoting bilingual basic literacy in native tribal dialects.',
      creator: 'Team Dhalbhum',
      location: 'Jamshedpur, East Singhbhum'
    },
    {
      domain: 'ENVIRONMENT',
      status: 'Scaling Up',
      title: 'IoT Mine Water Filtration & Real-Time Telemetry',
      description: 'Autonomous nanofiltration pods treating acidic coal pit runoff into certified grade-A agricultural irrigation water.',
      creator: 'IIT (ISM) Dhanbad',
      location: 'Dhanbad, Jharkhand'
    }
  ];

  return (
    <div className="bg-[#f4f7f0] min-h-screen py-12 px-6 lg:px-12 space-y-16">
      
      {/* SECTION 1: Explore Innovations */}
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full">
            STATE REGISTRY
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
            Explore Innovations
          </h1>
          <p className="text-xs lg:text-sm text-slate-600 font-medium">
            Discover ideas and projects solving tangible real-world problems across Jharkhand.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto flex items-center bg-white rounded-full p-1.5 border border-slate-200 shadow-xs">
          <div className="pl-4 text-slate-400">🔍</div>
          <input
            type="text"
            placeholder="Search projects, ideas, skills, or district..."
            className="w-full px-3 py-2 text-xs bg-transparent focus:outline-none text-slate-800 placeholder-slate-400 font-medium"
          />
          <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs px-6 py-2.5 rounded-full transition cursor-pointer">
            Search
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {projects.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    {item.domain}
                  </span>
                  <span className="text-[10px] font-extrabold text-emerald-900 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                    • {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-4 border-t border-slate-100 pt-4">
                <div className="grid grid-cols-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block font-medium">Creator:</span>
                    <span className="font-bold text-slate-800">{item.creator}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block font-medium">Location:</span>
                    <span className="font-bold text-slate-800">{item.location}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-emerald-100/50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs rounded-xl transition cursor-pointer">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* SECTION 2: Impact Across Jharkhand */}
      <div className="max-w-7xl mx-auto space-y-8 pt-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full">
              GEOGRAPHIC PENETRATION
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2">
              Impact Across Jharkhand
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-4 py-2 rounded-xl border border-slate-200">
            <span>Select Focus Territory:</span>
            <select className="font-bold text-emerald-800 bg-transparent focus:outline-none cursor-pointer">
              <option>Ranchi (Capital Zone)</option>
              <option>Dhanbad</option>
              <option>Jamshedpur</option>
            </select>
          </div>
        </div>

        {/* Map Telemetry + Territory Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Map Mockup Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col justify-between min-h-[360px]">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">District Hub Network</span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                • Telemetry Connected
              </span>
            </div>

            {/* Polygon Map Simulation */}
            <div className="my-8 flex items-center justify-center relative">
              <div className="w-64 h-48 bg-emerald-100/40 border border-emerald-300/60 rounded-3xl transform -rotate-3 flex items-center justify-center relative">
                <div className="absolute top-4 left-8 text-[10px] font-bold text-slate-700">Hazaribagh</div>
                <div className="absolute top-3 right-12 text-[10px] font-bold text-slate-700">Deoghar</div>
                <div className="absolute bottom-6 right-10 text-[10px] font-bold text-slate-700">Jamshedpur</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-800 text-white p-3 rounded-2xl text-center shadow-md">
                  <p className="text-xs font-bold">Ranchi</p>
                  <p className="text-[9px] text-emerald-200 font-semibold">3,420 Ideas</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium border-t border-slate-100 pt-3">
              <span>Real-time node status</span>
              <span>All 24 District Centers Synchronized</span>
            </div>
          </div>

          {/* Right Spotlight Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                    ACTIVE TERRITORY SPOTLIGHT
                  </span>
                  <h3 className="text-xl font-black text-slate-900">Ranchi Urban & Rural</h3>
                </div>
                <span className="bg-emerald-200 text-emerald-900 text-[10px] font-black px-2.5 py-1 rounded-full">
                  Tier 1 Lead
                </span>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-emerald-50 p-3 rounded-2xl text-center">
                  <p className="text-lg font-black text-emerald-900">3,420</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">Active Ideas</p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-2xl text-center">
                  <p className="text-lg font-black text-emerald-900">84</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">Live Pilots</p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-2xl text-center">
                  <p className="text-lg font-black text-emerald-900">1,890</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">Innovators</p>
                </div>
              </div>

              {/* Domain Progress Bars */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-900 block">Domain Distribution</span>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                    <span>Agritech & Cold-Chain Storage</span>
                    <span className="font-bold">42%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-800 h-full w-[42%]"></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                    <span>Clean Energy & Bio-Mining</span>
                    <span className="font-bold">28%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-800 h-full w-[28%]"></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                    <span>Vernacular EdTech & Skills</span>
                    <span className="font-bold">30%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-800 h-full w-[30%]"></div>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl transition cursor-pointer">
                View Full District Dashboard
              </button>
            </div>

            {/* Statewide Network Banner */}
            <div className="bg-emerald-100/60 p-4 rounded-2xl border border-emerald-200/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">🏛️</span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Statewide Network</p>
                  <p className="text-[10px] text-slate-600 font-medium">Covers 260+ Blocks across Jharkhand</p>
                </div>
              </div>
              <button className="text-xs font-bold text-emerald-800 hover:underline cursor-pointer">
                Join Portal →
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}