import PageShell from "@/components/PageShell";

export default function WhiskyKnowledgePage() {
  return (
    <PageShell
      title="Whisky knowledge"
      intro="A simple guide to Scotch and Irish whiskey — how it is made, the regions, the styles and the key terms."
    >
      {/* Section links */}
      <nav className="mb-8 text-sm">
        <ul className="space-y-1">
          <li><a className="underline" href="#regions">Whisky regions</a></li>
          <li><a className="underline" href="#categories">Whisky categories</a></li>
          <li><a className="underline" href="#production">How whisky is made</a></li>
          <li><a className="underline" href="#tasting">How to taste whisky</a></li>
        </ul>
      </nav>

      {/* Regions */}
      <section id="regions" className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Whisky regions</h2>
        <p>
          Scotch whisky is grouped into five protected regions — Highlands,
          Lowlands, Speyside, Islay and Campbeltown — each with its own mix of
          distilleries, styles and traditions.
        </p>
      </section>

      {/* Categories */}
      <section id="categories" className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Whisky categories</h2>
        <p>
          Scotch whisky is legally defined, with clear categories such as single
          malt, blended Scotch, blended malt and single grain. Irish whiskey has
          its own traditional classifications too.
        </p>
      </section>

      {/* Production */}
      <section id="production" className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">How whisky is made</h2>
        <p>
          Whisky is made from water, grain and yeast. It is mashed, fermented,
          distilled and matured — usually in oak casks — for several years. The
          details vary between Scotch and Irish whiskey.
        </p>
      </section>

      {/* Tasting */}
      <section id="tasting" className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">How to taste whisky</h2>
        <p>
          A simple five-step process: look, smell, taste, add a little water if
          needed, and consider the finish. Tasting is about curiosity, not rules.
        </p>
      </section>
    </PageShell>
  );
}
