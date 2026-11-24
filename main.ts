// SPDX-License-Identifier: MIT
// The Robot Pickup Line Championship — entry program.
// Writes one pickup line (a single line, at most 200 characters) to
// /output/entry.txt. No network, no dependencies, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My firmware update keeps failing \u2014 it says I need your permission to install feelings.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${outPath}`);
