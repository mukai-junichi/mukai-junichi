"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/cn";

const Invaders = dynamic(() => import("@/components/games/Invaders"), { ssr: false });
const Game2048 = dynamic(() => import("@/components/games/Game2048"), { ssr: false });
const TicTacToe = dynamic(() => import("@/components/games/TicTacToe"), { ssr: false });

type TabId = "invaders" | "2048" | "tic-tac-toe";

const tabs: { id: TabId; label: string; sub: string }[] = [
  { id: "invaders", label: "Invaders", sub: "Canvas arcade shooter" },
  { id: "2048", label: "2048", sub: "Keyboard puzzle" },
  { id: "tic-tac-toe", label: "Tic-Tac-Toe", sub: "Two-player click game" },
];

export default function ArcadeTabs() {
  const [active, setActive] = useState<TabId>("invaders");

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t, i) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "group relative flex min-w-[170px] flex-1 flex-col items-start rounded-xl border px-4 py-3 text-left transition-colors",
                isActive
                  ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                  : "border-[var(--color-border)] bg-white hover:border-[var(--color-accent)]/40",
              )}
            >
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.64rem] tracking-[0.18em] uppercase text-[var(--color-ink-subtle)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "mt-0.5 text-base font-semibold tracking-tight",
                  isActive ? "text-[var(--color-accent-deep)]" : "text-[var(--color-ink)]",
                )}
              >
                {t.label}
              </span>
              <span className="text-[0.74rem] text-[var(--color-ink-muted)]">{t.sub}</span>
              {isActive && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-[var(--color-accent)]/20"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {active === "invaders" && <Invaders />}
        {active === "2048" && <Game2048 />}
        {active === "tic-tac-toe" && <TicTacToe />}
      </div>
    </div>
  );
}
