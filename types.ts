export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  avatarUrl: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface MapPin {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  type: 'job' | 'community';
  tooltip: string;
}