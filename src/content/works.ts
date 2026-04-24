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
    slug: "game-2048",
    number: "N°01",
    year: "2026",
    title: "2048",
    tagline: "矢印キーで動かして、同じ数字をぶつけると倍になる、あの 2048。",
    kind: "game",
    stack: ["TypeScript", "React", "Keyboard"],
    summary:
      "このページ上で直接プレイできる。キー入力 → 盤面の平行シフト → マージ → 新規タイル生成、という古典ゲーム。Claude Code と対話しながら実装した。",
    builtWith: "Claude Code",
  },
  {
    slug: "game-tic-tac-toe",
    number: "N°02",
    year: "2026",
    title: "Tic-Tac-Toe",
    tagline: "クリックで遊ぶ、2人対戦のマルバツ。勝利判定と引き分け判定つき。",
    kind: "game",
    stack: ["TypeScript", "React"],
    summary:
      "3x3 の状態、勝利ラインの全パターン判定、リセット。最小限のコードで完結する気持ちのよい練習題材。",
    builtWith: "Claude Code",
  },
  {
    slug: "portfolio",
    number: "N°03",
    year: "2026",
    title: "Portfolio",
    tagline: "いまご覧のこの個人サイト。Next.js 15 + TypeScript + Tailwind v4 で組み直した。",
    kind: "site",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Motion"],
    url: "https://mukai-junichi.vercel.app/",
    summary:
      "自己紹介・経歴・制作物(ゲーム含む)をまとめた個人サイト。コンポーネント設計からコーディングまで Claude Code と協働で作った。",
    builtWith: "Claude Code",
  },
  {
    slug: "mj-lab",
    number: "N°04",
    year: "2023",
    title: "MJ-Lab",
    tagline: "「AIとクリエイティブで、ビジネスを、もっと面白く」― 個人で運営しているスタジオサイト。",
    kind: "site",
    stack: ["WordPress", "PHP", "SCSS", "jQuery"],
    url: "https://mj-lab.com/",
    summary:
      "Web 制作・動画制作・AI 活用研修・AI コンサルを展開。WordPress のテーマを一から自作して運用している。時代に合わせてサービス領域を拡張中。",
  },
];

export function findWork(slug: string) {
  return works.find((w) => w.slug === slug);
}
