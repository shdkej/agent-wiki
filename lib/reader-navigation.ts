import type { Item, Root } from 'fumadocs-core/page-tree';
import chapters from '@/content/reader-navigation.json';
import { source } from '@/lib/source';

function readerPage(slug: string[], label: string): Item {
  const page = source.getPage(slug);
  if (!page) throw new Error(`Reader navigation page is missing: ${slug.join('/')}`);
  return { type: 'page', $id: page.path, url: page.url, name: label };
}

export function getReaderPageTree(): Root {
  return {
    name: '에이전트 위키',
    children: [
      readerPage([], '주제별 목차'),
      ...chapters.map((chapter) => ({
        type: 'folder' as const,
        $id: chapter.id,
        name: chapter.title,
        children: chapter.notes.map(({ path, label }) => readerPage(['outputs', ...path.split('/')], label)),
      })),
      { type: 'separator', name: '둘러보기' },
      readerPage(['outputs', 'Portfolio'], '포트폴리오'),
      readerPage(['outputs', 'source-category-map'], '원본 주제 지도'),
    ],
  };
}
