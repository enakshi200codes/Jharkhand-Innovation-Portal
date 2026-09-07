import React, { useState } from 'react';

export default function SubmitIdeaModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'tech',
    district: 'Ranchi',
    summary: '',
    trlLevel: 'TRL 1 - Basic Concept',
    teamSize: '1-3 Members',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Idea submitted successfully to the Jharkhand Innovation Registry!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* MODAL HEADER */}
        <div className="p-6 bg-[#122b1e] text-white flex justify-between items-center shrink-0">
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-2.5 py-0.5 rounded-full">
              CIVIC INNOVATION DOCKET
            </span>
            <h2 className="text-xl font-black text-white mt-1">Submit Your Pitch or Grassroots Solution</h2>
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
            
            {/* LEFT: FORM INPUTS */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Innovation / Challenge Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Low-Cost Cold Storage Powered by Phase-Change Biomaterials"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Domain Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800 cursor-pointer"
                  >
                    <option value="tech">Tech & IT Automation</option>
                    <option value="agri">AgriTech & Forest Produce</option>
                    <option value="health">Healthcare & Tribal Welfare</option>
                    <option value="clean">Clean Energy & Water</option>
                    <option value="mining">Mining & Metallurgical Safety</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Target District *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800 cursor-pointer"
                  >
                    <option value="Ranchi">Ranchi Zone</option>
                    <option value="Dhanbad">Dhanbad Mining Corridor</option>
                    <option value="Jamshedpur">East Singhbhum (JSR)</option>
                    <option value="Gumla">Gumla / Tribal Belt</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Technology Readiness (TRL) *
                  </label>
                  <select
                    value={formData.trlLevel}
                    onChange={(e) => setFormData({ ...formData, trlLevel: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800 cursor-pointer"
                  >
                    <option value="TRL 1">TRL 1 - Basic Concept</option>
                    <option value="TRL 3">TRL 3 - Lab Validation</option>
                    <option value="TRL 5">TRL 5 - Working Prototype</option>
                    <option value="TRL 7">TRL 7 - Field Deployment Ready</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Team Composition *
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800 cursor-pointer"
                  >
                    <option value="Solo">Solo Innovator</option>
                    <option value="1-3 Members">1–3 Core Members</option>
                    <option value="4+ Members">4+ Institutional Team</option>
                    <option value="SHG Collective">SHG / Gram Panchayat Collective</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1">
                  Executive Abstract / Problem & Solution *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the problem, target beneficiaries in Jharkhand, and how your technical solution works..."
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-xs rounded-xl transition cursor-pointer shadow-xs"
              >
                Submit Pitch Docket to State Registry →
              </button>
            </form>

            {/* RIGHT: STATE SUBMISSION GUIDELINES (REPLACES AI MENTOR) */}
            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-[9px] font-black uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                    SUBMISSION CHECKLIST
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 mt-1">
                    State Fast-Track Eligibility
                  </h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex gap-2.5 items-start">
                    <span className="text-emerald-800 font-extrabold shrink-0">✓</span>
                    <div>
                      <p className="font-extrabold text-slate-900">PFMS Direct Disbursement</p>
                      <p className="text-[11px] text-slate-500 font-medium">Valid Aadhaar and institutional/district endorsement triggers fast-tracked seed grants within 12 days.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <span className="text-emerald-800 font-extrabold shrink-0">✓</span>
                    <div>
                      <p className="font-extrabold text-slate-900">IP & Tribal Knowledge Policy</p>
                      <p className="text-[11px] text-slate-500 font-medium">All submitted intellectual property remains 100% owned by the innovator under state GI safeguards.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <span className="text-emerald-800 font-extrabold shrink-0">✓</span>
                    <div>
                      <p className="font-extrabold text-slate-900">Shared Sandbox Access</p>
                      <p className="text-[11px] text-slate-500 font-medium">Approved dockets gain free compute and lab access at IIT ISM, BIT Mesra, and NIT Jamshedpur.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-900 text-white rounded-xl space-y-1">
                <span className="text-[9px] font-black uppercase text-emerald-300">NEED TECHNICAL HELP?</span>
                <p className="text-[10px] text-emerald-100 font-medium">
                  Contact District Facilitator Alok Minz or visit your nearest Zila Panchayat Node for hands-on drafting support.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}