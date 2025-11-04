import fs from 'fs';
const p = 'src/app/layout.tsx';
let s = fs.readFileSync(p, 'utf8');

if (!/icons:/.test(s)) {
  s = s.replace(
    /export const metadata = \{([\s\S]*?)\};/,
    (m) => m.replace(/\};/, ',\n  icons: { icon: "/images/brand/rsd-logo.svg" },\n};')
  );
  fs.writeFileSync(p, s);
  console.log('Added icons metadata to layout.tsx');
} else {
  console.log('Icons already present');
}
