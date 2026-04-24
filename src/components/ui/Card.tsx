import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type BaseProps = { children: ReactNode; className?: string };
type Props =
  | (BaseProps & { href?: undefined; external?: undefined })
  | (BaseProps & { href: string; external?: boolean });

export default function Card({ children, className, ...rest }: Props) {
  const base = cn(
    "group relative flex flex-col rounded-xl border border-[var(--color-border)] bg-white p-6 transition-colors duration-200 hover:border-[var(--color-accent)]/60",
    className,
  );

  if ("href" in rest && rest.href) {
    if (rest.external) {
      return (
        <a href={rest.href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      );
    }
    return (
      <Link href={rest.href} className={base}>
        {children}
      </Link>
    );
  }
  return <div className={base}>{children}</div>;
}
