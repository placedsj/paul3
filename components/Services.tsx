import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Complete Exterior Solutions</h3>
          <p className="text-slate-600 text-lg">
            From the peak of your roof to your foundation, we protect what matters most. Specialized in metal roofing systems designed for the Maritime climate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border border-slate-100">
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};