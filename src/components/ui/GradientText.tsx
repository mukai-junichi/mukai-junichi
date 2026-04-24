import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = { children: ReactNode; className?: string };

export default function GradientText({ children, className }: Props) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-violet-700 via-sky-500 to-indigo-600 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
