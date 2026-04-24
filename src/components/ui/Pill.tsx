import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  variant?: "default" | "teal";
  className?: string;
};

const variants = {
  default: "bg-[var(--color-bg-subtle)] text-[var(--color-ink-muted)] border-[var(--color-border)]",
  teal: "bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)] border-[var(--color-accent)]/25",
};

export default function Pill({ children, variant = "default", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[0.7rem]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
