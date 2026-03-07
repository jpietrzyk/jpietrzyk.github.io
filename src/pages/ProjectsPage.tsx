import { SiteLayout } from "@/components/site-layout";

function ProjectsPage() {
  return (
    <SiteLayout currentPage="projects">
      <section className="space-y-4 rounded-lg border bg-card p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>

        <article className="space-y-1 rounded-md border p-4">
          <h2 className="font-medium">jpietrzyk.github.io</h2>
          <p className="text-sm text-muted-foreground">
            Personal website (this repository) built with React, Vite, Tailwind,
            and shadcn/ui.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              TypeScript
            </span>
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              React
            </span>
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              Vite
            </span>
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              Tailwind CSS
            </span>
          </div>
          <a
            className="text-sm underline"
            href="https://github.com/jpietrzyk/jpietrzyk.github.io"
            target="_blank"
            rel="noreferrer"
          >
            View repository
          </a>
        </article>

        <article className="space-y-1 rounded-md border p-4">
          <h2 className="font-medium">delivery-route-manager</h2>
          <p className="text-sm text-muted-foreground">
            Placeholder project from GitHub profile. Detailed description will
            be added later.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              TypeScript
            </span>
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              Routing
            </span>
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              Logistics
            </span>
          </div>
          <a
            className="text-sm underline"
            href="https://github.com/jpietrzyk/delivery-route-manager"
            target="_blank"
            rel="noreferrer"
          >
            View repository
          </a>
        </article>

        <article className="space-y-1 rounded-md border p-4">
          <h2 className="font-medium">tuus-imago</h2>
          <p className="text-sm text-muted-foreground">
            Tuus Imago front page. Placeholder entry to be refined with project
            scope and outcomes.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              TypeScript
            </span>
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              Frontend
            </span>
            <span className="rounded-md border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              Static Site
            </span>
          </div>
          <a
            className="text-sm underline"
            href="https://github.com/jpietrzyk/tuus-imago"
            target="_blank"
            rel="noreferrer"
          >
            View repository
          </a>
        </article>
      </section>
    </SiteLayout>
  );
}

export default ProjectsPage;
