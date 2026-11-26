import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { getReaderPageTree } from '@/lib/reader-navigation';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/recent-changes'>) {
  return (
    <DocsLayout
      tree={getReaderPageTree()}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
