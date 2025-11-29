import React from "react";

const sections = [
  { id: "what-scotch-is", title: "What Scotch is" },
  { id: "how-scotch-is-made", title: "How Scotch is made" },
  { id: "five-scotch-regions", title: "The five Scotch regions" },
  { id: "scotch-whisky-categories", title: "Scotch whisky categories" },
  { id: "tasting-scotch", title: "Tasting Scotch" },
  { id: "glassware", title: "Glassware" },
  { id: "scotch-in-law", title: "Scotch in law – essentials" },
];

export default function WhiskyKnowledgePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="mb-6 text-sm text-neutral-500">
        Home / <span className="text-neutral-700">Whisky knowledge</span>
      </div>

      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        Whisky knowledge
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-neutral-700 sm:text-base">
        A plain guide to Scotch whisky — how it is made, what it means, and why
        it matters.
      </p>

      {/* On this page */}
      <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm sm:p-6">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
          On this page
        </h2>
        <ul className="space-y-1 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-neutral-800 underline-offset-2 hover:underline"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-neutral-800 sm:text-base">
        {/* What Scotch is */}
        <section id="what-scotch-is">
          <h2 className="text-xl font-semibold text-neutral-900">
            What Scotch is
          </h2>
          <p className="mt-3">
            Scotch whisky holds a protected place in law. It must be made in
            Scotland from water, cereals and yeast, and matured in oak casks in
            Scotland for at least three years. Nothing else is allowed but water
            and a small amount of caramel for colour.
          </p>
          <p className="mt-3">
            Scotch is often spoken of as malt or single malt, but in truth:
            <br />
            <span className="font-semibold">Scotch means blended Scotch.</span>
          </p>
          <p className="mt-3">
            It is the whisky most people drink around the world — a marriage of
            single malt and single grain, designed to be consistent in character
            and steady in quality.
          </p>
          <p className="mt-3">
            Single malts sit alongside this as distinct expressions from
            individual distilleries. They are important in their own right, but
            blended Scotch remains the heart of the industry.
          </p>
        </section>

        {/* How Scotch is made */}
        <section id="how-scotch-is-made">
          <h2 className="text-xl font-semibold text-neutral-900">
            How Scotch is made
          </h2>
          <p className="mt-3">
            Every Scotch whisky, whether malt or grain, follows the same basic
            path:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              <span className="font-semibold">Malting and milling</span> – Barley
              is soaked, allowed to sprout, then dried in a kiln. It is ground
              into grist.
            </li>
            <li>
              <span className="font-semibold">Mashing</span> – Hot water is
              added to the grist to draw out sugars, producing a sweet liquid
              called wort.
            </li>
            <li>
              <span className="font-semibold">Fermentation</span> – Yeast is
              added. Over a few days the yeast turns sugar into alcohol,
              creating a kind of strong beer.
            </li>
            <li>
              <span className="font-semibold">Distillation</span> – Malt whisky
              is distilled in copper pot stills, usually twice. Grain whisky is
              distilled in continuous stills for a lighter spirit.
            </li>
            <li>
              <span className="font-semibold">Maturation</span> – The new spirit
              is filled into oak casks and matured in Scotland for at least
              three years, often much longer. In cask, colour, aroma and flavour
              develop.
            </li>
            <li>
              <span className="font-semibold">Blending and bottling</span> –
              Matured whiskies are selected, blended to the desired style and
              strength, adjusted with water, and bottled at a minimum of 40%
              alcohol by volume.
            </li>
          </ol>
        </section>

        {/* The five Scotch regions */}
        <section id="five-scotch-regions">
          <h2 className="text-xl font-semibold text-neutral-900">
            The five Scotch regions
          </h2>
          <p className="mt-3">
            For Scotch whisky, law and industry practice recognise five main
            regions:{" "}
            <span className="font-semibold">
              Highlands, Lowlands, Speyside, Islay and Campbeltown
            </span>
            . Each has its own mix of distilleries and house styles, shaped by
            water, climate, landscape and local habits.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Highlands</span> – The largest
              region by area. Styles range from lighter, floral malts to coastal
              whiskies with more salt, smoke or spice.
            </li>
            <li>
              <span className="font-semibold">Lowlands</span> – Generally
              lighter, softer whiskies. Often grassy, malty and gentle, and a
              good place to start for new drinkers.
            </li>
            <li>
              <span className="font-semibold">Speyside</span> – The most densely
              populated whisky region. Often fruity and honeyed, with apples,
              pears and malt sweetness, and many whiskies matured in sherry
              casks.
            </li>
            <li>
              <span className="font-semibold">Islay</span> – A small island with
              a strong character. Many distilleries use heavily peated malt,
              giving smoky, coastal whiskies with seaweed, tar and iodine
              notes.
            </li>
            <li>
              <span className="font-semibold">Campbeltown</span> – Once home to
              many distilleries, now a small but distinct region. Whiskies can
              be robust, sometimes oily or maritime, with a mix of fruit, spice
              and smoke.
            </li>
          </ul>
          <p className="mt-3">
            These are broad guides, not strict rules, but they help people
            navigate the variety within Scotch.
          </p>
        </section>

        {/* Scotch whisky categories */}
        <section id="scotch-whisky-categories">
          <h2 className="text-xl font-semibold text-neutral-900">
            Scotch whisky categories
          </h2>
          <p className="mt-3">
            By law there are five Scotch whisky categories:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Single Malt Scotch Whisky</span> –
              Made at one distillery, from malted barley only, in pot stills.
            </li>
            <li>
              <span className="font-semibold">Single Grain Scotch Whisky</span>{" "}
              – Made at one distillery, from malted barley plus other grains, in
              continuous stills.
            </li>
            <li>
              <span className="font-semibold">Blended Scotch Whisky</span> – A
              blend of one or more Single Malts with one or more Single Grains.
              This is the main style people drink worldwide.
            </li>
            <li>
              <span className="font-semibold">Blended Malt Scotch Whisky</span> –
              A blend of two or more Single Malts from different distilleries,
              with no grain whisky.
            </li>
            <li>
              <span className="font-semibold">Blended Grain Scotch Whisky</span>{" "}
              – A blend of two or more Single Grains from different
              distilleries.
            </li>
          </ul>
          <p className="mt-3">
            Most brands on shop shelves are{" "}
            <span className="font-semibold">Blended Scotch</span>, built for
            consistency and value over many years.
          </p>
        </section>

        {/* Tasting Scotch */}
        <section id="tasting-scotch">
          <h2 className="text-xl font-semibold text-neutral-900">
            Tasting Scotch
          </h2>
          <p className="mt-3">
            There is no single “correct” way to taste Scotch, but a simple
            approach helps:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              <span className="font-semibold">Look</span> – Hold the glass up to
              the light. Note the colour, which comes from the cask, not from
              the distillation.
            </li>
            <li>
              <span className="font-semibold">Nose</span> – Smell gently with
              your mouth slightly open. Take short sniffs rather than one big
              breath.
            </li>
            <li>
              <span className="font-semibold">Taste</span> – Sip, hold the
              whisky in the mouth and let it coat the tongue before swallowing.
            </li>
            <li>
              <span className="font-semibold">Add water if you wish</span> – A
              little still water can open up the aroma and soften the alcohol.
              There is no rule; add as much or as little as suits you.
            </li>
            <li>
              <span className="font-semibold">Think about the finish</span> –
              Notice how long the flavour lingers and how it changes.
            </li>
          </ol>
          <p className="mt-3">
            The aim is not to find fancy words, but simply to notice what you
            like.
          </p>
        </section>

        {/* Glassware */}
        <section id="glassware">
          <h2 className="text-xl font-semibold text-neutral-900">Glassware</h2>
          <p className="mt-3">
            Good glassware makes tasting easier but does not have to be
            complicated.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              For tastings, a{" "}
              <span className="font-semibold">tulip-shaped glass</span> (such as
              a Glencairn glass) helps concentrate the aroma.
            </li>
            <li>
              For long drinks and highballs, a{" "}
              <span className="font-semibold">tall straight glass</span> works
              well.
            </li>
            <li>
              A simple <span className="font-semibold">tumbler</span> is still a
              perfectly good way to enjoy Scotch at home.
            </li>
          </ul>
          <p className="mt-3">
            We work closely with specialist glassmakers such as Glencairn
            Crystal on prestige bottlings and bespoke glassware for clients.
          </p>
        </section>

        {/* Scotch in law – essentials */}
        <section id="scotch-in-law">
          <h2 className="text-xl font-semibold text-neutral-900">
            Scotch in law – essentials
          </h2>
          <p className="mt-3">
            A few key points from the Scotch Whisky Regulations and related
            rules:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Scotch whisky must be{" "}
              <span className="font-semibold">
                distilled and matured in Scotland
              </span>{" "}
              for at least <span className="font-semibold">three years</span> in
              oak casks.
            </li>
            <li>
              It must be bottled at a{" "}
              <span className="font-semibold">
                minimum of 40% alcohol by volume
              </span>
              .
            </li>
            <li>
              Only <span className="font-semibold">water</span> and{" "}
              <span className="font-semibold">plain caramel colouring</span> may
              be added.
            </li>
            <li>
              Labels must clearly state the{" "}
              <span className="font-semibold">category</span> (for example,
              “Blended Scotch Whisky” or “Single Malt Scotch Whisky”) and any{" "}
              <span className="font-semibold">age statement</span> must reflect
              the youngest whisky in the bottle.
            </li>
            <li>
              The word <span className="font-semibold">“Scotch”</span> is
              protected and may only be used for whisky that meets these
              standards.
            </li>
          </ul>
          <p className="mt-3">
            These rules protect Scotch’s reputation and help consumers know what
            they are buying.
          </p>
        </section>
      </div>
    </main>
  );
}
