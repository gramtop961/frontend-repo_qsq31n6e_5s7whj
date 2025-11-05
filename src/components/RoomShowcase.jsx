import React from 'react';
import { Home, Lamp, Circle, Flower2 } from 'lucide-react';

function Item({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-2xl border border-slate-200/60 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function RoomShowcase() {
  return (
    <section className="relative -mt-10 w-full pb-10 pt-6 md:-mt-16 md:pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center gap-2 text-slate-600">
          <Home className="h-5 w-5" />
          <span className="text-sm">Scena d&#39;interni ispirata al rococò</span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-sky-50 via-white to-white p-6 shadow-sm">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-sky-100">
              {/* Stylized "blue wall" panel with elements */}
              <div className="relative h-full w-full">
                {/* Blue wall */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-sky-400 to-sky-500" />
                {/* Cabinet */}
                <div className="absolute bottom-5 left-6 right-6 h-20 rounded-xl border-[6px] border-white/70 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.15)]" />
                {/* Legs */}
                <div className="absolute bottom-1 left-10 h-6 w-6 rotate-45 rounded-md bg-white/80" />
                <div className="absolute bottom-1 right-10 h-6 w-6 -rotate-45 rounded-md bg-white/80" />
                {/* Mirror */}
                <div className="absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full border-[8px] border-white/80 bg-white/60 shadow-inner" />
                {/* Lace hint */}
                <div className="absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full ring-4 ring-white/50" />
                {/* Pendant lamp */}
                <div className="absolute left-1/2 top-0 h-10 w-0.5 -translate-x-1/2 bg-white/80" />
                <div className="absolute left-1/2 top-10 h-10 w-10 -translate-x-1/2 rounded-b-full bg-white/80 shadow-md" />
                {/* Vase */}
                <div className="absolute bottom-5 left-14 h-10 w-7 rounded-b-3xl rounded-t-md bg-white/90 shadow" />
                {/* Flowers */}
                <div className="absolute bottom-16 left-16 h-14 w-0.5 -rotate-6 bg-amber-700" />
                <div className="absolute bottom-16 left-[4.5rem] h-16 w-0.5 rotate-3 bg-yellow-600" />
                <div className="absolute bottom-16 left-20 h-20 w-0.5 rotate-12 bg-amber-800" />
                <div className="absolute bottom-[5.2rem] left-[4.35rem] h-2 w-2 rounded-full bg-yellow-500" />
                <div className="absolute bottom-[5.7rem] left-[5.35rem] h-2 w-2 rounded-full bg-amber-700" />
                <div className="absolute bottom-[5.9rem] left-[5.9rem] h-2 w-2 rounded-full bg-yellow-600" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Una composizione astratta che richiama i dettagli: parete blu, mobiletto bianco antichizzato, specchio circolare in pizzo, lume a corolla e vaso con fiori giallo-oro e marroni.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Item icon={Circle} title="Specchio circolare con pizzo">
              Cornice morbida e decorativa per effetti di luce romantici.
            </Item>
            <Item icon={Lamp} title="Lume sospeso a corolla">
              Diffusione calda, con rivestimento in pizzo per un tocco soffuso.
            </Item>
            <Item icon={Flower2} title="Vaso con fiori giallo-oro e marroni">
              Steli allungati verso l&#39;alto per slanciare la composizione.
            </Item>
          </div>
        </div>
      </div>
    </section>
  );
}
