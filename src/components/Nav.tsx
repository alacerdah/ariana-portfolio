import type { NavLink } from "../types";

export default function Nav({ name, links }: { name: string; links: NavLink[] }) {
  return (
    <div className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-4 px-7 md:px-16">
        <a href="#capa" className="font-display text-lg tracking-wide">
          {name}
        </a>
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          {links.map((link, i) => {
            const isLast = i === links.length - 1;
            return (
              <a
                key={link.href}
                href={link.href}
                className={
                  isLast
                    ? "rounded-full border-[1.5px] border-ink px-4 py-2 text-xs font-bold tracking-wider uppercase transition hover:bg-ink hover:text-paper"
                    : "text-xs font-bold tracking-wider text-ink/70 uppercase transition hover:text-ink"
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
