import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { profile } from "@/content/profile";
import { calculateAge } from "@/lib/age";

export default function HomePage() {
  const age = calculateAge(profile.birth);

  return (
    <>
      <Header />

      <main className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-5xl items-center px-6 py-16 md:py-20">
        <section className="page-in w-full">
          <div className="grid grid-cols-1 items-center gap-x-14 gap-y-12 md:grid-cols-[1fr_auto]">
            <div className="relative md:order-1">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-accent)]" />
                <p className="font-[family-name:var(--font-geist-mono)] text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-ink-subtle)]">
                  Portfolio · 2026
                </p>
              </div>

              <h1
                className="mt-6 text-[3.25rem] leading-[1] font-semibold tracking-[-0.025em] md:text-[5.25rem]"
                style={{
                  animation: "page-in 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 100ms both",
                }}
              >
                Junichi Mukai
                <span className="text-[var(--color-accent)]">.</span>
              </h1>

              <p
                className="mt-5 text-xl tracking-[-0.005em] md:text-[1.75rem]"
                style={{
                  animation: "page-in 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 200ms both",
                }}
              >
                <GradientText>Web Developer</GradientText>
                <span className="mx-2.5 text-[var(--color-ink-subtle)]">&amp;</span>
                <GradientText>Web Designer</GradientText>
              </p>

              <p
                className="mt-10 max-w-[46ch] font-[family-name:var(--font-noto-jp)] text-[1rem] leading-[2] text-[var(--color-ink-muted)]"
                style={{
                  animation: "page-in 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 300ms both",
                }}
              >
                {profile.lede.ja}
              </p>

              <div
                className="mt-10 flex flex-wrap gap-3"
                style={{
                  animation: "page-in 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 500ms both",
                }}
              >
                <Button href="/works" variant="primary">
                  See works
                </Button>
                <Button href="/about" variant="outline">
                  About
                </Button>
              </div>
            </div>

            <aside
              className="flex flex-col items-center gap-5 justify-self-center md:order-2 md:justify-self-end"
              style={{
                animation: "page-in 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 50ms both",
              }}
            >
              <div className="relative h-[220px] w-[220px] md:h-[260px] md:w-[260px]">
                <Image
                  src="/img/portrait-junichi.png"
                  alt={`Portrait of ${profile.name.en}`}
                  fill
                  priority
                  sizes="260px"
                  className="object-contain"
                />
              </div>

              <dl className="w-full space-y-1.5 border-t border-[var(--color-border)] pt-4 font-[family-name:var(--font-noto-jp)] text-[0.88rem] leading-relaxed text-[var(--color-ink-muted)]">
                <div className="flex gap-3">
                  <dt className="w-12 shrink-0 text-[var(--color-ink-subtle)]">名前</dt>
                  <dd className="text-[var(--color-ink)]">{profile.name.ja}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-12 shrink-0 text-[var(--color-ink-subtle)]">年齢</dt>
                  <dd className="text-[var(--color-ink)]">{age}歳</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-12 shrink-0 text-[var(--color-ink-subtle)]">住所</dt>
                  <dd className="text-[var(--color-ink)]">{profile.location.ja}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
