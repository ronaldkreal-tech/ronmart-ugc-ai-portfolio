import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import samplesImg from "@/assets/samples.jpg";
import { Check, Zap, Sparkles, Rocket, Play, ArrowRight, Clock, Shield, Repeat } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI UGC Videos for Ecommerce Brands — 4–8 Videos / Week" },
      { name: "description", content: "High-converting AI-generated UGC videos for ecommerce. 4–8 videos weekly from $500/mo. No shipping, no creators, unlimited revisions, full rights." },
      { property: "og:title", content: "AI UGC Videos for Ecommerce Brands" },
      { property: "og:description", content: "4–8 high-converting AI UGC videos every week. From $500/mo." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const packages = [
  {
    name: "Basic",
    price: 500,
    tagline: "Get started with consistent content",
    features: [
      "4 videos per week (16–20/mo)",
      "15–30 seconds each",
      "9:16 (Reels/TikTok) + 16:9 (Ads)",
      "Optimized for organic social",
      "Full commercial usage rights",
      "1 revision per video",
    ],
  },
  {
    name: "Standard",
    price: 750,
    tagline: "Most popular — built to scale ads",
    featured: true,
    features: [
      "6 videos per week (24–30/mo)",
      "All Basic features",
      "Ad-optimized hooks + CTAs",
      "Amazon-compliant edits",
      "Platform-specific captions",
      "2 revisions per video",
    ],
  },
  {
    name: "Premium",
    price: 1000,
    tagline: "Full content engine + strategy",
    features: [
      "8 videos per week (32–40/mo)",
      "All Standard features",
      "A/B test variations",
      "Priority 48hr turnaround",
      "Unlimited revisions",
      "Monthly strategy call",
    ],
  },
];

const steps = [
  { n: "01", title: "Share your product", text: "Send your product link, key benefits, and brand tone." },
  { n: "02", title: "We script & generate", text: "We write conversion-focused scripts and produce videos with Higgsfield, Kling & Veo 3." },
  { n: "03", title: "Receive weekly", text: "Ready-to-use MP4 files in 9:16 + 16:9 hit your inbox every week." },
  { n: "04", title: "Publish & profit", text: "Use them on ads, social, and product pages — forever, fully owned." },
];

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>RonMart UGC<span className="text-primary">.ai</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#packages" className="hover:text-foreground transition">Packages</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#samples" className="hover:text-foreground transition">Samples</a>
          </nav>
          <a
            href="#free-sample"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Free sample <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-20 pb-32 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now accepting 5 new brands this month
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] tracking-tight">
              AI UGC videos for <span className="text-gradient">ecommerce</span> brands.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              4–8 high-converting videos every week. From <span className="text-foreground font-semibold">$500/month</span>. No shipping products. No waiting on creators. Just content that sells.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#free-sample"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground glow hover:scale-[1.02] transition"
              >
                Get 1 free video <Rocket className="h-5 w-5" />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-4 text-base font-semibold hover:bg-card transition"
              >
                See packages
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "4–8", l: "videos / week" },
                { v: "48h", l: "turnaround" },
                { v: "100%", l: "rights owned" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-display font-bold text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-8 bg-primary/30 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="AI generated UGC video on smartphone"
                width={1536}
                height={1280}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse-ring">
                    <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Live sample</div>
                    <div className="text-xs text-muted-foreground">100% AI-generated</div>
                  </div>
                </div>
                <span className="rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-bold">9:16</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="px-6 py-24 border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">The problem</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
              Real creators are <span className="line-through text-muted-foreground">slow</span> <span className="line-through text-muted-foreground">expensive</span> and inconsistent.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              $200–$600 per video. Weeks of back-and-forth. Shipping products that never come back. Meanwhile your competitors are flooding feeds with fresh content.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Zap, label: "No shipping products" },
              { icon: Clock, label: "No waiting on creators" },
              { icon: Repeat, label: "Unlimited revisions" },
              { icon: Shield, label: "100% ownership rights" },
            ].map((b) => (
              <div key={b.label} className="rounded-2xl border border-border bg-[image:var(--gradient-card)] p-6 hover:border-primary/50 transition">
                <b.icon className="h-7 w-7 text-primary mb-4" />
                <div className="font-semibold">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Packages</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">Pick your content engine.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Flat monthly rate. Cancel anytime. All rights yours.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl border p-8 flex flex-col ${
                  p.featured
                    ? "border-primary bg-[image:var(--gradient-card)] glow scale-[1.02]"
                    : "border-border bg-card/60"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    MOST POPULAR
                  </span>
                )}
                <div className="font-display text-2xl font-bold">{p.name}</div>
                <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold">${p.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={`h-5 w-5 shrink-0 ${p.featured ? "text-primary" : "text-secondary"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#free-sample"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border hover:bg-card"
                  }`}
                >
                  Start with {p.name} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="px-6 py-32 border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">How it works</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">From product link to published in days.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background/40 p-8 hover:border-primary/40 transition">
                <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
                <div className="mt-6 font-semibold text-lg">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLES */}
      <section id="samples" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">See it in action</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">All AI-generated. <span className="text-gradient">Can you tell?</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">Real-looking creators. Real conversions. Zero filming.</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border">
            <img
              src={samplesImg}
              alt="AI UGC video samples"
              width={1536}
              height={1024}
              loading="lazy"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="#free-sample"
                className="inline-flex items-center gap-3 rounded-full bg-background/80 backdrop-blur-xl border border-border px-6 py-4 font-semibold hover:bg-background transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                </span>
                Watch sample reel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREE SAMPLE CTA */}
      <section id="free-sample" className="px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-primary/40 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-20" aria-hidden="true" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[120%] bg-primary/30 blur-3xl rounded-full" aria-hidden="true" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium mb-6">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> No strings attached
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Get <span className="text-gradient">1 free video</span> for your product.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Send us your product link. We'll create one custom AI UGC video — free — so you can judge the quality before committing.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! We'll be in touch within 24 hours with your free sample.");
                }}
                className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input
                  required
                  type="url"
                  placeholder="https://yourstore.com/product"
                  className="flex-1 rounded-full bg-background/80 border border-border px-6 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground glow hover:scale-[1.02] transition"
                >
                  Get free sample
                </button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">Average response time: under 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 border-t border-border">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-display font-bold text-foreground">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            RonMart UGC.ai
          </div>
          <div>© {new Date().getFullYear()} RonMart UGC.ai — AI UGC for ecommerce brands.</div>
        </div>
      </footer>
    </main>
  );
}
