import { cn } from "@/lib/cn";

type Tone = "accent" | "warn" | "light" | "muted";

type Props = {
  label: string;
  value: number | string;
  tone?: Tone;
  gain?: number;
  className?: string;
};

const toneLabel: Record<Tone, string> = {
  accent: "text-[#5EEAD4]/70",
  warn: "text-[#FB7185]/80",
  light: "text-white",
  muted: "text-white/60",
};

export default function HudStat({
  label,
  value,
  tone = "accent",
  gain,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "relative flex min-w-[52px] flex-col items-center justify-center rounded-md bg-white/10 px-3 py-1.5",
        className,
      )}
    >
      <span
        className={cn(
          "font-[family-name:var(--font-geist-mono)] text-[0.58rem] tracking-[0.2em]",
          toneLabel[tone],
        )}
      >
        {label}
      </span>
      <span className="font-[family-name:var(--font-geist-mono)] text-base font-bold tabular-nums text-white">
        {value}
      </span>
      {typeof gain === "number" && gain > 0 ? (
        <span
          key={`${gain}-${Math.random()}`}
          className="absolute -top-1 right-0 font-[family-name:var(--font-geist-mono)] text-[0.7rem] font-bold text-[#5EEAD4]"
          style={{ animation: "score-pop 0.7s ease-out both" }}
        >
          +{gain}
        </span>
      ) : null}
    </div>
  );
}
