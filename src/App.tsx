import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Notes", href: "#notes" },
];

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-12">
      <header className="sticky top-0 z-10 mb-10 flex flex-wrap items-center justify-between gap-3 border-b bg-background/95 pb-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <p className="text-sm font-medium">jpietrzyk</p>
        <nav aria-label="Main" className="flex flex-wrap gap-1">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
      </header>

      <section id="about" className="space-y-4">
        <p className="text-sm text-muted-foreground">jpietrzyk</p>
        <h1 className="text-4xl font-semibold tracking-tight">Personal page</h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          A simple place for my profile, work history, and notes.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <a
              href="https://github.com/jpietrzyk"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <section
        id="projects"
        className="mt-6 space-y-2 rounded-lg border bg-card p-6"
      >
        <h2 className="text-xl font-medium">Projects</h2>
        <p className="text-sm text-muted-foreground">
          Placeholder section for featured projects and selected links.
        </p>
      </section>

      <section
        id="resume"
        className="mt-12 space-y-2 rounded-lg border bg-card p-6"
      >
        <h2 className="text-xl font-medium">Resume</h2>
        <p className="text-sm text-muted-foreground">
          Placeholder section for experience, skills, and downloadable CV.
        </p>
      </section>

      <section
        id="notes"
        className="mt-6 space-y-2 rounded-lg border bg-card p-6"
      >
        <h2 className="text-xl font-medium">Notes / Blog</h2>
        <p className="text-sm text-muted-foreground">
          Placeholder section for technical notes and short blog posts.
        </p>
      </section>
    </main>
  );
}

export default App;
