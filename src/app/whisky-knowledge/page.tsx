import Link from "next/link";

export default function WhiskyKnowledgePage() {
  return (
    <main className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage: "url(/images/edinburgh-night-1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
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

        <section className="mb-10 rounded-2xl border border-amber-200/20 bg-black/40 p-5 backdrop-blur">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-200">
            Na tej stronie
          </h2>
          <ul className="space-y-1 text-base text-amber-50">
            <li>• Czym jest szkocka whisky</li>
            <li>• Jak powstaje szkocka whisky</li>
            <li>• Pięć regionów szkockiej whisky</li>
            <li>• Kategorie szkockiej whisky</li>
            <li>• Degustacja whisky</li>
            <li>• Szkło do whisky</li>
            <li>• Szkocka whisky w prawie — podstawy</li>
          </ul>
        </section>

        <section className="space-y-10 text-base leading-relaxed text-amber-50">
          <div>
            <h2 className="mb-3 text-xl font-semibold">
              Czym jest szkocka whisky
            </h2>

            <div className="space-y-4 text-amber-50/95">
              <p>
                Szkocka whisky ma status chroniony prawem. Musi powstawać w
                Szkocji z wody, zbóż i drożdży oraz dojrzewać w dębowych beczkach
                w Szkocji przez co najmniej trzy lata. Do gotowego alkoholu nie
                wolno dodawać niczego poza wodą oraz niewielką ilością karmelu do
                korekty barwy.
              </p>

              <p>
                O szkockiej whisky często mówi się tak, jakby chodziło głównie o
                single malt. W praktyce jednak słowo „Scotch” oznacza{" "}
                <strong>blended Scotch</strong>.
              </p>

              <p>
                To właśnie ten styl pije się na świecie najczęściej — jest to
                połączenie whisky single malt i whisky single grain, tworzone
                tak, aby zachować powtarzalny charakter oraz stabilną jakość.
              </p>

              <p>
                Single malty funkcjonują obok tego jako odrębne wyroby z
                pojedynczych destylarni. Są ważne same w sobie, ale w skali
                globalnej pozostają mniejszą częścią rynku.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">
              Jak powstaje szkocka whisky
            </h2>

            <div className="space-y-4 text-amber-50/95">
              <p>
                W największym skrócie: zboże zamienia się w alkohol, a potem
                czas i dąb robią resztę. Najpierw jęczmień (lub inne zboża) jest
                rozdrabniany i mieszany z gorącą wodą w kadzi zaciernej, aby
                wydobyć cukry. Powstaje słodka ciecz, nazywana brzeczką.
              </p>

              <p>
                Brzeczka trafia do kadzi fermentacyjnych, gdzie dodaje się
                drożdże. W ciągu kilku dni drożdże zamieniają cukry w alkohol,
                tworząc „piwo” destylacyjne o niewielkiej mocy i bogatym profilu
                aromatycznym.
              </p>

              <p>
                Następnie odbywa się destylacja. W przypadku single malt używa
                się miedzianych alembików (zwykle dwukrotnie), a w przypadku
                whisky zbożowej często stosuje się destylację kolumnową. Na tym
                etapie powstaje new make — bezbarwny destylat o wysokiej mocy,
                który ma już rozpoznawalny charakter.
              </p>

              <p>
                Potem kluczowy etap: dojrzewanie w dębowych beczkach w Szkocji.
                Przez lata whisky nabiera barwy, łagodnieje i rozwija aromaty,
                czerpiąc z drewna oraz z wcześniejszej historii beczki (np.
                bourbon, sherry, wino). To właśnie beczki mają ogromny wpływ na
                końcowy styl.
              </p>

              <p>
                Na koniec whisky jest komponowana (w przypadku blended Scotch),
                albo rozlewana jako single malt z jednej destylarni. Może być
                filtrowana na zimno lub nie, może mieć barwę naturalną albo
                korygowaną karmelem. Ostatecznie trafia do butelek w ustalonej
                mocy, najczęściej 40–46% ABV, choć wydania cask strength bywają
                znacznie wyższe.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Pięć regionów szkockiej whisky
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Kategorie szkockiej whisky
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Degustacja whisky</h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Szkło do whisky</h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Szkocka whisky w prawie — podstawy
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}
