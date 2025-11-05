import React from 'react';

const SWATCHES = [
  { name: 'Blu parete', color: '#3B82F6' },
  { name: 'Bianco antichizzato', color: '#F5F5F4' },
  { name: 'Pizzo latteo', color: '#FAFAF9' },
  { name: 'Giallo oro', color: '#F59E0B' },
  { name: 'Marrone caldo', color: '#92400E' },
];

function Swatch({ name, color }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="h-10 w-10 rounded-md" style={{ backgroundColor: color }} />
      <div>
        <div className="text-sm font-medium text-slate-900">{name}</div>
        <div className="text-xs text-slate-500">{color}</div>
      </div>
    </div>
  );
}

export default function ColorSwatches() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-xl font-semibold text-slate-900">Palette cromatica</h2>
        <p className="mt-1 text-sm text-slate-600">Le tonalità che definiscono l&#39;ambiente.</p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {SWATCHES.map((s) => (
            <Swatch key={s.name} name={s.name} color={s.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
