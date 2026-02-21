import { MapPin, Testimonial } from './types';
import { Hammer, Shield, Home, Leaf, Wrench, ArrowUp, ClipboardCheck, Ruler, Truck, ThumbsUp } from 'lucide-react';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Morry Paul',
    content: "Dedicated to quality craftsmanship and community service. We're here to protect your home. We paved our own path to protection.",
    avatarUrl: 'https://i.ibb.co/QSPG3VN/IMG-3539.jpg', 
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
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
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
    url: 'https://i.ibb.co/prd4Tj4s/IMG-3653.jpg',
    title: 'Custom Metal Installation',
    category: 'Metal Roofing'
  },
  {
    url: 'https://i.ibb.co/twD3YQMk/1-EE60-D5-A-5018-410-C-9-D26-87-A480-F91-ADF.jpg',
    title: 'Residential Upgrade',
    category: 'Siding & Roof'
  },
  {
    url: 'https://i.ibb.co/q33vdT3Z/IMG-3650.jpg',
    title: 'Standing Seam Detail',
    category: 'Metal Roofing'
  },
  {
    url: 'https://i.ibb.co/MDrg344Q/IMG-3789.jpg',
    title: 'Complete Exterior',
    category: 'Siding'
  },
  {
    url: 'https://i.ibb.co/DDHqSZwV/IMG-1572.jpg',
    title: 'Modern Farmhouse',
    category: 'New Construction'
  },
  {
    url: 'https://i.ibb.co/HT0hZdkS/IMG-3781.jpg',
    title: 'Winter Protection',
    category: 'Metal Roofing'
  },
  {
    url: 'https://i.ibb.co/9K6LCvF/IMG-0706.jpg',
    title: 'Architectural Style',
    category: 'Design'
  },
  {
    url: 'https://i.ibb.co/rGjHgS2j/E2041-C04-F067-41-E5-B907-6042644677-CE.png',
    title: 'Classic Finish',
    category: 'Metal Roofing'
  },
  {
    url: 'https://i.ibb.co/hxq3Mwtv/D8-AFC2-C0-7-AD9-4-D7-C-A715-F36-FF0-ED7-AB4.jpg',
    title: 'Premium Siding',
    category: 'Siding'
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Consultation & Quote',
    description: 'We visit your property, assess your needs, and provide a detailed, transparent estimate.',
    icon: ClipboardCheck
  },
  {
    title: 'Measurement & Prep',
    description: 'Precise measurements are taken, and materials are ordered custom for your home.',
    icon: Ruler
  },
  {
    title: 'Expert Installation',
    description: 'Our experienced team installs your new roof efficiently, respecting your property.',
    icon: Truck
  },
  {
    title: 'Final Inspection',
    description: 'We perform a thorough walkthrough and clean up every nail before we leave.',
    icon: ThumbsUp
  }
];

export const FAQS = [
  {
    question: "Is a metal roof noisy when it rains?",
    answer: "No. When installed with proper solid sheathing and insulation, a metal roof is often quieter than other roofing materials."
  },
  {
    question: "How long will a metal roof last?",
    answer: "Metal roofs are designed to last 40-70 years, significantly longer than the 12-20 year lifespan of asphalt shingles."
  },
  {
    question: "Will it rust?",
    answer: "We use high-quality Galvalume and galvanized steel with advanced paint coatings that are warrantied against rust and fading for decades."
  },
  {
    question: "Is it more expensive?",
    answer: "The upfront cost is higher, but the long-term value is superior due to longevity, lower maintenance, and energy savings."
  },
  {
    question: "Can a metal roof be installed over my existing shingles?",
    answer: "In many cases, yes. A metal roof can be installed over existing shingles, saving on tear-off costs. We'll assess your current roof during our consultation to determine the best approach."
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes. We stand behind our work with a workmanship warranty, and the materials we use come with manufacturer warranties covering paint, rust, and structural integrity for 40+ years."
  },
  {
    question: "How long does installation take?",
    answer: "Most residential projects are completed in 1–3 days depending on the size and complexity of the roof. We work efficiently and minimize disruption to your daily routine."
  },
  {
    question: "Do you serve my area?",
    answer: "We serve all of Southern New Brunswick including Damascus, Hampton, Sussex, Saint John, Quispamsis, Rothesay, and surrounding areas. Give us a call to confirm your location."
  }
];