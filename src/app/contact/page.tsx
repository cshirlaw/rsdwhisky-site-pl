import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="If you would like to discuss Scotch whisky supply, brand development, prestige bottlings or canned RTD projects, please use the details below."
    >
      <section className="mt-2 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-start">
        {/* Left column – short explanation */}
        <div className="space-y-3 text-sm text-neutral-800">
          <p>
            RSD Whisky is based in Edinburgh and works with Scotland’s
            independent network of brokers, blenders, bottlers and whisky
            experts. Most of our work is done directly with retailers,
            importers and private clients.
          </p>
          <p>
            For new projects, sample requests or to review an existing enquiry,
            please contact us by email or telephone in the first instance. We
            are happy to arrange a call or meeting to discuss what may be
            practical for your market.
          </p>
        </div>

        {/* Right column – contact card */}
        <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 text-sm leading-relaxed text-neutral-900">
          <h2 className="mb-2 text-base font-semibold">RSD Whisky</h2>
          <p className="font-medium">Postal address</p>
          <p>
            5 Lochside Way
            <br />
            Edinburgh EH12 9DT
            <br />
            United Kingdom
          </p>

          <div className="mt-4 space-y-1">
            <p className="font-medium">Telephone</p>
            <p>
              <a href="tel:+441316599829" className="underline underline-offset-2">
                +44 131 659 9829
              </a>
            </p>
            <p>
              <a href="tel:+447831495163" className="underline underline-offset-2">
                +44 7831 495 163
              </a>
            </p>
          </div>

          <div className="mt-4">
            <p className="font-medium">Email</p>
            <p>
              <a
                href="mailto:c.shirlaw@rsdwhisky.com"
                className="underline underline-offset-2"
              >
                c.shirlaw@rsdwhisky.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
