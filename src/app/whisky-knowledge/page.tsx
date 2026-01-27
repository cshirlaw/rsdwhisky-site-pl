import Link from "next/link";
import type { ReactNode } from "react";

const toc = [
  { id: "czym-jest-szkocka-whisky", label: "Czym jest szkocka whisky" },
  { id: "jak-powstaje-szkocka-whisky", label: "Jak powstaje szkocka whisky" },
  { id: "piec-regionow-szkockiej-whisky", label: "Pięć regionów szkockiej whisky" },
  { id: "kategorie-szkockiej-whisky", label: "Kategorie szkockiej whisky" },
  { id: "degustacja-whisky", label: "Degustacja whisky" },
  { id: "szklo-do-whisky", label: "Szkło do whisky" },
  { id: "szkocka-whisky-w-prawie-podstawy", label: "Szkocka whisky w prawie — podstawy" },
];

export default function WhiskyKnowledgePage() {
  return (
    <main className="min-h-screen bg-[#f6f0e3]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10">
        <nav className="text-sm text-[#8a6a1f]">
          <Link href="/" className="hover:underline underline-offset-4">
            Strona główna
          </Link>{" "}
          <span className="opacity-60">/</span> Wiedza o whisky
        </nav>

        <header className="mt-3">
          <h1 className="text-4xl font-semibold tracking-tight text-[#171717]">Wiedza o whisky</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#303030]">
            Przystępny przewodnik po szkockiej whisky — jak powstaje, co oznacza i dlaczego ma znaczenie.
          </p>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl bg-gradient-to-b from-white/92 to-white/78 p-5 shadow-[0_8px_28px_-16px_rgba(0,0,0,0.25)] ring-1 ring-black/10 border border-black/5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_22px_70px_-32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_28px_-16px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">NA TEJ STRONIE</div>
              <ul className="mt-3 space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      className="text-[#171717] underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
                      href={`#${t.id}`}
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-6">
            <Section id="czym-jest-szkocka-whisky" title="Czym jest szkocka whisky">
              <p>
                Szkocka whisky ma status chroniony prawem. Musi powstawać w Szkocji z wody, zbóż i drożdży oraz
                dojrzewać w dębowych beczkach w Szkocji przez co najmniej trzy lata. Do gotowego alkoholu nie wolno
                dodawać niczego poza wodą oraz niewielką ilością karmelu do korekty barwy.
              </p>
              <p>
                O szkockiej whisky często mówi się tak, jakby chodziło głównie o single malt. W praktyce jednak słowo
                „Scotch” oznacza <strong>blended Scotch</strong>.
              </p>
              <p>
                To właśnie ten styl pije się na świecie najczęściej — jest to połączenie whisky single malt i whisky
                single grain, tworzone tak, aby zachować powtarzalny charakter oraz stabilną jakość.
              </p>
              <p>
                Single malty funkcjonują obok tego jako odrębne wyroby z pojedynczych destylarni. Są ważne same w sobie,
                ale w skali globalnej pozostają mniejszą częścią rynku.
              </p>
            </Section>

            <Section id="jak-powstaje-szkocka-whisky" title="Jak powstaje szkocka whisky">
              <p>
                W największym skrócie: zboże zamienia się w alkohol, a potem czas i dąb robią resztę. Najpierw jęczmień
                (lub inne zboża) jest rozdrabniany i mieszany z gorącą wodą w kadzi zaciernej, aby wydobyć cukry.
                Powstaje słodka ciecz, nazywana brzeczką.
              </p>
              <p>
                Brzeczka trafia do kadzi fermentacyjnych, gdzie dodaje się drożdże. W ciągu kilku dni drożdże zamieniają
                cukry w alkohol, tworząc „piwo” destylacyjne o niewielkiej mocy i bogatym profilu aromatycznym.
              </p>
              <p>
                Następnie odbywa się destylacja. W przypadku single malt używa się miedzianych alembików (zwykle
                dwukrotnie), a w przypadku whisky zbożowej często stosuje się destylację kolumnową. Na tym etapie
                powstaje new make — bezbarwny destylat o wysokiej mocy, który ma już rozpoznawalny charakter.
              </p>
              <p>
                Potem kluczowy etap: dojrzewanie w dębowych beczkach w Szkocji. Przez lata whisky nabiera barwy,
                łagodnieje i rozwija aromaty, czerpiąc z drewna oraz z wcześniejszej historii beczki (np. bourbon,
                sherry, wino). To właśnie beczki mają ogromny wpływ na końcowy styl.
              </p>
              <p>
                Na koniec whisky jest komponowana (w przypadku blended Scotch), albo rozlewana jako single malt z jednej
                destylarni. Może być filtrowana na zimno lub nie, może mieć barwę naturalną albo korygowaną karmelem.
                Ostatecznie trafia do butelek w ustalonej mocy, najczęściej 40–46% ABV, choć wydania cask strength bywają
                znacznie wyższe.
              </p>
            </Section>

            <Section id="piec-regionow-szkockiej-whisky" title="Pięć regionów szkockiej whisky">
              <p>
                Szkocja tradycyjnie dzieli whisky na pięć regionów: Highlands, Speyside, Islay, Lowlands oraz Campbeltown.
                Regiony pomagają opisywać styl, ale nie są sztywną regułą — każda destylarnia ma własny charakter, a
                nowoczesne podejście często wykracza poza stereotypy.
              </p>
              <div className="not-prose mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-black/10 bg-white/75 p-5 shadow-[0_16px_45px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
<div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">HIGHLANDS</div>
<p className="mt-2 text-sm leading-6 text-[#303030]">to największy i najbardziej zróżnicowany region. Znajdziesz tu whisky lekkie i kwiatowe, ale także pełniejsze, oleiste i bardziej wytrawne. W praktyce Highlands oznacza ogromną rozpiętość stylów.</p>
</div>
<div className="rounded-2xl border border-black/10 bg-white/75 p-5 shadow-[0_16px_45px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
<div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">SPEYSIDE</div>
<p className="mt-2 text-sm leading-6 text-[#303030]">leży w obrębie Highlands, ale zwyczajowo traktuje się go osobno, bo koncentruje się tu wiele destylarni. Często spotkasz whisky owocowe, słodowe, z nutami miodu, jabłek, gruszek i wanilii, a także styl dojrzewany w beczkach po sherry.</p>
</div>
<div className="rounded-2xl border border-black/10 bg-white/75 p-5 shadow-[0_16px_45px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
<div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">ISLAY</div>
<p className="mt-2 text-sm leading-6 text-[#303030]">jest znana z torfu i dymu, ale nie cała wyspa smakuje tak samo. Obok mocno torfowych stylów znajdziesz też whisky bardziej morskie, cytrusowe i wytrawne. Wspólnym motywem bywa „nadmorskość”: sól, wodorosty, morska bryza.</p>
</div>
<div className="rounded-2xl border border-black/10 bg-white/75 p-5 shadow-[0_16px_45px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
<div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">LOWLANDS</div>
<p className="mt-2 text-sm leading-6 text-[#303030]">kojarzą się z lżejszym profilem: delikatne, bardziej ziołowe i kwiatowe whisky, często cenione jako przystępne wstępy do świata szkockiej whisky. To uogólnienie, ale wciąż przydatne jako pierwszy trop.</p>
</div>
<div className="rounded-2xl border border-black/10 bg-white/75 p-5 shadow-[0_16px_45px_-30px_rgba(0,0,0,0.35)] ring-1 ring-black/5 sm:col-span-2">
<div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">CAMPBELTOWN</div>
<p className="mt-2 text-sm leading-6 text-[#303030]">to najmniejszy region, historycznie bardzo ważny. Klasyczny opis mówi o whisky „oleistej”, słonawej, czasem lekko dymnej, o wyraźnej strukturze. Dziś działa tu niewiele destylarni, ale ich styl jest wyrazisty i ceniony.</p>
</div>
</div>
              <p>
                Regiony to wygodny skrót myślowy. Najlepszy sposób, aby je zrozumieć, to spróbować kilku butelek z każdej
                części Szkocji i porównać wrażenia — a potem pamiętać, że destylarnia i beczka mają często większe
                znaczenie niż sama mapa.
              </p>
            </Section>

            <Section id="kategorie-szkockiej-whisky" title="Kategorie szkockiej whisky">
              <p>
                W prawie szkocka whisky dzieli się na kilka podstawowych kategorii. Te definicje są ważne, bo mówią, z
                czego whisky może powstać i jak wolno ją opisywać na etykiecie.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent">
                  <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">SINGLE MALT SCOTCH WHISKY</div>
                  <p className="mt-3">
                    Pochodzi z jednej destylarni i jest produkowana wyłącznie z jęczmienia słodowanego, destylowana w
                    alembikach. To styl kojarzony z destylarnią jako źródłem charakteru.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent">
                  <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">SINGLE GRAIN SCOTCH WHISKY</div>
                  <p className="mt-3">
                    Również z jednej destylarni, ale może wykorzystywać inne zboża (np. pszenicę, kukurydzę) i zwykle jest
                    destylowana kolumnowo. Często lżejsza w profilu i ważna dla blended Scotch.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent">
                  <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">BLENDED SCOTCH WHISKY</div>
                  <p className="mt-3">
                    Połączenie whisky single malt i whisky single grain z różnych destylarni. Najpopularniejsza kategoria
                    na świecie — projektowana tak, by utrzymać stały styl i jakość w dużej skali.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent">
                  <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">BLENDED MALT SCOTCH WHISKY</div>
                  <p className="mt-3">
                    (Dawniej „vatted malt”) — mieszanka wyłącznie whisky single malt z różnych destylarni, bez udziału
                    whisky zbożowej.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent sm:col-span-2">
                  <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">BLENDED GRAIN SCOTCH WHISKY</div>
                  <p className="mt-3">
                    Mieszanka whisky single grain z różnych destylarni, bez udziału single malt. Rzadziej spotykana, ale
                    ważna w kontekście prawa i opisu stylu.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                W praktyce na smak wpływa nie tylko kategoria, ale też wiek, rodzaj beczek, sposób komponowania oraz
                decyzje przy rozlewie (moc, filtracja na zimno, barwa). Kategorie są jednak dobrym punktem startu, aby
                rozumieć etykiety i porównywać butelki.
              </p>
            </Section>

            <Section id="degustacja-whisky" title="Degustacja whisky">
              <p>Degustacja whisky nie musi być skomplikowana. Najważniejsze jest poświęcenie chwili uwagi i próba opisania wrażeń bez pośpiechu.</p>

<div className="mt-6 grid gap-5 sm:grid-cols-2">
  <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent">
    <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">1. PRZYGOTUJ</div>
    <p className="mt-3">Degustuj w temperaturze pokojowej, w czystej postaci. Użyj czystego szkła, bez zapachów detergentów. Najpierw daj whisky chwilę w kieliszku.</p>
  </div>

  <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent">
    <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">2. ZAPACH</div>
    <p className="mt-3">Zbliż kieliszek do nosa i zrób kilka krótkich, delikatnych wdechów. Szukaj nut: owoców, przypraw, wanilii, dębu, dymu, torfu lub morskiej bryzy.</p>
  </div>

  <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent">
    <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">3. SMAK</div>
    <p className="mt-3">Weź mały łyk i pozwól whisky rozprowadzić się po języku. Zwróć uwagę na strukturę (lekka, oleista, wytrawna), intensywność i to, jak alkohol jest odczuwalny.</p>
  </div>

  <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent">
    <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">4. KROPLA WODY</div>
    <p className="mt-3">Kilka kropel wody może otworzyć aromaty i złagodzić alkohol, zwłaszcza przy wyższej mocy. To normalna praktyka, a nie „psucie” whisky.</p>
  </div>

  <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-30px_rgba(0,0,0,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-amber-300/40 before:to-transparent sm:col-span-2">
    <div className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-50/70 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] text-amber-900/80">5. FINISZ I NOTATKA</div>
    <p className="mt-3">Zwróć uwagę na finisz — jak długo smak zostaje i jakie nuty pojawiają się po przełknięciu. Degustacja jest subiektywna: liczy się Twoje doświadczenie, nie gotowe opisy z etykiety.</p>
  </div>
</div>
            </Section>

            <Section id="szklo-do-whisky" title="Szkło do whisky">
              <p>
                Nie istnieje jedno „idealne” szkło do whisky, ale kształt naczynia ma wpływ na sposób, w jaki odbieramy
                aromaty i smak.
              </p>
              <p>
                Najczęściej polecane jest szkło typu tulipan (np. Glencairn), które zwęża się ku górze. Taki kształt
                skupia aromaty i ułatwia ich ocenę, dlatego jest standardem podczas degustacji i pracy profesjonalnej.
              </p>
              <p>
                Klasyczna szklanka typu tumbler (lowball) jest wygodna i popularna, szczególnie przy whisky podawanej z
                lodem lub w koktajlach. Jest mniej precyzyjna aromatycznie, ale w pełni akceptowalna do codziennego
                picia.
              </p>
              <p>
                Do whisky o wyższej mocy lub cask strength warto używać mniejszych kieliszków degustacyjnych, które
                pozwalają kontrolować intensywność alkoholu i dodawanie wody.
              </p>
              <p>
                Najważniejsze jest jednak to, aby szkło było czyste, bez zapachów detergentów, i aby pozwalało pić whisky
                spokojnie. Szkło powinno pomagać w odbiorze, a nie narzucać sposób picia.
              </p>
            </Section>

            <Section id="szkocka-whisky-w-prawie-podstawy" title="Szkocka whisky w prawie — podstawy">
              <p>Treść w przygotowaniu.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="rounded-2xl bg-gradient-to-b from-white/92 to-white/78 p-6 shadow-[0_8px_28px_-16px_rgba(0,0,0,0.25)] ring-1 ring-black/10 border border-black/5 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_22px_70px_-32px_rgba(0,0,0,0.35)] hover:shadow-[0_8px_28px_-16px_rgba(0,0,0,0.25)]"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-[#171717]">{title}</h2>
      <div className="prose prose-neutral mt-4 max-w-none leading-7">{children}</div>
    </section>
  );
}
