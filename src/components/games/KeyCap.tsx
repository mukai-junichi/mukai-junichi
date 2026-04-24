import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  wide?: boolean;
};

export default function KeyCap({ children, wide }: Props) {
  return (
    <kbd
      className={cn(
        "inline-flex h-6 items-center justify-center rounded border border-[var(--color-border)] bg-white px-1.5 font-[family-name:var(--font-geist-mono)] text-[0.68rem] font-medium text-[var(--color-ink-muted)] shadow-[0_1px_0_rgba(0,0,0,0.05)]",
        wide ? "min-w-14" : "min-w-6",
      )}
    >
      {children}
    </kbd>
  );
}
