import { Droplet, Sparkles, Dumbbell, Home, Heart, Users, Video, CheckCircle2 } from "lucide-react";
import type { MiniStat, Niche } from "../types";

const ICONS: Record<Niche["icon"], typeof Droplet> = {
  skincare: Droplet,
  beleza: Sparkles,
  fitness: Dumbbell,
  lifestyle: Home,
  wellness: Heart,
};

const MINI_ICONS = [Users, Video, CheckCircle2];

export default function Nichos({
  heading,
  items,
  photo,
  text,
  miniStats,
}: {
  heading: string;
  items: Niche[];
  photo: string;
  text: string;
  miniStats: MiniStat[];
}) {
  return (
    <section className="reveal relative px-7 py-20 md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="mb-11 max-w-[620px] text-[30px] leading-[1.05] sm:text-[44px]">{heading}</h2>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex w-full max-w-[360px] flex-col gap-2.5 lg:max-w-none lg:flex-1 lg:basis-[280px]">
            {items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.label} className="niche-row flex items-center gap-3.5 rounded-xl bg-ink px-4.5 py-3.5 text-paper">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[9px] bg-paper/18">
                    <Icon size={17} />
                  </span>
                  <span className="text-[15px] font-bold">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="relative z-2 w-[200px] shrink-0 sm:w-[250px] lg:-my-24 lg:w-[290px]">
            <img src={photo} alt="" className="pointer-events-none h-auto w-full select-none" />
          </div>

          <div className="w-full max-w-[460px] text-right lg:max-w-none lg:flex-1 lg:basis-[360px]">
            <p className="mb-8 text-[15px] leading-relaxed text-ink/72">{text}</p>

            <div className="flex flex-wrap justify-end gap-7">
              {miniStats.map((s, i) => {
                const Icon = MINI_ICONS[i % MINI_ICONS.length];
                return (
                  <div key={s.label} className="flex items-center gap-2.5">
                    <div className="flex flex-col items-end">
                      <b className="font-display text-xl font-normal">{s.value}</b>
                      <span className="text-[11px] font-bold tracking-wide text-ink/70 uppercase">{s.label}</span>
                    </div>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink">
                      <Icon size={16} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
