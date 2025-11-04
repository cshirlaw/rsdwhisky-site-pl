import Link from 'next/link';
import { SITE } from '@/src/config/site';

export default function Home() {
  return (
    <section className="prose prose-slate max-w-none">
      <h1 className="!mb-2">{SITE.name}</h1>
      <p className="!mt-0">Parent company site for consultancy, sourcing of aged Scotch in cask, and prestige bottlings.</p>

      <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2">
        <a href={SITE.links.errolWings} target="_blank" rel="noopener noreferrer" className="block rounded-lg border p-5 hover:shadow-sm">
          <h3 className="font-semibold">Errol Wings</h3>
          <p className="text-sm text-gray-600">Single malt bottlings and brand home.</p>
        </a>
        <a href={SITE.links.stuartDouglas} target="_blank" rel="noopener noreferrer" className="block rounded-lg border p-5 hover:shadow-sm">
          <h3 className="font-semibold">Stuart Douglas</h3>
          <p className="text-sm text-gray-600">Rutherford Shirlaw & Denholm heritage label.</p>
        </a>
      </div>

      <div className="not-prose mt-10">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 hover:bg-gray-50">
          Contact RSD Whisky
        </Link>
      </div>
    </section>
  );
}
