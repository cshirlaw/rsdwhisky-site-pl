import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function CastlecraigPage() {
  return (
    <PageShell
      title="Castlecraig"
      intro="Tradycyjnie wyglądająca szkocka whisky o klasycznej nazwie, czytelnej etykiecie i rozsądnej cenie."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Styl i charakter</h2>
        <p>
          Castlecraig to klasyczna szkocka whisky typu <strong>blended Scotch</strong>,
          stworzona do spokojnego, codziennego picia. Charakter jest zrównoważony i
          przystępny — dla osób, które lubią tradycyjny profil bez ostrości.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Prezentacja</h2>
        <p>
          Projekt idzie tradycyjną drogą: wyraźna nazwa, elementy w stylu herbowym i
          etykieta, która wygląda na ugruntowaną i godną zaufania. Cel jest prosty:
          dobrze wyglądać na półce obok innych, długowiecznych marek szkockiej whisky.
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl bg-neutral-50">
          <Image
            src="/pl/images/brand-castlecraig.jpg"
            alt="Castlecraig — butelka i opakowanie"
            width={1200}
            height={1200}
            className="h-64 w-full object-contain p-6"
            priority={false}
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Rola w ofercie</h2>
        <p>
          Castlecraig jest skierowany do dużych sieci i dystrybutorów, którzy chcą
          tradycyjnie wyglądającej szkockiej whisky o mocnej wartości przy wolumenie.
          Marka może być ustawiona jako wyłączna dla sieci, grupy lub terytorium.
        </p>
      </section>
    </PageShell>
  );
}
