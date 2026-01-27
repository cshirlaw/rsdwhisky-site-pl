import Link from "next/link";

export default function WhiskyKnowledgePage() {
  return (
    <main className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 -z-10 "
        style={{
          backgroundImage: "url(/images/edinburgh-night-1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 /70" />
      </div>

      <div className="mx-auto max-w-5xl text-amber-50">
        <nav className="mb-6 text-sm text-amber-200/80">
          <Link href="/" className="hover:text-amber-100">
            Strona główna
          </Link>{" "}
          / Wiedza o whisky
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Wiedza o whisky
          </h1>
          <p className="mt-3 max-w-3xl text-base text-amber-100/90">
            Przystępny przewodnik po szkockiej whisky — jak powstaje, co oznacza i
            dlaczego ma znaczenie.
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-amber-200/20 /40 p-5 backdrop-blur">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-200">
            Na tej stronie
          </h2>
          <ul className="space-y-1 text-base text-amber-50">
            <li>• Czym jest szkocka whisky</li>
            <li>• Jak powstaje szkocka whisky</li>
            <li>• Pięć regionów szkockiej whisky</li>
            <li>• Kategorie szkockiej whisky</li>
            <li>• Degustacja whisky</li>
            <li>• Szkło do whisky

Nie istnieje jedno „idealne” szkło do whisky, ale kształt naczynia ma wpływ na sposób, w jaki odbieramy aromaty i smak.

Najczęściej polecane jest szkło typu tulipan (np. Glencairn), które zwęża się ku górze. Taki kształt skupia aromaty i ułatwia ich ocenę, dlatego jest standardem podczas degustacji i pracy profesjonalnej.

Klasyczna szklanka typu tumbler (lowball) jest wygodna i popularna, szczególnie przy whisky podawanej z lodem lub w koktajlach. Jest mniej precyzyjna aromatycznie, ale w pełni akceptowalna do codziennego picia.

Do whisky o wyższej mocy lub cask strength warto używać mniejszych kieliszków degustacyjnych, które pozwalają kontrolować intensywność alkoholu i dodawanie wody.

Najważniejsze jest jednak to, aby szkło było czyste, bez zapachów detergentów, i aby pozwalało pić whisky spokojnie. Szkło powinno pomagać w odbiorze, a nie narzucać sposób picia.


Szkocka whisky w prawie — podstawy</li>
          </ul>
        </section>

        <section className="space-y-10 text-base leading-relaxed text-amber-50">
          <h2>Czym jest szkocka whisky</h2>
          <p>
            Szkocka whisky ma status chroniony prawem. Musi powstawać w Szkocji z
            wody, zbóż i drożdży oraz dojrzewać w dębowych beczkach w Szkocji przez
            co najmniej trzy lata.
          </p>

          <h2>Jak powstaje szkocka whisky</h2>
          <p>
            Proces obejmuje zacieranie, fermentację, destylację i dojrzewanie w
            dębowych beczkach, które nadają whisky charakter.
          </p>

          <h2>Pięć regionów szkockiej whisky</h2>
          <p>
            Highlands, Speyside, Islay, Lowlands i Campbeltown to tradycyjne
            regiony pomagające opisać styl whisky.
          </p>

          <h2>Kategorie szkockiej whisky</h2>
          <p>
            Prawo wyróżnia m.in. single malt, single grain oraz blended Scotch.
          </p>

          <h2>Degustacja whisky</h2>
          <p>
            Degustacja polega na spokojnym ocenianiu aromatu, smaku i finiszu,
            często z dodatkiem kilku kropel wody.
          </p>

          <h2>Szkło do whisky</h2>
          <p>
            Nie istnieje jedno „idealne” szkło do whisky, ale kształt naczynia ma
            wpływ na sposób, w jaki odbieramy aromaty i smak.
          </p>

          <p>
            Najczęściej polecane jest szkło typu tulipan (np. Glencairn), które
            zwęża się ku górze. Taki kształt skupia aromaty i ułatwia ich ocenę,
            dlatego jest standardem podczas degustacji i pracy profesjonalnej.
          </p>

          <p>
            Klasyczna szklanka typu tumbler (lowball) jest wygodna i popularna,
            szczególnie przy whisky podawanej z lodem lub w koktajlach. Jest mniej
            precyzyjna aromatycznie, ale w pełni akceptowalna do codziennego
            picia.
          </p>

          <p>
            Do whisky o wyższej mocy lub cask strength warto używać mniejszych
            kieliszków degustacyjnych, które pozwalają kontrolować intensywność
            alkoholu i dodawanie wody.
          </p>

          <p>
            Najważniejsze jest jednak to, aby szkło było czyste, bez zapachów
            detergentów, i aby pozwalało pić whisky spokojnie. Szkło powinno
            pomagać w odbiorze, a nie narzucać sposób picia.
          </p>

          <h2>Szkocka whisky w prawie — podstawy</h2>
        </section>
      </div>
    </main>
  );
}
