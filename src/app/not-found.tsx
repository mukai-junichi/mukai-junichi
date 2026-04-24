import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-6 py-14">
        <p className="font-[family-name:var(--font-geist-mono)] text-[0.72rem] tracking-[0.2em] uppercase text-[var(--color-accent-deep)]">
          404
        </p>
        <h1 className="mt-3 text-5xl leading-none font-semibold tracking-[-0.02em] md:text-6xl">
          Not found.
        </h1>
        <p className="mt-4 max-w-[44ch] font-[family-name:var(--font-noto-jp)] text-[0.96rem] leading-[1.9] text-[var(--color-ink-muted)]">
          お探しのページは見つかりませんでした。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="primary">
            Home
          </Button>
          <Button href="/works" variant="outline">
            Works
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
