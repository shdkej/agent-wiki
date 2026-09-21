import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const docsRoot = path.join(repoRoot, 'content/docs');
const maxCommits = 20;
const maxFiles = 30;
const maxDeletedFiles = 5;

export type RecentChange = {
  path: string;
  status: 'added' | 'modified' | 'deleted' | 'renamed';
  date: string;
  subject: string;
  url?: string;
};

function git(args: string[]) {
  return execFileSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
  }).trim();
}

function toStatus(code: string): RecentChange['status'] {
  if (code.startsWith('A')) return 'added';
  if (code.startsWith('D')) return 'deleted';
  if (code.startsWith('R')) return 'renamed';
  return 'modified';
}

function toDocumentUrl(filePath: string): string {
  const withoutExtension = filePath.replace(/\.mdx$/, '');
  const withoutIndex = withoutExtension.replace(/(?:^|\/)index$/, '');
  const segments = withoutIndex.split('/').filter(Boolean).map(encodeURIComponent);
  return `/docs/${segments.join('/')}`;
}

export function getRecentChanges(): RecentChange[] {
  try {
    const commits = git(['log', `-${maxCommits}`, '--format=%H', '--', 'content/docs'])
      .split('\n')
      .filter(Boolean);
    const changes = new Map<string, RecentChange>();

    for (const commit of commits) {
      const [date, subject] = git(['show', '-s', '--format=%cs%x1f%s', commit]).split('\x1f');
      const files = git(['diff-tree', '--no-commit-id', '--name-status', '-r', commit, '--', 'content/docs'])
        .split('\n')
        .filter(Boolean);

      for (const file of files) {
        const [code, firstPath, renamedPath] = file.split('\t');
        const relativePath = renamedPath ?? firstPath;
        if (!relativePath?.endsWith('.mdx') || changes.has(relativePath)) continue;

        const absolutePath = path.join(repoRoot, relativePath);
        changes.set(relativePath, {
          path: relativePath.replace(/^content\/docs\//, ''),
          status: toStatus(code),
          date,
          subject,
          url: fs.existsSync(absolutePath) ? toDocumentUrl(relativePath.replace(/^content\/docs\//, '')) : undefined,
        });
      }
    }

    const allChanges = [...changes.values()];
    const recentChanges = allChanges.slice(0, maxFiles);
    const recentDeleted = allChanges
      .filter((change) => change.status === 'deleted')
      .slice(0, maxDeletedFiles);

    return [...recentChanges, ...recentDeleted.filter((change) => !recentChanges.includes(change))];
  } catch {
    return [];
  }
}
