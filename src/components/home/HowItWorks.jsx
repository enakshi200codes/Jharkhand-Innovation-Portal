import React from 'react';

export default function HowItWorks() {
  const pipelineSteps = [
    {
      step: '01 • SHARE',
      title: 'Submit Your Idea',
      description: 'Document grassroots challenges or novel technical inventions in under 5 minutes.',
      icon: '💡',
    },
    {
      step: '02 • CONNECT',
      title: 'Find Right People',
      description: 'Match with vetted academic guides, co-founders, and state research mentors.',
      icon: '❇️',
    },
    {
      step: '03 • COLLABORATE',
      title: 'Build Together',
      description: 'Leverage university makerspaces, test facilities, and collaborative grants.',
      icon: '👥',
    },
    {
      step: '04 • VALIDATE',
      title: 'Test & Improve',
      description: 'Deploy prototypes in real village panchayats and industrial mining corridors.',
      icon: '☑️',
    },
    {
      step: '05 • IMPACT',
      title: 'Create Change',
      description: 'Attain state procurement, file IP protections, and scale ventures sustainably.',
      icon: '⛰️',
    },
  ];

  const stakeholders = [
    {
      badge: 'TALENT & ASPIRING FOUNDERS',
      title: 'Students & Scholars',
      description: 'Turn coursework, hackathon submissions, and capstones into funded ventures and patents.',
      action: 'Explore Opportunities →',
      icon: '🎓',
    },
    {
      badge: 'GRASSROOTS VOICES',
      title: 'Rural & Urban Communities',
      description: 'Voice localized bottlenecks—from water sanitation to farm logistics—for innovators to address.',
      action: 'Share a Challenge →',
      icon: '👥',
    },
    {
      badge: 'R&D HUBS',
      title: 'Universities & Labs',
      description: 'Syndicate advanced research, open access to makerspaces, and monitor incubation grants.',
      action: 'Explore Research →',
      icon: '🧪',
    },
    {
      badge: 'ENTERPRISE & PSUS',
      title: 'Industry Leaders',
      description: 'Co-sponsor applied hackathons, pilot regional POCs, and license homegrown deep tech.',
      action: 'Find Talent & Tech →',
      icon: '🏢',
    },
  ];

  return (
      <div className="bg-[#f4f7f0] min-h-screen py-12 px-6 lg:px-12 space-y-16">
      
      {/* SECTION 1: Lifecycle Pipeline */}
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full">
            LIFECYCLE PIPELINE
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
            How It Works
          </h2>
          <p className="text-xs lg:text-sm text-slate-600 font-medium">
            From an idea to scalable real-world state impact.
          </p>
        </div>

        {/* 5-Step Connected Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
          {/* Connecting Line behind cards (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-700/20 -z-0 -translate-y-8"></div>

          {pipelineSteps.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col justify-between text-center relative z-10 hover:-translate-y-1 transition duration-200"
            >
              <div className="space-y-3">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-emerald-800 text-white mx-auto flex items-center justify-center text-lg shadow-sm">
                  {item.icon}
                </div>

                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 block">
                  {item.step}
                </span>

                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Ecosystem Stakeholders */}
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full">
              STAKEHOLDERS
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2">
              Built for the Entire Ecosystem
            </h2>
          </div>
          <p className="text-xs text-slate-600 font-medium max-w-md">
            Tailored interfaces and programmatic pathways for every pillar of Jharkhand's growth.
          </p>
        </div>

        {/* 4 Stakeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100/60 flex items-center justify-center text-emerald-800 text-lg">
                  {card.icon}
                </div>

                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 block">
                  {card.badge}
                </span>

                <h3 className="text-base font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-900 hover:text-emerald-800 transition flex items-center gap-1">
                  {card.action}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}