import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories } from "@/data/photos";

export const Route = createFileRoute("/work/$category")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.category);
    if (!cat) throw notFound();
    return cat;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Category — Bhaskar Barman" }] };
    return {
      meta: [
        { title: `${loaderData.title} — Bhaskar Barman Photography` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: `${loaderData.title} — Bhaskar Barman` },
        { property: "og:description", content: loaderData.description },
        { property: "og:image", content: loaderData.cover },
      ],
    };
  },
  errorComponent: ({ error, reset }) => (
    <div className="container mx-auto px-6 py-32 text-center">
      <h1 className="font-serif text-3xl mb-4">Something went wrong</h1>
      <p className="text-muted-foreground mb-6">{error.message}</p>
      <button onClick={reset} className="text-accent hover:underline">Try again</button>
    </div>
  ),
  notFoundComponent: () => (
    <div className="container mx-auto px-6 py-32 text-center">
      <h1 className="font-serif text-3xl mb-4">Category not found</h1>
      <Link to="/work" className="text-accent hover:underline">Back to portfolio</Link>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const cat = Route.useLoaderData();

  return (
    <>
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={cat.cover} alt={cat.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        </div>
        <div className="container mx-auto px-6 md:px-10 pb-12 relative z-10">
          <Link to="/work" className="text-xs uppercase tracking-[0.3em] text-accent hover:underline">
            ← Portfolio
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mt-4">{cat.title}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
            {cat.description}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
          {cat.photos.map((p, i) => (
            <div
              key={i}
              className="mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-lg bg-card group"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}