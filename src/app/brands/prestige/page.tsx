import PageShell from "@/components/PageShell";

export default function PrestigePage() {
  return (
    <PageShell
      title="Butelkowania prestiżowe"
      intro="Dyskretne, starannie prowadzone projekty dla klientów prywatnych oraz wydań specjalnych."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">
          Pojedyncze beczki i deklaracje wieku
        </h2>
        <p>
          Pracujemy z wybranymi beczkami single malt oraz whisky z deklaracją
          wieku z różnych regionów Szkocji. Każdy projekt prowadzony jest
          indywidualnie, z jasnym omówieniem stylu, wieku, ilości oraz rynku
          docelowego lub odbiorcy.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">
          Prezentacja i szkło
        </h2>
        <p>
          Butelkowania mogą być realizowane w standardowych butelkach lub w
          zestawach o wyższej specyfikacji, obejmujących etykiety, kartony
          zewnętrzne oraz — tam, gdzie ma to sens — karafki Glencairn lub inne
          wysokiej klasy szkło. Celem jest dopasowanie opakowania do whisky i
          historii, która za nią stoi, bez zbędnego przepychu.
        </p>

        <div
          className="mt-4 h-40 rounded-xl bg-neutral-200/60"
          aria-hidden="true"
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">
          Jak pracujemy
        </h2>
        <p>
          Projekty prestiżowe realizujemy spokojnie i bez rozgłosu. Szczegółowo
          omawiamy wymagania, a następnie dobieramy beczki, partnerów
          rozlewniczych oraz opakowanie. Wolumeny są zazwyczaj ograniczone, a
          każdy etap jest kontrolowany, aby gotowe butelki były czymś, co z
          przyjemnością się wręcza lub otrzymuje.
        </p>
      </section>
    </PageShell>
  );
}
