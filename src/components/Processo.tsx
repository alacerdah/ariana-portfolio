import type { ProcessStep } from "../types";

export default function Processo({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="processo" className="reveal px-7 py-20 md:px-16">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-11 max-w-[560px] text-center">
          <div className="font-display mb-3 text-sm tracking-[0.1em]">PROCESSO</div>
          <h2 className="mb-3 text-[30px] sm:text-[44px]">Como eu trabalho</h2>
          <p className="text-sm text-ink/65">Do briefing à entrega, um processo simples e transparente.</p>
        </div>

        <div className="grid grid-cols-2 gap-4.5 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="media-card rounded-2xl border-[1.5px] border-ink/16 p-6.5"
              style={{ background: "color-mix(in srgb, var(--color-blue) 7%, var(--color-paper))" }}
            >
              <div className="font-display mb-2.5 text-[30px] text-blue">{s.n}</div>
              <div className="mb-2 text-[15px] font-extrabold">{s.title}</div>
              <div className="text-[13px] leading-relaxed text-ink/66">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
