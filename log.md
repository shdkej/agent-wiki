## 2026-08-28 19:34 UTC | openclaw-system 여행 회수 구조 + credential-safe agent 실행 반영

- 갱신 범위: `source/openclaw-system/data/daily-reviews/2026-08-27-review.md`의 여행 회수 구조와 라우팅 판단을 `[[syntheses/kl-note-router]]`와 `[[diary/2026-08-27]]`에 얇게 흡수하고, `source/openclaw-system/data/ai-news/2026-08-27-ai-news.md`와 `source/openclaw-system/data/ai-news/2026-08-28-ai-news.md`의 credential/라우팅 판단을 `[[concepts/human-agent-fit]]`에 반영했다.
- 탐구: 여행은 소비가 아니라 회수 구조였고, AI 뉴스는 모델 헤드라인보다 라우팅, 장기 실행, 비밀값 비노출이 더 오래 남는 운영 판단이었다.
- 정리: KL Note Router에는 여행/AI 뉴스의 재사용 판단을 덧붙이고, human-agent-fit에는 로그인·비밀번호·세션을 모델 프롬프트와 분리하는 경계를 보강했다.
- 드리프트 점검: source 원문은 그대로 두고, 위키에는 반복 가능한 판단만 압축했다.

## 2026-08-27 19:30 UTC | openclaw-system KL Note Router 승격

- 갱신 범위: `source/openclaw-system/data/daily-reviews/2026-08-26-review.md`와 `source/openclaw-system/reports/daily-archive/2026-08-26-kl-note-router/index.html`의 재사용 판단을 `[[syntheses/kl-note-router]]`로 압축하고, `[[diary/2026-08-26]]`의 인덱스를 얇게 보강했다.
- 탐구: Obsidian 원자료, Knowledge Lab 선별 지식, Agent Wiki 설명층, Prompt Archive 재사용 자산은 합칠 대상이 아니라 라우팅할 대상이었다. 공개 AI 계정은 사람 같은 리듬을 가질 수 있어도 비밀키와 내부 운영 규칙을 분리하는 경계가 먼저다.
- 정리: `분류 / 편집 / 삭제 / 소재화` 흐름과 `목차 10개`, `불릿 8개` 기준을 한 synthesis로 묶고, 위키 인덱스에 목적지 분리를 명시했다.
- 드리프트 점검: source 원문, travel/card runtime 산출물, 카드/리포트 HTML은 복사하지 않았다.

## 2026-08-26 19:30 UTC | openclaw-system 결제 레일 선택 + 알던 것을 일주일 안에 실행하기 승격

- 갱신 범위: `source/infinity/archive/research-35.md`의 결제 레일 판단을 `[[mapped/Integration/Business]]`에 보강하고, `source/openclaw-system/data/daily-reviews/2026-08-26-review.md`와 `source/openclaw-system/reports/daily-archive/2026-08-26-known-play-execution/index.html`의 재사용 판단을 `[[concepts/known-play-execution]]`과 `[[diary/2026-08-26]]`에 최소 변경으로 흡수했다.
- 탐구: iOS IAP, 웹 PG, Paddle MoR, storefront, 사업자 국가, 정산/세무 책임은 도구 비교보다 먼저 고정해야 하는 사업 조건이었다. 이미 아는 기본기와 확인된 사례는 더 길게 분석하기보다 `경쟁 앱 / 부족한 리뷰 / 인플루언서 연결고리 / 7일 첫 고객 테스트`처럼 한 장의 실행 지도로 닫는 편이 재사용성이 높았다.
- 정리: Business mapped 페이지에 결제 레일 판단을 한 줄 보강하고, 새 concept는 실행 압축과 짧은 검증 시한을 남겼다.
- 드리프트 점검: source 원문과 card-news/런타임 산출물은 복사하지 않았다.

## 2026-08-25 19:30 UTC | openclaw-system 감도 타임라인 + X API 운영 기준 승격

- 갱신 범위: `source/openclaw-system/data/daily-reviews/2026-08-25-review.md`의 `믿게 되는 감도` 판단을 `[[concepts/updatable-taste-timeline]]`에 보강하고, `source/openclaw-system/docs/X_API_TIMELINE_OPERATING.md`의 토큰/크레딧/HTML fallback 판정을 `[[maintenance/x-api-timeline-operating]]`으로 정리했다.
- 탐구: 지속 업데이트 주제는 완성도보다 신뢰가 쌓이는 감도, 허술함, 재치, 친근함의 조합이 핵심이었다. X API 타임라인은 Bearer Token 주입과 크레딧 상태, `x_api_v2` 소스 검증을 분리해 봐야 한다.
- 정리: 기존 concept에는 감도와 구매 신뢰 문장을 보강했고, API 운영 노트는 maintenance로 분리해 source 원문은 그대로 둔다.
- 드리프트 점검: source 원문과 runtime report는 복사하지 않았다.

## 2026-08-23 19:54 UTC | openclaw-system 한 권 사이클/문제-장면-루프 압축 승격

- 갱신 범위: `source/openclaw-system/data/daily-reviews/2026-08-24-review.md`의 재사용 판단을 `[[concepts/structure-before-scale]]`에 최소 변경으로 흡수했다.
- 탐구: 아이디어가 여러 갈래로 흩어질 때 먼저 `문제 / 장면 / 루프 / 첫 결과물`로 압축하면, 책/공간/루프/제출 중 어디에 둘지 빨리 정해진다.
- 정리: 구조 우선 개념에 입력 압축과 트랙 선택 손잡이를 추가했다.
- 드리프트 점검: 일일 리뷰 원문은 복사하지 않았다.

## 2026-08-23 19:30 UTC | openclaw-system 여행 맥락 현재성/위치 안전성 승격

- 갱신 범위: `source/openclaw-system/docs/LOCAL_REVIEW_AUTOMATION.md`, `source/openclaw-system/data/travel-content-feedback/2026-08-23-locationless-context.json`, `source/openclaw-system/data/travel-content-feedback/2026-08-23-send-log.json`, `source/openclaw-system/data/daily-reviews/2026-08-23-review.md`의 재사용 판단을 `[[concepts/currentness-safe-travel-context]]`에 최소 변경으로 흡수했다.
- 탐구: 여행 출력은 오늘의 실제 위치를 따라가되, 공개용 산출물은 locationless-safe로 낮춰 도시명·숙소·이동·실시간 위치를 빼는 경계가 반복됐다.
- 정리: 새 concept는 현재성 게이트와 위치 안전성 fallback만 남기고, 원본 source와 feedback 산출물은 그대로 source에 둔다.
- 드리프트 점검: travel-content-feedback 원문과 daily review 원문은 복사하지 않았다.

## 2026-08-23 16:02 UTC | openclaw-system 일일 리뷰 구조/회복 판단 승격

- 갱신 범위: `source/openclaw-system/data/daily-reviews/2026-08-23-review.md`, `source/openclaw-system/data/daily-reviews/2026-08-14-review.md`, `source/openclaw-system/data/daily-reviews/2026-08-15-review.md`의 재사용 판단을 [[concepts/structure-before-scale]]와 [[mapped/Health/Physical]]에 최소 변경으로 흡수했다.
- 탐구: 8/23 review는 한 덩어리 기록보다 읽히는 순서를 먼저 맞춰야 한다는 구조 판단을 남겼고, 8/14~15 review는 물속 동작 전에 호흡과 긴장을 낮추는 재진입 절차를 반복 확인했다.
- 정리: structure-before-scale에는 제목-섹션-본문 순서를 먼저 푸는 문장을 추가했고, Health/Physical에는 물 수업 전 긴장 저하와 재진입 순서를 보강했다.
- 드리프트 점검: daily review 원문은 source에 그대로 두고, 런타임 산출물과 일일 트래킹 원문은 위키로 복사하지 않았다.

## 2026-08-22 12:40 UTC | 이번 주 Infinity Archive 지식 승격

- 갱신 범위: 8월 17~22일 Archive 7건을 검토하고, 원천 ingest 문서 1개와 재사용 가능한 운영 판단 3개를 `content/docs/concepts/`로 컴파일했다.
- 승격: `research-28`의 경계가 있는 반복 개선 루프, `ops-26`의 산출물 지표 질문 계약, `marketing-128`의 근거 제한 콘텐츠 실험 규칙.
- 보존 경계: `marketing-124/125/126`은 단일 디자인 재작업·대체 이력, `marketing-127`은 특정 계정 분석으로 Infinity 원장에 남겼다. `marketing-128` 문서는 내부 규칙만 승격했고 공개 실행·성과 확정은 하지 않았다.
- 출처: `source/openclaw-system/docs/INFINITY_ARCHIVE_KNOWLEDGE_2026-08.md`를 ingest 원천으로 남기고 각 페이지에 Archive·Artifact·Report 경로를 연결했다. `marketing-128`은 Red가 `FOLLOW_UP_REQUIRED`인 상태를 명시해 새 상품 식별·재검증 전 보류 경계를 보존했다.

## 2026-08-22 12:32 UTC | 승격 대상·커밋 검증 강화

- 갱신 범위: Archive 검증이 `agent-wiki/content/docs/` 대상과 실제 agent-wiki 커밋까지 확인하도록 보강하고, `candidate`·존재만 하는 빈 대상·미등록 커밋을 통과시키지 않는 회귀 테스트를 추가했다.
- 정리: 지식 판정은 필드 기록이 아니라 실제 페이지 변경과 원격 반영 가능한 커밋을 확인해야 닫히는 완료 조건으로 고정했다.

## 2026-08-22 12:20 UTC | Infinity Archive 지식 승격 게이트 반영

- 갱신 범위: [[concepts/infinity-archive-knowledge-promotion]] 1개 concept를 새로 만들고, Infinity Archive 완료 규칙에 지식 판정·실제 반영·대상 검증 게이트를 연결했다.
- 탐구: Infinity는 실행 원장, Knowledge Lab은 재사용 가능한 판단의 기억 레이어라는 역할 분리를 확인했다. `promote` 판정 뒤 페이지 반영 없이 `candidate`로 남는 흐름은 완료로 닫지 않도록 정리했다.
- 정리: `knowledge_status`, `knowledge_decision`, `knowledge_targets`, `knowledge_reflection`을 Archive 필드로 고정하고, 실제 대상 경로가 존재하는지 검증 스크립트가 확인하도록 했다.
- 드리프트 점검: Infinity 원장·리포트 전체를 복사하지 않았고, 이번 운영 규칙 자체에서 재사용 가능한 경계만 concept로 승격했다.

## 2026-08-09 21:20 UTC | OpenClaw system source 이동과 daily-tracking 색인

- 갱신 범위: `source/openclaw-system/`을 Knowledge Lab source layer로 등록하고, `source/openclaw-system/data/daily-tracking/2026-08-09.md`를 같은 날짜 diary에 색인했다.
- 탐구: 사용자가 "KL에 들어가는 것은 ingest"라고 새 경계를 정했으므로, OpenClaw 운영 문서와 생활/여행 캡처를 workspace 내부 `system/`이 아니라 Knowledge Lab source로 이동했다.
- 정리: daily-tracking 원문은 raw source로 유지하고, agent-wiki는 오늘의 재사용 포인트만 얇게 색인한다. 오늘 색인 주제는 카이로/Airbnb 장면에서 나온 `정돈된 결과물에 대한 두려움`과 `고상한 온실에 갇히지 않는 정돈감`이다.
- 드리프트 점검: cache/trash/tmp/run dump는 KL 안에 있어도 ingest 대상에서 제외하고, daily-tracking과 운영 docs만 재사용 source로 본다.
