import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
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

function slugifySegment(s: string): string {
  return s.trim().replace(/\s+/g, '-').toLowerCase();
}

function resolveWikiTarget(target: string, filePath: string | undefined): string {
  const fileDir = filePath ? path.dirname(path.resolve(filePath)) : DOCS_DIR;
  const relBase = path.relative(DOCS_DIR, fileDir).split(path.sep).filter(Boolean).join('/');
  const joined = target.startsWith('/') ? target.slice(1) : (relBase ? `${relBase}/${target}` : target);
  const normalized = path.posix.normalize(joined);
  const segments = normalized.split('/').filter((s) => s && s !== '.').map(slugifySegment);
  return '/docs/' + segments.join('/');
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
