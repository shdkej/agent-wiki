#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS = path.join(ROOT, 'content', 'docs');

if (!fs.existsSync(DOCS)) {
  throw new Error('content/docs must exist: it is the canonical Agent Wiki document tree.');
}

// generate meta.json for top-level ordering
const meta = {
  title: 'Agent Wiki',
  pages: ['index', '---Insights---', 'insights', '---Diary---', 'diary', '---Logs---', 'log', 'logs', '---Mapped---', 'mapped', '---Maintenance---', 'maintenance', '---Reference---', 'agent_rules'],
};
fs.writeFileSync(path.join(DOCS, 'meta.json'), JSON.stringify(meta, null, 2));

console.log('Canonical document metadata refreshed.');
