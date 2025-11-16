import PageShell from "@/components/PageShell";

export default function StuartDouglasPage() {
  return (
    <PageShell
      title="Stuart Douglas"
      intro="A straightforward Scotch whisky made for everyday drinking, with steady character and honest presentation."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Character</h2>
        <p>
          Stuart Douglas is blended Scotch whisky made to be dependable and easy
          to drink. The aim is a steady, balanced character rather than
          showmanship, with a clean finish that suits everyday occasions.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Packaging</h2>
        <p>
          The pack is kept clear and simple so that money goes into the whisky,
          not into unnecessary glass or cardboard. Labels are easy to read and
          designed to sit properly on shelf in modern retail.
        </p>
        {/* Image slot: bottle and case */}
        <div
          className="mt-4 h-40 rounded-xl bg-neutral-200/60"
          aria-hidden="true"
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Markets and use</h2>
        <p>
          Stuart Douglas is intended for export markets looking for a reliable
          Scotch at a sensible price point, either as a main shelf brand or as
          part of a wider whisky range. It can be supplied as an exclusive brand
          for a particular retailer or national importer.
        </p>
      </section>
    </PageShell>
  );
}
