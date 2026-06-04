#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const LOG_PATH = path.join(ROOT, 'log.md');
const ARCHIVE_DIR = path.join(ROOT, 'logs');

const HEADING_RE = /^## (\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?:\s*UTC)?)?.*$/m;
const SPLIT_RE = /(?=^## \d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}(?:\s*UTC)?)? \| )/gm;

function parseEntry(block, index) {
  const match = block.match(HEADING_RE);
  if (!match) return null;
  const [, year, month, day, hour = '00', minute = '00'] = match;
  const key = `${year}-${month}-${day}T${hour}:${minute}:00Z`;
  return {
    block: block.split('\n').map((line) => line.trimEnd()).join('\n').trimEnd(),
    key,
    month: `${year}-${month}`,
    index,
  };
}

function uniqueEntries(entries) {
  const seen = new Set();
  const out = [];
  for (const entry of entries) {
    const firstLine = entry.block.split('\n', 1)[0];
    const signature = `${firstLine}\n${entry.block}`;
    if (seen.has(signature)) continue;
    seen.add(signature);
    out.push(entry);
  }
  return out;
}

function sortNewestFirst(entries) {
  return entries.sort((a, b) => {
    if (a.key === b.key) return a.index - b.index;
    return a.key < b.key ? 1 : -1;
  });
}

function readEntries(filePath, startIndex = 0) {
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8').trim();
  if (!raw) return [];
  return raw
    .split(SPLIT_RE)
    .map((block, idx) => parseEntry(block, startIndex + idx))
    .filter(Boolean);
}

const entries = readEntries(LOG_PATH);
if (entries.length === 0) {
  console.log('No log entries found.');
  process.exit(0);
}

const sorted = sortNewestFirst(uniqueEntries(entries));
const currentMonth = sorted[0].month;
const currentEntries = sorted.filter((entry) => entry.month === currentMonth);
const archiveEntries = sorted.filter((entry) => entry.month !== currentMonth);

fs.writeFileSync(LOG_PATH, `${currentEntries.map((entry) => entry.block).join('\n\n')}\n`);

if (archiveEntries.length > 0) {
  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  const byMonth = new Map();
  for (const entry of archiveEntries) {
    const list = byMonth.get(entry.month) ?? [];
    list.push(entry);
    byMonth.set(entry.month, list);
  }

  for (const [month, monthEntries] of byMonth.entries()) {
    const archivePath = path.join(ARCHIVE_DIR, `${month}.md`);
    const existing = readEntries(archivePath, sorted.length);
    const merged = sortNewestFirst(uniqueEntries([...monthEntries, ...existing]));
    fs.writeFileSync(archivePath, `${merged.map((entry) => entry.block).join('\n\n')}\n`);
  }
}

console.log(`Log normalized. current=${currentMonth}, currentEntries=${currentEntries.length}, archived=${archiveEntries.length}`);
