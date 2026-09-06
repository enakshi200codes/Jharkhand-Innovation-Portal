import React, { useState } from 'react';

export default function TrendingInnovations() {
  const [activeCategory, setActiveCategory] = useState('all');

  const innovations = [
    {
      id: 'TREND-001',
      title: 'Solar Thermal Dehydration Chamber for Mahua & Wild Mushrooms',
      category: 'agritech',
      categoryLabel: 'TRIBAL AGRO-CRAFTS',
      lead: 'Sunita Hembrom',
      institution: 'BIT Mesra & Torpa SHG Collective',
      district: 'Khunti District Hub',
      trl: 'TRL 7: PILOT DEMONSTRATED',
      grant: '₹15 Lakhs Sanctioned',
      impact: 'Reduces post-harvest loss of forest produce by 65%',
      likes: 142,
    },
    {
      id: 'TREND-002',
      title: 'Real-time AI Methane Detection & Water Intrusion Early Warning',
      category: 'mining',
      categoryLabel: 'MINING & SAFETY',
      lead: 'Aarav Kumar Murmu',
      institution: 'NIT Jamshedpur',
      district: 'Dhanbad District Hub',
      trl: 'TRL 4: BENCH PROTOTYPE',
      grant: '₹65 Lakhs Grant Call',
      impact: 'Intrinsic-safe wireless mesh for underground seams',
      likes: 98,
    },
    {
      id: 'TREND-003',
      title: 'Automated Santhali (Ol Chiki) Speech-to-Text for Primary Health Centers',
      category: 'healthcare',
      categoryLabel: 'HEALTHCARE AI',
      lead: 'Vikramaditya Mahto',
      institution: 'BIT Mesra Dept of CSE',
      district: 'Ranchi District Hub',
      trl: 'TRL 3: PROOF OF CONCEPT',
      grant: '₹3.5 Lakhs State Seed',
      impact: 'Enables vernacular doctor-patient voice recording',
      likes: 210,
    },
    {
      id: 'TREND-004',
      title: 'High-Tensile Dokra Bell Metal Composite for Architectural Fixtures',
      category: 'materials',
      categoryLabel: 'ADVANCED MATERIALS',
      lead: 'Priya Soren & Team',
      institution: 'IIT ISM Dhanbad',
      district: 'East Singhbhum Hub',
      trl: 'TRL 9: MARKET READY',
      grant: 'Corporate License Active',
      impact: 'Modernizes traditional tribal alloys for civil fixtures',
      likes: 184,
    }
  ];

  const filtered = activeCategory === 'all' 
    ? innovations 
    : innovations.filter((i) => i.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto space-y-8 py-6 px-6 lg:px-12 text-slate-800">
      
      {/* HEADER BANNER */}
      <div className="bg-emerald-950 text-white p-8 rounded-3xl space-y-3 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
            STATEWIDE DISCOVERY
          </span>
          <span className="text-[10px] font-extrabold text-emerald-300">VETTED TRL 3–9 PROTOTYPES</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-black">
          Trending Innovations Across Jharkhand
        </h1>
        <p className="text-xs text-emerald-100/80 max-w-2xl font-medium leading-relaxed">
          Explore high-impact student, collegiate, and community-led inventions driving regional development.
        </p>
      </div>

      {/* FILTER CATEGORY STRIP */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 overflow-x-auto gap-2">
        <div className="flex gap-2 text-xs font-bold">
          {[
            { id: 'all', label: 'All Innovations' },
            { id: 'agritech', label: 'Tribal Agritech' },
            { id: 'mining', label: 'Mining & Safety' },
            { id: 'healthcare', label: 'Healthcare AI' },
            { id: 'materials', label: 'Advanced Materials' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <span className="text-xs font-extrabold text-slate-400 whitespace-nowrap">
          Showing {filtered.length} Spotlight Projects
        </span>
      </div>

      {/* INNOVATIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between hover:border-emerald-700/50 transition"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-md">
                  {item.categoryLabel}
                </span>
                <span className="text-[9px] font-black uppercase bg-slate-900 text-white px-2.5 py-0.5 rounded-md">
                  {item.trl}
                </span>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Lead: <strong className="text-slate-800">{item.lead}</strong> • {item.institution}
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1 text-xs">
                <p className="font-bold text-emerald-800">Impact: {item.impact}</p>
                <p className="text-[11px] text-slate-500">{item.district}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
              <span className="font-extrabold text-slate-900">{item.grant}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => alert(`Upvoted ${item.title}`)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition cursor-pointer"
                >
                  ♥ {item.likes}
                </button>
                <button
                  type="button"
                  onClick={() => alert(`Opening dossier for ${item.title}`)}
                  className="px-4 py-1.5 bg-emerald-800 text-white font-extrabold rounded-xl hover:bg-emerald-900 transition cursor-pointer"
                >
                  View Innovation Dossier →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}