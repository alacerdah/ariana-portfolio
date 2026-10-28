import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./Icons";

export default function Contato({
  heading,
  text,
  email,
  instagram,
  tiktok,
  whatsapp,
  name,
}: {
  heading: string;
  text: string;
  email: string;
  instagram: string;
  tiktok: string;
  whatsapp: string;
  name: string;
}) {
  return (
    <>
      <section id="contato" className="reveal px-7 pt-6 md:px-16">
        <div
          className="animate-drift-container relative mx-auto max-w-[1240px] overflow-hidden rounded-2xl px-6 py-14 text-center text-paper sm:px-16 sm:py-20"
          style={{ background: "color-mix(in srgb, var(--color-ink) 82%, black)" }}
        >
          <span className="animate-drift absolute top-6 left-[6%] size-17.5 rounded-full border-[1.5px] border-current opacity-30" />
          <span
            className="animate-drift absolute right-[10%] bottom-7 size-10 rounded-full border-[1.5px] border-current opacity-30"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative">
            <div className="font-display mb-4 text-sm tracking-[0.1em] opacity-60">TEM UM PROJETO EM MENTE?</div>
            <h2 className="mb-5 text-[32px] leading-[1.05] sm:text-[60px]">
              Vamos criar
              <br />
              juntos?
            </h2>
            <p className="mx-auto mb-8 max-w-[420px] text-sm leading-relaxed opacity-72">{text}</p>

            <a
              href={`mailto:${email}`}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-paper px-7.5 py-4 text-[15px] font-extrabold text-ink transition hover:-translate-y-0.5"
            >
              Enviar mensagem
            </a>

            <div className="flex justify-center gap-3">
              <a
                href={instagram}
                aria-label="Instagram"
                className="flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-current transition hover:bg-paper hover:text-blue"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={tiktok}
                aria-label="TikTok"
                className="flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-current transition hover:bg-paper hover:text-blue"
              >
                <TikTokIcon size={16} />
              </a>
              <a
                href={whatsapp}
                aria-label="WhatsApp"
                className="flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-current transition hover:bg-paper hover:text-blue"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-7 py-11 text-xs opacity-50 md:px-16">
        <span>{name} © 2026</span>
        <a href="#capa" className="font-bold">
          voltar ao topo ↑
        </a>
      </div>
    </>
  );
}
