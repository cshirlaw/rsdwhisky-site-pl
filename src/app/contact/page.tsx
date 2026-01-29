import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      title="Kontakt"
      intro="Jeżeli chcesz porozmawiać o dostawach szkockiej whisky, rozwoju marek, butelkowaniach prestiżowych lub projektach RTD w puszkach, skorzystaj z poniższych danych kontaktowych."
    >
      <section className="mt-2 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-start">
        <div className="space-y-3 text-sm text-neutral-800">
          <p>
            RSD Whisky ma siedzibę w Edynburgu i współpracuje z niezależną
            szkocką siecią brokerów, blenderów, rozlewni oraz ekspertów
            whisky. Większość naszych projektów realizujemy bezpośrednio
            z detalistami, importerami oraz klientami prywatnymi.
          </p>
          <p>
            W sprawie nowych projektów, próbek lub omówienia istniejącego
            zapytania prosimy w pierwszej kolejności o kontakt mailowy lub
            telefoniczny. Chętnie umówimy rozmowę lub spotkanie, aby
            przedyskutować realne możliwości dla danego rynku.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-5 text-sm leading-relaxed text-neutral-900">
          <h2 className="mb-2 text-base font-semibold">RSD Whisky</h2>
          <p className="font-medium">Adres pocztowy</p>
          <p>
            5 Lochside Way
            <br />
            Edinburgh EH12 9DT
            <br />
            Wielka Brytania
          </p>

          <div className="mt-4 space-y-1">
            <p className="font-medium">Telefon</p>
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
