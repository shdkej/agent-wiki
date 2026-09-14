import { redirect } from 'next/navigation';

export default async function LegacyLogArchivePage(props: PageProps<'/docs/logs/[slug]'>) {
  const { slug } = await props.params;
  redirect(`/docs/outputs/logs/${slug}`);
}

export function generateStaticParams() {
  return ['2026-05', '2026-06', '2026-07', '2026-08'].map((slug) => ({ slug }));
}
