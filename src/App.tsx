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
        <p className="text-sm text-muted-foreground">Cracow, Poland</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Jacek Pietrzyk
        </h1>
        <p className="text-lg text-muted-foreground">
          Senior Software Engineer
        </p>
        <p className="max-w-2xl text-base text-muted-foreground">
          Senior Software Engineer with extensive experience in backend
          development, API integrations, and automation scripting. Proficient in
          Ruby on Rails, React, Scala, and other technologies, I design and
          implement scalable software solutions, including e-commerce
          automations and integrations using APIs from Amazon, Etsy, eBay, and
          Kaufland. I combine deep programming expertise with low-code tools
          like Make.com and Zapier to build efficient, robust systems that
          optimize business processes and handle high-volume data.
        </p>
        <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <p>
            Email:{" "}
            <a className="underline" href="mailto:jacpie3k@gmail.com">
              jacpie3k@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a className="underline" href="tel:+48663534814">
              +48 663 534 814
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              className="underline"
              href="https://linkedin.com/in/jacek-pietrzyk"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/jacek-pietrzyk
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              className="underline"
              href="https://github.com/jpietrzyk"
              target="_blank"
              rel="noreferrer"
            >
              github.com/jpietrzyk
            </a>
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="mt-6 space-y-4 rounded-lg border bg-card p-6"
      >
        <h2 className="text-xl font-medium">Projects</h2>

        <article className="space-y-1 rounded-md border p-4">
          <h3 className="font-medium">jpietrzyk.github.io</h3>
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
          <h3 className="font-medium">delivery-route-manager</h3>
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
          <h3 className="font-medium">tuus-imago</h3>
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

      <section
        id="resume"
        className="mt-12 space-y-6 rounded-lg border bg-card p-6"
      >
        <h2 className="text-xl font-medium">Resume</h2>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Work Experience</h3>

          <article className="space-y-2">
            <p className="font-medium">
              Automation & Data Engineer · Master of Trading · Kraków, Polska
            </p>
            <p className="text-sm text-muted-foreground">Jun '24 - Present</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>
                Developed custom API integrations and automation scripts for
                multi-channel e-commerce management across 7 marketplaces
                (Amazon, Etsy, eBay, Allegro, Kaufland, Cdiscount, eMag) using
                Amazon Seller API, BaseLinker, and Make.com, optimizing
                untouched features and reducing manual intervention.
              </li>
              <li>
                Engineered zero-touch UK customs clearance automation via GLS
                API and scripting in Make.com/Google Docs, saving ~2 hours per
                day through programmatic data handling.
              </li>
              <li>
                Implemented rule-based product data enrichment scripts to
                automate parameter updates across platforms, leveraging API
                endpoints for seamless synchronization.
              </li>
              <li>
                Built FBA consolidated shipments automation tool with Amazon
                Seller API and BaseLinker, reducing preparation time from 20–40
                min to ~2 min (90–95%) via efficient code-driven workflows.
              </li>
              <li>
                Created courier auto-selection algorithm in scripting tools,
                cutting shipment preparation time by 70%.
              </li>
              <li>
                Developed returns/complaints handling system with centralized
                correspondence automation using Global24 APIs and Zapier,
                enabling faster, code-managed processes.
              </li>
              <li>
                Programmed a courier invoice specification validation tool in
                Python/Excel scripts, leading to logistics cost reductions
                through automated error detection and claims submission.
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <p className="font-medium">
              Senior Ruby Developer · Netguru · Kraków i okolice
            </p>
            <p className="text-sm text-muted-foreground">Feb '21 - Oct '23</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>
                Partnered with top European fintechs and BaaS providers to
                design, develop, and maintain backend services in Ruby on Rails,
                including API integrations for payments, marketplaces, and
                shipping.
              </li>
              <li>
                Led the Senior Knowledge Sharing (SKS) program end-to-end,
                organizing workshops, code reviews, and mentoring sessions,
                resulting in +30% participation growth and enhanced team
                collaboration.
              </li>
              <li>
                Supported clients in pre-sales: conducted technical needs
                analysis, provided architectural recommendations, and shaped MVP
                scopes for scalable applications.
              </li>
              <li>
                Optimized application performance, scaled databases
                (SQL/PostgreSQL), and implemented features for high-traffic
                fintech and e-commerce systems.
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <p className="font-medium">RoR Developer · Netguru · Polska</p>
            <p className="text-sm text-muted-foreground">Nov '18 - Feb '21</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>
                Built commercial Ruby on Rails applications for e-commerce and
                fintech: developed backend APIs, integrated payment gateways,
                marketplaces, and shipping services.
              </li>
              <li>
                Implemented scalable backend features, external API
                integrations, and performance optimizations.
              </li>
              <li>
                Mentored junior developers, handled technical onboarding, and
                facilitated knowledge sharing within the team.
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <p className="font-medium">Full Stack Developer · proxi.cloud</p>
            <p className="text-sm text-muted-foreground">Feb '17 - Nov '18</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>
                Redesigned and redeveloped Ruby on Rails backend for IoT client
                panel, incorporating real-time data aggregation and analytics
                modules powered by Elasticsearch for processing high-volume
                device data.
              </li>
              <li>
                Built admin panel in React, ensuring seamless frontend-backend
                integration.
              </li>
              <li>
                Optimized IoT infrastructure and Web API for efficiency and
                scalability.
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <p className="font-medium">Full Stack Developer · Ironin</p>
            <p className="text-sm text-muted-foreground">2016 - 2017</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>
                Refactored monolithic application into a modern REST API backend
                and separate frontend using Ember.js, improving modularity and
                maintainability.
              </li>
              <li>
                Developed full-stack features for client projects, focusing on
                scalable web applications.
              </li>
            </ul>
          </article>

          <article className="space-y-2">
            <p className="font-medium">Developer · Codete</p>
            <p className="text-sm text-muted-foreground">2015 - 2016</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>
                Contributed to a high-performance advertising platform using
                Scala and Apache Kafka for real-time data streaming and
                processing.
              </li>
              <li>
                Implemented backend services and optimized system architecture
                for large-scale operations.
              </li>
            </ul>
          </article>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Education</h3>
          <p className="font-medium">
            Wyższa Szkoła Informatyki i Ekonometrii w Krakowie
          </p>
          <p className="text-sm text-muted-foreground">
            Bachelor of Engineering (BEng) · Grad 2010
          </p>
          <p className="text-sm text-muted-foreground">
            Computer Science & Programming · Grade: 3.5
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Skills</h3>
          <p className="text-sm text-muted-foreground">
            Ruby on Rails · React · Scala · Apache Kafka · Ember.js · API
            Development & Integration · Backend Development · SQL/PostgreSQL ·
            Elasticsearch · Git · Automation Scripting (Python, Make.com,
            Zapier) · Multi-Channel eCommerce · Fintech Systems · IoT
            Development · Performance Optimization · Mentoring & Code Reviews
          </p>
        </div>
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
