import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Pill from "@/components/ui/Pill";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "連絡先。Email / GitHub / X / LinkedIn。",
};

const channels = [
  { label: "Email", value: profile.contact.email, href: profile.contact.email ? `mailto:${profile.contact.email}` : undefined },
  { label: "GitHub", value: profile.contact.github, href: profile.contact.github || undefined },
  { label: "X", value: profile.contact.x, href: profile.contact.x || undefined },
  { label: "LinkedIn", value: profile.contact.linkedin, href: profile.contact.linkedin || undefined },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="page-in mx-auto max-w-3xl px-6 py-14 md:py-20">
        <section>
          <p className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl leading-tight font-semibold tracking-[-0.02em] md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-[48ch] font-[family-name:var(--font-noto-jp)] text-[0.96rem] leading-[1.9] text-[var(--color-ink-muted)]">
            サイトに関する感想や、ちょっとした会話・雑談も歓迎です。下記のいずれかからどうぞ。
          </p>
        </section>

        <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
          {channels.map((c) => {
            const label = (
              <div className="flex items-baseline justify-between">
                <span className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.15em] uppercase text-[var(--color-accent-deep)]">
                  {c.label}
                </span>
                {!c.href && <Pill>TBA</Pill>}
              </div>
            );
            const inner = (
              <>
                {label}
                <div className="mt-3 break-all font-[family-name:var(--font-geist-mono)] text-[0.92rem] font-medium text-[var(--color-ink)]">
                  {c.value || "— TBA"}
                </div>
              </>
            );
            if (c.href) {
              return (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block rounded-xl border border-[var(--color-border)] bg-white p-5 transition-colors hover:border-[var(--color-accent)]/60"
                  >
                    {inner}
                  </a>
                </li>
              );
            }
            return (
              <li key={c.label}>
                <div className="rounded-xl border border-[var(--color-border)] bg-white p-5 opacity-70">
                  {inner}
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
