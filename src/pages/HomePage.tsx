import { SiteLayout } from "@/components/site-layout";

function HomePage() {
  return (
    <SiteLayout currentPage="home">
      <section className="space-y-4">
        <p className="text-sm text-muted-foreground">Cracow, Poland</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Jacek Pietrzyk
        </h1>
        <p className="text-lg text-muted-foreground">
          Senior Software Engineer
        </p>
        <p className="max-w-2xl text-base text-muted-foreground">
          Senior Software Engineer with extensive experience in backend
          development, API integrations, and automation scripting. I build
          scalable software solutions for e-commerce and fintech, combining
          strong engineering fundamentals with practical automation.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <a className="rounded-lg border bg-card p-5" href="about.html">
          <h2 className="text-lg font-medium">About</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Background, contact info, and short professional summary.
          </p>
        </a>

        <a className="rounded-lg border bg-card p-5" href="projects.html">
          <h2 className="text-lg font-medium">Projects</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Selected repositories with short descriptions and tech tags.
          </p>
        </a>

        <a className="rounded-lg border bg-card p-5" href="resume.html">
          <h2 className="text-lg font-medium">Resume</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Work experience, education, and skills in dedicated view.
          </p>
        </a>

        <a className="rounded-lg border bg-card p-5" href="notes.html">
          <h2 className="text-lg font-medium">Notes</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Placeholder for technical notes and short blog posts.
          </p>
        </a>
      </section>
    </SiteLayout>
  );
}

export default HomePage;
