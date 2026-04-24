import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArcadeTabs from "./ArcadeTabs";

export const metadata: Metadata = {
  title: "Games",
  description:
    "向井純一が手を動かして作ったブラウザゲーム集。インベーダー、2048、Tic-Tac-Toe がこのページ上で遊べる。",
};

export default function GamesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 md:py-24">
        <section className="rise-in">
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-6xl">
            Games<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <p className="mt-6 max-w-[52ch] font-[family-name:var(--font-noto-jp)] text-[0.98rem] leading-[1.95] text-[var(--color-ink-muted)]">
            手を動かして作った実装デモを、そのままこのページで遊べるように
            置いています。タブで切り替えてどうぞ。
          </p>
        </section>

        <section className="mt-12 rise-in md:mt-14" style={{ animationDelay: "120ms" }}>
          <ArcadeTabs />
        </section>
      </main>
      <Footer />
    </>
  );
}
