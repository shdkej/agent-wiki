import { redirect } from 'next/navigation';

export default async function LegacyDiaryPage(props: PageProps<'/docs/diary/[slug]'>) {
  const { slug } = await props.params;
  redirect(`/docs/outputs/diary/${slug}`);
}

export function generateStaticParams() {
  return [
    '2026-06-06', '2026-07-02', '2026-07-11', '2026-07-12', '2026-07-13', '2026-07-14',
    '2026-07-15', '2026-07-16', '2026-07-17', '2026-07-20', '2026-07-29', '2026-08-05',
    '2026-08-09', '2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28',
    '2026-08-29', '2026-08-30', '2026-09-09',
  ].map((slug) => ({ slug }));
}
