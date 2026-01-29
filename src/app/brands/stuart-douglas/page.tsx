import PageShell from "@/components/PageShell";

export default function StuartDouglasPage() {
  return (
    <PageShell
      title="Stuart Douglas"
      intro="Prosta, uczciwa szkocka whisky przeznaczona do codziennego picia, o stabilnym charakterze i przejrzystej prezentacji."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Charakter</h2>
        <p>
          Stuart Douglas to szkocka whisky typu <strong>blended Scotch</strong>,
          stworzona z myślą o niezawodności i łatwości picia. Celem jest
          zrównoważony, stabilny charakter, a nie efekciarstwo, z czystym
          wykończeniem odpowiednim na co dzień.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Opakowanie</h2>
        <p>
          Opakowanie jest utrzymane w prostym i czytelnym stylu, tak aby pieniądze
          trafiały do whisky, a nie w zbędne szkło czy karton. Etykiety są łatwe
          do odczytania i zaprojektowane tak, aby dobrze prezentowały się na
          półce w nowoczesnym handlu detalicznym.
        </p>
        <div
          className="mt-4 h-40 rounded-xl bg-neutral-200/60"
          aria-hidden="true"
        />
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Rynki i zastosowanie</h2>
        <p>
          Stuart Douglas jest przeznaczony na rynki eksportowe poszukujące
          niezawodnej szkockiej whisky w rozsądnym przedziale cenowym — jako
          główna marka półkowa lub element szerszej oferty whisky. Może być
          dostarczany jako marka wyłączna dla konkretnego detalisty lub
          importera krajowego.
        </p>
      </section>
    </PageShell>
  );
}
