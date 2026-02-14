import React from 'react';
import { Settings, MapPin as MapPinIcon, LocateFixed } from 'lucide-react';
import { MAP_PINS } from '../constants';

export const MapCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Local Impact</h3>
          <p className="text-xs text-slate-500">Serving Southern New Brunswick</p>
        </div>
        <LocateFixed className="w-5 h-5 text-blue-500" />
      </div>

      <div className="flex gap-4 mb-4 text-xs font-semibold">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-green-500"></div>
          <span className="text-slate-600">Recent Jobs</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-blue-500"></div>
          <span className="text-slate-600">Damascus HQ</span>
        </div>
      </div>

      {/* Styled Fake Map Container */}
      <div className="relative w-full aspect-square md:aspect-auto md:flex-1 bg-slate-900 rounded-xl overflow-hidden shadow-inner group">
        {/* Map Grid/Background Effect */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}>
        </div>
        
        {/* Abstract River/Road Shape - Representing Kennebecasis River? */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M40,0 C45,20 35,40 60,60 S80,80 80,100" fill="none" stroke="#3b82f6" strokeWidth="8" />
           <path d="M0,40 C20,45 40,35 60,60 S100,60 100,70" fill="none" stroke="#475569" strokeWidth="2" />
        </svg>

        {/* Highlighted Zone - Damascus Area */}
        <div className="absolute top-[40%] left-[40%] w-[15%] h-[15%] bg-blue-600/30 border border-blue-500/50 rounded-full blur-[1px]"></div>
        
        {/* Label */}
        <div className="absolute top-[48%] left-[48%] translate-x-1 bg-slate-800 text-white border border-slate-700 px-2 py-0.5 rounded shadow text-[10px] font-bold z-10 whitespace-nowrap">
          Damascus HQ
        </div>

        {/* Pins */}
        {MAP_PINS.map((pin) => (
          <div
            key={pin.id}
            className="absolute group/pin cursor-pointer transform -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform duration-200"
            style={{ top: `${pin.y}%`, left: `${pin.x}%` }}
          >
            <MapPinIcon 
              className={`w-6 h-6 ${pin.type === 'job' ? 'text-green-500 drop-shadow-md' : 'text-blue-500 drop-shadow-lg'} fill-current`} 
            />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover/pin:opacity-100 transition-opacity z-20 pointer-events-none border border-slate-700 shadow-xl font-medium">
              {pin.tooltip}
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-2 left-2 text-[10px] text-white/50">Map Data ©2024</div>
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-2 divide-x divide-slate-100 mt-6 pt-2">
        <div className="text-center px-4">
          <div className="text-4xl font-extrabold text-blue-600">35y</div>
          <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Experience</div>
        </div>
        <div className="text-center px-4">
          <div className="text-4xl font-extrabold text-blue-600">NB</div>
          <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Southern Serving</div>
        </div>
      </div>
    </div>
  );
};