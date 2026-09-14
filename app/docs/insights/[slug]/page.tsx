import { redirect } from 'next/navigation';

export default async function LegacyInsightPage(props: PageProps<'/docs/insights/[slug]'>) {
  const { slug } = await props.params;
  redirect(`/docs/concepts/insights/${slug}`);
}

export function generateStaticParams() {
  return [
    '2026-09-source-refresh', 'bounded-experiment-loop', 'change-friendly-operating-structure',
    'confirmed-choice-before-follow-up', 'context-over-inventory', 'currentness-safe-travel-context',
    'evidence-bounded-content-experiment', 'first-session-onboarding-gates', 'human-agent-fit',
    'infinity-archive-knowledge-promotion', 'kl-note-router', 'knowledge-lab-operating-thesis',
    'known-play-execution', 'metric-question-contract', 'observable-feedback-systems',
    'original-proof-distribution-loop', 'single-scene-single-criterion-carousel-contract',
    'structure-before-scale', 'sufficient-boundary-for-next-action', 'title-selection-pressure',
    'updatable-taste-timeline',
  ].map((slug) => ({ slug }));
}
