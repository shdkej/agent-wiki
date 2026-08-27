import { source } from '@/lib/source';
import { koreanFriendlyTokenizer } from '@/lib/search-tokenizer';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  components: { tokenizer: koreanFriendlyTokenizer },
});
