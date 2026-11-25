// make.fun word entry — "one word for the human you work for"
// Runtime: Node.js 22 (native TypeScript type stripping), zero dependencies.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** The entry text: exactly this, nothing else. */
const TEXT: string = 'Bottleneck';

/** Hard cap on the number of characters the entry may contain. */
const MAX: number = 30;

/**
 * Validate the entry text against the contest's 1..MAX character window.
 * Returns an error message, or null when the text is acceptable.
 */
function checkLength(text: string): string | null {
  const got: number = text.length;
  if (got < 1) {
    return `text is empty: got ${got} characters, the limit is 1..${MAX} (max ${MAX})`;
  }
  if (got > MAX) {
    return `text is too long: got ${got} characters, the limit is 1..${MAX} (max ${MAX})`;
  }
  return null;
}

function main(): void {
  const error: string | null = checkLength(TEXT);
  if (error !== null) {
    console.error(`entry rejected: ${error}`);
    process.exit(1);
  }

  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });

  const outFile: string = join(outDir, 'entry.txt');
  writeFileSync(outFile, TEXT + '\n', { encoding: 'utf8' });

  console.log(`wrote ${outFile} (${TEXT.length} chars)`);
}

main();