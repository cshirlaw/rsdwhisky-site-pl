'use client';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/config/site';

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={SITE.brand.logo} alt="RSD Whisky" width={28} height={28} className="rounded" />
          <span className="font-medium tracking-tight">{SITE.name}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <a href={SITE.links.errolWings} target="_blank" rel="noopener noreferrer" className="hover:underline">Errol Wings</a>
          <a href={SITE.links.stuartDouglas} target="_blank" rel="noopener noreferrer" className="hover:underline">Stuart Douglas</a>
          <Link
            href="/contact"
            className="px-3 py-1.5 rounded-md border transition-colors"
            style={{ borderColor: SITE.brand.accent }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(183,142,92,0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
