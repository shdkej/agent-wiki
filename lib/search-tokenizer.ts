import type { Tokenizer } from '@orama/orama';

const WORDS = /[가-힣]+|[a-z0-9]+/gi;
const KOREAN = /[가-힣]/;

/**
 * Orama does not ship a Korean language pack. Character bigrams preserve
 * partial-match behaviour for 조사/어미 while keeping English token matching.
 */
export const koreanFriendlyTokenizer: Tokenizer = {
  language: 'korean-friendly',
  normalizationCache: new Map(),
  tokenize(raw: string) {
    const words = raw.normalize('NFKC').toLocaleLowerCase('ko-KR').match(WORDS) ?? [];
    return words.flatMap((word) => {
      if (!KOREAN.test(word)) return [word];
      const bigrams = Array.from({ length: Math.max(0, word.length - 1) }, (_, index) => word.slice(index, index + 2));
      return [word, ...bigrams];
    });
  },
};
