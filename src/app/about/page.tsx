import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { profile } from "@/content/profile";
import { biography } from "@/content/biography";
import { calculateAge } from "@/lib/age";

export const metadata: Metadata = {
  title: "About",
  description: "向井純一の経歴と自己紹介。",
};

export default function AboutPage() {
  const age = calculateAge(profile.birth);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 md:py-24">
        <section className="rise-in">
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-6xl">
            About<span className="text-[var(--color-accent)]">.</span>
          </h1>

          <div className="mt-10 grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr]">
            <div className="relative h-[148px] w-[148px] shrink-0">
              <Image
                src="/img/portrait-junichi.png"
                alt={`Portrait of ${profile.name.en}`}
                fill
                priority
                sizes="148px"
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl leading-tight font-semibold tracking-[-0.015em] md:text-3xl">
                {profile.name.en}
              </h2>
              <p className="mt-1.5 font-[family-name:var(--font-noto-jp)] text-[0.95rem] text-[var(--color-ink-muted)]">
                {profile.name.ja} · {age}歳 · {profile.location.ja}
              </p>
              <p className="mt-6 max-w-[50ch] font-[family-name:var(--font-noto-jp)] text-[0.98rem] leading-[2] text-[var(--color-ink)]">
                大阪の大学で建築を学んだあと、新卒で不動産の営業として社会に出ました。
                20代では転勤・倒産・起業・経営と一通り経験。30代で会社員として戻り、
                35歳でエンジニアに転向。2025年9月に当時の会社を退職し、今は AI と
                一緒にコードを書くのが楽しくて、色々な小さいものを作って遊んでいます。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 rise-in" style={{ animationDelay: "120ms" }}>
          <h2 className="text-3xl leading-tight font-semibold tracking-[-0.02em] md:text-4xl">
            Timeline<span className="text-[var(--color-accent)]">.</span>
          </h2>

          <div className="mt-12 space-y-20">
            {biography.map((chapter) => (
              <div key={chapter.id} className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-8 right-0 select-none font-[family-name:var(--font-geist)] text-[10rem] leading-none font-black tracking-[-0.05em] text-[var(--color-ink)] opacity-[0.04] md:text-[14rem]"
                >
                  {chapter.label.replace("代", "")}
                </div>

                <div className="relative">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-3xl leading-none font-semibold tracking-[-0.02em] md:text-4xl">
                      {chapter.label}
                    </h3>
                    <span className="font-[family-name:var(--font-geist-mono)] text-[0.68rem] tracking-[0.22em] uppercase text-[var(--color-accent-deep)]">
                      {chapter.subLabel}
                    </span>
                  </div>

                  <ol className="mt-8 space-y-6 border-l border-[var(--color-border)] pl-6 md:pl-7">
                    {chapter.episodes.map((ep) => (
                      <li key={ep.id} className="relative">
                        <span
                          aria-hidden
                          className="absolute -left-[calc(1.5rem+5px)] top-[0.45rem] h-[9px] w-[9px] rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-accent)] md:-left-[calc(1.75rem+5px)]"
                        />
                        <time className="font-[family-name:var(--font-geist-mono)] text-[0.7rem] tracking-[0.05em] text-[var(--color-ink-subtle)] num-tabular">
                          {ep.year}
                        </time>
                        <h4 className="mt-1.5 font-[family-name:var(--font-noto-jp)] text-[1.05rem] leading-snug font-medium text-[var(--color-ink)]">
                          {ep.title}
                        </h4>
                        <p className="mt-2 max-w-[58ch] font-[family-name:var(--font-noto-jp)] text-[0.92rem] leading-[1.9] text-[var(--color-ink-muted)]">
                          {ep.body}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
