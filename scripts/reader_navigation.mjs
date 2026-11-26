import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const content = fileURLToPath(new URL('../content/', import.meta.url));
const outputs = path.join(content, 'docs', 'outputs');
const index = path.join(content, 'docs', 'index.mdx');
const chapters = JSON.parse(fs.readFileSync(path.join(content, 'reader-navigation.json'), 'utf8'));

function readingRoutes(dir = outputs, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const name = prefix + entry.name;
    if (entry.isDirectory()) {
      return name === 'axes' ? [] : readingRoutes(path.join(dir, entry.name), name + '/');
    }
    if (!name.endsWith('.mdx') || ['Portfolio.mdx', 'source-category-map.mdx'].includes(name)) return [];
    return [name.replace(/\.mdx$/, '').replace(/\/index$/, '')];
  });
}

function validate() {
  const routes = readingRoutes();
  const assigned = chapters.flatMap((chapter) => chapter.notes.map((note) => note.path));
  const repeated = assigned.filter((route, i) => assigned.indexOf(route) < i);
  const missing = routes.filter((route) => !assigned.includes(route));
  const unknown = assigned.filter((route) => !routes.includes(route));
  if (repeated.length || missing.length || unknown.length) {
    throw new Error(`Reader navigation: repeated=${repeated.join(', ')}; unassigned=${missing.join(', ')}; unknown=${unknown.join(', ')}`);
  }
  return assigned.length;
}

function render() {
  const lines = [
    '---',
    'title: "에이전트 위키"',
    'description: "생활, 공부, 개발, 사업에서 쌓은 노트입니다."',
    'full: true',
    '---',
    '',
    '{/* Generated from content/reader-navigation.json by npm run generate:reader-nav. */}',
    '',
    '<nav className="reader-directory-jump" aria-label="주제로 바로 이동">',
    ...chapters.map((chapter) => `<a href="#reader-${chapter.id}">${chapter.title}</a>`),
    '</nav>',
    '',
    '<div className="reader-directory">',
  ];
  for (const chapter of chapters) {
    const links = chapter.notes.map(({ path: route, label }) => `- [[outputs/${route}|${label}]]`);
    lines.push(
      `<section className="reader-directory-chapter" id="reader-${chapter.id}">`,
      '',
      `## ${chapter.title}`,
      '',
      chapter.question,
      '',
      ...links.slice(0, 3),
      '',
      '<details>',
      `<summary>전체 목차 (${links.length}편)</summary>`,
      '',
      ...links.slice(3),
      '',
      '</details>',
      '',
      '</section>',
    );
  }
  lines.push(
    '</div>',
    '',
    '[[outputs/Portfolio|포트폴리오]] · [[outputs/source-category-map|원본 주제 지도]]',
    '',
  );
  return lines.join('\n');
}

const count = validate();
const contentText = render();
if (process.argv[2] === 'generate') {
  fs.writeFileSync(index, contentText);
} else if (process.argv[2] === 'verify') {
  if (fs.readFileSync(index, 'utf8') !== contentText) {
    throw new Error('The reader index is stale; run npm run generate:reader-nav');
  }
} else {
  throw new Error('Usage: reader_navigation.mjs <generate|verify>');
}

console.log(`Reader navigation: ${chapters.length} chapters, ${count} notes assigned once.`);
