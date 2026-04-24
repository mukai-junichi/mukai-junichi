"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Cell = "X" | "O" | null;

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(board: Cell[]): { winner: Cell; line: number[] | null } {
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}

const XMark = () => (
  <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" aria-hidden>
    <path
      d="M10 10 L38 38 M38 10 L10 38"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const OMark = () => (
  <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" aria-hidden>
    <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="4" />
  </svg>
);

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(() => Array<Cell>(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winsX, setWinsX] = useState(0);
  const [winsO, setWinsO] = useState(0);
  const [draws, setDraws] = useState(0);
  const [scored, setScored] = useState(false);

  const { winner, line } = checkWinner(board);
  const isDraw = !winner && board.every((c) => c !== null);

  if (winner && !scored) {
    if (winner === "X") setWinsX((n) => n + 1);
    else setWinsO((n) => n + 1);
    setScored(true);
  } else if (isDraw && !scored) {
    setDraws((n) => n + 1);
    setScored(true);
  }

  const handle = (i: number) => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = xIsNext ? "X" : "O";
    setBoard(next);
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    setBoard(Array<Cell>(9).fill(null));
    setXIsNext(true);
    setScored(false);
  };

  const resetAll = () => {
    reset();
    setWinsX(0);
    setWinsO(0);
    setDraws(0);
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(15,23,42,0.12)]">
      <header className="flex items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[#0F172A] px-5 py-4 text-white md:px-7">
        <div className="flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-geist-mono)] text-[0.66rem] tracking-[0.28em] text-[#5EEAD4]/70">
            GAME · 02
          </span>
          <span className="font-[family-name:var(--font-geist-mono)] text-lg font-bold">Tic-Tac-Toe</span>
        </div>
        <div className="flex items-center gap-2">
          <StatBox label="X" value={winsX} tone="light" />
          <StatBox label="—" value={draws} tone="muted" />
          <StatBox label="O" value={winsO} tone="accent" />
          <button
            onClick={resetAll}
            aria-label="Reset all"
            className="flex h-8 items-center justify-center rounded-md bg-white/10 px-3 text-xs font-medium transition-colors hover:bg-white/20"
          >
            ↻
          </button>
        </div>
      </header>

      <div className="flex flex-col items-center gap-5 p-6 md:p-8">
        <div className="flex w-full max-w-[360px] items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                winner
                  ? winner === "X"
                    ? "bg-[var(--color-ink)]"
                    : "bg-[var(--color-accent)]"
                  : isDraw
                    ? "bg-[var(--color-ink-subtle)]"
                    : xIsNext
                      ? "bg-[var(--color-ink)]"
                      : "bg-[var(--color-accent)]",
              )}
            />
            <span className="font-[family-name:var(--font-geist-mono)] text-[0.82rem] tracking-[0.05em] text-[var(--color-ink)]">
              {winner
                ? `Winner · ${winner}`
                : isDraw
                  ? "Draw"
                  : `${xIsNext ? "X" : "O"} to move`}
            </span>
          </div>
          {(winner || isDraw) && (
            <button
              onClick={reset}
              className="rounded-md border border-[var(--color-border-strong)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-ink)] hover:border-[var(--color-ink)]"
            >
              Next round
            </button>
          )}
        </div>

        <div className="relative" style={{ width: 336, height: 336 }}>
          <div className="grid h-full w-full grid-cols-3 gap-2 rounded-xl bg-[#EEF1F3] p-2">
            {board.map((cell, i) => {
              const isWinning = line?.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => handle(i)}
                  disabled={!!cell || !!winner}
                  aria-label={`Cell ${i + 1}${cell ? `, ${cell}` : ", empty"}`}
                  className={cn(
                    "group relative flex items-center justify-center rounded-lg bg-white transition-colors",
                    "disabled:cursor-default",
                    !cell && !winner && "hover:bg-[#E0FAF5]",
                    isWinning && "bg-[#CCFBF1]",
                  )}
                >
                  {cell && (
                    <div
                      className={cn(
                        "h-1/2 w-1/2 transition-transform",
                        cell === "X" ? "text-[var(--color-ink)]" : "text-[var(--color-accent-deep)]",
                      )}
                      style={{
                        animation: "mark-in 0.22s cubic-bezier(0.2, 0.7, 0.2, 1) both",
                      }}
                    >
                      {cell === "X" ? <XMark /> : <OMark />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-5 py-3 text-[0.72rem] text-[var(--color-ink-subtle)] md:px-7">
        <span className="font-[family-name:var(--font-geist-mono)]">
          Click a cell · First to 3 in a row
        </span>
        <span className="font-[family-name:var(--font-geist-mono)]">
          Built with <span className="text-[var(--color-accent-deep)]">Claude Code</span>
        </span>
      </footer>

      <style>{`
        @keyframes mark-in {
          0% { transform: scale(0.55); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function StatBox({ label, value, tone }: { label: string; value: number; tone: "light" | "muted" | "accent" }) {
  const tones = {
    light: "text-white",
    muted: "text-white/60",
    accent: "text-[#5EEAD4]",
  };
  return (
    <div className="flex min-w-[44px] flex-col items-center rounded-md bg-white/10 px-2 py-1">
      <span className={cn("font-[family-name:var(--font-geist-mono)] text-[0.58rem] tracking-[0.18em]", tones[tone])}>
        {label}
      </span>
      <span className="font-[family-name:var(--font-geist-mono)] text-sm font-bold tabular-nums text-white">
        {value}
      </span>
    </div>
  );
}
