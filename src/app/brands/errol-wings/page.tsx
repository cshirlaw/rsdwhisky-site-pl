import PageShell from "@/components/PageShell";

export default function ErrolWingsPage() {
  return (
    <PageShell
      title="Errol Wings"
      intro="A Scottish whisky with an aviation theme, produced in both 12-year-old and younger single malt expressions."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Errol Wings 12-year-old</h2>
        <p>
          The 12-year-old expression is a well-rounded, mature Scotch with good
          depth and a clear age statement. It is made for drinkers and markets
          that want visible maturity without moving into very high price levels.
        </p>
        {/* Image slot: 12-year-old bottle / pack */}
        <div
          className="mt-4 h-40 rounded-xl bg-neutral-200/60"
          aria-hidden="true"
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">
          Errol Wings Single Malt (younger)
        </h2>
        <p>
          The younger single malt expression is lighter and cleaner in style. It
          is bottled in a tall round bottle with a simple, tidy label and is
          aimed at markets that want a single malt at a fair, accessible price.
        </p>
        {/* Image slot: younger single malt bottle */}
        <div
          className="mt-4 h-40 rounded-xl bg-neutral-200/60"
          aria-hidden="true"
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Positioning</h2>
        <p>
          Errol Wings is built for customers who want a clear story, honest
          age statements and packaging that looks premium without being wasteful.
          It can be offered on an exclusive-market basis where required.
        </p>
      </section>
    </PageShell>
  );
}
