import type { Brand } from "../types";

export default function Marcas({ brands }: { brands: Brand[] }) {
  const loop = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <section id="marcas" className="reveal bg-blue py-18 text-paper">
      <div className="mx-auto mb-8 max-w-[1240px] px-7 text-center md:px-16">
        <div className="font-display mb-3 text-sm tracking-[0.1em] opacity-75">CONFIANÇA</div>
        <h2 className="text-[26px] sm:text-[38px]">Marcas que confiaram em mim</h2>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track gap-5">
          {loop.map((b, i) => (
            <div key={`${b.id}-${i}`} className="flex h-14 shrink-0 items-center rounded-xl bg-paper px-6">
              <img src={b.logoSrc} alt={b.label} className="h-6 max-w-[110px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
