import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { categories, featured, heroImage } from "@/data/photos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhaskar Barman — Cinematic Photographer | Assam" },
      {
        name: "description",
        content:
          "Bhaskar Barman — wedding, fashion and live music photographer based in Assam. 4+ years of cinematic, emotion-driven storytelling.",
      },
      { property: "og:title", content: "Bhaskar Barman — Cinematic Photographer" },
      {
        property: "og:description",
        content: "Wedding, fashion and live music photography by Bhaskar Barman.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hero photograph"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent mb-6">
            Photographer · Assam
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-balance">
            Capture the Unseen.
            <br />
            <span className="text-accent italic font-medium">Amplify the Emotion.</span>
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Cinematic storytelling across weddings, fashion editorials, and live music — by Bhaskar Barman.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center bg-accent text-accent-foreground font-semibold py-3 px-8 rounded-full hover:opacity-90 transition"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-border py-3 px-8 rounded-full hover:bg-secondary transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Selected Work</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Stories in three acts.</h2>
          </div>
          <Link to="/work" className="hidden md:inline text-sm text-accent hover:underline">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/work/$category"
              params={{ category: c.slug }}
              className="group relative block overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured grid */}
      <section className="container mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Frames</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">A glimpse of the work.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {featured.map((p, i) => (
            <div
              key={i}
              className="group aspect-square overflow-hidden rounded-lg bg-card"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/work" className="text-accent hover:underline">
            Explore the full portfolio →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
