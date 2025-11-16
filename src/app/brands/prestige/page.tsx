import PageShell from "@/components/PageShell";

export default function PrestigePage() {
  return (
    <PageShell
      title="Prestige bottlings"
      intro="Quiet, carefully handled projects for private clients and special releases."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Single casks and age statements</h2>
        <p>
          We work with selected single malt casks and age-statement malts from
          different Scottish regions. Each project is handled on its own terms,
          with clear discussion of style, age, quantity and target market or
          recipient.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Presentation and glassware</h2>
        <p>
          Bottlings can be presented in standard bottles or in higher-spec packs
          with labels, outer cartons and, where required, Glencairn decanters or
          other premium glassware. The aim is to match the packaging to the
          whisky and to the story behind it, without waste.
        </p>
        {/* Image slot: decanter / prestige pack */}
        <div
          className="mt-4 h-40 rounded-xl bg-neutral-200/60"
          aria-hidden="true"
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">How we work</h2>
        <p>
          Prestige work is done quietly. We discuss requirements in detail, then
          match casks, bottling partners and packaging to suit. Volumes are
          usually limited, and every stage is checked so that the finished
          bottles are something people are pleased to give or receive.
        </p>
      </section>
    </PageShell>
  );
}
