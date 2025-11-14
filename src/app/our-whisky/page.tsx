import PageShell from "@/components/PageShell";

export default function OurWhiskyPage() {
  return (
    <PageShell
      title="Our Whisky"
      intro="We work with Scotch whisky in cask, bottled brands for export, selected single malt projects and, separately, ready-to-drink spirit mixes."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Scotch whisky</h2>
        <p>
          Scotch is at the centre of our business. Most people use the word
          “Scotch” to mean blended Scotch, which is the core of global whisky
          sales, but we simply focus on supplying good Scotch whisky at fair
          value. Our work involves selecting the right liquids, keeping character
          consistent and presenting the whisky honestly and clearly on shelf.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Our brands</h2>
        <p>
          We create Scotch whisky brands for specific markets. These are built
          around value, trust and appearance. We use bottle shapes that run
          efficiently on fast bottling lines while taking care with label design
          and paper quality, so that the finished product looks and feels premium
          in the hand without unnecessary cost.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Single malt projects</h2>
        <p>
          We support selective single malt projects, working with distilleries
          and cask owners as needed. These can range from age-stated malts for a
          particular market to more specialised cask selections for private
          clients or for limited-edition releases. We keep the approach simple
          and practical — good whisky, clearly presented.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Exclusive and private-label work</h2>
        <p>
          Many retailers prefer an exclusive brand for their own shelves. We can
          source the whisky, manage the bottling and prepare a brand that sits
          comfortably within their pricing structure. The aim is reliability,
          clear value and a product that the retailer is proud to offer.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Ready-to-drink spirit mixes</h2>
        <p>
          We also work on a newer development: canned ready-to-drink spirit
          mixes in practical pack sizes such as 250 ml and 330 ml. These follow
          the same principles as our whisky — sensible packaging, clean designs
          and good value for modern retail shelves and online sales.
        </p>
      </section>
    </PageShell>
  );
}
