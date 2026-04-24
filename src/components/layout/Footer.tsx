import { profile } from "@/content/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-[family-name:var(--font-geist-mono)] text-[0.7rem] text-[var(--color-ink-subtle)] md:flex-row md:items-center md:justify-between">
        <div>© {year} {profile.name.en}</div>
        <div>
          Built with Next.js · Made with{" "}
          <span className="text-[var(--color-accent-deep)]">Claude Code</span>
        </div>
      </div>
    </footer>
  );
}
