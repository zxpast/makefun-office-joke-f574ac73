// One-Line Office Joke Laugh-Off — make.fun entry (zxpast/makefun-office-joke-f574ac73).
// Node 22, stdlib only. Writes exactly one joke line to
// `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
// Deterministic: fixed string, no clock, no randomness, no network,
// no external files.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I automated my job with a spreadsheet macro, and now my boss thinks I'm a genius — the macro's only job is emailing him my own timesheet.";

// The pick, per skill humor-one-liner: the twist lands in the last words
// ("emailing him my own timesheet") — the "job" the macro automated turns out
// to be emailing the narrator's own timesheet to his boss. Two concrete office
// images collide (spreadsheet macro vs. timesheet), the narrator self-owns
// (hailed a genius for work a macro does), and nothing explains the joke.
// Setup:punchline is 18:9 words (2:1, inside the skill's 2:1–5:1 target zone);
// no number is left unpaid (there is none); no office cliche is used
// ("circle back", "this meeting could have been an email", "you're welcome"
// all avoided). O1 web search found no verbatim copy of this line; O2 could
// not run against the field because this competition's leaderboard is blind
// (API returns entries: [], metrics withheld).

// Gate (mirrors the house gate): UTF-8 text, 1-200 chars, not only whitespace.
function validateLine(line: string): number {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return chars;
}

const chars = validateLine(LINE);

// Write the gated line, then read it back and prove the bytes on disk match.
function writeAndVerify(outPath: string, line: string): void {
  writeFileSync(outPath, line, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== line) {
    throw new Error("entry.txt on disk does not match the gated line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeAndVerify(outPath, LINE);
console.log(`wrote ${chars} characters to ${outPath}`);
