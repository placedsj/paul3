import React from 'react';
import { PORTFOLIO_IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Recent Work</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Built to Last. Built by Paul.</h3>
          </div>
          <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors group">
            View All Projects 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_IMAGES.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-md aspect-[4/3] cursor-pointer">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">{item.category}</span>
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};