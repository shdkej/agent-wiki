#!/usr/bin/env node
import { execFileSync } from 'node:child_process';

const changed = execFileSync('git', ['diff', '--cached', '--name-only'], { encoding: 'utf8' })
  .split('\n').filter(Boolean);

const knowledgeChange = changed.some((file) => /^(content\/docs\/(concepts|outputs\/maintenance)\/|README\.md$)/.test(file));
const legacyLogChange = changed.some((file) => /^(content\/docs\/outputs\/log\.mdx|content\/docs\/outputs\/logs\/)/.test(file));

if (knowledgeChange && legacyLogChange) {
  console.error('Log gate failed: Agent Wiki no longer owns operational logs. Record the decision in Knowledge Lab logs/agent-wiki-query.md instead.');
  process.exit(1);
}

console.log('Log gate passed: Knowledge Lab owns the operational-log receipt.');
