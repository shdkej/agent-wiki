import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import fs from 'node:fs';
import path from 'node:path';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

const DOCS_DIR = path.resolve(process.cwd(), 'content/docs');

function toRoutePath(relPath: string): string {
  return relPath.replace(/\\/g, '/').replace(/\.mdx$/, '').replace(/(?:^|\/)index$/, '');
}

function toLookupKey(routePath: string): string {
  return routePath
    .replace(/\\/g, '/')
    .replace(/\.mdx$/, '')
    .replace(/(?:^|\/)index$/, '')
    .split('/')
    .filter(Boolean)
    .map((segment) => segment.trim().replace(/\s+/g, '-').toLowerCase())
    .join('/');
}

function listDocRoutes(dir = DOCS_DIR, prefix = ''): string[] {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) return listDocRoutes(full, rel);
    if (!entry.isFile() || !entry.name.endsWith('.mdx')) return [];
    return [toRoutePath(rel)];
  });
}

const docRouteByLookupKey = new Map(
  listDocRoutes().map((route) => [toLookupKey(route), route]),
);

function resolveWikiTarget(target: string, filePath: string | undefined): string {
  const fileDir = filePath ? path.dirname(path.resolve(filePath)) : DOCS_DIR;
  const relBase = path.relative(DOCS_DIR, fileDir).split(path.sep).filter(Boolean).join('/');
  const joined = target.startsWith('/') ? target.slice(1) : (relBase ? `${relBase}/${target}` : target);
  const normalized = path.posix.normalize(joined);
  const route = docRouteByLookupKey.get(toLookupKey(normalized)) ?? toRoutePath(normalized);
  return '/docs/' + route.split('/').filter(Boolean).map(encodeURIComponent).join('/');
}

function remarkWikilink() {
  const re = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  return (tree: any, file: any) => {
    const filePath: string | undefined = file?.path ?? file?.history?.[0];
    const walk = (node: any) => {
      if (!node || !Array.isArray(node.children)) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (!child) continue;
        if (child.type === 'link' || child.type === 'code' || child.type === 'inlineCode') continue;
        if (child.type === 'text' && typeof child.value === 'string' && child.value.includes('[[')) {
          const value: string = child.value;
          re.lastIndex = 0;
          const next: any[] = [];
          let last = 0;
          let m: RegExpExecArray | null;
          while ((m = re.exec(value)) !== null) {
            if (m.index > last) next.push({ type: 'text', value: value.slice(last, m.index) });
            const target = m[1];
            const alias = (m[2] ?? m[1]).trim();
            next.push({
              type: 'link',
              url: resolveWikiTarget(target, filePath),
              children: [{ type: 'text', value: alias }],
            });
            last = m.index + m[0].length;
          }
          if (next.length === 0) continue;
          if (last < value.length) next.push({ type: 'text', value: value.slice(last) });
          node.children.splice(i, 1, ...next);
          i += next.length - 1;
        } else {
          walk(child);
        }
      }
    };
    walk(tree);
  };
}

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkWikilink],
  },
});
