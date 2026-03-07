import { SiteLayout } from "@/components/site-layout";

function ResumePage() {
  return (
    <SiteLayout currentPage="resume">
      <section id="resume" className="space-y-6 rounded-lg border bg-card p-6">
        <p className="text-sm">
          <a className="underline text-muted-foreground" href="index.html">
            ← Back to home
          </a>
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>

        <div className="space-y-4">
          <h2 className="text-lg font-medium">Work Experience</h2>

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
          <h2 className="text-lg font-medium">Education</h2>
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
          <h2 className="text-lg font-medium">Skills</h2>
          <p className="text-sm text-muted-foreground">
            Ruby on Rails · React · Scala · Apache Kafka · Ember.js · API
            Development & Integration · Backend Development · SQL/PostgreSQL ·
            Elasticsearch · Git · Automation Scripting (Python, Make.com,
            Zapier) · Multi-Channel eCommerce · Fintech Systems · IoT
            Development · Performance Optimization · Mentoring & Code Reviews
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ResumePage;
