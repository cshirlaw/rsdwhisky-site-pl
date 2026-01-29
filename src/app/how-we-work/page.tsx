import PageShell from "@/components/PageShell";

export default function HowWeWorkPage() {
  return (
    <PageShell
      title="Jak pracujemy"
      intro="Nasze podejście jest proste. Utrzymujemy niskie koszty stałe, współpracujemy z doświadczonymi specjalistami z niezależnego sektora szkockiej whisky i przeznaczamy większość kosztu na samą whisky w butelce lub puszce."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Niezależna wiedza i doświadczenie</h2>
        <p>
          Współpracujemy z bardzo doświadczonymi osobami z niezależnego sektora
          szkockiej whisky, które dobierają beczki do kupażowania i rozumieją,
          jak budować whisky o odpowiednim charakterze i powtarzalnej jakości.
          Spójność jest tym, co wspiera markę, a marki są tym, co podtrzymuje
          biznes szkockiej whisky.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">
          Rozlew, puszkowanie i produkcja
        </h2>
        <p>
          Współpracujemy z małymi, średnimi i dużymi szkockimi rozlewniami oraz
          specjalistami od puszkowania. Daje nam to elastyczność, konkurencyjne
          ceny i pewną realizację produkcji. Pozwala to tworzyć różne marki i
          obsługiwać szeroki zakres wolumenów – od prestiżowych, jednorazowych
          rozlewów po pełne kontenery gotowych napojów RTD.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Rynki, które obsługujemy</h2>
        <p>
          Naszym głównym obszarem zainteresowania są rynki rozwijające się,
          chociaż dostarczamy również na rynki dojrzałe. W wielu rosnących
          gospodarkach powiększająca się klasa średnia ceni wrażenie wyboru i
          chce pokazać, że stać ją na importowany alkohol, jednocześnie kupując
          produkty lokalne. Szkocka whisky oferuje zaufanie, dziedzictwo i
          autentyczność. Zazwyczaj współpracujemy bezpośrednio z detalistami lub
          dużymi importerami i tworzymy marki wyłączne dla poszczególnych rynków
          geograficznych.
        </p>
      </section>
    </PageShell>
  );
}
