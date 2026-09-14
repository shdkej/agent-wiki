import fs from 'node:fs';
import path from 'node:path';
import { redirect } from 'next/navigation';

const mappedRoot = path.join(process.cwd(), 'content', 'docs', 'outputs');

function routes(dir: string, prefix: string[] = []): string[][] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const next = [...prefix, entry.name];
    if (entry.isDirectory()) return routes(path.join(dir, entry.name), next);
    return entry.name.endsWith('.mdx') ? [[...prefix, entry.name.slice(0, -4)]] : [];
  });
}

export default async function LegacyMappedPage(props: PageProps<'/docs/mapped/[...slug]'>) {
  const { slug } = await props.params;
  redirect(`/docs/outputs/${slug.join('/')}`);
}

export function generateStaticParams() {
  return routes(mappedRoot).map((slug) => ({ slug }));
}
