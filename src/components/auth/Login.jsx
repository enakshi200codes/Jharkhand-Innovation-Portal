import React, { useState } from 'react';
import logo from '../../assets/SIH-logo.png';

export default function Login({ onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f4f7f0] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Visual Column */}
        <div className="bg-emerald-800 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-3 z-10">
            <img 
              src={logo} 
              alt="Jharkhand Emblem" 
              className="h-9 w-auto brightness-0 invert"
            />
            <div className="leading-tight border-l border-emerald-600 pl-3">
              <span className="font-bold text-white block text-xs tracking-tight">
                JHARKHAND INNOVATION PORTAL
              </span>
            </div>
          </div>

          <div className="my-12 space-y-3 z-10">
            <h2 className="text-2xl font-extrabold leading-snug">
              Empowering grassroots innovation across Jharkhand.
            </h2>
            <p className="text-xs text-emerald-100 leading-relaxed">
              Log in to track your submitted ideas, collaborate on active challenges, or manage institutional reviews.
            </p>
          </div>

          <div className="text-[10px] text-emerald-200 z-10 font-semibold uppercase tracking-wider">
            Government of Jharkhand
          </div>

          {/* Decorative background circle */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-700/50 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        {/* Right Form Column */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900">Welcome Back!</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Log in to continue to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="admin@jharkhand.gov.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-700 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-700 focus:bg-white transition"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-emerald-700 focus:ring-emerald-700" />
                <span className="text-[11px] text-slate-600 font-medium">Remember me</span>
              </label>
              <a href="#" className="text-[11px] text-emerald-800 font-bold hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs rounded-xl shadow-xs transition cursor-pointer mt-2"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-6">
            DON'T HAVE AN ACCOUNT?{' '}
            <button 
              onClick={onSwitchToRegister}
              className="text-emerald-800 font-bold hover:underline cursor-pointer"
            >
              Sign Up
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}