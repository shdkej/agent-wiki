import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: '에이전트 위키',
      url: '/docs',
    },
    links: [
      {
        text: '최근 변경',
        url: '/recent-changes',
        active: 'url',
      },
      {
        text: '문서',
        url: '/docs',
        active: 'nested-url',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
