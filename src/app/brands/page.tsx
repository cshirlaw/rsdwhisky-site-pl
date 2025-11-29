import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function BrandsPage() {
  return (
    <PageShell
      title="Our brands"
      intro="A small set of whisky brands, each made for clear value, steady quality and a sensible shelf price."
    >
      {/* Overview */}
      <section>
        <h2 className="mb-1 text-lg font-semibold">Overview</h2>
        <p>
          We offer a small set of whisky brands. Each can be supplied exclusively
          for a retailer or market, with liquid and presentation agreed to suit
          the price level and local needs.
        </p>
      </section>

      {/* Brand grid */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        
        {/* Stuart Douglas */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/images/brand-stuart-Douglas.JPG"
              alt="Stuart Douglas"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Blended Scotch whisky
            </p>
            <h2 className="mt-1 text-base font-semibold">Stuart Douglas</h2>
            <p className="mt-1 text-sm">
              A straightforward Scotch whisky for everyday drinking. Clean
              character, reliable quality and a presentation designed to sit
              properly on the shelf without unnecessary cost.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/stuart-douglas">Learn more</a>
            </p>
          </div>
        </article>

        {/* Errol Wings */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/images/brand-errol-wings.jpg"
              alt="Errol Wings"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Blended Scotch whisky
            </p>
            <h2 className="mt-1 text-base font-semibold">Errol Wings</h2>
            <p className="mt-1 text-sm">
              A Scottish whisky with an aviation theme, produced in both
              12-year-old and younger versions. Made for markets wanting clear
              age statements and sensible pricing.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/errol-wings">Learn more</a>
            </p>
          </div>
        </article>

        {/* Castlecraig */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/images/brand-castlecraig.jpg"
              alt="Castlecraig"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Blended Scotch whisky
            </p>
            <h2 className="mt-1 text-base font-semibold">Castlecraig</h2>
            <p className="mt-1 text-sm">
              A traditional-looking Scotch whisky with a classic name, clear
              label and a sensible price point. Made for strong value at volume
              levels suited to major retailers.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/castlecraig">Learn more</a>
            </p>
          </div>
        </article>

        {/* Ravendale */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/images/brand-ravendale.jpg"
              alt="Ravendale Irish Whiskey"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Irish whiskey
            </p>
            <h2 className="mt-1 text-base font-semibold">
              Ravendale — Irish Whiskey
            </h2>
            <p className="mt-1 text-sm">
              Ravendale is triple-distilled in the traditional Irish style —
              lighter, smoother and with a cleaner finish than most Scotch. Easy
              character, good value and straightforward presentation.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/ravendale">Learn more</a>
            </p>
          </div>
        </article>

        {/* Prestige bottlings */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/images/brand-prestige.jpg"
              alt="Prestige bottlings"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Single malts & special releases
            </p>
            <h2 className="mt-1 text-base font-semibold">Prestige bottlings</h2>
            <p className="mt-1 text-sm">
              Selected single malt casks, age-statement malts and limited
              bottlings with Glencairn decanters or premium packaging. For
              private clients and specialist releases.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/prestige">Learn more</a>
            </p>
          </div>
        </article>

      </section>
    </PageShell>
  );
}
