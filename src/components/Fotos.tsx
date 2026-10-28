import { useState } from "react";
import type { PhotoItem } from "../types";

export default function Fotos({ items, filters }: { items: PhotoItem[]; filters: string[] }) {
  const [active, setActive] = useState(filters[0]);

  return (
    <section id="fotos" className="reveal bg-blue px-7 py-20 text-paper md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-9 max-w-[560px] text-center">
          <div className="font-display mb-3 text-sm tracking-[0.1em] opacity-75">GALERIA DO PORTFÓLIO</div>
          <h2 className="mb-3.5 text-[30px] text-gold sm:text-[44px]">Fotografia</h2>
          <p className="text-sm opacity-80">
            Uma seleção de fotos e vídeos recentes criados para marcas de beleza, moda e lifestyle.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              data-active={f === active}
              onClick={() => setActive(f)}
              className="filter-pill rounded-full border-[1.5px] border-current px-5 py-2.5 text-xs font-bold tracking-wide uppercase transition hover:-translate-y-0.5"
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {items.map((p) => (
            <div key={p.id} className="media-card aspect-square overflow-hidden rounded-lg border-[1.5px] border-paper/20">
              <img src={p.src} alt={p.label} className="size-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
