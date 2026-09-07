import React, { useState } from 'react';

export default function CreateChallengeModal({ isOpen, onClose, userRole }) {
  // Get today's date formatted as YYYY-MM-DD for autofill
  const todayDate = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    title: '',
    category: 'community',
    district: 'Gumla',
    createdDate: todayDate,
    description: '',
    expectedDeliverables: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Challenge successfully posted to the State Innovation Registry!');
    onClose();
  };

  const isCommunity = userRole === 'community';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* MODAL HEADER */}
        <div className="p-6 bg-[#122b1e] text-white flex justify-between items-center shrink-0">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-2.5 py-0.5 rounded-full">
              {isCommunity ? 'GRASSROOTS BOTTLENECK DOCKET' : 'ACADEMIC & RESEARCH CHALLENGE'}
            </span>
            <h2 className="text-xl font-black text-white mt-1">
              {isCommunity ? 'Post a Village & Gram Sabha Problem Statement' : 'Post an R&D / Institutional Problem Statement'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-900 text-emerald-200 flex items-center justify-center font-bold hover:bg-emerald-800 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* FORM INPUTS */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  {isCommunity ? 'Problem Statement / Bottleneck Title *' : 'R&D Challenge Title *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    isCommunity 
                      ? 'e.g. High-Fluoride Water Treatment for Khunti Tribal Hamlets' 
                      : 'e.g. Indigenous Slag Upcycling for Eco-Friendly Paver Blocks'
                  }
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Territory / District *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800 cursor-pointer"
                  >
                    <option value="Gumla">Gumla Node</option>
                    <option value="Khunti">Khunti Collective</option>
                    <option value="Ranchi">Ranchi Division</option>
                    <option value="Dhanbad">Dhanbad Mining Belt</option>
                    <option value="Santhal">Santhal Pargana</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Creation Date
                  </label>
                  <input
                    type="date"
                    readOnly
                    value={formData.createdDate}
                    className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Detailed Bottleneck / Technical Scope *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    isCommunity
                      ? 'Describe the local bottleneck faced by villagers, farmers, or artisans...'
                      : 'Outline technical specs, required TRL levels, and laboratory equipment needs...'
                  }
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl transition cursor-pointer shadow-xs"
              >
                Publish Challenge to Portal →
              </button>
            </form>

            {/* GUIDELINES PANEL */}
            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                    CHALLENGE RULES
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 mt-1">
                    {isCommunity ? 'Grassroots Problem Guidelines' : 'Institutional R&D Guidelines'}
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex gap-2.5 items-start">
                    <span className="text-emerald-800 font-extrabold shrink-0">✓</span>
                    <div>
                      <p className="font-extrabold text-slate-900">Direct Student & Startup Matching</p>
                      <p className="text-[11px] text-slate-500 font-medium">Published challenges automatically trigger notifications across 42 partner universities.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <span className="text-emerald-800 font-extrabold shrink-0">✓</span>
                    <div>
                      <p className="font-extrabold text-slate-900">State Resource Facilitation</p>
                      <p className="text-[11px] text-slate-500 font-medium">Approved challenges gain priority sandbox access via the Department of IT & e-Governance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-900 text-white rounded-xl space-y-1">
                <span className="text-[9px] font-black uppercase text-emerald-300">FACILITATION DESK</span>
                <p className="text-[10px] text-emerald-100 font-medium">
                  Need help scoping your challenge? Reach out to your local Gram Sabha Nodal Officer or University IP Cell lead.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}