import fs from 'fs';
const f = 'tailwind.config.ts';
if (!fs.existsSync(f)) process.exit(0);
let s = fs.readFileSync(f, 'utf8');
if (!/typography/.test(s)) {
  s = s.replace(/plugins:\s*\[/, 'plugins: [require("@tailwindcss/typography"), ');
  fs.writeFileSync(f, s);
  console.log('Updated tailwind.config.ts');
} else {
  console.log('Typography already enabled');
}
