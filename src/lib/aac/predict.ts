import type { Phrase } from "./types";

export function predictionsFor(message: string, phrases: Phrase[]): string[] {
  const trimmed = message.trim();
  if (!trimmed) return [];

  const last = trimmed.split(/\s+/).pop()?.toLowerCase() ?? "";
  if (!last) return [];

  const labels = phrases.map((p) => p.label);
  const seen = new Set<string>();
  const out: string[] = [];

  for (const label of labels) {
    const lower = label.toLowerCase();
    if (lower === last) continue;
    if (lower.startsWith(last) || lower.split(/\s+/).some((w) => w.startsWith(last))) {
      if (!seen.has(lower)) {
        seen.add(lower);
        out.push(label);
      }
    }
    if (out.length >= 3) return out;
  }

  if (out.length < 3) {
    for (const label of labels) {
      const lower = label.toLowerCase();
      if (seen.has(lower)) continue;
      if (lower.includes(last)) {
        seen.add(lower);
        out.push(label);
      }
      if (out.length >= 3) break;
    }
  }

  return out.slice(0, 3);
}

export function applyPrediction(message: string, prediction: string): string {
  const trimmed = message.trimEnd();
  if (!trimmed) return prediction;
  const parts = trimmed.split(/\s+/);
  const last = parts[parts.length - 1] ?? "";
  if (prediction.toLowerCase().startsWith(last.toLowerCase())) {
    parts[parts.length - 1] = prediction;
    return parts.join(" ");
  }
  return `${trimmed} ${prediction}`;
}
