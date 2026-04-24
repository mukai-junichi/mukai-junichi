import Link from "next/link";
import { profile } from "@/content/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const email = profile.contact.email;

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[0.95rem] font-semibold tracking-tight"
          >
            <span>Junichi Mukai</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </Link>

          {email && (
            <a
              href={`mailto:${email}`}
              className="font-[family-name:var(--font-geist-mono)] text-[0.78rem] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {email}
            </a>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 font-[family-name:var(--font-geist-mono)] text-[0.68rem] text-[var(--color-ink-subtle)]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/" className="transition-colors hover:text-[var(--color-ink)]">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-[var(--color-ink)]">
              About
            </Link>
            <Link href="/works" className="transition-colors hover:text-[var(--color-ink)]">
              Works
            </Link>
            <Link href="/games" className="transition-colors hover:text-[var(--color-ink)]">
              Games
            </Link>
          </div>
          <span>© {year} {profile.name.en}</span>
        </div>
      </div>
    </footer>
  );
}
