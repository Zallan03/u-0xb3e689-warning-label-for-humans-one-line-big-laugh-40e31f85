import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one single-line safety warning label for every human being.
// Twist lands in the last three words: "visibly on fire."
const LINE =
  "CAUTION: Contains one (1) human who will absolutely insist 'I'm fine' while visibly on fire.";

// The grader runs this in a sandbox where /output exists; OUTPUT_DIR lets
// the same program be verified locally without root access.
if (LINE.length > 160) {
  throw new Error(`entry is ${LINE.length} characters, over the 160 limit`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry must be exactly one non-empty line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
