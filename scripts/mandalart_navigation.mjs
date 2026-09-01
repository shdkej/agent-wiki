import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = path.join(repoRoot, 'content/docs');
const mappedRoot = path.join(docsRoot, 'mapped');
const sourceRoot = process.env.MANDALART_SOURCE_ROOT ?? path.resolve(repoRoot, '../source/shdkej-content');
const manifestPath = path.join(docsRoot, 'data/mandalart-core-inventory.json');

// The axes are stable names; node inventories are always read from the source and
// mapped trees so a future eighth Health/Idea node is never masked by a "64" constant.
const AXES = [
  { label: 'Fundamental', sourceDir: 'Fundamental', mappedDir: 'Fundamental', hub: 'fundamental' },
  { label: 'Deep Knowledge', sourceDir: 'Deep Knowledge', mappedDir: 'deep-knowledge', hub: 'deep-knowledge' },
  { label: 'Integration', sourceDir: 'Integration', mappedDir: 'Integration', hub: 'integration' },
  { label: 'Communication', sourceDir: 'Communication', mappedDir: 'Communication', hub: 'communication' },
  { label: 'Health', sourceDir: 'Health', mappedDir: 'Health', hub: 'health' },
  { label: 'Human', sourceDir: 'Human', mappedDir: 'Human', hub: 'human' },
  { label: 'Idea', sourceDir: 'Idea', mappedDir: 'Idea', hub: 'idea' },
  { label: 'Meta', sourceDir: 'Meta', mappedDir: 'Meta', hub: 'meta' },
];

function namesIn(dir, extension) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(extension))
    .map((entry) => entry.name.slice(0, -extension.length))
    .sort((a, b) => a.localeCompare(b));
}

function sourceInventoryAvailable() {
  return fs.existsSync(sourceRoot);
}

function nodeKeys(names) {
  return new Set(names.map((name) => name.toLowerCase()));
}

function difference(names, expected) {
  return names.filter((name) => !expected.has(name.toLowerCase()));
}

export function inventory() {
  return AXES.map((axis) => ({
    ...axis,
    source: namesIn(path.join(sourceRoot, axis.sourceDir), '.md'),
    mapped: namesIn(path.join(mappedRoot, axis.mappedDir), '.mdx'),
  }));
}

function assertParity(items) {
  // GitHub Pages checks out agent-wiki only, not the sibling raw-source tree.
  // In that environment route/link validation still runs; parity runs whenever
  // this repository is checked out inside the Knowledge Lab workspace.
  if (!sourceInventoryAvailable()) return;
  const problems = [];
  for (const axis of items) {
    // Deep Knowledge is deliberately lower-case in the mapped route while its
    // source filenames use title case. Identity is case-insensitive here; the
    // rendered link always uses the mapped filesystem spelling.
    const sourceKeys = nodeKeys(axis.source);
    const mappedKeys = nodeKeys(axis.mapped);
    const sourceOnly = difference(axis.source, mappedKeys);
    const mappedOnly = difference(axis.mapped, sourceKeys);
    if (sourceOnly.length || mappedOnly.length) {
      problems.push(`${axis.label}: source-only=[${sourceOnly.join(', ')}], mapped-only=[${mappedOnly.join(', ')}]`);
    }
  }
  if (problems.length) throw new Error(`Mandalart source/mapped parity failed:\n${problems.join('\n')}`);
}

function manifestFrom(items) {
  return {
    schemaVersion: 1,
    generatedFrom: 'source/shdkej-content core Mandalart axes',
    axes: items.map(({ label, sourceDir, mappedDir, hub, source }) => ({ label, sourceDir, mappedDir, hub, nodes: source })),
  };
}

function readManifest() {
  if (!fs.existsSync(manifestPath)) throw new Error(`Core inventory manifest missing: ${manifestPath}`);
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
}

function assertManifest(items, manifest) {
  if (manifest.schemaVersion !== 1 || !Array.isArray(manifest.axes)) throw new Error('Core inventory manifest has an unsupported shape');
  if (manifest.axes.length !== AXES.length) throw new Error(`Core inventory manifest must contain ${AXES.length} axes`);
  const errors = [];
  for (const axis of items) {
    const recorded = manifest.axes.find((entry) => entry.label === axis.label && entry.sourceDir === axis.sourceDir && entry.mappedDir === axis.mappedDir && entry.hub === axis.hub);
    if (!recorded || !Array.isArray(recorded.nodes)) {
      errors.push(`${axis.label}: missing or mismatched axis manifest`);
      continue;
    }
    const manifestKeys = nodeKeys(recorded.nodes);
    const mappedOnly = difference(axis.mapped, manifestKeys);
    const manifestOnly = difference(recorded.nodes, nodeKeys(axis.mapped));
    if (mappedOnly.length || manifestOnly.length) errors.push(`${axis.label}: mapped-only=[${mappedOnly.join(', ')}], manifest-only=[${manifestOnly.join(', ')}]`);
    if (sourceInventoryAvailable()) {
      const sourceOnly = difference(axis.source, manifestKeys);
      const sourceManifestOnly = difference(recorded.nodes, nodeKeys(axis.source));
      if (sourceOnly.length || sourceManifestOnly.length) errors.push(`${axis.label}: source-only=[${sourceOnly.join(', ')}], manifest-only=[${sourceManifestOnly.join(', ')}]`);
    }
  }
  if (errors.length) throw new Error(`Mandalart core inventory parity failed:\n${errors.join('\n')}`);
}

function mapDocument(items) {
  const total = items.reduce((sum, axis) => sum + axis.mapped.length, 0);
  const lines = [
    '---',
    'title: "원본 주제 지도"',
    '---',
    '',
    '원본 만다라트의 8개 축에서 현재 대응되는 노트를 탐색합니다. 노드 수는 source와 mapped를 함께 검사해 생성하며, 이 페이지는 `npm run generate:mandalart-nav`로 갱신합니다.',
    '',
    `현재 검증 인벤토리: **8개 축 · ${total}개 노드**.`,
    '',
  ];
  for (const axis of items) {
    lines.push(`## [[axes/${axis.hub}|${axis.label}]]`, '', `현재 ${axis.mapped.length}개 노드. [[axes/${axis.hub}|${axis.label} 축 열기]]`, '');
  }
  return `${lines.join('\n').replace(/\n+$/, '')}\n`;
}

function hubDocument(axis) {
  const lines = [
    '---',
    `title: "${axis.label} 원본 주제"`,
    '---',
    '',
    `원본 주제 지도에서 연결된 ${axis.mapped.length}개 현재 mapped 노드입니다.`, '',
    '[[../source-category-map|원본 주제 지도로 돌아가기]]', '',
  ];
  for (const node of axis.mapped) {
    lines.push(`- [[../${axis.mappedDir}/${node}|${node}]]`);
  }
  return `${lines.join('\n').replace(/\n+$/, '')}\n`;
}

export function generate() {
  if (!sourceInventoryAvailable()) throw new Error('Cannot generate the core inventory manifest without the raw source checkout');
  const items = inventory();
  assertParity(items);
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifestFrom(items), null, 2)}\n`);
  fs.mkdirSync(path.join(mappedRoot, 'axes'), { recursive: true });
  fs.writeFileSync(path.join(mappedRoot, 'source-category-map.mdx'), mapDocument(items));
  for (const axis of items) {
    fs.writeFileSync(path.join(mappedRoot, 'axes', `${axis.hub}.mdx`), hubDocument(axis));
  }
  return items;
}

function linkedTargets(document) {
  return [...document.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((match) => match[1]);
}

export function verify() {
  const items = inventory();
  assertParity(items);
  assertManifest(items, readManifest());
  const expectedMap = mapDocument(items);
  const actualMapPath = path.join(mappedRoot, 'source-category-map.mdx');
  const actualMap = fs.readFileSync(actualMapPath, 'utf8');
  if (actualMap !== expectedMap) throw new Error('source-category-map.mdx is stale; run npm run generate:mandalart-nav');

  const mapLinks = new Set(linkedTargets(actualMap));
  const index = fs.readFileSync(path.join(docsRoot, 'index.mdx'), 'utf8');
  if (!linkedTargets(index).includes('mapped/source-category-map')) throw new Error('index.mdx must link to mapped/source-category-map');

  for (const axis of items) {
    const hubTarget = `axes/${axis.hub}`;
    if (!mapLinks.has(hubTarget)) throw new Error(`map is missing axis hub link: ${hubTarget}`);
    const hubPath = path.join(mappedRoot, 'axes', `${axis.hub}.mdx`);
    if (!fs.existsSync(hubPath)) throw new Error(`axis hub missing: ${hubPath}`);
    const actualHub = fs.readFileSync(hubPath, 'utf8');
    if (actualHub !== hubDocument(axis)) throw new Error(`${axis.label} hub is stale; run npm run generate:mandalart-nav`);
    const hubLinks = new Set(linkedTargets(actualHub));
    for (const node of axis.mapped) {
      const target = `../${axis.mappedDir}/${node}`;
      if (!hubLinks.has(target)) throw new Error(`${axis.label} hub is missing node link: ${target}`);
      if (!fs.existsSync(path.join(mappedRoot, axis.mappedDir, `${node}.mdx`))) throw new Error(`mapped target missing: ${target}`);
    }
  }
  return items;
}

const command = process.argv[2];
try {
  const items = command === 'generate' ? generate() : command === 'verify' ? verify() : null;
  if (!items) throw new Error('Usage: node scripts/mandalart_navigation.mjs <generate|verify>');
  const total = items.reduce((sum, axis) => sum + axis.mapped.length, 0);
  const sourceStatus = sourceInventoryAvailable() ? `${items.reduce((sum, axis) => sum + axis.source.length, 0)} source nodes` : 'source parity skipped (raw source unavailable)';
  console.log(`Mandalart navigation ${command} passed: ${items.length} axes, ${sourceStatus}, ${total} mapped nodes.`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
