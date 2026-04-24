import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Pill from "@/components/ui/Pill";
import Button from "@/components/ui/Button";
import Game2048 from "@/components/games/Game2048";
import TicTacToe from "@/components/games/TicTacToe";
import Invaders from "@/components/games/Invaders";
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
  if (slug === "game-invaders") return <Invaders />;
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
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-14 md:py-20">
        <Link
          href="/works"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.1em] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span aria-hidden>←</span>
          <span>All works</span>
        </Link>

        <section className="mt-10 rise-in">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-[family-name:var(--font-geist-mono)] text-[0.7rem] tracking-[0.15em] text-[var(--color-ink-subtle)]">
            <span className="text-[var(--color-accent-deep)]">
              {work.kind === "game" ? "GAME" : "SITE"}
            </span>
            <span>·</span>
            <span>{work.number}</span>
            <span>·</span>
            <span className="num-tabular">{work.year}</span>
          </div>

          <h1 className="mt-5 text-5xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-[4.5rem]">
            {work.title}
            <span className="text-[var(--color-accent)]">.</span>
          </h1>

          <p className="mt-6 max-w-[52ch] font-[family-name:var(--font-noto-jp)] text-lg leading-[1.7] text-[var(--color-ink)]">
            {work.tagline}
          </p>
        </section>

        {work.kind === "game" && (
          <section className="mt-12 rise-in" style={{ animationDelay: "100ms" }}>
            <GameForSlug slug={work.slug} />
          </section>
        )}

        {work.summary && (
          <section className="mt-16 rise-in" style={{ animationDelay: "160ms" }}>
            <h2 className="font-[family-name:var(--font-geist-mono)] text-[0.68rem] tracking-[0.2em] uppercase text-[var(--color-ink-subtle)]">
              About this {work.kind === "game" ? "demo" : "site"}
            </h2>
            <p className="mt-4 max-w-[56ch] font-[family-name:var(--font-noto-jp)] text-[0.98rem] leading-[2] text-[var(--color-ink)]">
              {work.summary}
            </p>
          </section>
        )}

        <section className="mt-14 rise-in" style={{ animationDelay: "220ms" }}>
          <h2 className="font-[family-name:var(--font-geist-mono)] text-[0.68rem] tracking-[0.2em] uppercase text-[var(--color-ink-subtle)]">
            Stack
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {work.stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </ul>
        </section>

        {work.url && (
          <section className="mt-12 rise-in" style={{ animationDelay: "280ms" }}>
            <Button href={work.url} variant="outline" external>
              Visit site
              <span aria-hidden>↗</span>
            </Button>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
