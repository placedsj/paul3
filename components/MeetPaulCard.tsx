import React from 'react';
import { Hammer } from 'lucide-react';

export const MeetPaulCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5">
         <Hammer className="w-32 h-32" />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start relative z-10">
        <img 
          src="https://i.ibb.co/9kKZMdqw/IMG-6812.jpg" 
          alt="Paul's Roofing" 
          className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-sm shrink-0"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-slate-900 leading-tight">Meet Paul</h3>
          <p className="text-blue-600 font-medium text-xs uppercase tracking-wide mb-2">Damascus, New Brunswick</p>
          <p className="text-slate-500 text-sm leading-relaxed">
            With over 35 years of experience in Southern NB, we've paved our own path to protection. Committed to quality craftsmanship you can trust.
          </p>
        </div>
      </div>
      <button className="mt-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition-colors relative z-10">
        Schedule a Consultation
      </button>
    </div>
  );
};