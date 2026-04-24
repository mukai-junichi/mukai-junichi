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

      <main className="mx-auto flex w-full max-w-5xl flex-1 items-center px-6 py-10 md:py-14">
        <section className="w-full">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 md:grid-cols-[1fr_auto]">
            <div className="order-2 md:order-1">
              <h1
                className="rise-in text-[3.5rem] leading-[0.95] font-semibold tracking-[-0.035em] md:text-[6rem]"
                style={{ animationDelay: "80ms" }}
              >
                Junichi Mukai<span className="text-[var(--color-accent)]">.</span>
              </h1>

              <p
                className="rise-in mt-6 text-xl tracking-[-0.005em] md:text-[1.7rem]"
                style={{ animationDelay: "200ms" }}
              >
                <GradientText>Web Developer</GradientText>
                <span className="mx-2.5 text-[var(--color-ink-subtle)]">&amp;</span>
                <GradientText>Web Designer</GradientText>
              </p>

              <p
                className="rise-in mt-10 max-w-[46ch] font-[family-name:var(--font-noto-jp)] text-[1rem] leading-[2.05] text-[var(--color-ink-muted)]"
                style={{ animationDelay: "300ms" }}
              >
                {profile.lede.ja}
              </p>

              <div
                className="rise-in mt-10 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "450ms" }}
              >
                <Button href="/works" variant="primary">
                  <span>See works</span>
                  <span aria-hidden className="-mr-0.5">→</span>
                </Button>
                <Button href="/games" variant="outline">
                  Play a game
                </Button>
                <Button href="/about" variant="ghost">
                  About
                </Button>
              </div>
            </div>

            <aside
              className="rise-in order-1 flex flex-col items-center gap-5 justify-self-center md:order-2 md:justify-self-end"
              style={{ animationDelay: "40ms" }}
            >
              <div className="relative h-[240px] w-[240px] md:h-[260px] md:w-[260px]">
                <Image
                  src="/img/portrait-junichi.png"
                  alt={`Portrait of ${profile.name.en}`}
                  fill
                  priority
                  sizes="260px"
                  className="object-contain"
                />
              </div>

              <dl className="w-full max-w-[260px] divide-y divide-[var(--color-border)] font-[family-name:var(--font-geist-mono)] text-[0.76rem]">
                <ProfileRow label="NAME" value={profile.name.ja} />
                <ProfileRow label="AGE" value={`${age}`} />
                <ProfileRow label="BASED" value={profile.location.en} />
                <ProfileRow label="ROLE" value="Developer / Designer" />
              </dl>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between py-2">
      <dt className="tracking-[0.15em] text-[var(--color-ink-subtle)]">{label}</dt>
      <dd className="num-tabular text-[var(--color-ink)]">{value}</dd>
    </div>
  );
}
