import { Play } from "lucide-react";
import type { VideoItem } from "../types";

const TINTS = [
  "color-mix(in srgb, var(--color-blue) 24%, var(--color-paper))",
  "color-mix(in srgb, var(--color-ink) 14%, var(--color-paper))",
];

export default function Videos({ items }: { items: VideoItem[] }) {
  return (
    <section id="videos" className="reveal px-7 pt-6 pb-20 md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-display mb-3 text-sm tracking-[0.1em]">VÍDEOS</div>
            <h2 className="text-[30px] sm:text-[44px]">Reels &amp; TikToks</h2>
          </div>
          <p className="max-w-[300px] text-[13px] text-ink/60">
            Arraste pro lado — alguns vídeos que mais performaram pras marcas que trabalhei.
          </p>
        </div>

        <div className="hscroll flex justify-center gap-4.5 overflow-x-auto pb-5">
          {items.map((v, i) => (
            <div
              key={v.id}
              className="media-card relative flex aspect-[9/16] w-[190px] shrink-0 items-end overflow-hidden rounded-lg border-[1.5px] border-ink/15 p-3"
              style={{ background: TINTS[i % TINTS.length] }}
            >
              <span className="absolute top-3.5 left-3.5 rounded-full bg-paper/85 px-2.5 py-1 text-[10px] font-extrabold tracking-wide">
                {v.tag}
              </span>
              <span className="absolute top-1/2 left-1/2 flex size-10.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-ink bg-paper/90 text-ink">
                <Play size={14} fill="currentColor" />
              </span>
              <span className="rounded-full bg-paper/85 px-2.5 py-1.5 text-[11px] font-bold">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
