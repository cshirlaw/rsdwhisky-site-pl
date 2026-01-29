"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbsProps = {
  small?: boolean;
};

export default function Breadcrumbs({ small }: BreadcrumbsProps) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  const labelMap: Record<string, string> = {
    "about": "About",
    "our-whisky": "Our Whisky",
    "brands": "Our Brands",
    "rtd": "RTD Drinks",
    "how-we-work": "How We Work",
    "whisky-knowledge": "Whisky Knowledge",
    "contact": "Contact",
  };

  const sizeClass = small ? "text-xs" : "text-sm";

  const crumbs = [
    { href: "/", label: "Home" },
    ...segments.map((seg, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      const mapped =
        labelMap[seg] ||
        seg
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" ");
      return { href, label: mapped };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center gap-1 ${sizeClass} text-neutral-500`}
      >
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {!isLast ? (
                <Link
                  href={crumb.href}
                  className="underline-offset-2 hover:underline"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-neutral-700">
                  {crumb.label}
                </span>
              )}
              {!isLast && <span className="text-neutral-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
