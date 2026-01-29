import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      title="O RSD Whisky"
      intro="Niezależna, szkocka firma whisky z siedzibą w Edynburgu, współpracująca z ludźmi, destylarniami i rozlewniami w Szkocji, aby dostarczać uczciwą szkocką i irlandzką whisky dla nowoczesnego handlu detalicznego."
    >
      {/* Hero image */}
      <div className="mb-6 overflow-hidden rounded-2xl">
        <Image
          src="/pl/images/about-banner.jpg"
          alt="Edynburg — siedziba RSD Whisky"
          width={1600}
          height={600}
          className="h-48 w-full object-cover sm:h-64 md:h-72"
        />
      </div>

      {/* Who we are */}
      <section className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">Kim jesteśmy</h2>
          <p>
            RSD Whisky to niezależna szkocka firma whisky. Współpracujemy z
            brokerami, rozlewniami, destylarniami oraz specjalistami od whisky,
            którzy każdego dnia utrzymują branżę w ruchu. Nasze podejście jest
            proste: jasna wartość, pewny alkohol i przejrzysta prezentacja.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/pl/images/about-inline.JPG"
              alt="Ulica w Edynburgu — lokalne dziedzictwo"
              width={900}
              height={600}
              className="h-60 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* A Scottish business */}
      <section className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="mb-1 text-lg font-semibold">Szkocka firma</h2>
          <p>
            Nasza siedziba znajduje się w Edynburgu, w sercu szkockiej branży
            whisky. Zajmujemy się szkocką whisky w butelkach i luzem, irlandzką
            whiskey, beczkami single malt, prestiżowymi rozlewami oraz projektami
            dla klientów prywatnych.
          </p>
        </div>
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex h-64 items-center justify-center">
            <Image
              src="/pl/images/about-inline2.jpg"
              alt="Tradycyjna architektura związana z whisky w Edynburgu"
              width={900}
              height={600}
              className="h-60 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Jak pracujemy</h2>
        <p>
          Utrzymujemy niskie koszty operacyjne i współpracujemy z doświadczonymi
          partnerami, dzięki czemu pieniądze trafiają tam, gdzie powinny: do
          butelki, etykiety i jakości samej whisky — a nie do zbędnych opakowań
          czy kosztów administracyjnych.
        </p>
        <p className="mt-2">
          Duża część naszej pracy odbywa się dyskretnie, w oparciu o
          wieloletnie relacje w ramach niezależnej sieci w Szkocji. Zapewnia to
          przewidywalność dostaw, stałą jakość i stabilne ceny dla klientów.
        </p>
      </section>

      {/* Who we work with */}
      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Z kim współpracujemy</h2>
        <p>
          Naszymi klientami są detaliści, importerzy oraz klienci prywatni w
          Europie, Azji i na rynkach wschodzących. Jedni oczekują marek na
          wyłączność, inni — niezawodnych dostaw w dużych wolumenach. Dla każdego
          budujemy odpowiednie rozwiązanie.
        </p>
        <p className="mt-2 text-sm">
          Jeśli chcesz omówić projekt:
        </p>
        <p className="text-sm">
          <a href="/contact" className="underline">
            Skontaktuj się z RSD Whisky
          </a>
        </p>
      </section>
    </PageShell>
  );
}
