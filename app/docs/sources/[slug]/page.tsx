import { redirect } from 'next/navigation';

export default function LegacySourcePage() {
  redirect('/docs/mapped/source-category-map');
}

export function generateStaticParams() {
  return ['Communication', 'Fundamental', 'Health', 'Human', 'Idea', 'Integration', 'Meta', 'blog', 'deep-knowledge']
    .map((slug) => ({ slug }));
}
