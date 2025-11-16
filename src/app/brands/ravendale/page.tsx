import PageShell from "@/components/PageShell";

export default function RavendalePage() {
  return (
    <PageShell
      title="Ravendale – Irish Whiskey"
      intro="An Irish whiskey made in the lighter, smoother Irish style, for markets that prefer a gentler spirit than most Scotch."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Style and distillation</h2>
        <p>
          Ravendale is triple-distilled, which gives a softer palate, a cleaner
          finish and an easier character than most Scotch whiskies. It is made
          to be approachable, straightforward and easy to drink.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Presentation</h2>
        <p>
          The label and bottle are kept clear and modern, so that the whiskey is
          easy to understand on shelf and online. The emphasis is on a gentle,
          Irish character rather than heavy packaging.
        </p>
        {/* Image slot: Ravendale bottle */}
        <div
          className="mt-4 h-40 rounded-xl bg-neutral-200/60"
          aria-hidden="true"
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Markets and positioning</h2>
        <p>
          Ravendale suits customers and markets where Irish whiskey is already
          understood and where a triple-distilled, smooth style is preferred. It
          can be offered as an exclusive brand for a retailer or importer.
        </p>
      </section>
    </PageShell>
  );
}
