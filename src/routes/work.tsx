import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { categories } from "@/data/photos";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Bhaskar Barman Photography" },
      {
        name: "description",
        content:
          "Selected photography work by Bhaskar Barman — weddings, fashion editorials, and live music photography.",
      },
      { property: "og:title", content: "Work — Bhaskar Barman" },
      {
        property: "og:description",
        content: "Selected wedding, fashion and music photography.",
      },
    ],
  }),
  component: WorkLayout,
});

function WorkLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/work/$category");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      {!isChild && <WorkIndex />}
      <Outlet />
      <SiteFooter />
    </div>
  );
}

function WorkIndex() {
  return (
    <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Portfolio</p>
      <h1 className="font-serif text-5xl md:text-6xl font-bold mb-16 max-w-3xl">
        Selected <span className="italic text-accent font-medium">work.</span>
      </h1>
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
              <h2 className="font-serif text-2xl md:text-3xl font-bold">{c.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{c.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}