import React, { useState } from 'react';
import { Menu, X, Hammer, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
             <div className="bg-blue-600 p-1.5 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
             </div>
             <span className="font-bold text-2xl tracking-tight">Paul's <span className="text-blue-500">Roofing</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5">
             <a href="tel:5062714162" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
                <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-bold tracking-wide">(506) 271-4162</span>
             </a>
             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
               Get a Quote
             </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-dark border-t border-gray-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
             <a href="tel:5062714162" className="block text-center w-full mt-4 bg-gray-800 text-white px-6 py-3 rounded-lg font-bold mb-2">
               Call (506) 271-4162
             </a>
             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold">
               Get a Quote
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};