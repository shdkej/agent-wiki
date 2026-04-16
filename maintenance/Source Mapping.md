# 소스 매핑

이 랩은 원본 노트 시스템을 8x8 만다라트 구조로 본다.

## 매핑 규칙
- `source/shdkej-content/`의 상위 폴더 = 대분류
- 그 안의 각 markdown 노트 = 하나의 카테고리 노드
- 유지되는 위키는 여러 노트를 무리하게 하나로 합치지 말고, 각 노트의 의미를 보존하는 1:1 대응 페이지를 만든다

## 현재 목표
예를 들어 아래 원본 노트가 있으면:
- `source/shdkej-content/Fundamental/Architecture.md`

아래 대응 페이지를 만든다:
- `agent-wiki/mapped/Fundamental/Architecture.md`

## 이게 중요한 이유
사용자는 원래의 노트 구조 자체를 의미 있는 사고 격자로 보고 있다. 그래서 이 시스템은 몇 개의 큰 요약 문서만 만드는 대신, 원래 노트 격자를 관찰 가능한 채로 유지해야 한다.
