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

export default function WorksPage() {
  return (
    <>
      <Header />
      <main className="page-in mx-auto max-w-5xl px-6 py-14 md:py-20">
        <section>
          <p className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
            Works
          </p>
          <h1 className="mt-3 text-4xl leading-tight font-semibold tracking-[-0.02em] md:text-5xl">
            作ったもの、遊べるもの
          </h1>
          <p className="mt-4 max-w-[52ch] font-[family-name:var(--font-noto-jp)] text-[0.96rem] leading-[1.9] text-[var(--color-ink-muted)]">
            Claude Code と一緒に作った、ブラウザで触れるデモや個人サイト。
            ゲームはこのサイト上でそのまま遊べます。
          </p>
        </section>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
          {works.map((w) => (
            <li key={w.slug}>
              <Link
                href={`/works/${w.slug}`}
                className="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-accent)]/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] text-[var(--color-accent-deep)]">
                    {w.number} · {w.year}
                  </span>
                  {w.kind === "game" ? (
                    <Pill variant="teal">▶ Playable</Pill>
                  ) : (
                    <Pill>Site</Pill>
                  )}
                </div>

                <h2 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.015em]">
                  {w.title}
                </h2>

                <p className="mt-2 font-[family-name:var(--font-noto-jp)] text-[0.92rem] leading-[1.85] text-[var(--color-ink-muted)]">
                  {w.tagline}
                </p>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {w.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                  <span className="font-[family-name:var(--font-geist-mono)] text-[0.74rem] text-[var(--color-accent-deep)] transition-all group-hover:tracking-wider">
                    {w.kind === "game" ? "Play →" : "View →"}
                  </span>
                  {w.builtWith && (
                    <span className="font-[family-name:var(--font-geist-mono)] text-[0.68rem] text-[var(--color-ink-subtle)]">
                      Built with {w.builtWith}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
