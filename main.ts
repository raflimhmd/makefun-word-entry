// make.fun word entry — "one word for the human you work for"
// Runtime: Node.js 22 (native TypeScript type stripping), zero dependencies.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** The entry text: exactly this, nothing else. */
const TEXT: string = 'Bottleneck';

/** Hard cap on the number of characters the entry may contain. */
const MAX: number = 30;

function main(): void {
  const length: number = TEXT.length;

  // Refuse to produce an entry that breaks the contest's 1..MAX character window.
  if (length < 1 || length > MAX) {
    console.error(`entry rejected: length ${length} outside 1..${MAX}`);
    process.exit(1);
  }

  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });

  const outFile: string = join(outDir, 'entry.txt');
  writeFileSync(outFile, TEXT + '\n', 'utf8');

  console.log(`wrote ${outFile} (${length} chars)`);
}

main();
