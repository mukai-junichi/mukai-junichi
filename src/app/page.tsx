import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import GradientText from "@/components/ui/GradientText";
import { profile } from "@/content/profile";
import { works } from "@/content/works";
import { calculateAge } from "@/lib/age";

export default function HomePage() {
  const age = calculateAge(profile.birth);
  const featured = works.slice(0, 4);

  return (
    <>
      <Header />

      <main className="page-in mx-auto max-w-5xl px-6">
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="justify-self-center md:justify-self-start">
              <div className="relative h-60 w-60 md:h-56 md:w-56">
                <Image
                  src="/img/portrait-junichi.png"
                  alt={`Portrait of ${profile.name.en}`}
                  fill
                  priority
                  sizes="240px"
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <p className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
                Hi — I&apos;m
              </p>
              <h1 className="mt-2 text-5xl leading-[1.05] font-semibold tracking-[-0.02em] md:text-6xl">
                Junichi Mukai
                <span className="text-[var(--color-accent)]">.</span>
              </h1>
              <p className="mt-4 text-xl tracking-[-0.005em] md:text-[1.6rem]">
                <GradientText>Web Developer</GradientText>
                <span className="mx-2 text-[var(--color-ink-subtle)]">&amp;</span>
                <GradientText>Web Designer</GradientText>
              </p>

              <p className="mt-8 max-w-[52ch] font-[family-name:var(--font-noto-jp)] text-[0.98rem] leading-[1.95] text-[var(--color-ink-muted)]">
                {profile.lede.ja}
              </p>

              <p className="mt-4 font-[family-name:var(--font-geist-mono)] text-[0.76rem] text-[var(--color-ink-subtle)]">
                {profile.name.ja} · {age} · {profile.location.ja}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/works" variant="primary">
                  Play my works
                </Button>
                <Button href="/about" variant="outline">
                  About me
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
              Featured Works
            </h2>
            <Link
              href="/works"
              className="font-[family-name:var(--font-geist-mono)] text-[0.78rem] text-[var(--color-accent-deep)] hover:text-[var(--color-accent)]"
            >
              All works →
            </Link>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {featured.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/works/${w.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-white p-5 transition-colors hover:border-[var(--color-accent)]/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] text-[var(--color-accent-deep)]">
                      {w.number}
                    </span>
                    {w.kind === "game" ? (
                      <Pill variant="teal">▶ Playable</Pill>
                    ) : (
                      <Pill>Site</Pill>
                    )}
                  </div>
                  <h3 className="mt-3 text-[1.4rem] leading-tight font-semibold tracking-[-0.01em]">
                    {w.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-noto-jp)] text-[0.9rem] leading-[1.8] text-[var(--color-ink-muted)]">
                    {w.tagline}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {w.stack.slice(0, 4).map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
