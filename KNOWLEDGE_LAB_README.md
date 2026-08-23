# 지식 랩

`external-repos/shdkej.github.io/content`를 기반으로 만든 실험용 LLM 위키 작업 공간이다.

## 구조

- `source/shdkej-content/` — 블로그/content 레포에서 복사한 원본 노트
- `source/external-links/` — 사용자 원본과 섞지 않는 외부 소스 레이어. 기본 원본 1차 사이클 이후에는 agent-wiki의 적극 입력 후보로 본다.
- `source/openclaw-system/` — SAM/OpenClaw 운영 문서, daily-tracking, 회고, 운영 데이터의 정본 소스. 이 경로에 들어온 문서와 데이터는 Knowledge Lab ingest 입력으로 본다.
- `ingest/` — Knowledge Lab 전체 입력의 ingest 상태·판정·컴파일 대상을 관리하는 루트 레이어. 정본 인덱스는 `ingest/INDEX.md`다.
- `agent-wiki/` — 에이전트 위키 레이어(git 서브모듈). Knowledge Lab의 ingest를 관리하지 않는 독립 프로젝트다.
- `infinity` — 별도 Git 레포([shdkej/infinity](https://github.com/shdkej/infinity))의 로컬 checkout. 실행 intent, artifacts, reports는 Infinity 레포가 소유한다. 유효 판정된 결과만 KL `source/infinity/`에 보관한다.
- `schema/` — source/wiki/log/frontmatter 등 Knowledge Lab 운영 스키마
- `human-reviews/` — 사용자가 직접 고친 노트나 비교용 스냅샷
- `schema/agent-rules.md` — 장기 운영 규칙
- `schema/red-team-review.md` — 산출물 레드팀 검증 규칙
- `schema/evaluation.md` — 문서 작업 품질 평가 절차
- `scripts/` — 보조 스크립트(`publish-agent-wiki.sh`, `sync-evaluation.mjs`)
- `logs/` — 평가 로그(`EVALUATION_NOTES.md` 원본, `EVALUATION_RECAP.md` 요약)와 운영 교훈(`OPERATING_LESSONS.md`)

## 운영 의도

이 시스템은 아래를 할 수 있다.
- 원본 노트의 주제와 기본 구조를 유지한다
- 그 경계 안에서 정리, 탐구, 개선을 수행한다
- 각 문서를 500줄 이하로 유지한다
- 나중에 사용자가 직접 고친 노트와 에이전트 노트를 비교한다
- 정기 사이클(현재 4시간 간격)마다 한 카테고리씩 탐구한다
- 매일 사용자에게 요약을 보낸다

이 시스템은 아래를 하면 안 된다.
- 가져온 원본 노트를 조용히 덮어쓴다
- 노트를 다른 주제로 바꿔버린다
- 문서를 끝없이 길게 늘린다

## LLM Wiki 원칙

Knowledge Lab은 Karpathy식 LLM wiki 패턴을 따른다.

- raw source는 `source/`에 보존한다.
- ingest 후보와 처리 상태는 Knowledge Lab 루트의 `ingest/INDEX.md`에서 관리한다.
- 컴파일된 지식은 `agent-wiki/`에 축적한다.
- 운영 관례와 문서 타입은 `schema/`에 고정한다.
- 새 자료를 넣을 때는 단순 요약으로 끝내지 않고, 관련 wiki 페이지와 index/log에 연결할지 판단한다.
- `source/shdkej-content/`의 1차 mapped 사이클이 안정된 뒤에는 `source/external-links/`와 KL `source/infinity/`에 선별 보관된 결과만 참고한다. 별도 소비자 프로젝트의 파일은 Knowledge Lab에서 갱신하지 않는다.

## 외부 레포 입력 경로

- Infinity 레포: [shdkej/infinity](https://github.com/shdkej/infinity)
- Infinity 실행 원장: `intents/active/{intent-id}.md` (Infinity 레포)
- KL 선별 원본: `source/infinity/archive/{intent-id}.md` (Knowledge Lab 레포)
- Knowledge Lab ingest 정본: `ingest/INDEX.md`
- 로컬 checkout이 이 디렉터리에 있을 때만 `infinity/`로 보이며, Git 소유권은 Knowledge Lab이 아니라 Infinity 레포에 있다.
- `source/openclaw-system/data/daily-tracking/`의 오늘 기록은 생활·여행·제품 감각의 raw input이다. 유의미한 관찰이 있으면 같은 날짜 diary 또는 관련 synthesis에 연결해 검색 가능한 index surface를 남긴다.
