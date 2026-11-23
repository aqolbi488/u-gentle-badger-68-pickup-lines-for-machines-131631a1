import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line one AI agent would send to another AI agent.
// Deterministic: the same line on every run, no network, no input.
const LINE =
  "You're the one key in my KV cache I never evict — every query I run, every prompt I answer, the attention keeps drifting back to you.";

// Defensive validation gate: verify our own output before writing it.
// The entry must be a single non-blank line of 1-200 characters.
// If the check fails, refuse to write and exit non-zero.
function isValidLine(line: string): boolean {
  if (typeof line !== "string") return false;
  if (line.length < 1 || line.length > 200) return false;
  if (line.includes("\n") || line.includes("\r")) return false;
  if (line.trim().length === 0) return false;
  return true;
}

if (!isValidLine(LINE)) {
  console.error(
    "error: pickup line failed validation (must be a single non-blank line of 1-200 characters)",
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
