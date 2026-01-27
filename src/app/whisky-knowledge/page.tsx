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
                W największym skrócie: zboże zamienia się w alkohol, a potem czas
                i dąb robią resztę. Najpierw jęczmień (lub inne zboża) jest
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
            <h2 className="mb-3 text-xl font-semibold">
              Pięć regionów szkockiej whisky
            </h2>

            <div className="space-y-4 text-amber-50/95">
              <p>
                Szkocja tradycyjnie dzieli whisky na pięć regionów: Highlands,
                Speyside, Islay, Lowlands oraz Campbeltown. Regiony pomagają
                opisywać styl, ale nie są sztywną regułą — każda destylarnia ma
                własny charakter, a nowoczesne podejście często wykracza poza
                stereotypy.
              </p>

              <p>
                <strong>Highlands</strong> to największy i najbardziej zróżnicowany
                region. Znajdziesz tu whisky lekkie i kwiatowe, ale także
                pełniejsze, oleiste i bardziej wytrawne. W praktyce Highlands
                oznacza ogromną rozpiętość stylów.
              </p>

              <p>
                <strong>Speyside</strong> leży w obrębie Highlands, ale zwyczajowo
                traktuje się go osobno, bo koncentruje się tu wiele destylarni.
                Często spotkasz whisky owocowe, słodowe, z nutami miodu, jabłek,
                gruszek i wanilii, a także styl dojrzewany w beczkach po sherry.
              </p>

              <p>
                <strong>Islay</strong> jest znana z torfu i dymu, ale nie cała wyspa
                smakuje tak samo. Obok mocno torfowych stylów znajdziesz też
                whisky bardziej morskie, cytrusowe i wytrawne. Wspólnym motywem
                bywa „nadmorskość”: sól, wodorosty, morska bryza.
              </p>

              <p>
                <strong>Lowlands</strong> kojarzą się z lżejszym profilem: delikatne,
                bardziej ziołowe i kwiatowe whisky, często cenione jako
                przystępne wstępy do świata szkockiej whisky. To uogólnienie, ale
                wciąż przydatne jako pierwszy trop.
              </p>

              <p>
                <strong>Campbeltown</strong> to najmniejszy region, historycznie
                bardzo ważny. Klasyczny opis mówi o whisky „oleistej”, słonawej,
                czasem lekko dymnej, o wyraźnej strukturze. Dziś działa tu
                niewiele destylarni, ale ich styl jest wyrazisty i ceniony.
              </p>

              <p>
                Regiony to wygodny skrót myślowy. Najlepszy sposób, aby je
                zrozumieć, to spróbować kilku butelek z każdej części Szkocji i
                porównać wrażenia — a potem pamiętać, że destylarnia i beczka
                mają często większe znaczenie niż sama mapa.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">
              Kategorie szkockiej whisky
            </h2>

            <div className="space-y-4 text-amber-50/95">
              <p>
                W prawie szkocka whisky dzieli się na kilka podstawowych
                kategorii. Te definicje są ważne, bo mówią, z czego whisky może
                powstać i jak wolno ją opisywać na etykiecie.
              </p>

              <p>
                <strong>Single Malt Scotch Whisky</strong> pochodzi z jednej
                destylarni i jest produkowana wyłącznie z jęczmienia słodowanego,
                destylowana w alembikach. To styl, który kojarzy się z
                destylarnią jako źródłem charakteru.
              </p>

              <p>
                <strong>Single Grain Scotch Whisky</strong> również pochodzi z
                jednej destylarni, ale może wykorzystywać inne zboża (np.
                pszenicę, kukurydzę) i zwykle jest destylowana kolumnowo. Często
                jest lżejsza w profilu i stanowi kluczowy element blended Scotch.
              </p>

              <p>
                <strong>Blended Scotch Whisky</strong> to połączenie whisky
                single malt i whisky single grain z różnych destylarni. To
                najpopularniejsza kategoria na świecie — projektowana tak, by
                utrzymać stały styl i jakość w dużej skali.
              </p>

              <p>
                <strong>Blended Malt Scotch Whisky</strong> (dawniej „vatted
                malt”) to mieszanka wyłącznie whisky single malt z różnych
                destylarni, bez udziału whisky zbożowej.
              </p>

              <p>
                <strong>Blended Grain Scotch Whisky</strong> to mieszanka whisky
                single grain z różnych destylarni, bez udziału single malt. To
                rzadziej spotykana kategoria, ale ważna w kontekście prawa i
                opisu stylu.
              </p>

              <p>
                W praktyce na smak wpływa nie tylko kategoria, ale też wiek,
                rodzaj beczek, sposób komponowania oraz decyzje przy rozlewie
                (moc, filtracja na zimno, barwa). Kategorie są jednak dobrym
                punktem startu, aby rozumieć etykiety i porównywać butelki.
              </p>
            </div>
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
