import React from 'react';

export default function About({ onNavigate }) {
  const impactStories = [
    {
      location: 'RANCHI DISTRICT',
      title: 'Smart Agriculture Solar Network',
      problem: 'Up to 35% of harvested seasonal produce spoiled before reaching regional mandis due to lack of cold-chain infrastructure.',
      solution: 'Modular, micro solar cold storage facilities governed via panchayat-farmer producer orgs.',
      metric: '+38%',
      subtext: 'Farmer household income across 14 Panchayats',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600'
    },
    {
      location: 'SANTHAL PARGANAS',
      title: 'Tele-Health Pod for Rural Dumka',
      problem: 'Remote forested hamlets lacked primary doctors within 40 kilometers, delaying critical diagnoses.',
      solution: 'Low-bandwidth satellite telehealth terminal with automated vitals and cloud prescriptions.',
      metric: '12,400+',
      subtext: 'Clinical consultations delivered to tribal elders',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
    },
    {
      location: 'BOKARO STEEL CITY',
      title: 'Waste-to-Eco-Brick Initiative',
      problem: 'Accumulated metallurgical slag occupying valuable urban land and polluting runoff channels.',
      solution: 'Cold-cure geo-polymer process turning blast furnace byproduct into high-strength bricks.',
      metric: '450 Tons',
      subtext: 'Slag recycled into civil road pavers and schools',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="bg-[#f4f7f0] min-h-screen pt-8 pb-12 px-6 lg:px-12 space-y-20">
      
      {/* SECTION 1: Innovation That Creates Impact */}
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full">
            PROVEN OUTCOMES
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
            Innovation That Creates Impact
          </h1>
          <p className="text-xs lg:text-sm text-slate-600 font-medium">
            Real transformations spearheaded by Jharkhand Innovators supported through our portal.
          </p>
        </div>

        {/* 3 Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactStories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-100 shadow-xs overflow-hidden flex flex-col justify-between space-y-6">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-[10px] px-3 py-1 rounded-full tracking-wider">
                    {story.location}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    <strong className="text-rose-600">Problem: </strong>{story.problem}
                  </p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    <strong className="text-emerald-700">Solution: </strong>{story.solution}
                  </p>
                </div>
              </div>

              {/* Bottom Stat Pill */}
              <div className="p-6 pt-0">
                <div className="bg-emerald-50/80 rounded-2xl p-4 text-center border border-emerald-100/50">
                  <p className="text-2xl font-black text-emerald-900">{story.metric}</p>
                  <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{story.subtext}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Call to Action Banner */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-emerald-800 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden space-y-6">
          
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200 bg-emerald-700/60 px-3 py-1 rounded-full">
            JOIN THE MOVEMENT
          </span>

          <h2 className="text-3xl lg:text-5xl font-black max-w-2xl leading-tight">
            Your idea could be the next big change in Jharkhand.
          </h2>

          <p className="text-xs md:text-sm text-emerald-100 max-w-xl font-medium leading-relaxed">
            Have a problem worth solving or a technical innovation worth scaling? Share it directly with incubators, university labs, and state enterprise funds.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => onNavigate && onNavigate('login')}
              className="px-6 py-3 bg-white text-emerald-900 font-extrabold text-xs rounded-xl hover:bg-slate-100 transition cursor-pointer shadow-sm"
            >
              Submit Your Idea →
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('explore')}
              className="px-6 py-3 bg-emerald-700/60 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl border border-emerald-600 transition cursor-pointer"
            >
              Explore Projects
            </button>
          </div>

          {/* Decorative Rings */}
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full border-2 border-emerald-600/40 pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full border-2 border-emerald-500/30 pointer-events-none"></div>
        </div>
      </div>

      {/* SECTION 3: Global Footer */}
      <footer className="max-w-7xl mx-auto border-t border-slate-200/80 pt-12 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="JIP Logo" className="h-7 w-auto object-contain" />
              <span className="font-extrabold text-slate-900 text-sm tracking-tight">JIP</span>
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Catalyzing grassroots innovations, translational research, and entrepreneurial ecosystems across the state of Jharkhand.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-black uppercase text-slate-900">PLATFORM</p>
            <ul className="space-y-2 text-xs font-semibold text-slate-500">
              <li><button onClick={() => onNavigate('explore')} className="hover:text-slate-900 cursor-pointer">Explore</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-slate-900 cursor-pointer">How It Works</button></li>
              <li><button onClick={() => onNavigate('opportunities')} className="hover:text-slate-900 cursor-pointer">Opportunities</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-black uppercase text-slate-900">ECOSYSTEM</p>
            <ul className="space-y-2 text-xs font-semibold text-slate-500">
              <li className="hover:text-slate-900 cursor-pointer">Students</li>
              <li className="hover:text-slate-900 cursor-pointer">Communities</li>
              <li className="hover:text-slate-900 cursor-pointer">Universities</li>
              <li className="hover:text-slate-900 cursor-pointer">Industries</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-black uppercase text-slate-900">RESOURCES</p>
            <ul className="space-y-2 text-xs font-semibold text-slate-500">
              <li className="hover:text-slate-900 cursor-pointer">Help Center</li>
              <li className="hover:text-slate-900 cursor-pointer">FAQs</li>
              <li className="hover:text-slate-900 cursor-pointer">Guidelines</li>
              <li className="hover:text-slate-900 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-black uppercase text-slate-900">LEGAL</p>
            <ul className="space-y-2 text-xs font-semibold text-slate-500">
              <li className="hover:text-slate-900 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-slate-900 cursor-pointer">Terms</li>
              <li className="hover:text-slate-900 cursor-pointer">Accessibility</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-200/60 pt-6 text-[11px] font-semibold text-slate-500 gap-2">
          <span>© Jharkhand Innovation Portal - Government of Jharkhand. All rights reserved.</span>
          <span className="text-emerald-800 font-extrabold flex items-center gap-1">
            • EMPOWERING REGIONAL INNOVATION
          </span>
        </div>
      </footer>

    </div>
  );
}