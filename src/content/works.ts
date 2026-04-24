export type WorkKind = "site" | "game";

export type Work = {
  slug: string;
  number: string;
  year: string;
  title: string;
  tagline: string;
  kind: WorkKind;
  stack: string[];
  url?: string;
  summary?: string;
  builtWith?: string;
};

export const works: Work[] = [
  {
    slug: "game-invaders",
    number: "N°01",
    year: "2026",
    title: "Invaders",
    tagline:
      "canvas × 60fps の要素でスクラッチしたスペースインベーダー。波が進むとテンポが上がる。",
    kind: "game",
    stack: ["TypeScript", "Canvas", "Game Loop", "requestAnimationFrame"],
    summary:
      "pixel-art スプライト、エイリアン群の左右移動 + 落下、弾道・発射クールダウン、衝突判定、パーティクル爆発、段階的な速度上昇まで全部 canvas で手書き実装。Claude Code と一緒に組み上げた。",
    builtWith: "Claude Code",
  },
  {
    slug: "game-2048",
    number: "N°02",
    year: "2026",
    title: "2048",
    tagline: "矢印キーで動かして、同じ数字をぶつけると倍になる、あの 2048。",
    kind: "game",
    stack: ["TypeScript", "React", "Keyboard"],
    summary:
      "行列のシフト → マージ → 新規タイル生成を React state で実装。独自の teal 寄りカラースケールでリデザイン。",
    builtWith: "Claude Code",
  },
  {
    slug: "game-tic-tac-toe",
    number: "N°03",
    year: "2026",
    title: "Tic-Tac-Toe",
    tagline: "クリックで遊ぶマルバツ。勝利ライン判定と勝敗カウントつき。",
    kind: "game",
    stack: ["TypeScript", "React", "SVG"],
    summary:
      "3x3 状態、8 通りの勝利ライン判定、X/O のカスタム SVG マーク、X 勝/引分/O 勝の累積スコア。",
    builtWith: "Claude Code",
  },
  {
    slug: "portfolio",
    number: "N°04",
    year: "2026",
    title: "Portfolio",
    tagline:
      "いまご覧のこの個人サイト。Next.js 15 + TypeScript + Tailwind v4 で組み直した。",
    kind: "site",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Motion"],
    url: "https://mukai-junichi.vercel.app/",
    summary:
      "自己紹介・経歴・制作物(ゲーム含む)をまとめた個人サイト。コンポーネント設計からコーディングまで Claude Code と協働で作った。",
    builtWith: "Claude Code",
  },
  {
    slug: "mj-lab",
    number: "N°05",
    year: "2023",
    title: "MJ-Lab",
    tagline:
      "「AIとクリエイティブで、ビジネスを、もっと面白く」― 個人で運営しているスタジオサイト。",
    kind: "site",
    stack: ["WordPress", "PHP", "SCSS", "jQuery"],
    url: "https://mj-lab.com/",
    summary:
      "Web 制作・動画制作・AI 活用研修・AI コンサルを展開。WordPress のテーマを一から自作して運用している。",
  },
];

export const games = works.filter((w) => w.kind === "game");

export function findWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
