#!/usr/bin/env node
import { execFileSync } from 'node:child_process';

const changed = execFileSync('git', ['diff', '--cached', '--name-only'], { encoding: 'utf8' })
  .split('\n').filter(Boolean);

const knowledgeChange = changed.some((file) => /^(content\/docs\/(insights|mapped|maintenance)\/|README\.md$)/.test(file));
const logChange = changed.some((file) => /^(log\.md|content\/docs\/log\.mdx|content\/docs\/logs\/)/.test(file));

if (knowledgeChange && !logChange) {
  console.error('Log gate failed: a knowledge-page change needs a log entry, or an explicit --no-verify exception for a simple edit.');
  process.exit(1);
}

console.log('Log gate passed.');
