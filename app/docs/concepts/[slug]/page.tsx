import { redirect } from 'next/navigation';

export default async function LegacyConceptPage(props: PageProps<'/docs/concepts/[slug]'>) {
  const { slug } = await props.params;
  redirect(`/docs/insights/${slug}`);
}

export function generateStaticParams() {
  return [
    'bounded-experiment-loop', 'confirmed-choice-before-follow-up', 'context-over-inventory',
    'currentness-safe-travel-context', 'evidence-bounded-content-experiment', 'human-agent-fit',
    'infinity-archive-knowledge-promotion', 'known-play-execution', 'metric-question-contract',
    'structure-before-scale', 'title-selection-pressure', 'updatable-taste-timeline',
  ].map((slug) => ({ slug }));
}
