import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/recent-changes'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
    >
      <div className="max-md:layout:[--fd-header-height:--spacing(14)]">{children}</div>
    </DocsLayout>
  );
}
