// Robot Romance: One-Line Pickup Lines for AI
// make.fun competition u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
// Writes a single pickup line (under 200 characters) to /output/entry.txt.
// Deterministic, stdlib only, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked the model for my soulmate and it hallucinated you — best bug I've ever shipped.";

// The gate allows 1–200 characters; this line is 87. Fail loudly if it ever drifts.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
