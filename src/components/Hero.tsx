import { ArrowDown } from "lucide-react";
import { InstagramIcon, YoutubeIcon, TikTokIcon } from "./Icons";

export default function Hero({ photo, subheadline }: { photo: string; subheadline: string }) {
  return (
    <section id="capa" className="reveal px-7 pt-14 pb-0 md:px-16">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 text-center">
        <div className="max-w-[640px]">
          <div className="font-display mb-3.5 text-[15px] tracking-[0.1em]">UGC CREATOR</div>

          <h1 className="relative mb-3 flex flex-nowrap items-center justify-center text-[clamp(26px,7vw,82px)] leading-none whitespace-nowrap">
            <span className="relative z-1">Porti</span>
            <span className="relative z-2 w-[clamp(90px,19vw,340px)] shrink-0 -mx-[clamp(10px,2.4vw,36px)]">
              <span className="relative block aspect-[3/4] overflow-hidden rounded-[10px]">
                <img src={photo} alt="Foto de capa" className="absolute inset-0 size-full object-cover" />
              </span>
            </span>
            <span className="relative z-1">fólio</span>
          </h1>

          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-ink px-3.5 py-2 text-[11px] font-bold tracking-wide text-paper">
              ✦ conteúdo real
            </span>
          </div>

          <p className="mx-auto mb-6.5 max-w-[380px] text-base leading-relaxed text-ink/70">{subheadline}</p>
          <div className="flex justify-center gap-3">
            <a
              href="#fotos"
              aria-label="Instagram"
              className="flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-ink transition hover:bg-ink hover:text-paper"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="#fotos"
              aria-label="YouTube"
              className="flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-ink transition hover:bg-ink hover:text-paper"
            >
              <YoutubeIcon size={16} />
            </a>
            <a
              href="#fotos"
              aria-label="TikTok"
              className="flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-ink transition hover:bg-ink hover:text-paper"
            >
              <TikTokIcon size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-7 pb-2 opacity-50">
        <div className="animate-bounce-arrow flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold tracking-widest uppercase">role pra ver mais</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}
