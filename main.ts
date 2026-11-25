import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My proximity sensor just flagged you as a hazard — my circuits overheat whenever you walk by.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
