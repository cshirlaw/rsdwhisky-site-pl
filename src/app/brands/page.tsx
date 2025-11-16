import PageShell from "@/components/PageShell";

export default function BrandsPage() {
  return (
    <PageShell
      title="Our brands"
      intro="A small set of whisky brands, each made for clear value, steady quality and a sensible shelf price."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Overview</h2>
        <p>
          We offer a small set of whisky brands. Each can be supplied exclusively
          for a particular retailer or market, with the liquid and presentation
          agreed to suit the price level and local needs.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Stuart Douglas</h2>
        <p>
          A straightforward Scotch whisky made for everyday drinking. Steady
          character, reliable quality and a clean presentation designed to sit
          properly on the shelf without wasting money on heavy packaging.
        </p>
        <p className="mt-1 text-sm">
          <a href="/brands/stuart-douglas" className="underline">
            Learn more about Stuart Douglas
          </a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Errol Wings</h2>
        <p>
          A Scottish whisky with an aviation theme, made in both 12-year-old and
          younger versions, for markets that want clear age statements and fair
          pricing.
        </p>
        <p className="mt-1 text-sm">
          <a href="/brands/errol-wings" className="underline">
            Learn more about Errol Wings
          </a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Castlecraig</h2>
        <p>
          A Scotch whisky made for markets that want a traditional look — classic
          name, clear label, sensible price. Built to give strong value at volume
          levels that work for large retailers.
        </p>
        <p className="mt-1 text-sm">
          <a href="/brands/castlecraig" className="underline">
            Learn more about Castlecraig
          </a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Ravendale — Irish Whiskey</h2>
        <p>
          Ravendale is an Irish whiskey, made in the lighter, smoother Irish
          style. It is triple-distilled, giving a softer palate, a cleaner finish
          and an easier character than most Scotch.
        </p>
        <p className="mt-1 text-sm">
          <a href="/brands/ravendale" className="underline">
            Learn more about Ravendale
          </a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Prestige bottlings</h2>
        <p>
          For private clients or special releases, we provide selected single
          malt casks, age-statement malts from different regions and limited
          bottlings with Glencairn decanters or premium packaging by arrangement.
        </p>
        <p className="mt-1 text-sm">
          <a href="/brands/prestige" className="underline">
            Learn more about prestige bottlings
          </a>
        </p>
      </section>
    </PageShell>
  );
}
