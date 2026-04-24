export type Episode = {
  id: string;
  year: string;
  title: string;
  body: string;
};

export type Chapter = {
  id: string;
  label: string;
  subLabel: string;
  episodes: Episode[];
};

export const biography: Chapter[] = [
  {
    id: "twenties",
    label: "20代",
    subLabel: "SALES → FOUNDER",
    episodes: [
      {
        id: "2008-real-estate",
        year: "2008",
        title: "新卒で不動産会社に入社",
        body: "大阪の大学で建築を学んだのち、地元の不動産会社に新卒で入社。営業として働きはじめる。",
      },
      {
        id: "2008-2011-security",
        year: "2008 — 2011",
        title: "知人の会社へ転職、福岡支店を開設、そして倒産",
        body: "ホームセキュリティ機器販売の会社へ転職。新規事業の立ち上げに参加し、24歳で福岡支店を開設。25歳で会社が倒産し、はじめて「事業が終わる」を経験する。",
      },
      {
        id: "2011-2015-founder",
        year: "2011 — 2015",
        title: "前職の同僚と会社を設立",
        body: "ポイントサイトメディアの立ち上げから運営までを担う。事業は安定せず、30歳で会社員への転向を決める。",
      },
    ],
  },
  {
    id: "thirties",
    label: "30代",
    subLabel: "EMPLOYEE → ENGINEER",
    episodes: [
      {
        id: "2015-2020-hr",
        year: "2015 — 2020",
        title: "医療・福祉の人材会社で東京本社へ",
        body: "営業職として東京本社に勤務。部門管理、新規事業考案、基幹システム構築にも関わる。エンジニア転向を決意。",
      },
      {
        id: "2020-bootcamp",
        year: "2020",
        title: "プログラミングスクールで学習",
        body: "短期集中プログラムで HTML / CSS / JavaScript / Ruby を学ぶ。35歳、キャリアを切り替える。",
      },
      {
        id: "2021-2022-engineer",
        year: "2021 — 2022",
        title: "エンジニアとしてキャリアスタート",
        body: "バックエンドとフロントエンドの開発に従事。PHP / JavaScript / MySQL / AWS を使用。",
      },
      {
        id: "2022-2023-pm",
        year: "2022 — 2023",
        title: "PM / 業務効率化のポジションへ転職",
        body: "開発環境を求めて転職するも、業務は進行管理・効率化が中心。成長はあったが、再び開発寄りの環境へ。",
      },
      {
        id: "2023-2025-contract-dev",
        year: "2023 — 2025.09",
        title: "受託開発企業で業務系システム開発",
        body: "複数プロジェクトで様々な技術スタックを使い、設計・実装に取り組む。2025年9月に退職。",
      },
    ],
  },
  {
    id: "forties",
    label: "40代",
    subLabel: "AI-AUGMENTED",
    episodes: [
      {
        id: "2025-now",
        year: "2025.09 — 現在",
        title: "AI と一緒にコードを書く日々",
        body: "AI エージェントを日常的に使いながら、個人サイトやゲーム・ツールのプロトタイプを作っている。AI との共作で、作れる量と面白がれる幅が広がった。",
      },
    ],
  },
];
