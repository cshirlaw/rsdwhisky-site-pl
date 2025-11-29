import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      title="About RSD Whisky"
      intro="A Scottish-owned, independent whisky business based in Edinburgh, working with Scotland’s people, distilleries and bottlers to bring honest Scotch and Irish whiskey to modern retail."
    >
      {/* Hero image */}
      <div className="mb-6 overflow-hidden rounded-2xl">
        <Image
          src="/images/about-banner.jpg"
          alt="Edinburgh — the home of RSD Whisky"
          width={1600}
          height={600}
          className="h-48 w-full object-cover sm:h-64 md:h-72"
        />
      </div>

      {/* Who we are */}
      <section className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">Who we are</h2>
          <p>
            RSD Whisky is an independent Scottish whisky business. We work with
            the brokers, bottlers, distilleries and whisky specialists who keep
            Scotch moving every day. Our focus is simple: clear value, reliable
            liquid and straightforward presentation.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/images/about-inline.JPG"
              alt="Edinburgh street — local heritage"
              width={900}
              height={600}
              className="h-60 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* A Scottish business */}
      <section className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">A Scottish business</h2>
          <p>
            We are based in Edinburgh, in the heart of Scotland’s whisky
            industry. Our work spans Scotch whisky in bottle and in bulk, Irish
            whiskey, single malt casks, prestige bottlings and private client
            projects.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/images/about-inline2.jpg"
              alt="Traditional whisky architecture in Edinburgh"
              width={900}
              height={600}
              className="h-60 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">How we work</h2>
        <p>
          We keep overheads low and work with experienced partners, so that the
          money goes where it should: into the bottle, the label and the quality
          of the whisky itself. Not into unnecessary packaging or administrative
          waste.
        </p>
        <p className="mt-2">
          Much of our work is done quietly, through long-standing relationships
          across Scotland’s independent network. This keeps supply predictable,
          quality consistent and pricing steady for customers.
        </p>
      </section>

      {/* Who we work with */}
      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Who we work with</h2>
        <p>
          Our customers include retailers, importers and private clients across
          Europe, Asia and emerging markets. Some require exclusive brands;
          others need dependable supply in bulk. We build the right solution for
          each.
        </p>
        <p className="mt-2 text-sm">
          If you have a project you would like to discuss:
        </p>
        <p className="text-sm">
          <a href="/contact" className="underline">
            Contact RSD Whisky
          </a>
        </p>
      </section>
    </PageShell>
  );
}
