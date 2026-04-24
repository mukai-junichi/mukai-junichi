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

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(() => Array<Cell>(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line } = checkWinner(board);
  const isDraw = !winner && board.every((c) => c !== null);
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "Draw — Restart?"
      : `Next: ${xIsNext ? "X" : "O"}`;

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
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full max-w-[320px] items-center justify-between">
        <div className="font-[family-name:var(--font-geist-mono)] text-[0.78rem] tracking-wide text-[var(--color-ink)]">
          {status}
        </div>
        <button
          onClick={reset}
          className="rounded-md border border-[var(--color-border-strong)] bg-white px-3 py-1 text-xs font-medium text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-bg-subtle)]"
        >
          Reset
        </button>
      </div>

      <div
        role="grid"
        aria-label="Tic-tac-toe board"
        className="grid grid-cols-3 gap-2 rounded-xl bg-[var(--color-bg-subtle)] p-2"
      >
        {board.map((cell, i) => {
          const isWinning = line?.includes(i);
          return (
            <button
              key={i}
              onClick={() => handle(i)}
              disabled={!!cell || !!winner}
              aria-label={`Cell ${i + 1}${cell ? `, ${cell}` : ", empty"}`}
              className={cn(
                "flex h-20 w-20 items-center justify-center rounded-md bg-white text-3xl font-bold transition-colors",
                "disabled:cursor-default",
                !cell && !winner && "hover:bg-[var(--color-accent-soft)]",
                isWinning && "bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]",
                !isWinning && cell === "X" && "text-[var(--color-ink)]",
                !isWinning && cell === "O" && "text-[var(--color-accent-deep)]",
              )}
            >
              {cell}
            </button>
          );
        })}
      </div>
    </div>
  );
}
