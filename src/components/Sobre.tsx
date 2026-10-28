import type { Brand, Stat } from "../types";

export default function Sobre({
  heading,
  text,
  photo,
  stats,
  trustedBrands,
}: {
  heading: string;
  text: string;
  photo: string;
  stats: Stat[];
  trustedBrands: Brand[];
}) {
  return (
    <section id="sobre" className="reveal bg-blue px-7 py-20 text-paper md:px-16">
      <div className="mx-auto flex max-w-[1240px] flex-wrap-reverse items-center gap-12">
        <div className="min-w-[280px] flex-1 basis-[380px]">
          <div className="font-display mb-3 text-sm tracking-[0.1em] opacity-75">SOBRE MIM</div>
          <h2 className="mb-4.5 text-[32px] leading-[1.02] sm:text-[44px]">{heading}</h2>
          <p className="mb-7.5 max-w-[460px] text-[15px] leading-relaxed opacity-85">{text}</p>

          <div className="mb-7.5 flex flex-wrap items-stretch gap-6.5">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-stretch gap-6.5">
                {i > 0 && <div className="w-px self-stretch bg-current opacity-20" />}
                <div className="flex flex-col gap-0.5">
                  <b className="font-display text-[26px] font-normal">{s.value}</b>
                  <span className="text-[11px] font-bold tracking-wide uppercase opacity-70">{s.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="mb-3 text-[11px] font-extrabold tracking-[0.1em] opacity-60">MARCAS DE CONFIANÇA</div>
            <div className="flex flex-wrap items-center gap-3">
              {trustedBrands.map((b) => (
                <div key={b.id} className="flex h-9 items-center rounded-lg bg-paper px-3">
                  <img src={b.logoSrc} alt={b.label} className="h-5 max-w-[76px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[320px] min-w-[220px] flex-1 basis-[260px]">
          <div className="aspect-square overflow-hidden rounded-[10px] border-[1.5px] border-paper/30">
            <img src={photo} alt="Foto de Ariana" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
