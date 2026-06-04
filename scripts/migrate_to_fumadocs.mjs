#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS = path.join(ROOT, 'content', 'docs');

const TOP_LEVEL_DIRS = ['concepts', 'diary', 'logs', 'mapped', 'sources', 'syntheses', 'maintenance'];
const ROOT_FILES = ['README.md', 'index.md', 'KNOWLEDGE_LAB_README.md', 'AGENT_RULES.md', 'log.md'];
const SKIP_FILES = new Set(['_sidebar.md', '_navbar.md']);

function extractTitle(content, fallback) {
  const lines = content.split('\n');
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith('# ')) return t.slice(2).trim();
  }
  return fallback;
}

function hasFrontmatter(content) {
  return content.startsWith('---\n');
}

function escapeYaml(s) {
  return s.replace(/"/g, '\\"');
}

function slugifySegment(s) {
  return s.replace(/\s+/g, '-').toLowerCase();
}

function slugifyRelPath(rel) {
  const ext = path.extname(rel);
  const noExt = rel.slice(0, rel.length - ext.length);
  return noExt.split(path.sep).map(slugifySegment).join(path.sep) + ext;
}

function processFile(srcPath, destPath, fallbackTitle) {
  let content = fs.readFileSync(srcPath, 'utf-8').split('\n').map((line) => line.trimEnd()).join('\n');
  if (!hasFrontmatter(content)) {
    const title = extractTitle(content, fallbackTitle);
    const fm = `---\ntitle: "${escapeYaml(title)}"\n---\n\n`;
    content = fm + content;
  }
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, content);
}

function walk(dir, baseSrc, baseDest) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const src = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(src, baseSrc, baseDest);
    } else if (entry.name.endsWith('.md') && !SKIP_FILES.has(entry.name)) {
      const rel = path.relative(baseSrc, src);
      const destRel = slugifyRelPath(rel.replace(/\.md$/, '.mdx'));
      const destPath = path.join(baseDest, destRel);
      const fallback = path.basename(entry.name, '.md');
      processFile(src, destPath, fallback);
    }
  }
}

// remove existing scaffold sample
for (const f of ['index.mdx', 'test.mdx']) {
  const p = path.join(DOCS, f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
}

// migrate top-level dirs
for (const d of TOP_LEVEL_DIRS) {
  const srcDir = path.join(ROOT, d);
  if (!fs.existsSync(srcDir)) continue;
  walk(srcDir, ROOT, DOCS);
}

// migrate root files
for (const f of ROOT_FILES) {
  const src = path.join(ROOT, f);
  if (!fs.existsSync(src)) continue;
  const destName = f === 'README.md' ? 'index.mdx' : f.replace(/\.md$/, '.mdx').toLowerCase();
  const dest = path.join(DOCS, destName);
  processFile(src, dest, f.replace(/\.md$/, ''));
}

// generate meta.json for top-level ordering
const meta = {
  title: 'Agent Wiki',
  pages: ['index', '---Concepts---', 'concepts', '---Sources---', 'sources', '---Diary---', 'diary', '---Logs---', 'log', 'logs', '---Mapped---', 'mapped', '---Syntheses---', 'syntheses', '---Maintenance---', 'maintenance', '---Reference---', 'agent_rules', 'knowledge_lab_readme'],
};
fs.writeFileSync(path.join(DOCS, 'meta.json'), JSON.stringify(meta, null, 2));

console.log('Migration complete.');
