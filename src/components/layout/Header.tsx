"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-1.5 text-[0.95rem] font-semibold tracking-tight">
          <span>Junichi Mukai</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        </Link>
        <nav className="flex items-center gap-1 text-[0.82rem]">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-md px-2.5 py-1.5 transition-colors",
                isActive(item.href)
                  ? "text-[var(--color-ink)]"
                  : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span
                  aria-hidden
                  className="absolute inset-x-2.5 -bottom-[1px] h-[2px] rounded-full bg-[var(--color-accent)]"
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
