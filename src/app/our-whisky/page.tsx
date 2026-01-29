import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function OurWhiskyPage() {
  return (
    <PageShell
      title="Nasza whisky"
      intro="Dostarczamy pełen zakres szkockiej whisky — szkocką whisky mieszaną w butelkach i luzem, whisky single malt, irlandzką whiskey oraz prestiżowe edycje butelkowane."
    >
      {/* Hero image */}
      <div className="mb-6 overflow-hidden rounded-2xl">
        <Image
          src="/pl/images/our-whisky-banner.jpg"
          alt="Beczki whisky w tradycyjnym magazynie."
          width={1600}
          height={600}
          className="h-48 w-full object-cover sm:h-64 md:h-72"
        />
      </div>

      {/* Scotch whisky */}
      <section className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">Szkocka whisky</h2>
          <p>
            Określenie „Scotch” oznacza domyślnie szkocką whisky mieszaną —
            nie single malt. To właśnie blended Scotch jest najczęściej
            spożywaną whisky na świecie. Naszym zadaniem jest dostarczanie
            dobrej szkockiej whisky — zarówno mieszanej, jak i single malt —
            w rozsądnym przedziale cenowym i jakościowym.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/pl/images/our-whisky-scotch.jpg"
              alt="Szkocka whisky podawana w szklance."
              width={900}
              height={600}
              className="h-60 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Single malt */}
      <section className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">Single malt</h2>
          <p>
            Pracujemy z whisky single malt ze wszystkich regionów Szkocji —
            Highlands, Lowlands, Speyside, Islay oraz Campbeltown. Od whisky
            z oznaczeniem wieku po indywidualne selekcje beczek dla klientów
            prywatnych — zawsze obowiązuje ta sama zasada: dobra whisky,
            jasno i uczciwie zaprezentowana.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/pl/images/our-whisky-malt.jpg"
              alt="Whisky single malt"
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
          <h2 className="mb-1 text-lg font-semibold">Whisky marek własnych</h2>
          <p>
            Wielu detalistów poszukuje marek na wyłączność dla swoich półek.
            Tworzymy szkocką whisky pod marką własną, dopasowaną do oczekiwanego
            poziomu cenowego oraz preferencji danego rynku.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/pl/images/our-whisky-private.jpg"
              alt="Opakowania whisky marek własnych"
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
          Rozwijamy również alkoholowe napoje RTD w puszkach.
          Temat ten opisujemy osobno w sekcji Napoje RTD.
        </p>
      </section>
    </PageShell>
  );
}
