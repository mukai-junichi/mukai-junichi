import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArcadeTabs from "./ArcadeTabs";

export const metadata: Metadata = {
  title: "Games",
  description:
    "向井純一が Claude Code と一緒に作ったブラウザゲーム集。インベーダー、2048、Tic-Tac-Toe がこのページ上で遊べる。",
};

export default function GamesPage() {
  return (
    <>
      <Header />
      <main className="page-in mx-auto max-w-5xl px-6 py-14 md:py-20">
        <section>
          <p className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
            Games · Arcade
          </p>
          <h1 className="mt-3 text-4xl leading-tight font-semibold tracking-[-0.025em] md:text-5xl">
            ブラウザで遊べる、
            <br className="md:hidden" />
            小さな<span className="text-[var(--color-accent)]">アーケード</span>。
          </h1>
          <p className="mt-5 max-w-[52ch] font-[family-name:var(--font-noto-jp)] text-[0.98rem] leading-[1.9] text-[var(--color-ink-muted)]">
            Claude Code と一緒に作った実装デモを、そのままこのページで遊べるように置いています。
            タブで切り替えてどうぞ。
          </p>
        </section>

        <section className="mt-12">
          <ArcadeTabs />
        </section>
      </main>
      <Footer />
    </>
  );
}
