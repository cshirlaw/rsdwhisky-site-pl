import Link from 'next/link';
import { SITE } from '@/src/config/site';

export default function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
