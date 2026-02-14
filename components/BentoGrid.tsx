import React from 'react';
import { MeetPaulCard } from './MeetPaulCard';
import { MapCard } from './MapCard';
import { BadgeCard } from './BadgeCard';
import { TestimonialsCard } from './TestimonialsCard';
import { QuoteCard } from './QuoteCard';

export const BentoGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <MeetPaulCard />
          <TestimonialsCard />
        </div>

        {/* Column 2 - Main Map Feature */}
        <div className="flex flex-col gap-6 md:h-full">
          <MapCard />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <BadgeCard />
          <QuoteCard />
        </div>

      </div>
    </div>
  );
};