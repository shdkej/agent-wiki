import { getReaderPageTree } from '@/lib/reader-navigation';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={getReaderPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
