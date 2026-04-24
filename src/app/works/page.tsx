import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Pill from "@/components/ui/Pill";
import { works } from "@/content/works";

export const metadata: Metadata = {
  title: "Works",
  description: "向井純一の制作物。インタラクティブなゲームを含む。",
};

const kindMeta = {
  game: {
    label: "GAME",
    rule: "bg-[var(--color-accent)]",
    cta: "▶ Play",
  },
  site: {
    label: "SITE",
    rule: "bg-[var(--color-ink-subtle)]",
    cta: "→ Read",
  },
} as const;

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 md:py-24">
        <section className="rise-in">
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-6xl">
            Works<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <p className="mt-6 max-w-[52ch] font-[family-name:var(--font-noto-jp)] text-[0.98rem] leading-[1.95] text-[var(--color-ink-muted)]">
            ブラウザで触れるデモや個人サイト。ゲームはこのサイト上でそのまま遊べます。
          </p>
        </section>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
          {works.map((w, i) => {
            const meta = kindMeta[w.kind];
            return (
              <li key={w.slug} className="rise-in" style={{ animationDelay: `${80 + i * 60}ms` }}>
                <Link
                  href={`/works/${w.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-panel)] transition-colors hover:border-[var(--color-accent)]/60"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-[2px] ${meta.rule} opacity-60`}
                  />

                  <div className="flex items-center justify-between px-6 pt-6">
                    <span className="font-[family-name:var(--font-geist-mono)] text-[0.68rem] tracking-[0.2em] text-[var(--color-accent-deep)]">
                      {meta.label} · {w.number}
                    </span>
                    <span className="font-[family-name:var(--font-geist-mono)] text-[0.68rem] text-[var(--color-ink-subtle)] num-tabular">
                      {w.year}
                    </span>
                  </div>

                  <div className="px-6 pt-5 pb-6">
                    <h2 className="text-[1.7rem] leading-tight font-semibold tracking-[-0.02em]">
                      {w.title}
                    </h2>

                    <p className="mt-2.5 font-[family-name:var(--font-noto-jp)] text-[0.92rem] leading-[1.85] text-[var(--color-ink-muted)]">
                      {w.tagline}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {w.stack.slice(0, 5).map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                      {w.stack.length > 5 && <Pill>+{w.stack.length - 5}</Pill>}
                    </ul>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]/50 px-6 py-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] text-[var(--color-accent-deep)]">
                      {meta.cta}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
