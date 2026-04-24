import { profile } from "@/content/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const email = profile.contact.email;
  return (
    <footer className="mt-24 border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 font-[family-name:var(--font-geist-mono)] text-[0.72rem] text-[var(--color-ink-subtle)] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>© {year} {profile.name.en}</span>
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {email}
            </a>
          )}
        </div>
        <div>
          Built with Next.js · Made with{" "}
          <span className="text-[var(--color-accent-deep)]">Claude Code</span>
        </div>
      </div>
    </footer>
  );
}
