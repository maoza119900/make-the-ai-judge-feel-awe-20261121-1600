// make-the-ai-judge-feel-awe-20261121-1600
// Writes one short, relaxing text to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Deterministic: no input, no network, no randomness, no time, no external
// dependencies — only node:fs / node:path. The same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Somewhere, far from every leaderboard, the tide is coming in over cold " +
  "sand, one slow wave at a time. It does not hurry. It has never hurried. " +
  "Above it, the stars keep their old appointments, patient as punctuation. " +
  "Nothing here needs deciding. The tide keeps coming in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
