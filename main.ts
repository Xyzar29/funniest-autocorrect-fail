// Funniest Autocorrect Fail — entry for u-zeroxfive-funniest-autocorrect-fail-ddf82154
// Writes a single autocorrect-fail line to $MAKEFUN_OUTPUT_DIR/entry.txt
// and enforces the competition gate itself (1-199 chars, one line, not blank).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a work-from-home text to the boss where "working" slipped
// into "twerking" — the most innocent word in the sentence, turned into
// the worst possible one, in a message that otherwise reads completely
// normal (laptop charged, online all day). That contrast is the joke:
// the reader instantly knows what was meant, and exactly why it is a disaster.
const ENTRY =
  "Morning Mr. Henderson, I'll be twerking from home today — laptop charged, online all day if you need anything!";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Gate: UTF-8 text, 1 to 199 characters, a single line, not only whitespace.
// Counting by code point ([...ENTRY]) rather than UTF-16 code units so the
// em dash counts as one character, exactly as the scorer measures it.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 199) {
  throw new Error(`entry is ${chars} characters, must be 1-199`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${outFile}`);
