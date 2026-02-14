import React from 'react';
import { Settings } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const TestimonialsCard: React.FC = () => {
  // Only take first 2
  const shownTestimonials = TESTIMONIALS.slice(0, 2);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">Recent Testimonials</h3>
        <Settings className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {shownTestimonials.map((t) => (
          <div key={t.id} className="bg-slate-50 p-4 rounded-xl flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <img src={t.avatarUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="font-bold text-sm text-slate-900">{t.name}</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">"{t.content}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};