import { contact } from "@/data/photos";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-base">
          Bhaskar <span className="text-accent">Barman</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bhaskar Barman Photography · {contact.location}
        </p>
      </div>
    </footer>
  );
}