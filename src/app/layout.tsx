import './globals.css';
import { SITE } from '@/src/config/site';
import TopNav from '@/src/components/TopNav';
import SiteFooter from '@/src/components/SiteFooter';

export const metadata = {
  title: SITE.name,
  description: 'RSD Whisky — Advisory, sourcing and prestige bottlings.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <TopNav />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
