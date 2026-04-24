export const profile = {
  name: {
    ja: "向井 純一",
    en: "Junichi Mukai",
  },
  role: {
    ja: "Web Developer & Designer",
    en: "Web Developer & Designer",
  },
  lede: {
    ja: "35歳でエンジニアに転向し、フロントエンド・バックエンド・Web 制作を経験。近ごろは AI と一緒にコードを書くのが楽しくて、色々な小さいものを作っています。",
  },
  birth: { year: 1985, month: 6, date: 2 },
  location: { ja: "神奈川県 川崎市", en: "Kawasaki, Japan" },
  contact: {
    email: "",
    github: "",
    x: "",
    linkedin: "",
  },
} as const;

export type Profile = typeof profile;
