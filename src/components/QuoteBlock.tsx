import Image from 'next/image';
import { SITE } from '@/config/site';

export default function QuoteBlock() {
  const q = SITE.quotes[0];
  if (!q) return null;

  return (
    <figure className="rounded-xl border bg-white p-6 flex flex-col md:flex-row items-start gap-6">
      <div className="relative flex-shrink-0 w-28 h-28 rounded-full overflow-hidden border">
        <Image
          src="/pl/images/people/charlie-maclean.jpg"
          alt={q.author}
          fill
          className="object-cover"
          sizes="112px"
          priority
        />
      </div>
      <div>
        <div style={{ height: 3, width: 42, backgroundColor: SITE.brand.accent }} />
        <blockquote className="mt-4 text-lg leading-relaxed text-slate-800">“{q.text}”</blockquote>
        <figcaption className="mt-3 text-sm text-gray-600">
          <span className="font-medium">{q.author}</span> — {q.role}, on {q.on}.
        </figcaption>
      </div>
    </figure>
  );
}
