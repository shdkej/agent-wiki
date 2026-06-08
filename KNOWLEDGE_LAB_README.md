# 지식 랩

`external-repos/shdkej.github.io/content`를 기반으로 만든 실험용 LLM 위키 작업 공간이다.

## 구조

- `source/shdkej-content/` — 블로그/content 레포에서 복사한 원본 노트
- `source/external-links/` — 사용자 원본과 섞지 않는 외부 소스 레이어. 기본 원본 1차 사이클 이후에는 agent-wiki의 적극 입력 후보로 본다.
- `agent-wiki/` — 에이전트가 유지하는 위키 레이어
- `infinity/` — 실행 intent, archive, reports, 판단 산출물. 완료된 산출물은 agent-wiki 컴파일 입력으로도 참고한다.
- `schema/` — source/wiki/log/frontmatter 등 Knowledge Lab 운영 스키마
- `human-reviews/` — 사용자가 직접 고친 노트나 비교용 스냅샷
- `configs/agent-rules.md` — 장기 운영 규칙
- `scripts/` — 보조 스크립트
- `logs/` — 실행 로그와 일일 요약

## 운영 의도

이 시스템은 아래를 할 수 있다.
- 원본 노트의 주제와 기본 구조를 유지한다
- 그 경계 안에서 정리, 탐구, 개선을 수행한다
- 각 문서를 500줄 이하로 유지한다
- 나중에 사용자가 직접 고친 노트와 에이전트 노트를 비교한다
- 매시간 한 카테고리씩 탐구한다
- 매일 사용자에게 요약을 보낸다

이 시스템은 아래를 하면 안 된다.
- 가져온 원본 노트를 조용히 덮어쓴다
- 노트를 다른 주제로 바꿔버린다
- 문서를 끝없이 길게 늘린다

## LLM Wiki 원칙

Knowledge Lab은 Karpathy식 LLM wiki 패턴을 따른다.

- raw source는 `source/`에 보존한다.
- 컴파일된 지식은 `agent-wiki/`에 축적한다.
- 운영 관례와 문서 타입은 `schema/`에 고정한다.
- 새 자료를 넣을 때는 단순 요약으로 끝내지 않고, 관련 wiki 페이지와 index/log에 연결할지 판단한다.
- `source/shdkej-content/`의 1차 mapped 사이클이 안정된 뒤에는 `source/external-links/`와 `infinity/` 산출물을 더 많이 참고해 agent-wiki를 갱신한다.
