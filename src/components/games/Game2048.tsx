"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Board = number[][];
type Direction = "left" | "right" | "up" | "down";

const SIZE = 4;

function emptyBoard(): Board {
  return Array.from({ length: SIZE }, () => Array<number>(SIZE).fill(0));
}

function cloneBoard(b: Board): Board {
  return b.map((row) => [...row]);
}

function spawn(b: Board): Board {
  const empty: [number, number][] = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (b[r][c] === 0) empty.push([r, c]);
    }
  }
  if (empty.length === 0) return b;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  const next = cloneBoard(b);
  next[r][c] = Math.random() < 0.9 ? 2 : 4;
  return next;
}

function initBoard(): Board {
  return spawn(spawn(emptyBoard()));
}

function slideRow(row: number[]): [number[], number] {
  const compact = row.filter((n) => n !== 0);
  const merged: number[] = [];
  let gained = 0;
  for (let i = 0; i < compact.length; i++) {
    if (i + 1 < compact.length && compact[i] === compact[i + 1]) {
      const v = compact[i] * 2;
      merged.push(v);
      gained += v;
      i++;
    } else {
      merged.push(compact[i]);
    }
  }
  while (merged.length < SIZE) merged.push(0);
  return [merged, gained];
}

function rotateCW(b: Board): Board {
  const out = emptyBoard();
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) out[c][SIZE - 1 - r] = b[r][c];
  return out;
}

function rotateCCW(b: Board): Board {
  const out = emptyBoard();
  for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) out[SIZE - 1 - c][r] = b[r][c];
  return out;
}

function move(b: Board, dir: Direction): { next: Board; gained: number; moved: boolean } {
  let work = cloneBoard(b);
  if (dir === "up") work = rotateCCW(work);
  else if (dir === "down") work = rotateCW(work);
  else if (dir === "right") work = work.map((r) => [...r].reverse());

  let gained = 0;
  const after = work.map((row) => {
    const [r, g] = slideRow(row);
    gained += g;
    return r;
  });

  let result = after;
  if (dir === "up") result = rotateCW(result);
  else if (dir === "down") result = rotateCCW(result);
  else if (dir === "right") result = result.map((r) => [...r].reverse());

  const moved = JSON.stringify(result) !== JSON.stringify(b);
  return { next: result, gained, moved };
}

function isGameOver(b: Board): boolean {
  for (const dir of ["left", "right", "up", "down"] as const) {
    if (move(b, dir).moved) return false;
  }
  return true;
}

function hasWon(b: Board): boolean {
  for (const row of b) for (const v of row) if (v >= 2048) return true;
  return false;
}

type TileStyle = { bg: string; text: string; size: string };

function tileStyle(v: number): TileStyle {
  if (v === 0) return { bg: "bg-transparent", text: "", size: "" };
  if (v === 2) return { bg: "bg-[#F1F3F4]", text: "text-[#374151]", size: "text-3xl" };
  if (v === 4) return { bg: "bg-[#E5E9EC]", text: "text-[#1F2937]", size: "text-3xl" };
  if (v === 8) return { bg: "bg-[#CCFBF1]", text: "text-[#134E4A]", size: "text-3xl" };
  if (v === 16) return { bg: "bg-[#99F6E4]", text: "text-[#134E4A]", size: "text-3xl" };
  if (v === 32) return { bg: "bg-[#5EEAD4]", text: "text-[#0F172A]", size: "text-3xl" };
  if (v === 64) return { bg: "bg-[#2DD4BF]", text: "text-white", size: "text-3xl" };
  if (v === 128) return { bg: "bg-[#14B8A6]", text: "text-white", size: "text-2xl" };
  if (v === 256) return { bg: "bg-[#0D9488]", text: "text-white", size: "text-2xl" };
  if (v === 512) return { bg: "bg-[#0F766E]", text: "text-white", size: "text-2xl" };
  if (v === 1024) return { bg: "bg-[#115E59]", text: "text-white", size: "text-xl" };
  return { bg: "bg-[#0F172A]", text: "text-[#5EEAD4]", size: "text-xl" };
}

export default function Game2048() {
  const [board, setBoard] = useState<Board>(() => initBoard());
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [lastGain, setLastGain] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const reset = useCallback(() => {
    setBoard(initBoard());
    setScore(0);
    setLastGain(0);
    setGameOver(false);
    setWon(false);
  }, []);

  const step = useCallback(
    (dir: Direction) => {
      if (gameOver) return;
      const { next, gained, moved } = move(board, dir);
      if (!moved) return;
      const after = spawn(next);
      setBoard(after);
      const newScore = score + gained;
      setScore(newScore);
      setLastGain(gained);
      if (newScore > best) setBest(newScore);
      if (!won && hasWon(after)) setWon(true);
      if (isGameOver(after)) setGameOver(true);
    },
    [board, score, best, gameOver, won],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const map: Record<string, Direction> = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        h: "left",
        l: "right",
        k: "up",
        j: "down",
      };
      const dir = map[e.key];
      if (!dir) return;
      e.preventDefault();
      step(dir);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(15,23,42,0.12)]">
      <header className="flex items-stretch justify-between gap-3 border-b border-[var(--color-border)] bg-[#0F172A] px-5 py-4 text-white md:px-7">
        <div className="flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-geist-mono)] text-[0.66rem] tracking-[0.28em] text-[#5EEAD4]/70">
            GAME · 01
          </span>
          <span className="font-[family-name:var(--font-geist-mono)] text-lg font-bold tracking-[-0.01em]">
            2048
          </span>
        </div>
        <div className="flex items-stretch gap-2">
          <ScoreBox label="SCORE" value={score} gain={lastGain} />
          <ScoreBox label="BEST" value={best} />
          <button
            onClick={reset}
            aria-label="New game"
            className="flex items-center justify-center rounded-md bg-white/10 px-3 text-xs font-medium text-white transition-colors hover:bg-white/20"
          >
            ↻
          </button>
        </div>
      </header>

      <div className="relative p-4 md:p-6">
        <div
          role="grid"
          aria-label="2048 board"
          className="relative mx-auto grid aspect-square w-full max-w-[440px] grid-cols-4 gap-2 rounded-xl bg-[#EEF1F3] p-2"
        >
          {board.flatMap((row, r) =>
            row.map((v, c) => {
              const s = tileStyle(v);
              return (
                <div
                  key={`cell-${r}-${c}-${v}`}
                  role="gridcell"
                  className={cn(
                    "relative flex items-center justify-center rounded-lg font-[family-name:var(--font-geist-mono)] font-bold tabular-nums transition-colors duration-150",
                    v === 0 ? "bg-white/60" : `${s.bg} ${s.text} ${s.size}`,
                  )}
                  style={
                    v !== 0
                      ? {
                          animation: "tile-in 0.18s cubic-bezier(0.2, 0.7, 0.2, 1) both",
                        }
                      : undefined
                  }
                >
                  {v === 0 ? "" : v}
                </div>
              );
            }),
          )}

          {(gameOver || won) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-white/92 backdrop-blur-sm">
              <p className="font-[family-name:var(--font-geist-mono)] text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-ink-subtle)]">
                {won && !gameOver ? "GOAL REACHED" : "GAME OVER"}
              </p>
              <p className="text-4xl font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                {won && !gameOver ? "2048!" : "No moves"}
              </p>
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[var(--color-ink-muted)]">
                Score <span className="text-[var(--color-ink)]">{score}</span>
              </p>
              <button
                onClick={reset}
                className="rounded-md bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1F2937]"
              >
                Play again
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-5 py-3 text-[0.72rem] text-[var(--color-ink-subtle)] md:px-7">
        <div className="flex items-center gap-2 font-[family-name:var(--font-geist-mono)]">
          <KeyCap>←</KeyCap>
          <KeyCap>↑</KeyCap>
          <KeyCap>↓</KeyCap>
          <KeyCap>→</KeyCap>
          <span className="ml-1 text-[var(--color-ink-subtle)]">or</span>
          <KeyCap>H</KeyCap>
          <KeyCap>J</KeyCap>
          <KeyCap>K</KeyCap>
          <KeyCap>L</KeyCap>
        </div>
        <span className="font-[family-name:var(--font-geist-mono)]">
          Built with <span className="text-[var(--color-accent-deep)]">Claude Code</span>
        </span>
      </footer>

      <style>{`
        @keyframes tile-in {
          0% { transform: scale(0.55); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function ScoreBox({ label, value, gain }: { label: string; value: number; gain?: number }) {
  return (
    <div className="relative flex min-w-[68px] flex-col items-center justify-center rounded-md bg-white/10 px-3 py-1.5">
      <div className="font-[family-name:var(--font-geist-mono)] text-[0.58rem] tracking-[0.2em] text-[#5EEAD4]/70">
        {label}
      </div>
      <div className="font-[family-name:var(--font-geist-mono)] text-base font-bold tabular-nums">
        {value}
      </div>
      {gain && gain > 0 ? (
        <span
          key={gain + Math.random()}
          className="absolute -top-1 right-0 font-[family-name:var(--font-geist-mono)] text-[0.7rem] font-bold text-[#5EEAD4]"
          style={{ animation: "score-pop 0.7s ease-out both" }}
        >
          +{gain}
        </span>
      ) : null}
      <style>{`
        @keyframes score-pop {
          0% { opacity: 0; transform: translateY(0); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translateY(-14px); }
        }
      `}</style>
    </div>
  );
}

function KeyCap({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex h-6 min-w-6 items-center justify-center rounded border border-[var(--color-border)] bg-white px-1.5 font-[family-name:var(--font-geist-mono)] text-[0.68rem] font-medium text-[var(--color-ink-muted)] shadow-[0_1px_0_rgba(0,0,0,0.05)]">
      {children}
    </kbd>
  );
}
