import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[550px] sm:h-[650px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1629800732733-dc420216c52d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="uppercase tracking-wide text-xs font-bold text-blue-100">Serving Southern NB</span>
            </div>
            <span className="uppercase tracking-widest text-xs font-bold text-slate-400">Since 1989</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 leading-[1.1]">
            <span className="text-blue-500">#</span>BetterCallPaul
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-200 mb-8 leading-tight">
            Premier metal roofing experts based in <span className="font-semibold text-white">Damascus, NB</span>. 
            <br className="hidden sm:block" />
            <span className="text-blue-400 font-medium italic">Will yours be next?</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
             <a href="tel:5062714162" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl hover:shadow-blue-600/20 transform hover:-translate-y-1">
                <Phone className="w-5 h-5 fill-current" />
                Call (506) 271-4162
             </a>
             <button className="bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors border border-white/20">
                Free Estimate
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};