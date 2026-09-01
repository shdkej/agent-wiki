#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const LOG_PATH = path.join(ROOT, 'log.md');
const ARCHIVE_DIR = path.join(ROOT, 'logs');
const LOG_PREAMBLE = `# 운영 로그

이 파일은 Karpathy LLM Wiki의 append-only \`log.md\` 역할을 합니다. 시간순으로 **ingest · query · lint**만 기록합니다. 현재 지식의 위치는 [[index|중앙 목차]]에서 찾습니다.

## 기록 규칙

- **ingest**: 새 원본을 읽고 어떤 판단·페이지·링크를 갱신했는지 남깁니다.
- **query**: 질문이나 검색이 새 비교·판단·페이지 수정·후속 조사를 만들었을 때만 남깁니다.
- **lint**: 모순, 오래된 주장, 고립 문서, 누락 연결, 데이터 공백을 점검한 결과를 남깁니다.
- 단순 조회·같은 검색의 반복은 기록하지 않습니다.

각 query 기록에는 질문, 검색어, 읽은 Agent Wiki 페이지, raw KL을 사용했다면 경로와 ingest 상태, 결과 페이지 또는 결정만 짧게 남깁니다.`;

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

fs.writeFileSync(LOG_PATH, `${LOG_PREAMBLE}\n\n${currentEntries.map((entry) => entry.block).join('\n\n')}\n`);

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
