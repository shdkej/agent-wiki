import { redirect } from 'next/navigation';

export default async function LegacyMaintenancePage(props: PageProps<'/docs/maintenance/[slug]'>) {
  const { slug } = await props.params;
  redirect(`/docs/outputs/maintenance/${slug}`);
}

export function generateStaticParams() {
  return [
    'initial-import-plan', 'review-routing-currentness', 'source-mapping', 'version-tracker-refresh',
    'x-api-timeline-operating',
  ].map((slug) => ({ slug }));
}
