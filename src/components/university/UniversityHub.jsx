import React from 'react';

export default function UniversityHub() {
  return (
    <div className="bg-[#f4f7f0] min-h-screen pt-6 pb-16 px-6 lg:px-12 space-y-8 text-slate-800">
      
      {/* Top Banner / AISHE Context */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-800 tracking-wider">
            <span className="bg-emerald-100 px-2 py-0.5 rounded-md">VERIFIED INSTITUTIONAL ENTITY</span>
            <span>• AISHE U-0202</span>
            <span>• BIT MESRA</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1">
            University Patents, IPR Cell & Commercialization
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            DST & IPR Facilitation Node #JHK-IPR-04 | Campus Intellectual Property Docket & State Subsidy Facilitation
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-xs font-bold rounded-xl shadow-xs hover:bg-slate-50 transition">
            Book CIPAM Patent Attorney
          </button>
          <button className="px-4 py-2 bg-emerald-800 text-white text-xs font-extrabold rounded-xl shadow-xs hover:bg-emerald-900 transition">
            + File New Docket / IDF
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Campus Dockets</span>
          <p className="text-2xl font-black text-slate-900">64 <span className="text-xs font-semibold text-slate-500">Filings</span></p>
          <p className="text-[10px] text-slate-400 font-medium">18 Published • 8 Granted</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">State IPR Subsidies Claimed</span>
          <p className="text-2xl font-black text-emerald-800">₹18.60 <span className="text-xs font-semibold text-emerald-700">Lakhs</span></p>
          <p className="text-[10px] text-slate-400 font-medium">100% statutory fee & attorney rebate</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Provisional Filings</span>
          <p className="text-2xl font-black text-slate-900">22 <span className="text-xs font-semibold text-slate-500">Fast-Tracked</span></p>
          <p className="text-[10px] text-slate-400 font-medium">Under 12-Month Complete Spec Window</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Commercial Tech Licensed</span>
          <p className="text-2xl font-black text-slate-900">6 <span className="text-xs font-semibold text-slate-500">Patents</span></p>
          <p className="text-[10px] text-slate-400 font-medium">Active royalties via MSME & Tata Steel</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Patent Pipeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-100">
            <span className="text-xs font-extrabold text-slate-900 px-3">Patent Pipeline (64)</span>
            <div className="flex gap-2">
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-lg">IDFs</span>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">Subsidy Claims</span>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">Granted & Licensed</span>
            </div>
          </div>

          {/* Patent Card 1 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                PROVISIONAL PATENT • IN-2024-JHK-90812
              </span>
              <span className="text-[10px] font-bold text-slate-400">Filed Oct 14, 2024</span>
            </div>

            <h3 className="text-base font-extrabold text-slate-900">
              Low-Power Ultrasonic Waveguide Detector for Slurry Pipeline Integrity
            </h3>

            <p className="text-xs text-slate-500 font-medium">
              Inventive Entity: BIT Mesra & Aarav Kumar Murmu (Student Innovator Joint Filing)
            </p>

            <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-600">Provisional to Complete Specification Window</span>
              <span className="font-extrabold text-emerald-800">8 Months Remaining</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-bold text-slate-600">₹25,000 Filing Fee Reimbursed</span>
              <button className="px-4 py-2 bg-emerald-100 text-emerald-900 font-extrabold text-xs rounded-xl hover:bg-emerald-200 transition">
                Prepare Complete Specification →
              </button>
            </div>
          </div>

          {/* Patent Card 2 */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
                GRANTED PATENT • IN-PAT-489102
              </span>
              <span className="text-[10px] font-bold text-slate-400">Valid through 2043</span>
            </div>

            <h3 className="text-base font-extrabold text-slate-900">
              Acoustic Sensor Node Array for Opencast Rock Slope Stability
            </h3>

            <p className="text-xs text-slate-500 font-medium">
              Inventors: Dr. S. Mukherjee (Dept of Mining) & Dr. P. R. Rao (Dept of Electronics)
            </p>

            <div className="bg-emerald-50 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-emerald-900">Commercialized to Mining Safety MSME Consortium</p>
                <p className="text-[10px] text-emerald-700">Royalty Split: 70% Inventors / 30% BIT Mesra Corpus</p>
              </div>
              <div className="text-right">
                <p className="text-base font-black text-emerald-900">₹2,84,000</p>
                <p className="text-[10px] font-semibold text-emerald-700">Quarterly Yield (Q3)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: State Academic Charter & Search Tools */}
        <div className="space-y-6">
          {/* Charter Card */}
          <div className="bg-emerald-900 text-white p-6 rounded-3xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-800 text-emerald-200 px-2.5 py-1 rounded-full">
              GOJ SCHEME GAZETTED
            </span>
            <h3 className="text-lg font-black leading-snug">State Academic IPR Reimbursement Charter</h3>
            <p className="text-xs text-emerald-100 font-medium leading-relaxed">
              Under the Department of Higher & Technical Education policy, 100% of statutory fees to the Indian Patent Office (IPO) are fully sponsored.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex justify-between border-b border-emerald-800 pb-1.5">
                <span>IPO Filing & Spec</span>
                <span className="font-extrabold text-emerald-300">100% Covered (₹8,000)</span>
              </div>
              <div className="flex justify-between border-b border-emerald-800 pb-1.5">
                <span>Request for Examination</span>
                <span className="font-extrabold text-emerald-300">100% Covered (₹20,000)</span>
              </div>
              <div className="flex justify-between">
                <span>Attorney Drafting Grant</span>
                <span className="font-extrabold text-emerald-300">Up to ₹1,00,000</span>
              </div>
            </div>
            <button className="w-full py-2.5 bg-white text-emerald-900 font-extrabold text-xs rounded-xl hover:bg-slate-100 transition mt-2">
              Generate State IPR Subsidy Invoice
            </button>
          </div>

          {/* Quick Search Widget */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Prior Art & Patent Search</h4>
            <div className="space-y-2">
              <button className="w-full text-left p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 flex justify-between items-center transition">
                <span>InPASS Database (Indian Patents)</span>
                <span>↗</span>
              </button>
              <button className="w-full text-left p-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 flex justify-between items-center transition">
                <span>WIPO Patentscope (Global)</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}