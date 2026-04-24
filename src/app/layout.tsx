import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { profile } from "@/content/profile";
import "./globals.css";

const siteUrl = "https://mukai-junichi.vercel.app";
const siteTitle = `${profile.name.en} — Portfolio`;
const siteDescription = `${profile.name.en}(${profile.name.ja})の個人サイト。Web Developer & Designer として作ってきたものや、AI と一緒に作っているインタラクティブなデモを置いています。`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${profile.name.en}`,
  },
  description: siteDescription,
  keywords: ["向井純一", "Junichi Mukai", "portfolio", "ポートフォリオ", "Web Developer", "Web Designer"],
  authors: [{ name: profile.name.en, url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: profile.name.en,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={fontVariables}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
