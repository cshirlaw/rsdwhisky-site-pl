import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function RtdPage() {
  return (
    <PageShell
      title="RTD Drinks"
      intro="Alongside Scotch whisky, we develop canned ready-to-drink spirit mixes in simple formats suited to modern retail."
    >
      {/* Inline banner (no hero) */}
      <div className="mb-6 overflow-hidden rounded-2xl">
        <Image
          src="/images/home-inline.jpg"
          alt="RTD drinks banner"
          width={1600}
          height={600}
          className="h-40 w-full object-cover sm:h-52 md:h-64"
        />
      </div>

      {/* Why RTD */}
      <section>
        <h2 className="mb-1 text-lg font-semibold">Why RTD?</h2>
        <p>
          Ready-to-drink spirit mixes offer a simple, consistent way to enjoy
          long drinks and highballs without needing to mix at home. Retailers and
          importers appreciate the predictable handling, merchandising and online
          suitability.
        </p>
      </section>

      {/* Formats */}
      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Formats</h2>
        <p>
          We usually work with 250 ml and 330 ml cans in sensible outer packs
          for retail and pallet use. Designs are clear and easy to read so the
          product can be understood at a glance.
        </p>
      </section>

      {/* Mixes */}
      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Our mixes</h2>
        <p>
          We supply whisky-and-cola, whisky-and-ginger and lighter, longer serves
          at different strength levels. Final recipe, sweetness and ABV are agreed
          with each customer for their market.
        </p>
      </section>

      {/* Exclusive ranges */}
      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">
          Own-label and exclusive ranges
        </h2>
        <p>
          We can create RTD ranges for a retailer or distributor, either under
          their own label or as an exclusive brand at a clear price point.
        </p>
      </section>
    </PageShell>
  );
}
