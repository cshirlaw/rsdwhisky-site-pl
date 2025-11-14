import PageShell from "@/components/PageShell";

export default function OurWhiskyPage() {
  return (
    <PageShell
      title="Our Whisky"
      intro="We sell the full range of Scotch whisky: blended Scotch in bottle and in bulk, single malt and prestige bottled whiskies."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Scotch whisky</h2>
        <p>
          Scotch is blended Scotch. Not single malt. Blended Scotch is the
          whisky that most people drink worldwide. Our focus is to supply good
          Scotch whisky, single malt and blended, at a sound price and quality
          point.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Our brands</h2>
        <p>
          We have several Scotch whisky brands which we can offer exclusively
          for specific geographical markets. These are designed to stand
          comfortably beside international brands. We use high-quality bottles
          with good label design and paper quality, so that the finished product
          looks and feels premium without unnecessary cost.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Single malt projects</h2>
        <p>
          We offer single malt from all the Scottish regions, ranging from
          age-statement malts for specific markets to more specialised cask
          selections for private clients or limited releases. The approach is
          straightforward: good whisky, clearly presented.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">
          Exclusive and private-label work
        </h2>
        <p>
          Many retailers prefer an exclusive brand for their own shelves. We can
          offer a brand that fits their pricing and their market. The aim is
          reliability, clear value and a product at a competitive price that the
          retailer is happy to recommend.
        </p>
      </section>

      <section>
        <p>
          Alongside our whisky work, we also develop canned ready-to-drink
          spirit mixes. These are described separately in our RTD Drinks
          section.
        </p>
      </section>
    </PageShell>
  );
}
