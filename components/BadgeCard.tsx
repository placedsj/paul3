import React from 'react';

export const BadgeCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 flex flex-col items-center text-center">
      <div className="relative mb-6">
        {/* Ribbon Badge Visual */}
        <div className="w-32 h-40 bg-blue-900 relative shadow-lg flex flex-col items-center justify-center text-white p-2 clip-path-ribbon">
           <div className="text-4xl font-black tracking-tighter uppercase leading-none mb-1 text-blue-400">35+</div>
           <div className="text-[10px] font-medium tracking-widest uppercase mb-1">YEARS</div>
           <div className="text-2xl font-black tracking-tighter uppercase leading-none">SERVING</div>
           <div className="mt-1 text-sm font-bold text-blue-200 uppercase">Southern NB</div>
        </div>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed">
        Proudly based in Damascus. Delivering reliable metal roofing service and lasting value for over 35 years.
      </p>
    </div>
  );
};