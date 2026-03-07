import { SiteLayout } from "@/components/site-layout";

function ContactPage() {
  return (
    <SiteLayout currentPage="home">
      <section className="space-y-4 rounded-lg border bg-card p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="text-sm text-muted-foreground">
          Template page. Replace this content with your real contact details or
          form.
        </p>

        <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <p>
            Email:{" "}
            <a className="underline" href="mailto:your@email.com">
              your@email.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              className="underline"
              href="https://linkedin.com/in/your-profile"
            >
              linkedin.com/in/your-profile
            </a>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ContactPage;
