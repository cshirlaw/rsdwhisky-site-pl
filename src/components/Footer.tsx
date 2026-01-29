export default function Footer() {
  return (
    <footer className="border-t border-amber-800/40 bg-[#E5C98E] text-neutral-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 text-sm md:flex-row md:items-start md:justify-between md:px-6">
        <div className="space-y-1">
          <div className="font-semibold">RSD Whisky</div>
          <div>5 Lochside Way, Edinburgh EH12 9DT</div>
          <div>Wielka Brytania</div>
          <div>+44 131 659 9829 · +44 7831 495 163</div>
          <div>c.shirlaw@rsdwhisky.com</div>
        </div>
        <div className="space-y-1 text-right">
          <div>Niezależny szkocki producent whisky.</div>
          <div>Doradztwo · Hurt · Marki · Napoje RTD w puszkach.</div>
          <div className="text-xs text-neutral-800">
            © 2025 RSD Whisky. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
}
