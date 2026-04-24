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
      <main className="page-in mx-auto max-w-3xl px-6 py-14 md:py-20">
        <section>
          <p className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
            About
          </p>
          <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-end md:gap-8">
            <div className="relative h-[180px] w-[180px] shrink-0">
              <Image
                src="/img/portrait-junichi.png"
                alt={`Portrait of ${profile.name.en}`}
                fill
                priority
                sizes="180px"
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-4xl leading-tight font-semibold tracking-[-0.015em] md:text-5xl">
                {profile.name.en}
              </h1>
              <p className="mt-2 font-[family-name:var(--font-noto-jp)] text-[0.95rem] text-[var(--color-ink-muted)]">
                {profile.name.ja} · {age} · {profile.location.ja}
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-[52ch] font-[family-name:var(--font-noto-jp)] text-[1rem] leading-[1.95] text-[var(--color-ink)]">
            大阪の大学で建築を学んだあと、新卒で不動産の営業として社会に出ました。
            20代では転勤・倒産・起業・経営と一通り経験。30代で会社員として戻り、
            35歳でエンジニアに転向。2025年9月に当時の会社を退職し、今は AI と
            一緒にコードを書くのが楽しくて、色々な小さいものを作って遊んでいます。
          </p>
        </section>

        <section className="mt-20">
          <h2 className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
            Timeline
          </h2>

          <div className="mt-8 space-y-14">
            {biography.map((chapter) => (
              <div key={chapter.id}>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-3xl leading-none font-semibold tracking-[-0.015em]">
                    {chapter.label}
                  </h3>
                  <span className="font-[family-name:var(--font-geist-mono)] text-[0.7rem] tracking-[0.15em] uppercase text-[var(--color-accent-deep)]">
                    {chapter.subLabel}
                  </span>
                </div>

                <ol className="mt-6 space-y-5 border-l border-[var(--color-border)] pl-6">
                  {chapter.episodes.map((ep) => (
                    <li key={ep.id} className="relative">
                      <span
                        aria-hidden
                        className="absolute -left-[calc(1.5rem+5px)] top-[0.5rem] h-[9px] w-[9px] rounded-full border-2 border-white bg-[var(--color-accent)]"
                      />
                      <div className="font-[family-name:var(--font-geist-mono)] text-[0.76rem] tracking-wide text-[var(--color-ink-subtle)]">
                        {ep.year}
                      </div>
                      <h4 className="mt-1 font-[family-name:var(--font-noto-jp)] text-base leading-snug font-medium text-[var(--color-ink)]">
                        {ep.title}
                      </h4>
                      <p className="mt-2 max-w-[58ch] font-[family-name:var(--font-noto-jp)] text-[0.9rem] leading-[1.85] text-[var(--color-ink-muted)]">
                        {ep.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
