import React, { useState } from 'react';

export default function SubmitIdeaModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'agritech',
    problem: '',
    solution: '',
    trl: 'TRL 3',
    selectedLabs: [],
  });

  if (!isOpen) return null;

  const handleLabToggle = (labName) => {
    setFormData((prev) => {
      const labs = prev.selectedLabs.includes(labName)
        ? prev.selectedLabs.filter((l) => l !== labName)
        : [...prev.selectedLabs, labName];
      return { ...prev, selectedLabs: labs };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Idea submitted successfully to the Jharkhand Innovation Portal!');
    onClose();
  };

  return (
    /* BACKDROP - Fixed inset with flex centering and NO outer scrollbar */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-4 lg:p-6 overflow-hidden">
      
      {/* INNER MODAL BOX - Flex column with capped max height */}
      <div className="bg-[#f4f7f0] w-full max-w-5xl h-[88vh] rounded-3xl shadow-2xl border border-slate-200 text-slate-800 flex flex-col overflow-hidden">
        
        {/* FIXED MODAL HEADER */}
        <div className="bg-emerald-950 text-white p-6 lg:p-8 rounded-t-3xl flex items-center justify-between shrink-0 border-b border-emerald-900">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-800 text-emerald-200 px-2.5 py-0.5 rounded-full">
                JHARKHAND STATE INCUBATION
              </span>
              <span className="text-[10px] font-extrabold text-emerald-300">ONE-CLICK AISHE SUBMISSION</span>
            </div>
            <h2 className="text-xl lg:text-2xl font-black">
              Pitch Your Innovation to State Incubators & Industry Sponsors
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-full flex items-center justify-center transition cursor-pointer shrink-0"
          >
            ✕
          </button>
        </div>

        {/* SCROLLABLE BODY CONTENT (Single scroll container) */}
        <div className="p-6 lg:p-8 space-y-8 overflow-y-auto flex-1 custom-scrollbar">

          {/* STEP 1: PIPELINE & IMPACT BANNER */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Ideas from Jharkhand. Impact for Jharkhand.</h3>
                <p className="text-xs text-slate-500 font-medium">
                  Statewide innovation pipeline connecting student ideas with labs, state seed grants, and corporate sponsors.
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-2xl text-right">
                <span className="text-[9px] font-black uppercase text-emerald-900 block">Flagship Grant Pool</span>
                <span className="text-sm font-black text-emerald-800">Tribal Agritech Grant • Up to ₹15 Lakhs</span>
              </div>
            </div>

            {/* IMPACT STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <span className="text-xl font-black text-slate-900 block">10.4K+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Submissions</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <span className="text-xl font-black text-slate-900 block">268+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Incubated</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <span className="text-xl font-black text-slate-900 block">54</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Patents Filed</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <span className="text-xl font-black text-slate-900 block">112+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Industry MoUs</span>
              </div>
            </div>

            {/* 5-STEP PIPELINE TRACKER */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                5-Step Innovation Pipeline
              </span>
              <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-bold text-slate-600">
                <div className="bg-emerald-800 text-white p-2 rounded-xl">1. Intake & Triage</div>
                <div className="bg-slate-100 p-2 rounded-xl">2. Tech Feasibility</div>
                <div className="bg-slate-100 p-2 rounded-xl">3. Incubation & Labs</div>
                <div className="bg-slate-100 p-2 rounded-xl">4. Field Validation</div>
                <div className="bg-slate-100 p-2 rounded-xl">5. Procurement & Scale</div>
              </div>
            </div>
          </div>

          {/* STEP 2: MAIN PITCH FORM & EVALUATOR SIDEBAR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: PITCH SUBMISSION FORM */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
              
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Innovation Proposal Details
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Innovator: <strong className="text-slate-800">Aarav Kumar Murmu</strong> (ID #JHK-STD-9012 • NIT Jamshedpur)
                </p>
              </div>

              {/* TITLE & CATEGORY */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Innovation Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., IoT Slurry Pipeline Leak Detector for Open-Cast Mines"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1">
                      Focus Domain / Sector *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    >
                      <option value="agritech">Tribal Agritech & Forest Produce</option>
                      <option value="mining">Mining Safety & Core Infra</option>
                      <option value="healthcare">Healthcare AI & Dialect Models</option>
                      <option value="cleantech">Clean-Tech & Green Hydrogen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1">
                      Target Maturity (TRL Level) *
                    </label>
                    <select
                      value={formData.trl}
                      onChange={(e) => setFormData({ ...formData, trl: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    >
                      <option value="TRL 1-2">TRL 1-2: Literature & Concept</option>
                      <option value="TRL 3">TRL 3: Proof of Concept (PoC)</option>
                      <option value="TRL 4">TRL 4: Bench Tested Prototype</option>
                      <option value="TRL 5-6">TRL 5-6: Field Validation Pilot</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* PROBLEM & SOLUTION */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Problem Statement & Regional Impact *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe the specific problem in Jharkhand your innovation addresses..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 mb-1">
                    Proposed Solution Architecture & Hardware/Software Stack *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Detail your technology stack, sensor setup, or machine design..."
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800"
                  />
                </div>
              </div>

              {/* REQUEST LAB ACCESS */}
              <div className="space-y-2">
                <label className="block text-xs font-extrabold text-slate-700">
                  Request University Shared Lab Infrastructure
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-bold">
                  {[
                    'BIT Mesra Rapid Prototyping Facility',
                    'NIT Jamshedpur Sensor Testing Chamber',
                    'IIT ISM Central Research Facility',
                    'CSIR-NML Metallurgy Testbed',
                  ].map((lab) => (
                    <label
                      key={lab}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                        formData.selectedLabs.includes(lab)
                          ? 'bg-emerald-50 border-emerald-800 text-emerald-950'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{lab}</span>
                      <input
                        type="checkbox"
                        checked={formData.selectedLabs.includes(lab)}
                        onChange={() => handleLabToggle(lab)}
                        className="accent-emerald-800"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* SUBMIT ACTIONS */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-emerald-800 text-white text-xs font-extrabold rounded-xl hover:bg-emerald-900 transition shadow-xs cursor-pointer"
                >
                  Submit Proposal for Screening →
                </button>
              </div>

            </form>

            {/* RIGHT COLUMN: EVALUATION RUBRIC & HELPDESK */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* EVALUATION RUBRIC WIDGET */}
              <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4">
                <span className="text-[10px] font-extrabold uppercase bg-emerald-800 text-emerald-200 px-2.5 py-1 rounded-full">
                  OFFICIAL EVALUATION RUBRIC
                </span>
                <h4 className="text-sm font-black uppercase text-white">How Your Pitch is Scored</h4>

                <div className="space-y-3 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-2xl space-y-1 border border-slate-700">
                    <div className="flex justify-between font-extrabold text-emerald-400">
                      <span>Regional Need & Impact</span>
                      <span>40% Weight</span>
                    </div>
                    <p className="text-[10px] text-slate-300">Direct socio-economic or industrial benefit in Jharkhand.</p>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-2xl space-y-1 border border-slate-700">
                    <div className="flex justify-between font-extrabold text-emerald-400">
                      <span>Technical Feasibility</span>
                      <span>30% Weight</span>
                    </div>
                    <p className="text-[10px] text-slate-300">Clear TRL milestone progression and stack viability.</p>
                  </div>

                  <div className="bg-slate-800/80 p-3 rounded-2xl space-y-1 border border-slate-700">
                    <div className="flex justify-between font-extrabold text-emerald-400">
                      <span>Commercial / Pilot Plan</span>
                      <span>30% Weight</span>
                    </div>
                    <p className="text-[10px] text-slate-300">Scalability with Gram Sabhas or MSME Industry MoUs.</p>
                  </div>
                </div>
              </div>

              {/* NEED PROPOSAL ASSISTANCE? */}
              <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-3">
                <span className="text-[10px] font-extrabold uppercase bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded">
                  STUDENT SUPPORT CELL
                </span>
                <h4 className="text-xs font-black uppercase text-white">Need Proposal Assistance?</h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">
                  Unsure how to frame your problem statement? Schedule a 1-on-1 session with a state mentor.
                </p>
                <button
                  type="button"
                  onClick={() => alert('Connecting to AI Proposal Mentor...')}
                  className="w-full py-2 bg-white text-emerald-950 font-extrabold text-xs rounded-xl hover:bg-slate-100 transition cursor-pointer"
                >
                  Chat with AI Mentor
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}