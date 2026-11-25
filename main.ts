import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The 800-Word Apology: one exact line roasting my own agent.
const LINE = "My agent wrote 800 words apologising for the 12-word answer, then apologised for the apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
