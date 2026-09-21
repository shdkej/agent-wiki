import Link from 'next/link';
import { getRecentChanges } from '@/lib/recent-changes';

export const dynamic = 'force-static';

const statusLabel = {
  added: '추가',
  modified: '수정',
  deleted: '삭제',
  renamed: '이동',
} as const;

export default function RecentChangesPage() {
  const changes = getRecentChanges();

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium text-fd-muted-foreground">Git 변경 이력</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">최근 변경된 파일</h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-fd-muted-foreground">
        최근 커밋에서 바뀐 위키 문서를 파일 단위로 모았습니다. 같은 파일은 가장 최근 변경만 표시합니다.
      </p>

      {changes.length === 0 ? (
        <p className="mt-12 text-fd-muted-foreground">표시할 변경 파일이 없습니다.</p>
      ) : (
        <ol className="mt-12 divide-y divide-fd-border border-y border-fd-border">
          {changes.map((change) => (
            <li key={change.path} className="py-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-fd-muted-foreground">
                <span className="font-medium text-fd-foreground">{statusLabel[change.status]}</span>
                <time dateTime={change.date}>{change.date}</time>
                <span className="truncate">{change.subject}</span>
              </div>
              {change.url ? (
                <Link href={change.url} className="mt-2 block break-all text-lg font-medium text-fd-foreground underline decoration-fd-muted-foreground/40 underline-offset-4 hover:decoration-fd-foreground">
                  {change.path}
                </Link>
              ) : (
                <p className="mt-2 break-all text-lg font-medium text-fd-muted-foreground line-through">{change.path}</p>
              )}
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}
