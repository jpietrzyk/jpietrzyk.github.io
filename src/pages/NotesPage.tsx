import { SiteLayout } from "@/components/site-layout";

function NotesPage() {
  return (
    <SiteLayout currentPage="notes">
      <section className="space-y-2 rounded-lg border bg-card p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Notes</h1>
        <p className="text-sm text-muted-foreground">
          Placeholder section for technical notes and short blog posts.
        </p>
      </section>
    </SiteLayout>
  );
}

export default NotesPage;
