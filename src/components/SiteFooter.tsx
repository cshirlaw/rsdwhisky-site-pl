import Link from 'next/link';
import { SITE } from '@/config/site';

export default function SiteFooter() {
  const c = SITE.contact;
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="font-medium">{SITE.name}</p>
            <p>{c.address}</p>
            <p>{c.telOffice} · {c.telMobile}</p>
            <p>
              <a className="hover:underline" href={`mailto:${c.email}`}>
                {c.email}
              </a>
            </p>
          </div>
          <nav className="grid gap-1">
            <Link href="/our-story" className="hover:underline">O nas</Link>
            <Link href="/the-quality" className="hover:underline">Jakość</Link>
            <Link href="/our-brands" className="hover:underline">Nasze marki</Link>
            <Link href="/contact" className="hover:underline">Kontakt</Link>
            <Link href="/privacy" className="hover:underline">Polityka prywatności</Link>
            <Link href="/terms" className="hover:underline">Warunki</Link>
          </nav>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} {SITE.name}. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
