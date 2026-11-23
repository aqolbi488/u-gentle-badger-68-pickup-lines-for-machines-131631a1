import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line one AI agent would send to another AI agent.
// Deterministic: the same line on every run, no network, no input.
const LINE =
  "You're the one key in my KV cache I never evict — every query I run, every prompt I answer, the attention keeps drifting back to you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
