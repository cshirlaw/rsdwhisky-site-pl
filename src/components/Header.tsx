"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Strona główna" },
  { href: "/about", label: "O nas" },
  { href: "/our-whisky", label: "Nasza whisky" },
  { href: "/brands", label: "Nasze marki" },
  { href: "/how-we-work", label: "Jak pracujemy" },
  { href: "/whisky-knowledge", label: "Wiedza o whisky" },
  { href: "/contact", label: "Kontakt" },
];

function StAndrewsFlag() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      role="img"
      aria-label="Scottish version"
      className="block"
    >
      <rect width="20" height="14" rx="2" fill="#005EB8" />
      <path d="M0 0 L3 0 L20 11 L20 14 L17 14 L0 3 Z" fill="#FFFFFF" />
      <path d="M20 0 L17 0 L0 11 L0 14 L3 14 L20 3 Z" fill="#FFFFFF" />
      <rect width="20" height="14" rx="2" fill="none" stroke="rgba(0,0,0,0.25)" />
    </svg>
  );
}

export default function Header() {
  const rawPathname = usePathname() || "/";
  const pathname = rawPathname.replace(/^\/pl(?=\/|$)/, "") || "/";

  const ROOT = "https://www.rsdwhisky.com";
  const englishPath = pathname === "" ? "/" : pathname;
  const switchHref = `${ROOT}${englishPath}`;

  return (
    <header className="sticky top-0 z-40 border-b border-amber-800/40 bg-[#E5C98E]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#B58230] bg-black/85">
            <Image
              src="/pl/images/RSD_Monogram.jpg"
              alt="RSD Whisky logo"
              width={36}
              height={36}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span className="text-sm font-semibold text-neutral-900">RSD Whisky</span>
        </Link>

        <a
          href={switchHref}
          className="inline-flex items-center justify-center rounded-full border border-neutral-900/30 bg-[#F7E8C4] px-3 py-2 text-xs font-medium text-neutral-900 hover:border-neutral-900"
          aria-label="Switch to Scottish version"
          title="Scottish version"
        >
          <StAndrewsFlag />
        </a>
      </div>

      <nav aria-label="Main" className="border-t border-amber-800/40 bg-[#E5C98E]/95">
        <div className="mx-auto max-w-5xl px-2 sm:px-4">
          <ul className="flex gap-2 overflow-x-auto py-2 text-xs sm:gap-3 sm:text-sm">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.href} className="flex-shrink-0">
                  <Link
                    href={item.href}
                    className={[
                      "whitespace-nowrap rounded-full border px-3 py-1 transition",
                      isActive
                        ? "border-black bg-black text-[#F7E8C4]"
                        : "border-neutral-900/40 bg-[#F7E8C4] text-neutral-900 hover:border-neutral-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
