import { redirect } from 'next/navigation';

export default async function LegacySynthesisPage(props: PageProps<'/docs/syntheses/[slug]'>) {
  const { slug } = await props.params;
  redirect('/docs/outputs/source-category-map');
}

export function generateStaticParams() {
  return [
    'change-friendly-operating-structure', 'first-session-onboarding-gates', 'kl-note-router',
    'knowledge-lab-operating-thesis', 'observable-feedback-systems', 'original-proof-distribution-loop',
    'source-category-map', 'sufficient-boundary-for-next-action',
  ].map((slug) => ({ slug }));
}
