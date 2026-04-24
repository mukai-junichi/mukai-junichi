import { ImageResponse } from "next/og";

export const alt = "Junichi Mukai — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          color: "#111827",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#0D9488",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6B7280",
          }}
        >
          <span>Portfolio</span>
          <span>2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 168,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span>Junichi Mukai</span>
            <span style={{ color: "#0D9488" }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              color: "#4B5563",
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            <span>Web Developer</span>
            <span style={{ color: "#6B7280" }}>&amp;</span>
            <span>Web Designer</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #E5E7EB",
            paddingTop: 18,
            fontSize: 20,
            color: "#6B7280",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>Made with Claude Code</span>
          <span>mukai-junichi.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
