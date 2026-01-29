import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function ErrolWingsPage() {
  return (
    <PageShell
      title="Errol Wings"
      intro="Szkocka whisky o tematyce lotniczej, dostępna w wersji 12-letniej oraz w młodszej wersji single malt."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Errol Wings 12-letnia</h2>
        <p>
          Wersja 12-letnia to dojrzała, dobrze ułożona szkocka whisky o wyraźnej
          głębi i czytelnej deklaracji wieku. Jest przeznaczona dla klientów i
          rynków, które chcą widocznej dojrzałości, bez wchodzenia w bardzo
          wysokie poziomy cenowe.
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl bg-neutral-50">
          <Image
            src="/images/brand-errol-wings.jpg"
            alt="Errol Wings 12-letnia — butelka i opakowanie"
            width={1200}
            height={1200}
            className="h-64 w-full object-contain p-6"
            priority={false}
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">
          Errol Wings Single Malt (młodsza)
        </h2>
        <p>
          Młodsza wersja single malt jest lżejsza i czystsza w stylu. Rozlewana
          jest do wysokiej, okrągłej butelki z prostą, uporządkowaną etykietą i
          kierowana do rynków, które chcą single malt w uczciwej, przystępnej
          cenie.
        </p>

        <div className="mt-4 overflow-hidden rounded-2xl bg-neutral-50">
          <Image
            src="/images/brand-errol-wings.jpg"
            alt="Errol Wings Single Malt — butelka"
            width={1200}
            height={1200}
            className="h-64 w-full object-contain p-6"
            priority={false}
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Pozycjonowanie</h2>
        <p>
          Errol Wings jest dla klientów, którzy chcą jasnej historii, uczciwych
          deklaracji wieku oraz opakowania, które wygląda na premium, ale nie
          jest rozrzutne. Tam, gdzie jest to potrzebne, marka może być oferowana
          na zasadzie wyłączności dla rynku.
        </p>
      </section>
    </PageShell>
  );
}
