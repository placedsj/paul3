import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Start Your Project Today</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Ready to upgrade your roof? Serving Damascus, Hampton, Sussex, Saint John, and surrounding Southern NB areas. Contact us for a free, no-obligation estimate.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600 mb-1">Mon-Fri from 8am to 6pm</p>
                  <a href="tel:5062714162" className="text-xl font-bold text-blue-600 hover:text-blue-700">(506) 271-4162</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-600">Based in Damascus, New Brunswick</p>
                  <p className="text-slate-500 text-sm mt-1">Serving all of Southern NB</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                 <div className="bg-slate-100 p-3 rounded-lg text-slate-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Emergency Service</h4>
                  <p className="text-slate-600">Available for urgent repairs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="(506) 555-0123" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                  <option>Metal Roofing</option>
                  <option>Siding Installation</option>
                  <option>Gutter Guards / Cleaning</option>
                  <option>Repair / Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};