import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function BrandsPage() {
  return (
    <PageShell
      title="Nasze marki"
      intro="Niewielki zestaw marek whisky — każda tworzona z myślą o jasnej wartości, stabilnej jakości i rozsądnej cenie półkowej."
    >
      {/* Wprowadzenie */}
      <section>
        <h2 className="mb-1 text-lg font-semibold">Przegląd</h2>
        <p>
          Oferujemy starannie dobrany zestaw marek whisky. Każda z nich może być
          dostarczana na zasadzie wyłączności dla danego detalisty lub rynku,
          z dopasowanym alkoholem i prezentacją odpowiednią do poziomu cenowego
          i lokalnych oczekiwań.
        </p>
      </section>

      {/* Siatka marek */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">

        {/* Stuart Douglas */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/pl/images/brand-stuart-Douglas.JPG"
              alt="Stuart Douglas"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Szkocka whisky mieszana
            </p>
            <h2 className="mt-1 text-base font-semibold">Stuart Douglas</h2>
            <p className="mt-1 text-sm">
              Prosta, codzienna szkocka whisky. Czysty charakter, powtarzalna
              jakość i uczciwa prezentacja — bez zbędnych kosztów.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/stuart-douglas">Dowiedz się więcej</a>
            </p>
          </div>
        </article>

        {/* Errol Wings */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/pl/images/brand-errol-wings.jpg"
              alt="Errol Wings"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Szkocka whisky mieszana
            </p>
            <h2 className="mt-1 text-base font-semibold">Errol Wings</h2>
            <p className="mt-1 text-sm">
              Szkocka whisky o tematyce lotniczej, dostępna w wersjach
              12-letnich oraz młodszych. Przeznaczona dla rynków, które
              oczekują jasnych deklaracji wieku i rozsądnej ceny.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/errol-wings">Dowiedz się więcej</a>
            </p>
          </div>
        </article>

        {/* Castlecraig */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/pl/images/brand-castlecraig.jpg"
              alt="Castlecraig"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Szkocka whisky mieszana
            </p>
            <h2 className="mt-1 text-base font-semibold">Castlecraig</h2>
            <p className="mt-1 text-sm">
              Tradycyjnie prezentowana szkocka whisky z klasyczną nazwą
              i przejrzystą etykietą. Stworzona z myślą o dużych wolumenach
              i silnej relacji jakości do ceny.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/castlecraig">Dowiedz się więcej</a>
            </p>
          </div>
        </article>

        {/* Ravendale */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/pl/images/brand-ravendale.jpg"
              alt="Ravendale Irish Whiskey"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Irlandzka whiskey
            </p>
            <h2 className="mt-1 text-base font-semibold">
              Ravendale — Irish Whiskey
            </h2>
            <p className="mt-1 text-sm">
              Trzykrotnie destylowana whiskey w klasycznym irlandzkim stylu —
              lżejsza, gładsza i bardziej miękka niż większość szkockich whisky.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/ravendale">Dowiedz się więcej</a>
            </p>
          </div>
        </article>

        {/* Prestige */}
        <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex h-56 items-end justify-center rounded-xl bg-neutral-50 px-4 py-6">
            <Image
              src="/pl/images/brand-prestige.jpg"
              alt="Prestige bottlings"
              width={400}
              height={400}
              className="h-52 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Single malty i edycje specjalne
            </p>
            <h2 className="mt-1 text-base font-semibold">Edycje prestiżowe</h2>
            <p className="mt-1 text-sm">
              Wybrane beczki single malt, whisky z deklaracją wieku oraz limitowane
              edycje w karafkach Glencairn lub opakowaniach premium.
            </p>
            <p className="mt-2 text-sm underline">
              <a href="/brands/prestige">Dowiedz się więcej</a>
            </p>
          </div>
        </article>

      </section>
    </PageShell>
  );
}
