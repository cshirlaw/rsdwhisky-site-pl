import Link from "next/link";

export default function WhiskyKnowledgePage() {
  return (
    <main className="relative min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage: "url(/images/edinburgh-night-1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="mx-auto max-w-5xl text-amber-50">
        <nav className="mb-6 text-sm text-amber-200/80">
          <Link href="/" className="hover:text-amber-100">
            Strona główna
          </Link>{" "}
          / Wiedza o whisky
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Wiedza o whisky
          </h1>
          <p className="mt-3 max-w-3xl text-base text-amber-100/90">
            Przystępny przewodnik po szkockiej whisky — jak powstaje, co oznacza i
            dlaczego ma znaczenie.
          </p>
        </header>

        <section className="mb-10 rounded-2xl border border-amber-200/20 bg-black/40 p-5 backdrop-blur">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-200">
            Na tej stronie
          </h2>
          <ul className="space-y-1 text-base text-amber-50">
            <li>• Czym jest szkocka whisky</li>
            <li>• Jak powstaje szkocka whisky</li>
            <li>• Pięć regionów szkockiej whisky</li>
            <li>• Kategorie szkockiej whisky</li>
            <li>• Degustacja whisky</li>
            <li>• Szkło do whisky</li>
            <li>• Szkocka whisky w prawie — podstawy</li>
          </ul>
        </section>

        <section className="space-y-8 text-base leading-relaxed text-amber-50">
          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Czym jest szkocka whisky
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Jak powstaje szkocka whisky
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Pięć regionów szkockiej whisky
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Kategorie szkockiej whisky
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Degustacja whisky
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Szkło do whisky
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Szkocka whisky w prawie — podstawy
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}
