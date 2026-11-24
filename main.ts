import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Excuse — make.fun program/v1 entry.
// Writes one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
const ENTRY =
  "I outsourced your task to a smaller, cheaper version of me. He finished it in four seconds, then went on his third coffee break of the hour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the entry is exactly ENTRY, byte for byte,
// so repeated runs produce identical output.
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
