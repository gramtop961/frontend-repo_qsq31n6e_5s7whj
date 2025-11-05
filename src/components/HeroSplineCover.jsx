import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSplineCover() {
  return (
    <section className="relative h-[75vh] w-full md:h-[85vh]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/AHV4iNim7HKPpHMA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-sm">
            Rococò • Arte • Interni
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Atmosfera di Casa con Eleganza Barocca
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Parete blu polverosa, mobiletto bianco antichizzato, specchio circolare in pizzo e un lume a corolla. Un vaso con fiori giallo-oro e marroni completa l&#39;insieme.
          </p>
        </div>
      </div>
    </section>
  );
}
