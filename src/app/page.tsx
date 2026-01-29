import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage: "url(/pl/images/calton-hill-1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="mt-8 space-y-3 text-white sm:mt-10">
          <p className="text-sm font-medium text-amber-100">Strona główna</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            RSD Whisky
          </h1>
          <p className="max-w-2xl text-base text-amber-50/90">
            Niezależna, szkocka firma whisky z siedzibą w Edynburgu. Współpracujemy
            z niezależną siecią w Szkocji, aby dostarczać uczciwą szkocką i
            irlandzką whisky dla nowoczesnego handlu detalicznego.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/our-whisky"
              className="inline-flex items-center justify-center rounded-full border border-amber-500 bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow-sm"
            >
              Nasza whisky
            </Link>
            <Link
              href="/brands"
              className="inline-flex items-center justify-center rounded-full border border-amber-200/70 bg-black/40 px-4 py-2 text-sm font-medium text-amber-50 backdrop-blur"
            >
              Nasze marki
            </Link>
            <Link
              href="/whisky-knowledge"
              className="inline-flex items-center justify-center rounded-full border border-amber-200/70 bg-black/40 px-4 py-2 text-sm font-medium text-amber-50 backdrop-blur"
            >
              Wiedza o whisky
            </Link>
          </div>
        </header>

        <section className="mb-12 rounded-3xl bg-neutral-50/80 p-5 text-neutral-900 shadow-lg ring-1 ring-neutral-200/70 backdrop-blur-md sm:p-6">
          <h2 className="text-xl font-semibold text-neutral-900">Co robimy</h2>
          <p className="mt-2 max-w-3xl text-base text-neutral-800">
            Działamy w niezależnym handlu szkocką whisky, obok brokerów, rozlewni,
            blenderów i ekspertów od whisky, którzy utrzymują branżę w ruchu.
            Naszym zadaniem jest dostarczanie dobrej whisky detalistom, importerom
            i klientom prywatnym w ramach jasnych, dobrze zaprezentowanych marek.
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-1 text-base text-neutral-900">
            <li>Szkocka whisky w butelkach na rynki eksportowe.</li>
            <li>Irlandzka whisky w butelkach na rynki eksportowe.</li>
            <li>Marki na wyłączność dla detalistów i klientów prywatnych.</li>
            <li>Prestiżowe rozlewy i specjalne projekty single cask.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
