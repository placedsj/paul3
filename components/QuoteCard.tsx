import React from 'react';
import { TESTIMONIALS } from '../constants';

export const QuoteCard: React.FC = () => {
  const t = TESTIMONIALS[2]; // Use the 3rd one

  return (
    <div className="bg-slate-200 rounded-2xl shadow-xl p-6 border border-slate-300 h-full flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-4">
        <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
      </div>
      <blockquote className="text-slate-800 text-sm font-medium leading-relaxed mb-4">
        "{t.content}"
      </blockquote>
      <div className="font-bold text-slate-900">{t.name}</div>
    </div>
  );
};