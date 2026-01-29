import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function RavendalePage() {
  return (
    <PageShell
      title="Ravendale – Irish Whiskey"
      intro="Irlandzka whiskey produkowana w lżejszym, łagodniejszym stylu, dla rynków preferujących delikatniejszy charakter niż typowa szkocka whisky."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Styl i destylacja</h2>
        <p>
          Ravendale jest destylowana trzykrotnie, co nadaje jej łagodniejsze
          odczucie w ustach, czystsze wykończenie oraz bardziej przystępny
          charakter niż większość szkockich whisky. Jest tworzona z myślą o
          łatwej pijalności i prostym, uczciwym stylu.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Prezentacja</h2>
        <p>
          Etykieta i butelka są utrzymane w czystym, nowoczesnym stylu, aby
          whiskey była łatwa do zrozumienia na półce oraz w sprzedaży online.
          Nacisk kładziony jest na delikatny, irlandzki charakter, a nie na
          ciężkie lub przesadne opakowanie.
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl bg-neutral-50">
          <Image
            src="/pl/images/brand-ravendale.jpg"
            alt="Ravendale Irish Whiskey — butelka i opakowanie"
            width={1200}
            height={1200}
            className="h-64 w-full object-contain p-6"
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Rynki i pozycjonowanie</h2>
        <p>
          Ravendale dobrze pasuje do rynków, na których irlandzka whiskey jest
          już znana i ceniona, a styl trzykrotnie destylowany jest preferowany.
          Marka może być oferowana jako wyłączna dla danego detalisty lub
          importera.
        </p>
      </section>
    </PageShell>
  );
}
