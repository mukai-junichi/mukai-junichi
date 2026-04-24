"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import HudStat from "./HudStat";
import KeyCap from "./KeyCap";

// === Internal constants ===
const GAME_W = 640;
const GAME_H = 480;
const PIXEL = 3; // sprite pixel size

const PLAYER_W = 30;
const PLAYER_H = 15;
const PLAYER_Y = GAME_H - 54;
const PLAYER_SPEED = 4.2;

const BULLET_W = 3;
const BULLET_H = 12;
const BULLET_SPEED = 7.5;
const FIRE_COOLDOWN = 320;

const ENEMY_W = 30;
const ENEMY_H = 24;
const ENEMY_GAP_X = 18;
const ENEMY_GAP_Y = 14;
const ENEMY_ROWS = 5;
const ENEMY_COLS = 10;
const ENEMY_START_X = 36;
const ENEMY_START_Y = 64;
const ENEMY_DROP = 18;
const ENEMY_STEP_MS_INIT = 680;
const ENEMY_BULLET_SPEED = 3.3;
const ENEMY_FIRE_CHANCE = 0.0045;

// === Sprites (1=filled pixel) ===
// 10 wide × 8 tall
const SQUID: number[][] = [
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
];
const CRAB: number[][] = [
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
];
const OCTOPUS: number[][] = [
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
];

// 10 wide × 5 tall
const SHIP: number[][] = [
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

type Player = { x: number };
type Bullet = { x: number; y: number };
type Enemy = { col: number; row: number; alive: boolean };
type Particle = { x: number; y: number; dx: number; dy: number; life: number; color: string };

type State = {
  player: Player;
  bullets: Bullet[];
  enemyBullets: Bullet[];
  enemies: Enemy[];
  enemyGroupX: number;
  enemyGroupY: number;
  dir: 1 | -1;
  stepAccum: number;
  stepMs: number;
  lastFireAt: number;
  score: number;
  lives: number;
  wave: number;
  status: "idle" | "playing" | "won" | "lost";
  particles: Particle[];
};

function makeEnemies(): Enemy[] {
  const arr: Enemy[] = [];
  for (let r = 0; r < ENEMY_ROWS; r++) {
    for (let c = 0; c < ENEMY_COLS; c++) {
      arr.push({ col: c, row: r, alive: true });
    }
  }
  return arr;
}

function initState(wave = 1, score = 0, lives = 3): State {
  return {
    player: { x: GAME_W / 2 - PLAYER_W / 2 },
    bullets: [],
    enemyBullets: [],
    enemies: makeEnemies(),
    enemyGroupX: 0,
    enemyGroupY: 0,
    dir: 1,
    stepAccum: 0,
    stepMs: Math.max(150, ENEMY_STEP_MS_INIT - (wave - 1) * 80),
    lastFireAt: 0,
    score,
    lives,
    wave,
    status: "playing",
    particles: [],
  };
}

function enemyAbsX(e: Enemy, groupX: number) {
  return ENEMY_START_X + groupX + e.col * (ENEMY_W + ENEMY_GAP_X);
}
function enemyAbsY(e: Enemy, groupY: number) {
  return ENEMY_START_Y + groupY + e.row * (ENEMY_H + ENEMY_GAP_Y);
}

function rectsOverlap(
  ax: number,
  ay: number,
  aw: number,
  ah: number,
  bx: number,
  by: number,
  bw: number,
  bh: number,
) {
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

function rowSprite(row: number) {
  if (row === 0) return SQUID;
  if (row === 1 || row === 2) return CRAB;
  return OCTOPUS;
}
function rowColor(row: number) {
  if (row === 0) return "#FDE68A"; // amber-200
  if (row === 1) return "#FCA5A5"; // red-300
  if (row === 2) return "#F472B6"; // pink-400
  if (row === 3) return "#A5B4FC"; // indigo-300
  return "#5EEAD4"; // teal-300
}
function rowPoints(row: number) {
  if (row === 0) return 40;
  if (row === 1 || row === 2) return 20;
  return 10;
}

function spawnExplosion(
  particles: Particle[],
  x: number,
  y: number,
  color: string,
  count = 14,
) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.8 + Math.random() * 2.4;
    particles.push({
      x,
      y,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      life: 24 + Math.random() * 16,
      color,
    });
  }
}

function drawSprite(
  ctx: CanvasRenderingContext2D,
  pattern: number[][],
  x: number,
  y: number,
  pixel: number,
  color: string,
) {
  ctx.fillStyle = color;
  for (let py = 0; py < pattern.length; py++) {
    for (let px = 0; px < pattern[py].length; px++) {
      if (pattern[py][px]) {
        ctx.fillRect(x + px * pixel, y + py * pixel, pixel, pixel);
      }
    }
  }
}

export default function Invaders() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>(initState());
  const keysRef = useRef<Set<string>>(new Set());
  const rafRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [wave, setWave] = useState(1);
  const [status, setStatus] = useState<State["status"]>("idle");

  const commitDisplay = useCallback(() => {
    const s = stateRef.current;
    setScore(s.score);
    setLives(s.lives);
    setWave(s.wave);
    setStatus(s.status);
  }, []);

  const startGame = useCallback(() => {
    stateRef.current = initState();
    commitDisplay();
    canvasRef.current?.focus();
  }, [commitDisplay]);

  const nextWave = useCallback(() => {
    const prev = stateRef.current;
    stateRef.current = initState(prev.wave + 1, prev.score, prev.lives);
    commitDisplay();
  }, [commitDisplay]);

  // === Keyboard ===
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", " ", "Space"].includes(e.key)) {
        e.preventDefault();
      }
      keysRef.current.add(e.key);
      // Start / restart on space if idle/won/lost
      const st = stateRef.current.status;
      if (e.key === " " || e.key === "Enter") {
        if (st === "idle" || st === "lost") startGame();
        else if (st === "won") nextWave();
      }
    };
    const onUp = (e: KeyboardEvent) => {
      keysRef.current.delete(e.key);
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [startGame, nextWave]);

  // === Game Loop ===
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dirty = false;

    const step = (ts: number) => {
      const s = stateRef.current;
      const keys = keysRef.current;
      const dt = lastTsRef.current ? Math.min(48, ts - lastTsRef.current) : 16;
      lastTsRef.current = ts;

      // === Update ===
      if (s.status === "playing") {
        // Player
        if (keys.has("ArrowLeft") || keys.has("a")) {
          s.player.x = Math.max(12, s.player.x - PLAYER_SPEED);
        }
        if (keys.has("ArrowRight") || keys.has("d")) {
          s.player.x = Math.min(GAME_W - PLAYER_W - 12, s.player.x + PLAYER_SPEED);
        }

        // Fire
        if (keys.has(" ") || keys.has("Space") || keys.has("z")) {
          if (ts - s.lastFireAt > FIRE_COOLDOWN && s.bullets.length < 3) {
            s.bullets.push({
              x: s.player.x + PLAYER_W / 2 - BULLET_W / 2,
              y: PLAYER_Y - BULLET_H,
            });
            s.lastFireAt = ts;
          }
        }

        // Player bullets
        s.bullets = s.bullets
          .map((b) => ({ ...b, y: b.y - BULLET_SPEED }))
          .filter((b) => b.y + BULLET_H > 0);

        // Enemy bullets
        s.enemyBullets = s.enemyBullets
          .map((b) => ({ ...b, y: b.y + ENEMY_BULLET_SPEED }))
          .filter((b) => b.y < GAME_H);

        // Enemy group step
        s.stepAccum += dt;
        const aliveCount = s.enemies.reduce((n, e) => n + (e.alive ? 1 : 0), 0);
        const speedFactor = Math.max(0.25, aliveCount / (ENEMY_ROWS * ENEMY_COLS));
        const curStep = s.stepMs * speedFactor;
        if (s.stepAccum >= curStep && aliveCount > 0) {
          s.stepAccum = 0;

          // Find group bounding box
          let minX = Infinity;
          let maxX = -Infinity;
          let maxY = -Infinity;
          for (const e of s.enemies) {
            if (!e.alive) continue;
            const ex = enemyAbsX(e, s.enemyGroupX);
            const ey = enemyAbsY(e, s.enemyGroupY);
            if (ex < minX) minX = ex;
            if (ex + ENEMY_W > maxX) maxX = ex + ENEMY_W;
            if (ey + ENEMY_H > maxY) maxY = ey + ENEMY_H;
          }

          // Check if we need to drop
          const wantMove = 12 * s.dir;
          const wouldMinX = minX + wantMove;
          const wouldMaxX = maxX + wantMove;
          if (wouldMinX < 12 || wouldMaxX > GAME_W - 12) {
            s.dir = (s.dir === 1 ? -1 : 1) as 1 | -1;
            s.enemyGroupY += ENEMY_DROP;
          } else {
            s.enemyGroupX += wantMove;
          }

          // Check if any enemy reached player line
          for (const e of s.enemies) {
            if (!e.alive) continue;
            const ey = enemyAbsY(e, s.enemyGroupY);
            if (ey + ENEMY_H >= PLAYER_Y - 6) {
              s.status = "lost";
              dirty = true;
            }
          }
        }

        // Enemy fire
        for (const e of s.enemies) {
          if (!e.alive) continue;
          if (Math.random() < ENEMY_FIRE_CHANCE) {
            // only fire if bottom-most in its column (rough approximation)
            let isBottom = true;
            for (const other of s.enemies) {
              if (!other.alive) continue;
              if (other.col === e.col && other.row > e.row) {
                isBottom = false;
                break;
              }
            }
            if (isBottom && s.enemyBullets.length < 4) {
              s.enemyBullets.push({
                x: enemyAbsX(e, s.enemyGroupX) + ENEMY_W / 2 - BULLET_W / 2,
                y: enemyAbsY(e, s.enemyGroupY) + ENEMY_H,
              });
            }
          }
        }

        // Collision: player bullets vs enemies
        for (const b of s.bullets) {
          for (const e of s.enemies) {
            if (!e.alive) continue;
            const ex = enemyAbsX(e, s.enemyGroupX);
            const ey = enemyAbsY(e, s.enemyGroupY);
            if (rectsOverlap(b.x, b.y, BULLET_W, BULLET_H, ex, ey, ENEMY_W, ENEMY_H)) {
              e.alive = false;
              b.y = -999; // mark for removal
              s.score += rowPoints(e.row);
              spawnExplosion(s.particles, ex + ENEMY_W / 2, ey + ENEMY_H / 2, rowColor(e.row));
              dirty = true;
              break;
            }
          }
        }
        s.bullets = s.bullets.filter((b) => b.y > 0);

        // Collision: enemy bullets vs player
        for (const b of s.enemyBullets) {
          if (
            rectsOverlap(
              b.x,
              b.y,
              BULLET_W,
              BULLET_H,
              s.player.x,
              PLAYER_Y,
              PLAYER_W,
              PLAYER_H,
            )
          ) {
            b.y = GAME_H + 999;
            s.lives -= 1;
            spawnExplosion(s.particles, s.player.x + PLAYER_W / 2, PLAYER_Y + PLAYER_H / 2, "#5EEAD4", 22);
            dirty = true;
            if (s.lives <= 0) {
              s.status = "lost";
            }
          }
        }
        s.enemyBullets = s.enemyBullets.filter((b) => b.y < GAME_H);

        // Win?
        if (s.enemies.every((e) => !e.alive)) {
          s.status = "won";
          dirty = true;
        }
      }

      // Particles always update
      s.particles = s.particles
        .map((p) => ({
          ...p,
          x: p.x + p.dx,
          y: p.y + p.dy,
          dy: p.dy + 0.08,
          life: p.life - 1,
        }))
        .filter((p) => p.life > 0);

      // === Draw ===
      ctx.fillStyle = "#070B14";
      ctx.fillRect(0, 0, GAME_W, GAME_H);

      // starfield (decorative)
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      for (let i = 0; i < 20; i++) {
        const sx = (i * 97) % GAME_W;
        const sy = (i * 53 + Math.floor(ts / 60) * ((i % 3) + 1)) % GAME_H;
        ctx.fillRect(sx, sy, 1, 1);
      }

      // enemies
      for (const e of s.enemies) {
        if (!e.alive) continue;
        drawSprite(
          ctx,
          rowSprite(e.row),
          enemyAbsX(e, s.enemyGroupX),
          enemyAbsY(e, s.enemyGroupY),
          PIXEL,
          rowColor(e.row),
        );
      }

      // player
      if (s.status !== "lost" || s.lives > 0) {
        drawSprite(ctx, SHIP, s.player.x, PLAYER_Y, PIXEL, "#5EEAD4");
      }

      // bullets
      ctx.fillStyle = "#5EEAD4";
      for (const b of s.bullets) ctx.fillRect(b.x, b.y, BULLET_W, BULLET_H);

      // enemy bullets
      ctx.fillStyle = "#FB7185";
      for (const b of s.enemyBullets) ctx.fillRect(b.x, b.y, BULLET_W, BULLET_H);

      // particles
      for (const p of s.particles) {
        ctx.fillStyle = p.color;
        const size = Math.max(1, Math.floor(p.life / 10));
        ctx.fillRect(p.x, p.y, size, size);
      }

      // Idle overlay
      if (s.status !== "playing") {
        ctx.fillStyle = "rgba(7, 11, 20, 0.78)";
        ctx.fillRect(0, 0, GAME_W, GAME_H);

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillStyle = "#5EEAD4";
        ctx.font = "bold 14px 'Geist Mono', ui-monospace, monospace";
        ctx.fillText(
          s.status === "won"
            ? `WAVE ${s.wave} CLEARED`
            : s.status === "lost"
              ? "GAME OVER"
              : "INVADERS",
          GAME_W / 2,
          GAME_H / 2 - 48,
        );

        ctx.fillStyle = "#FAFAFA";
        ctx.font = "bold 44px 'Geist', ui-sans-serif, sans-serif";
        ctx.fillText(
          s.status === "idle" ? "READY" : s.status === "won" ? `SCORE ${s.score}` : `${s.score} POINTS`,
          GAME_W / 2,
          GAME_H / 2,
        );

        ctx.fillStyle = "rgba(250, 250, 250, 0.6)";
        ctx.font = "12px 'Geist Mono', ui-monospace, monospace";
        ctx.fillText(
          s.status === "won"
            ? "PRESS SPACE FOR NEXT WAVE"
            : "PRESS SPACE TO START",
          GAME_W / 2,
          GAME_H / 2 + 42,
        );
      }

      if (dirty) {
        dirty = false;
        commitDisplay();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [commitDisplay]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_48px_-24px_rgba(15,23,42,0.12)]">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[#070B14] px-5 py-4 text-white md:px-7">
        <div className="flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-geist-mono)] text-[0.66rem] tracking-[0.28em] text-[#5EEAD4]/70">
            GAME · 03
          </span>
          <span className="font-[family-name:var(--font-geist-mono)] text-lg font-bold tracking-[-0.01em]">
            Invaders
          </span>
        </div>
        <div className="flex flex-wrap items-stretch gap-2">
          <HudStat label="SCORE" value={score} className="min-w-[64px]" />
          <HudStat label="LIVES" value={lives} tone="warn" className="min-w-[64px]" />
          <HudStat label="WAVE" value={wave} className="min-w-[64px]" />
          <button
            onClick={startGame}
            aria-label="Restart"
            className="flex items-center justify-center rounded-md bg-white/10 px-3 text-xs font-medium text-white transition-colors hover:bg-white/20"
          >
            ↻
          </button>
        </div>
      </header>

      <div className="relative bg-[#070B14] px-4 py-4 md:px-6 md:py-5">
        <canvas
          ref={canvasRef}
          width={GAME_W}
          height={GAME_H}
          className="mx-auto block w-full max-w-[640px] rounded-md"
          style={{ aspectRatio: `${GAME_W} / ${GAME_H}`, imageRendering: "pixelated" }}
          tabIndex={0}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(94,234,212,0.05) 0, rgba(94,234,212,0.05) 1px, transparent 1px, transparent 4px)",
          }}
        />

        {status !== "playing" && (
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-8">
            <button
              onClick={status === "won" ? nextWave : startGame}
              className="pointer-events-auto rounded-md bg-[#5EEAD4] px-5 py-2.5 text-sm font-bold text-[#0F172A] shadow-[0_0_0_2px_rgba(94,234,212,0.25)] transition-colors hover:bg-[#2DD4BF]"
            >
              {status === "won"
                ? "▶ Next wave"
                : status === "lost"
                  ? "▶ Play again"
                  : "▶ Start"}
            </button>
          </div>
        )}
      </div>

      <footer className="flex flex-wrap items-center gap-2 border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-5 py-3 font-[family-name:var(--font-geist-mono)] text-[0.72rem] text-[var(--color-ink-subtle)] md:px-7">
        <KeyCap>←</KeyCap>
        <KeyCap>→</KeyCap>
        <span className="ml-0.5">Move</span>
        <span className="mx-2 text-[var(--color-ink-subtle)]/50">·</span>
        <KeyCap wide>Space</KeyCap>
        <span>Fire</span>
      </footer>
    </div>
  );
}

