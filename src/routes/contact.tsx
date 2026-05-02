import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { contact } from "@/data/photos";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bhaskar Barman Photography" },
      {
        name: "description",
        content:
          "Get in touch with Bhaskar Barman for wedding, fashion, or music photography in Assam and beyond.",
      },
      { property: "og:title", content: "Contact — Bhaskar Barman" },
      {
        property: "og:description",
        content: "Book Bhaskar Barman for your next shoot.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group block p-8 rounded-2xl bg-card border border-border/40 hover:border-accent/60 transition-colors"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{label}</p>
      <p className="font-serif text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
        {value}
      </p>
    </a>
  );
}

function ContactPage() {
  const waNumber = contact.whatsapp.replace(/\D/g, "");
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-6 md:px-10 py-20 md:py-28 flex-1">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Contact</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
          Let's create something{" "}
          <span className="italic text-accent font-medium">unforgettable.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-base md:text-lg">
          Available for weddings, editorial shoots and music collaborations across Assam and beyond.
          Reach out — let's tell your story.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactCard
            label="Instagram"
            value={contact.instagramHandle}
            href={contact.instagram}
          />
          <ContactCard
            label="WhatsApp"
            value={contact.whatsappDisplay}
            href={`https://wa.me/${waNumber}`}
          />
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Based in {contact.location}.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}