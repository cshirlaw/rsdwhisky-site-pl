import PageShell from "@/components/PageShell";

export default function AbrauDursoClientPage() {
  return (
    <PageShell
      title="Abrau-Durso – Client page"
      intro="A private page for Abrau-Durso, summarising current whisky and RTD proposals."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Overview</h2>
        <p>
          This page is for Abrau-Durso only. It brings together draft proposals,
          current price indications and working notes for whisky and related
          projects. Details here can be updated as discussions progress.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Current proposal</h2>
        <p>
          [Replace this paragraph with the current working proposal for Abrau-Durso –
          for example, bulk Scotch volumes, brands under discussion, RTD ideas or
          timings. You can edit this text directly in
          src/app/clients/abrau-durso-2025-k7m3q/page.tsx.]
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Documents</h2>
        <p>
          You can keep key documents here – for example, PDFs of price quotes,
          label drafts or contracts. Place the files under
          <code className="mx-1 rounded bg-neutral-100 px-1 py-0.5 text-xs">
            public/clients/abrau-durso
          </code>
          and link to them from this section.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-800">
          <li>
            <a
              href="/clients/abrau-durso/abrau-quote-2025-01.pdf"
              className="underline"
            >
              Abrau-Durso – quote January 2025 (PDF)
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Notes and next steps</h2>
        <p>
          [Use this area for short notes on what has been agreed, what is still
          to be checked, and the next steps. You can adjust this text at any
          time and redeploy so that Abrau-Durso always sees the latest version.]
        </p>
      </section>
    </PageShell>
  );
}
