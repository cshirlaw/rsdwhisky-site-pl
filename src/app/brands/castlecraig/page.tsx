import PageShell from "@/components/PageShell";

export default function CastlecraigPage() {
  return (
    <PageShell
      title="Castlecraig"
      intro="Tradycyjna szkocka whisky o klasycznej nazwie, przejrzystej etykiecie i rozsądnej cenie."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Styl i charakter</h2>
        <p>
          Castlecraig to szkocka whisky mieszana przeznaczona do codziennego
          picia. Jej charakter jest zrównoważony i przystępny — odpowiedni dla
          konsumentów oczekujących klasycznego profilu szkockiej whisky bez
          ostrej nuty.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Prezentacja</h2>
        <p>
          Projekt utrzymany jest w tradycyjnym stylu: czytelna nazwa, elementy
          nawiązujące do herbu oraz etykieta sprawiająca wrażenie marki
          ugruntowanej i godnej zaufania. Celem jest naturalne dopasowanie do
          półki obok innych długo obecnych marek szkockiej whisky.
        </p>
        <div
          className="mt-4 h-40 rounded-xl bg-neutral-200/60"
          aria-hidden="true"
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Rola w ofercie</h2>
        <p>
          Castlecraig skierowana jest do dużych detalistów i dystrybutorów,
          poszukujących tradycyjnie prezentowanej szkockiej whisky o silnej
          relacji jakości do ceny przy większych wolumenach. Marka może być
          oferowana na zasadzie wyłączności dla sieci, grupy handlowej lub
          określonego rynku.
        </p>
      </section>
    </PageShell>
  );
}
