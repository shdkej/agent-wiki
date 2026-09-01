#!/usr/bin/env node
/**
 * Build a small, explicit read model for the Infinity knowledge-promotion view.
 * It joins the KL ingest manifest with only documented Wiki provenance links.
 * No promotion is inferred from similar prose or filenames.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docs = path.join(root, 'content', 'docs');
const manifestPath = path.resolve(root, '..', 'ingest', 'manifest.jsonl');
const ingestIndexPath = path.resolve(root, '..', 'ingest', 'INDEX.md');
const outputPath = path.join(docs, 'data', 'promotion-index.json');

function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) return files(target);
    return entry.name.endsWith('.mdx') ? [target] : [];
  });
}

const wikiDocs = files(docs).map((file) => ({
  file,
  route: path.relative(docs, file).replace(/\.mdx$/, '').replace(/\\/g, '/'),
  text: fs.readFileSync(file, 'utf8'),
}));
const targetsBySource = new Map();
if (fs.existsSync(ingestIndexPath)) {
  const index = fs.readFileSync(ingestIndexPath, 'utf8');
  for (const block of index.split(/^### /m).slice(1)) {
    const source = block.match(/^- source:\s*`?([^`\n]+)`?/m)?.[1]?.trim();
    const target = block.match(/^- target:\s*`?([^`\n]+)`?/m)?.[1]?.trim();
    if (source && target && target !== 'none') targetsBySource.set(source, target);
  }
}

const records = fs.existsSync(manifestPath)
  ? fs.readFileSync(manifestPath, 'utf8').split('\n').filter(Boolean).map((line) => JSON.parse(line))
  : [];
const entries = records
  .filter((record) => ['selected', 'integrated'].includes(record.status))
  .map((record) => {
    const source = record.path;
    const wikiRoutes = wikiDocs
      .filter((doc) => doc.text.includes(source))
      .map((doc) => `/docs/${doc.route}`);
    const target = targetsBySource.get(source) || '';
    if (target.startsWith('agent-wiki/content/docs/')) {
      wikiRoutes.push(`/docs/${target.slice('agent-wiki/content/docs/'.length).replace(/\.mdx?$/, '')}`);
    }
    return {
      source,
      status: record.status,
      source_layer: record.source_layer,
      reason: record.reason || '',
      reviewed_at: record.reviewed_at || '',
      modified_at: record.modified_at || '',
      promotion_targets: [...new Set(wikiRoutes)].sort(),
      promotion_target_note: target && !target.startsWith('agent-wiki/content/docs/') ? target : '',
    };
  })
  .sort((a, b) => String(b.reviewed_at || b.modified_at).localeCompare(String(a.reviewed_at || a.modified_at)));

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify({ generated_at: new Date().toISOString(), entries }, null, 2)}\n`);
console.log(`Promotion index built: ${entries.length} selected/integrated sources.`);
