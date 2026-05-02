import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const linkCls =
    "text-sm font-medium text-foreground/80 hover:text-accent transition-colors";
  const activeCls = { className: "text-accent" };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="container mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg md:text-xl font-bold tracking-tight">
          Bhaskar <span className="text-accent">Barman</span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-9">
          <Link to="/" activeOptions={{ exact: true }} activeProps={activeCls} className={linkCls}>
            Home
          </Link>
          <Link to="/work" activeProps={activeCls} className={linkCls}>
            Work
          </Link>
          <Link to="/about" activeProps={activeCls} className={linkCls}>
            About
          </Link>
          <Link to="/contact" activeProps={activeCls} className={linkCls}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}