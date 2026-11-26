import Link from 'next/link';
import { docsRoute } from '@/lib/shared';

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <meta httpEquiv="refresh" content="0; url=./docs/" />
      <Link className="underline underline-offset-4" href={docsRoute}>주제별 목차</Link>
    </main>
  );
}
