"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/cn";

const Invaders = dynamic(() => import("@/components/games/Invaders"), { ssr: false });
const Game2048 = dynamic(() => import("@/components/games/Game2048"), { ssr: false });
const TicTacToe = dynamic(() => import("@/components/games/TicTacToe"), { ssr: false });

type TabId = "invaders" | "2048" | "tic-tac-toe";

type TabInfo = {
  id: TabId;
  label: string;
  sub: string;
  glyph: React.ReactNode;
};

const tabs: TabInfo[] = [
  {
    id: "invaders",
    label: "Invaders",
    sub: "Canvas arcade shooter",
    glyph: (
      <svg viewBox="0 0 28 16" className="h-4 w-7" fill="currentColor" aria-hidden>
        <rect x="4" y="4" width="2" height="2" />
        <rect x="22" y="4" width="2" height="2" />
        <rect x="8" y="2" width="12" height="2" />
        <rect x="6" y="6" width="16" height="2" />
        <rect x="4" y="8" width="20" height="2" />
        <rect x="6" y="10" width="4" height="2" />
        <rect x="18" y="10" width="4" height="2" />
        <rect x="8" y="12" width="3" height="2" />
        <rect x="17" y="12" width="3" height="2" />
      </svg>
    ),
  },
  {
    id: "2048",
    label: "2048",
    sub: "Keyboard puzzle",
    glyph: (
      <span className="inline-flex h-6 items-center justify-center rounded-sm bg-current px-1.5 font-[family-name:var(--font-geist-mono)] text-[0.68rem] font-bold text-[var(--color-bg-panel)] num-tabular">
        2048
      </span>
    ),
  },
  {
    id: "tic-tac-toe",
    label: "Tic-Tac-Toe",
    sub: "Two-player click game",
    glyph: (
      <svg viewBox="0 0 28 14" className="h-4 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M3 3 L9 9 M9 3 L3 9" strokeLinecap="round" />
        <circle cx="18" cy="7" r="3.2" />
      </svg>
    ),
  },
];

export default function ArcadeTabs() {
  const [active, setActive] = useState<TabId>("invaders");

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {tabs.map((t, i) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "group relative flex items-center gap-4 overflow-hidden rounded-lg border bg-[var(--color-bg-panel)] px-4 py-3.5 text-left transition-all duration-200",
                isActive
                  ? "border-[var(--color-accent)] shadow-[0_0_0_3px_rgba(13,148,136,0.08)]"
                  : "border-[var(--color-border)] hover:border-[var(--color-accent)]/40",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-colors",
                  isActive
                    ? "bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]"
                    : "bg-[var(--color-bg-subtle)] text-[var(--color-ink-muted)] group-hover:bg-[var(--color-accent-soft)] group-hover:text-[var(--color-accent-deep)]",
                )}
              >
                {t.glyph}
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-geist-mono)] text-[0.62rem] tracking-[0.18em] text-[var(--color-ink-subtle)] num-tabular">
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "text-[0.98rem] font-semibold tracking-[-0.01em]",
                      isActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink)]",
                    )}
                  >
                    {t.label}
                  </span>
                </span>
                <span className="mt-0.5 block truncate font-[family-name:var(--font-geist-mono)] text-[0.72rem] text-[var(--color-ink-muted)]">
                  {t.sub}
                </span>
              </span>

              <span
                aria-hidden
                className={cn(
                  "ml-auto inline-flex h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                  isActive
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-border-strong)]",
                )}
              />
            </button>
          );
        })}
      </div>

      <div
        key={active}
        className="mt-6 rise-in"
      >
        {active === "invaders" && <Invaders />}
        {active === "2048" && <Game2048 />}
        {active === "tic-tac-toe" && <TicTacToe />}
      </div>
    </div>
  );
}
