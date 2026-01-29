import Feature from "@/components/interfaces/Feature";
import PricingCard from "@/components/interfaces/PricingCard";
import { features, pricing } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">BryHub</span>
          <nav className="flex items-center gap-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </a>
            <a
              href="/login"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Sign in
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-accent/20 to-background" />
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            AI-powered business intelligence
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Turn your data into
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              {" "}clear insights
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            BryHub helps teams analyze performance, generate AI insights, and
            deliver executive-ready reports — all in one platform.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/signup"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
            >
              Get started free
            </a>
            <a
              href="#features"
              className="rounded-md border bg-background px-6 py-3 text-sm font-medium hover:bg-muted"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-semibold">
            Built for modern SaaS teams
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Everything you need to run analytics, AI insights, and reporting at scale.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description }) => (
              <Feature key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Simple pricing</h2>
            <p className="mt-4 text-muted-foreground">
              Start free. Upgrade as your team and usage grow.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricing.map((p) => (
              <PricingCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="mx-auto max-w-7xl px-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} BryHub. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
