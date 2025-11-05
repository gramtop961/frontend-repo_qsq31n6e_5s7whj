import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import RoomShowcase from './components/RoomShowcase';
import ColorSwatches from './components/ColorSwatches';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <HeroSplineCover />
      <RoomShowcase />
      <ColorSwatches />
      <SiteFooter />
    </div>
  );
}
