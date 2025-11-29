import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function OurWhiskyPage() {
  return (
    <PageShell
      title="Our Whisky"
      intro="We supply the full range of Scotch whisky — blended Scotch in bottle and in bulk, single malt, Irish whiskey and prestige bottled whiskies."
    >
      {/* Hero image */}
      <div className="mb-6 overflow-hidden rounded-2xl">
        <Image
          src="/images/our-whisky-banner.jpg"
          alt="Casks of whisky in a traditional warehouse."
          width={1600}
          height={600}
          className="h-48 w-full object-cover sm:h-64 md:h-72"
        />
      </div>

      {/* Scotch whisky */}
      <section className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">Scotch whisky</h2>
          <p>
            Scotch is blended Scotch by default — not single malt. Blended Scotch
            is the whisky most people drink worldwide. Our work is to supply good
            Scotch whisky, both blended and single malt, at a sound price and
            quality point.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/images/our-whisky-scotch.jpg"
              alt="Scotch whisky served in a glass."
              width={900}
              height={600}
              className="h-60 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Single malt projects */}
      <section className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">Single malt</h2>
          <p>
            We work with single malt from all Scottish regions — Highlands,
            Lowlands, Speyside, Islay and Campbeltown. From age-statement malts
            to individual cask selections for private clients, the approach is
            always straightforward: good whisky, clearly presented.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/images/our-whisky-malt.jpg"
              alt="Single malt whisky"
              width={900}
              height={600}
              className="h-60 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Private-label whisky */}
      <section className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">Private-label whisky</h2>
          <p>
            Many retailers want an exclusive brand for their shelves. We create
            private-label Scotch designed to fit the required price level and
            match the preferences of each market.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/images/our-whisky-private.jpg"
              alt="Private-label whisky packaging"
              width={900}
              height={600}
              className="h-60 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="mt-8">
        <p>
          We also develop canned ready-to-drink spirit mixes. These are covered
          separately in our RTD Drinks section.
        </p>
      </section>
    </PageShell>
  );
}
