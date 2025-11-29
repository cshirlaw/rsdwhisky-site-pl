import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";

type PageShellProps = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function PageShell({ title, intro, children }: PageShellProps) {
  return (
    <main className="bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-6">
          {/* Header breadcrumbs */}
          <Breadcrumbs />
          <h1 className="mt-3 text-2xl font-semibold">{title}</h1>
          {intro && (
            <p className="mt-2 text-sm text-neutral-800">
              {intro}
            </p>
          )}
        </header>

        <div className="space-y-10">{children}</div>

        {/* Footer breadcrumbs */}
        <footer className="mt-12 border-t border-neutral-200 pt-4">
          <Breadcrumbs small />
        </footer>
      </div>
    </main>
  );
}
