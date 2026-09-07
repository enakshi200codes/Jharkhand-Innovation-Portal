import React, { useState } from 'react';

export default function OpportunitiesHub() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');

  const schemes = [
    {
      id: 'OPP-01',
      title: 'Jharkhand State Grassroots Agro Tech Seed Grant 2025',
      sponsor: 'Agriculture & Tribal Welfare State Council',
      grant: 'Up to ₹25 Lakhs',
      tag: 'STATE SEED GRANT',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      daysLeft: '14 Days Left',
      location: 'All 24 Districts',
    },
    {
      id: 'OPP-02',
      title: 'Smart City Urban Mobility & EV Challenge Ranchi',
      sponsor: 'Dept of Urban Development & Transport',
      grant: '₹10 Lakhs Pilot Grant',
      tag: 'URBAN EV MOBILITY',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      daysLeft: '21 Days Left',
      location: 'Ranchi District',
    },
    {
      id: 'OPP-03',
      title: 'Tribal Metallurgy & Dokra Alloy Research Fellowship',
      sponsor: 'CSIR-NML & IIT ISM Joint Program',
      grant: '₹65,000 / month',
      tag: 'R&D FELLOWSHIP',
      badgeColor: 'bg-amber-100 text-amber-900',
      daysLeft: '30 Days Left',
      location: 'Jamshedpur & Dhanbad',
    },
    {
      id: 'OPP-04',
      title: 'BIT Mesra Climate Resilience Incubation Cohort 2025-26',
      sponsor: 'BIT Mesra STEP & DST',
      grant: 'Up to ₹50 Lakhs',
      tag: 'INCUBATION COHORT',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      daysLeft: '18 Days Left',
      location: 'Ranchi',
    },
    {
      id: 'OPP-05',
      title: 'Kolhan Forest Bio-Diversity & Non-Timber Forest Produce Grant',
      sponsor: 'Jharkhand State Forest Development Corp',
      grant: '₹15 Lakhs',
      tag: 'FOREST PRODUCE',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      daysLeft: '12 Days Left',
      location: 'West Singhbhum',
    },
    {
      id: 'OPP-06',
      title: 'AI for Vernacular Public Services Innovation Challenge',
      sponsor: 'Dept of IT & e-Governance',
      grant: '₹15 Lakhs',
      tag: 'VERNACULAR AI',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      daysLeft: '25 Days Left',
      location: 'Statewide',
    },
  ];

  const faqs = [
    {
      q: 'What documents are mandatory for verification?',
      a: 'Innovators require a valid Aadhaar card, proof of domicile in Jharkhand, and AISHE enrollment or Gram Sabha endorsement docket.',
    },
    {
      q: 'Can rural/grassroots teams apply without an incorporated company?',
      a: 'Yes! Individual innovators, SHG collectives, and student teams can apply directly for TRL 1-4 grants without private limited registration.',
    },
    {
      q: 'How quickly are approved grant funds disbursed via PFMS?',
      a: 'Once endorsed by the University Dean or District Committee, funds are disbursed directly to bank accounts within an average of 11.8 days.',
    },
  ];

  return (
    <div className="space-y-8">
      
      {/* HEADER BANNER */}
      <div className="bg-[#122b1e] text-white p-8 rounded-3xl space-y-4 shadow-xs relative overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">
            STATE SCHEMES & GRANTS PORTAL
          </span>
          <span className="text-[10px] font-extrabold text-emerald-300">PFMS DIRECT DISBURSEMENT</span>
        </div>

        <h1 className="text-2xl lg:text-3xl font-black">
          Grants, Challenges & Career Tracks
        </h1>
        <p className="text-xs text-emerald-100/80 max-w-3xl font-medium leading-relaxed">
          Empowering Jharkhand innovators across 24 districts with state grants, academic fellowships, industry challenges, and corporate sponsorship.
        </p>

        {/* CORE METRICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-slate-800">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Grants Pool</span>
            <p className="text-xl font-black text-slate-900">₹45 Cr+</p>
            <span className="text-[10px] font-semibold text-emerald-700">84 Active Calls</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Disbursed Funds</span>
            <p className="text-xl font-black text-emerald-800">₹15.20 Cr</p>
            <span className="text-[10px] font-semibold text-emerald-700">142 Funded Projects</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Disbursement Speed</span>
            <p className="text-xl font-black text-slate-900">11.8 Days</p>
            <span className="text-[10px] font-semibold text-emerald-700">PFMS Direct Node</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Success Rate</span>
            <p className="text-xl font-black text-slate-900">94%</p>
            <span className="text-[10px] font-semibold text-emerald-700">Verified Applicants</span>
          </div>
        </div>
      </div>

      {/* FILTER STRIP */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto text-xs font-bold">
          {['All Opportunities', 'State Grants', 'Corporate Challenges', 'R&D Fellowships'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                selectedType === type
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <span>Target District:</span>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="font-bold text-emerald-800 bg-white border border-slate-200 rounded-xl px-3 py-1.5 focus:outline-none cursor-pointer"
          >
            <option value="All">All 24 Districts</option>
            <option value="Ranchi">Ranchi Zone</option>
            <option value="Dhanbad">Dhanbad Mining Corridor</option>
            <option value="Kolhan">Kolhan / Jamshedpur</option>
          </select>
        </div>
      </div>

      {/* SCHEMES CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-md ${item.badgeColor}`}>
                  {item.tag}
                </span>
                <span className="text-[10px] font-bold text-amber-800">⏱ {item.daysLeft}</span>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Sponsor: <strong className="text-slate-800">{item.sponsor}</strong> • {item.location}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-black text-emerald-800">{item.grant}</span>
              <button
                type="button"
                onClick={() => alert(`Applying for ${item.title}`)}
                className="px-4 py-1.5 bg-emerald-800 text-white font-extrabold text-xs rounded-xl hover:bg-emerald-900 transition cursor-pointer"
              >
                Apply for Opportunity →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ ACCORDION SECTION */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-md">
            APPLICANT GUIDANCE & FAQ
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <h3 className="text-xs font-extrabold text-slate-900">Q: {faq.q}</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}