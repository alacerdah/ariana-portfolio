import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "../types";

export default function Nav({ name, links }: { name: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-4 px-7 md:px-16">
        <a href="#capa" className="font-display text-lg tracking-wide" onClick={() => setOpen(false)}>
          {name}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
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

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-ink lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-7 py-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-bold tracking-wider text-ink uppercase transition hover:bg-ink/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
