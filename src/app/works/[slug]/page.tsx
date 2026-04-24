import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Pill from "@/components/ui/Pill";
import Button from "@/components/ui/Button";
import Game2048 from "@/components/games/Game2048";
import TicTacToe from "@/components/games/TicTacToe";
import { findWork, works } from "@/content/works";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) return { title: "Not found" };
  return { title: work.title, description: work.tagline };
}

function GameForSlug({ slug }: { slug: string }) {
  if (slug === "game-2048") return <Game2048 />;
  if (slug === "game-tic-tac-toe") return <TicTacToe />;
  return null;
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = findWork(slug);
  if (!work) notFound();

  return (
    <>
      <Header />
      <main className="page-in mx-auto max-w-3xl px-6 py-14 md:py-20">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[0.78rem] text-[var(--color-ink-muted)] hover:text-[var(--color-accent)]"
        >
          <span>←</span>
          <span>All works</span>
        </Link>

        <section className="mt-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] text-[var(--color-accent-deep)]">
              {work.number} · {work.year}
            </span>
            {work.kind === "game" ? (
              <Pill variant="teal">▶ Playable</Pill>
            ) : (
              <Pill>Site</Pill>
            )}
            {work.builtWith && (
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.7rem] text-[var(--color-ink-subtle)]">
                · Built with {work.builtWith}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.02em] md:text-5xl">
            {work.title}
          </h1>
          <p className="mt-4 max-w-[52ch] font-[family-name:var(--font-noto-jp)] text-lg leading-[1.7] text-[var(--color-ink)]">
            {work.tagline}
          </p>
        </section>

        {work.kind === "game" && (
          <section className="mt-12 rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-10">
            <GameForSlug slug={work.slug} />
          </section>
        )}

        {work.summary && (
          <section className="mt-12">
            <h2 className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
              About this {work.kind === "game" ? "demo" : "site"}
            </h2>
            <p className="mt-4 max-w-[56ch] font-[family-name:var(--font-noto-jp)] text-[0.98rem] leading-[1.95] text-[var(--color-ink-muted)]">
              {work.summary}
            </p>
          </section>
        )}

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
            Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {work.stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </ul>
        </section>

        {work.url && (
          <section className="mt-10">
            <Button href={work.url} variant="outline" external>
              Visit site ↗
            </Button>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
