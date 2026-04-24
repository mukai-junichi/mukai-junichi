import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Pill({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[0.7rem] text-[var(--color-ink-muted)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
