# CLAUDE.md

本プロジェクトで Claude Code がセッションを開始したら、まず下記のプロジェクトメモリーを必ず参照すること。

## プロジェクトメモリー（必読）

`.claude/memory/` 配下にプロジェクト固有のメモリーを Git 管理で配置している。セッション開始時に必ず読み込み、ここに書かれたルール・コンテキストに従って作業する。

- [`.claude/memory/MEMORY.md`](.claude/memory/MEMORY.md) — 索引
- [`.claude/memory/feedback.md`](.claude/memory/feedback.md) — 運用ルール集

新しい運用ルール・固有情報を学んだら、`~/.claude/projects/<proj>/memory/` ではなく **必ず本プロジェクトの `.claude/memory/`** に書き込み、Git で追跡可能な状態に保つこと。判断に迷ったら `feedback.md` の冒頭ルールを参照。

## プロジェクト概要

Junichi Mukai の個人ポートフォリオサイト。Next.js 15 App Router + TypeScript + Tailwind CSS v4。
`/works/[slug]` に制作物として遊べるインタラクティブデモを埋め込み。

### 主要スクリプト

- `npm run dev` — 開発サーバ
- `npm run build` — 本番ビルド
- `npm run start` — 本番ビルド起動
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript 型チェック

### コンテンツ配置

- `src/content/profile.ts` — プロフィール基本情報
- `src/content/biography.ts` — 経歴
- `src/content/works.ts` — 作品リスト（ゲーム含む）

## コミットメッセージ

`.cursorrules` の方針に従い、コミットメッセージは日本語で生成する。
