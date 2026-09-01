#!/usr/bin/env node
/** Build the dashboard read model. The Markdown log remains the sole evidence ledger. */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docs = path.join(root, 'content', 'docs');
const sources = [path.join(docs, 'log.mdx'), ...fs.readdirSync(path.join(docs, 'logs'), { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
  .map((entry) => path.join(docs, 'logs', entry.name))];
const marker = /<!--\s*knowledge-loop:\s*({[\s\S]*?})\s*-->/g;
const events = [];
for (const file of sources) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(marker)) {
    let event;
    try { event = JSON.parse(match[1]); } catch { throw new Error(`Invalid knowledge-loop JSON in ${file}`); }
    for (const key of ['id', 'at', 'type', 'summary', 'loop_state', 'recheck']) if (!event[key]) throw new Error(`Missing ${key} in ${file}`);
    if (!['ingest', 'query', 'lint'].includes(event.type)) throw new Error(`Invalid event type ${event.type}`);
    if (!['none', 'research', 'review'].includes(event.recheck)) throw new Error(`Invalid recheck ${event.recheck}`);
    if (!['open', 'queued', 'active', 'resolved', 'dismissed'].includes(event.loop_state)) throw new Error(`Invalid state ${event.loop_state}`);
    if (['queued', 'active'].includes(event.loop_state) && !event.infinity_intent_id) throw new Error(`Missing Infinity intent for ${event.id}`);
    if (['resolved', 'dismissed'].includes(event.loop_state) && !(event.result_url || event.decision_reason)) throw new Error(`Missing closure evidence for ${event.id}`);
    events.push({ ...event, source_log: path.relative(docs, file).replace(/\\/g, '/') });
  }
}
const ids = new Set();
for (const event of events) { if (ids.has(event.id)) throw new Error(`Duplicate loop id ${event.id}`); ids.add(event.id); }
events.sort((a, b) => b.at.localeCompare(a.at));
const now = Date.now();
const recent = events.filter((event) => now - Date.parse(event.at) <= 7 * 864e5);
const output = {
  generated_at: new Date().toISOString(),
  events,
  metrics: { ingest: recent.filter((e) => e.type === 'ingest').length, query: recent.filter((e) => e.type === 'query').length, lint: recent.filter((e) => e.type === 'lint').length, open: events.filter((e) => ['open', 'queued', 'active'].includes(e.loop_state)).length, resolved: recent.filter((e) => e.loop_state === 'resolved').length },
};
fs.mkdirSync(path.join(docs, 'data'), { recursive: true });
fs.writeFileSync(path.join(docs, 'data', 'knowledge-loop.json'), `${JSON.stringify(output, null, 2)}\n`);
console.log(`Knowledge loop built: ${events.length} events.`);
