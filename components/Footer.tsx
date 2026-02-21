import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Paul's Roofing</h3>
            <p className="text-sm leading-relaxed mb-4">
              Providing top-quality metal roofing solutions to Southern New Brunswick for over 35 years. #BetterCallPaul
            </p>
            <div className="flex gap-4 text-sm font-medium">
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
             <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
             <ul className="space-y-3">
               <li>
                 <a href="tel:5062714162" className="flex items-center gap-3 hover:text-white transition-colors">
                   <Phone className="w-5 h-5 text-blue-500" />
                   <span>(506) 271-4162</span>
                 </a>
               </li>
               <li>
                 <a href="mailto:paulsroofing@outlook.com" className="flex items-center gap-3 hover:text-white transition-colors">
                   <Mail className="w-5 h-5 text-blue-500" />
                   <span>paulsroofing@outlook.com</span>
                 </a>
               </li>
               <li className="flex items-center gap-3">
                 <MapPin className="w-5 h-5 text-blue-500" />
                 <span>Damascus, New Brunswick</span>
               </li>
             </ul>
          </div>

          <div className="text-sm">
            <h3 className="text-white font-bold text-lg mb-4">Service Area</h3>
            <p className="mb-2">Serving Southern New Brunswick including:</p>
            <p className="opacity-75">Damascus, Hampton, Sussex, Saint John, Quispamsis, Rothesay, and surrounding areas.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
          &copy; {new Date().getFullYear()} Paul's Roofing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};