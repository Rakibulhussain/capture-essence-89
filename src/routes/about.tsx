import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { portraitImage } from "@/data/photos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bhaskar Barman Photography" },
      {
        name: "description",
        content:
          "Bhaskar Barman is a professional photographer based in Assam with 4+ years of experience in weddings, fashion and live music photography.",
      },
      { property: "og:title", content: "About — Bhaskar Barman" },
      {
        property: "og:description",
        content:
          "Photographer based in Assam blending candid storytelling with cinematic composition.",
      },
      { property: "og:image", content: portraitImage },
    ],
  }),
  component: AboutPage,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl md:text-5xl font-bold text-accent">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">About</p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          Preserving emotion. Telling stories.{" "}
          <span className="italic text-accent font-medium">Frame by frame.</span>
        </h1>
      </section>

      <section className="container mx-auto px-6 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src={portraitImage}
            alt="Bhaskar Barman portrait"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm <span className="text-foreground font-medium">Bhaskar Barman</span>, a passionate
            and dedicated professional photographer with over 4 years of experience capturing
            meaningful moments and compelling visuals.
          </p>
          <p>
            Based in Assam, I have worked with renowned and playback singers — documenting live
            performances, portraits, and promotional shoots. My work reflects a strong understanding
            of lighting, emotion, and storytelling, ensuring every frame feels authentic and
            impactful.
          </p>
          <p>
            Over the years, I have covered <span className="text-foreground font-medium">30+ weddings</span>,
            delivering cinematic and timeless memories. My approach blends candid storytelling with
            creative composition — capturing both grand moments and the smallest emotions.
          </p>
          <p>
            I also specialize in fashion photography, collaborating on styled shoots that highlight
            personality, aesthetics, and brand identity.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border/40 py-12">
          <Stat value="4+" label="Years of experience" />
          <Stat value="30+" label="Weddings shot" />
          <Stat value="50+" label="Editorial sessions" />
          <Stat value="∞" label="Stories told" />
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-10 py-16">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">My style</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
          {[
            "Natural cinematic tones",
            "Clean and professional composition",
            "Emotion-driven storytelling",
            "Strong attention to detail",
          ].map((s) => (
            <li key={s} className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border/40">
              <span className="text-accent text-xl leading-none">●</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-accent-foreground font-semibold py-3 px-8 rounded-full hover:opacity-90 transition"
          >
            Work with me
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}