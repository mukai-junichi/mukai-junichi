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

// left-slide one row, return [newRow, gained]
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
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      out[c][SIZE - 1 - r] = b[r][c];
    }
  }
  return out;
}

function rotateCCW(b: Board): Board {
  const out = emptyBoard();
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      out[SIZE - 1 - c][r] = b[r][c];
    }
  }
  return out;
}

function move(b: Board, dir: Direction): { next: Board; gained: number; moved: boolean } {
  let work = cloneBoard(b);
  // rotate so we can always do a left-slide
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

const tileColors: Record<number, string> = {
  0: "bg-[var(--color-bg-subtle)]",
  2: "bg-[#EEE4DA] text-[#776E65]",
  4: "bg-[#EDE0C8] text-[#776E65]",
  8: "bg-[#F2B179] text-white",
  16: "bg-[#F59563] text-white",
  32: "bg-[#F67C5F] text-white",
  64: "bg-[#F65E3B] text-white",
  128: "bg-[#EDCF72] text-white text-[1.6rem]",
  256: "bg-[#EDCC61] text-white text-[1.6rem]",
  512: "bg-[#EDC850] text-white text-[1.6rem]",
  1024: "bg-[#EDC53F] text-white text-[1.4rem]",
  2048: "bg-[var(--color-accent)] text-white text-[1.4rem]",
};

export default function Game2048() {
  const [board, setBoard] = useState<Board>(() => initBoard());
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const reset = useCallback(() => {
    setBoard(initBoard());
    setScore(0);
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
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <ScoreBox label="SCORE" value={score} />
          <ScoreBox label="BEST" value={best} />
        </div>
        <button
          onClick={reset}
          className="inline-flex h-10 items-center rounded-md bg-[var(--color-ink)] px-4 text-[0.82rem] font-medium text-white hover:bg-[var(--color-accent-deep)]"
        >
          New Game
        </button>
      </div>

      <div
        role="grid"
        aria-label="2048 board"
        className="relative grid w-full max-w-[420px] grid-cols-4 gap-2 rounded-xl bg-[var(--color-bg-subtle)] p-2 aspect-square"
      >
        {board.flatMap((row, r) =>
          row.map((v, c) => (
            <div
              key={`${r}-${c}`}
              role="gridcell"
              className={cn(
                "flex items-center justify-center rounded-md text-[1.8rem] font-bold transition-colors",
                tileColors[v] ?? "bg-[var(--color-accent-deep)] text-white text-[1.2rem]",
              )}
            >
              {v === 0 ? "" : v}
            </div>
          )),
        )}
        {(gameOver || won) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-white/85 backdrop-blur-sm">
            <p className="text-3xl font-bold">
              {won && !gameOver ? "You win!" : "Game over"}
            </p>
            <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[var(--color-ink-muted)]">
              Score: {score}
            </p>
            <button
              onClick={reset}
              className="h-10 rounded-md bg-[var(--color-accent)] px-5 text-sm font-medium text-white hover:bg-[var(--color-accent-deep)]"
            >
              Try again
            </button>
          </div>
        )}
      </div>

      <p className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] text-[var(--color-ink-subtle)]">
        Arrow keys / HJKL to move · Same tiles merge
      </p>
    </div>
  );
}

function ScoreBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md bg-[var(--color-bg-subtle)] px-3 py-1.5 text-center">
      <div className="font-[family-name:var(--font-geist-mono)] text-[0.64rem] tracking-widest text-[var(--color-ink-subtle)]">
        {label}
      </div>
      <div className="text-base font-bold text-[var(--color-ink)]">{value}</div>
    </div>
  );
}
