import { Button } from "@/components/ui/button";
import BackToHomeLink from "@/components/back-to-home-link";
import type { ReactNode } from "react";

type NavPage = "home" | "about" | "projects" | "resume" | "notes";

type SiteLayoutProps = {
  children: ReactNode;
  currentPage: NavPage;
};

const navItems = [
  { key: "home", label: "Home", href: "index.html" },
  { key: "about", label: "About", href: "about.html" },
  { key: "projects", label: "Projects", href: "projects.html" },
  { key: "resume", label: "Resume", href: "resume.html" },
  { key: "notes", label: "Notes", href: "notes.html" },
];

export function SiteLayout({ children, currentPage }: SiteLayoutProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-12">
      <header className="sticky top-0 z-10 mb-10 flex flex-wrap items-center justify-between gap-3 border-b bg-background/95 pb-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <p className="text-sm font-medium">jpietrzyk</p>
        <nav aria-label="Main" className="flex flex-wrap gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              className={
                item.key === currentPage
                  ? "bg-muted text-foreground hover:bg-muted"
                  : undefined
              }
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
      </header>

      {currentPage !== "home" ? <BackToHomeLink /> : null}

      {children}
    </main>
  );
}
