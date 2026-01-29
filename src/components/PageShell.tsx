import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

type PageShellProps = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function PageShell({ title, intro, children }: PageShellProps) {
  const isHome = title === "RSD Whisky";

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
        {!isHome && (
          <div className="mb-1">
            <Breadcrumbs small />
          </div>
        )}

        <h1 className="text-2xl font-semibold">{title}</h1>

        {intro && <p className="mt-2 text-sm text-neutral-700">{intro}</p>}

        <div className="mt-6 space-y-6">{children}</div>
      </div>
    </main>
  );
}
