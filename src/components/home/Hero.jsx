import React from 'react';

export default function Hero({ onNavigate, onOpenSubmitModal }) {
    const stats = [
        { label: 'Submitted Ideas', value: '10,480+', sub: 'Grassroots & Academic Filings', icon: '💡' },
        { label: 'Active Projects', value: '268+', sub: 'Prototypes in Field Validation', icon: '🚀' },
        { label: 'University Partners', value: '54', sub: 'Academic Incubators & Labs', icon: '🎓' },
        { label: 'Industry Partners', value: '112+', sub: 'PSUs, MSMEs and Tech Sponsors', icon: '🏢' },
    ];

    return (
       <section className="bg-[#f4f7f0] pt-8 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6">
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/50 border border-emerald-300/60 text-emerald-900 text-xs font-bold tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                        </span>
                        JHARKHAND INNOVATION ECOSYSTEM
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                        Ideas From Jharkhand. <br/>
                        <span className="text-emerald-800">Impact for Jharkhand.</span>
                    </h1>
                    <p className="text-base text-slate-600 max-w-xl font-medium leading-relaxed">
                        Connect ideas, people, institutions, and industries to build sustainable grassroots and translational solutions for our state.
                    </p>
                    
                    {/* BUTTON ACTIONS WIRED UP */}
                    <div className="flex items-center gap-4 pt-2">
                        <button 
                            type="button"
                            onClick={onOpenSubmitModal}
                            className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm rounded-xl shadow-sm transition flex items-center gap-2 cursor-pointer"
                        >
                            Submit Your Idea <span>→</span>
                        </button>
                        <button 
                            type="button"
                            onClick={() => onNavigate && onNavigate('explore')}
                            className="px-6 py-3 bg-white border border-slate-200 font-bold text-sm rounded-xl shadow-xs hover:bg-slate-100 transition cursor-pointer"
                        >
                            Explore Innovations
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-600 pt-4 font-semibold">
                        <span className="text-emerald-700 flex items-center gap-1 font-bold">✓ Civic Alliance:</span>
                        <span>Students</span>
                        <span>•</span>
                        <span>Communities</span>
                        <span>•</span>
                        <span>Universities</span>
                        <span>•</span>
                        <span>Industries</span>
                    </div>
                </div>

                <div className="lg:col-span-5 relative flex justify-center">
                    <div className="absolute -top-4 -left-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 z-10">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm">
                            📈
                        </div>
                        <div className="text-left leading-tight">
                            <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">NEW INNOVATIONS</span>
                            <span className="text-xs font-extrabold text-slate-900">+1,240 Ideas this month</span>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex items-center justify-center my-6">
                        <div className="text-center space-y-3 font-extrabold tracking-tight">
                            <div className="flex justify-between items-center gap-2 text-xs text-slate-400">
                                <span className="text-emerald-700 text-sm">INNOVATION</span>
                                <span>RANCHI</span>
                                <span className="text-emerald-800">MINING 4.0</span>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <span className="text-2xl text-slate-900">KOLHAN</span>
                                <span className="bg-emerald-200 text-emerald-900 text-[10px] px-2 py-0.5 rounded-md">TRIBAL TECH</span>
                                <span className="text-lg text-emerald-800">COMMUNITY</span>
                            </div>
                            <div className="text-2xl text-emerald-800 tracking-wide">
                                SUSTAINABILITY
                            </div>
                            <div className="flex justify-between items-center text-slate-800">
                                <span className="text-emerald-700 text-base">SANTHAL</span>
                                <span className="text-3xl font-black text-slate-900">JHARKHAND</span>
                            </div>
                            <div className="flex justify-around items-center text-xs">
                                <span className="text-emerald-700 font-bold">PALAMU</span>
                                <span className="text-xl text-emerald-800 font-black">OPPORTUNITY</span>
                                <span className="text-slate-900 font-bold">STARTUPS</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 z-10">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm">
                            📍
                        </div>
                        <div className="text-left leading-tight">
                            <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">TERRITORY REACH</span>
                            <span className="text-xs font-extrabold text-slate-900">24 Districts Active</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-slate-700">{stat.label}</p>
                        <p className="text-3xl font-black text-slate-900 mt-3">{stat.value}</p>
                        <p className="text-[11px] font-semibold text-emerald-700 mt-1">{stat.sub}</p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/60 flex items-center justify-center text-emerald-800 text-base">
                        {stat.icon}
                    </div>
                </div>
                ))}
            </div>
        </div>
       </section>
    );
}