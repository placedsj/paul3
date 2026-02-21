import React, { useState } from 'react';
import { FAQS } from '../constants';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">FAQ</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Common Questions About Metal Roofing</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Switching to metal is a big decision. Here are honest answers to the questions we hear most often from homeowners in Southern New Brunswick.
            </p>
            <div className="bg-blue-100 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-2 text-blue-800 font-bold">
                <HelpCircle className="w-5 h-5" />
                <span>Have more questions?</span>
              </div>
              <p className="text-blue-900/70 text-sm mb-4">We're happy to explain the details over the phone.</p>
              <a href="tel:5062714162" className="text-sm font-bold text-blue-600 hover:text-blue-800 underline">Call us at (506) 271-4162</a>
            </div>
          </div>

          <div className="md:w-2/3 flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                >
                  <h4 className="font-bold text-slate-900 text-base">{faq.question}</h4>
                  <ChevronDown className={`w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};