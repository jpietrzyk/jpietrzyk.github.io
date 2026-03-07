import { SiteLayout } from "@/components/site-layout";

function AboutPage() {
  return (
    <SiteLayout currentPage="about">
      <section className="space-y-4">
        <p className="text-sm text-muted-foreground">Cracow, Poland</p>
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-lg text-muted-foreground">
          Jacek Pietrzyk · Senior Software Engineer
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
      </section>

      <section className="mt-6 rounded-lg border bg-card p-6">
        <h2 className="text-xl font-medium">Contact</h2>
        <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
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
    </SiteLayout>
  );
}

export default AboutPage;
