import { MapPin, Testimonial } from './types';
import { Hammer, Shield, Home, Leaf, Wrench, ArrowUp } from 'lucide-react';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Morry Paul',
    content: "Dedicated to quality craftsmanship and community service. We're here to protect your home. We paved our own path to protection.",
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
  {
    id: '2',
    name: 'John Smith',
    content: "The best roofing service a part of this community. Reliable service and the best help to store your home safely.",
    avatarUrl: 'https://picsum.photos/id/1027/100/100',
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    content: "We're proud to be part of this builder community. Reliable service and that lasting value we all look for.",
    avatarUrl: 'https://picsum.photos/id/342/100/100',
  }
];

export const MAP_PINS: MapPin[] = [
  { id: '1', x: 45, y: 45, type: 'community', tooltip: 'Damascus HQ' },
  { id: '2', x: 25, y: 30, type: 'job', tooltip: 'Metal Roof - Hampton' },
  { id: '3', x: 60, y: 60, type: 'job', tooltip: 'Siding - Sussex' },
  { id: '4', x: 20, y: 70, type: 'job', tooltip: 'Commercial - Saint John' },
  { id: '5', x: 35, y: 25, type: 'job', tooltip: 'Repair - Quispamsis' },
  { id: '6', x: 70, y: 40, type: 'community', tooltip: 'Community Hall - Norton' },
  { id: '7', x: 50, y: 80, type: 'job', tooltip: 'Barn Roof - Barnesville' },
  { id: '8', x: 80, y: 50, type: 'job', tooltip: 'Garage - Petitcodiac' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    title: 'Metal Roofing',
    description: 'Our specialty. Durable, long-lasting, and weather-resistant standing seam and screw-down metal roofs perfect for NB winters.',
    icon: Shield,
    color: 'bg-blue-500'
  },
  {
    title: 'Siding Installation',
    description: 'Complete exterior transformation with high-quality vinyl and metal siding options that boost curb appeal and insulation.',
    icon: Home,
    color: 'bg-slate-600'
  },
  {
    title: 'Gutters & Leaf Guards',
    description: 'Keep your eaves clear. We install seamless gutters and premium leaf guards to prevent clogging and water damage.',
    icon: Leaf,
    color: 'bg-green-600'
  },
  {
    title: 'Roof Repairs',
    description: 'Emergency fixes and maintenance. From leaks to loose panels, we ensure your roof stays watertight year-round.',
    icon: Wrench,
    color: 'bg-orange-500'
  },
  {
    title: 'Snow Guards',
    description: 'Essential for metal roofs in Canada. Protect your walkways and landscaping from sudden snow slides.',
    icon: ArrowUp,
    color: 'bg-cyan-600'
  },
  {
    title: 'New Construction',
    description: 'Partnering with builders and homeowners to provide top-tier roofing for new builds across Southern NB.',
    icon: Hammer,
    color: 'bg-indigo-600'
  }
];

export const PORTFOLIO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Standing Seam in Hampton',
    category: 'Metal Roofing'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Modern Farmhouse Siding',
    category: 'Siding'
  },
  {
    url: 'https://images.unsplash.com/photo-1596262453526-9d6e40854d9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Commercial Project',
    category: 'Commercial'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Heritage Home Restoration',
    category: 'Metal Roofing'
  }
];