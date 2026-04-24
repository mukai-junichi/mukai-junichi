import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type Props =
  | (BaseProps & { href?: undefined; external?: undefined; onClick?: () => void })
  | (BaseProps & { href: string; external?: boolean; onClick?: undefined });

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-deep)]",
  outline:
    "border border-[var(--color-border-strong)] text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-bg-subtle)]",
  ghost: "text-[var(--color-ink)] hover:bg-[var(--color-bg-subtle)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[0.82rem]",
  md: "h-11 px-5 text-[0.9rem]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    if (rest.external) {
      return (
        <a href={rest.href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={rest.href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={rest.onClick} className={cls}>
      {children}
    </button>
  );
}
