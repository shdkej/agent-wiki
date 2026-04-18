# 지식 랩 로그

## 2026-04-14 | Initial setup

### Workspace bootstrap
- Imported markdown source notes from `external-repos/shdkej.github.io/content` into `knowledge-lab/source/shdkej-content/`.
- Installed `llm-obsidian-wiki` skill as the operating schema reference.
- Created base wiki structure under `knowledge-lab/agent-wiki/`.

### Operating rules
- Added explicit rules for: preserving note topic/structure, 500-line cap, human-vs-agent comparison, hourly category digging, and daily user summaries.
- User allows autonomous rewrites inside this lab and is comfortable with rebuilding the system if drift appears.

### First mapped note
- Created first-pass 1:1 mapped page: [[mapped/Fundamental/Architecture]]
- Preserved the original topic while compressing the note into a cleaner architecture thesis, design principles, repeated concerns, and a practical checklist.
- Confirmed that the system should treat each original markdown file as a category node, not just a source blob.

### Full first-pass mapped generation
- Generated first-pass mapped pages for the full markdown note set under `agent-wiki/mapped/`.
- Standardized each mapped page around topic preservation, first-pass reading, visible structure, initial extraction, and exploration / cleaning directions.
- Updated the hourly maintenance job so future cron runs focus on improving existing mapped pages rather than rebuilding them from scratch.
- Set the main improvement directions to **exploration** and **cleaning**, per user guidance.

### Human category deepening, Future and Reality
- Improvement scope: deepened two Human-category mandal nodes, [[mapped/Human/Future]] and [[mapped/Human/Reality]], rather than widening the category.
- Exploration: surfaced the shared pattern that both notes are negotiating adaptive life design, where ideals need to survive contact with time, friction, embodiment, and changing conditions.
- Cleaning: replaced thin first-pass summaries with structured theses, tensions, durable ideas, hidden patterns, and intra-cluster links while keeping each page within the topic boundary and well under the 500-line cap.
- Preference signal learned: the source notes favor balanced, non-totalizing frames, especially present vs future, ideal vs reality, and abstraction vs lived use, so future rewrites should preserve those tensions instead of collapsing them into a single doctrine.
- Human refresh check: no new source-note overwrites were detected in this run, so `human-reviews/` remains unchanged.

### Human category deepening, Balance and Principle
- Improvement scope: deepened [[mapped/Human/Balance]] and [[mapped/Human/Principle]] as neighboring Human-category nodes with strong shared vocabulary around agency, flexibility, scope control, and self-governance.
- Exploration: identified `Balance` as a case-based judgment lens built from recurring tensions, and `Principle` as a compact operating charter that turns preferred traits and workflows into a life system.
- Cleaning: replaced first-pass scaffolds with durable theses, clearer structure, hidden patterns, preserved tensions, and tighter cross-links to nearby Human notes while keeping both pages comfortably under the 500-line cap.
- Preference signal learned: the author tends to prefer dynamic calibration over rigid doctrine, and values clarity that stays humane rather than sharpness that becomes ego or control.
- Human refresh check: no source markdown files were modified since the previous run, so no copies were added to `human-reviews/` in this pass.

### Root-node deepening, Portfolio and CHANGELOG
- Improvement scope: deepened the two root-level mapped nodes, [[mapped/Portfolio]] and [[mapped/CHANGELOG]], because they frame the lab's technical identity and project-history context for many downstream notes.
- Exploration: reframed `Portfolio` as a systems-thinking profile organized around leverage, safe automation, platformization, and cost-aware operational design; reframed `CHANGELOG` as a signal about incremental shipping, web-toolchain maintenance, and the tension between expression and framework upkeep.
- Cleaning: replaced thin first-pass summaries with clearer theses, durable pattern maps, preserved tensions, and more useful cross-links, while keeping both pages well under the 500-line cap.
- Preference signal learned: the author appears to value controlled simplification, evidence-based technical decisions, and personal web publishing that remains both expressive and operationally maintained.
- Human refresh check: source markdown timestamps are still older than the latest hourly maintenance passes, so no refreshed source copies were added to `human-reviews/` in this run.

### Human category deepening, Love and Readability
- Improvement scope: deepened [[mapped/Human/Love]] and [[mapped/Human/Readability]] as adjacent Human-category nodes, one centered on durable affection and the other on readable transmission of meaning.
- Exploration: reframed `Love` around sustained valuing after familiarity, mismatch, and loss; reframed `Readability` around the ethics of mediation, where clarity must improve access without erasing rigor, flavor, or original difficulty.
- Cleaning: replaced first-pass scaffolds with stable theses, preserved tensions, reusable heuristics, and stronger cross-links into nearby Human and technical notes while keeping both pages far below the 500-line cap.
- Preference signal learned: the author seems to prefer humane clarity over flattening, and durable care over novelty, which suggests future rewrites should preserve lived complexity rather than over-optimize for neatness.
- Human refresh check: the source notes for `Love` and `Readability` remain older than their mapped counterparts, so no refreshed copies were added to `human-reviews/` in this pass.

### Human category deepening, Evolve and Standard
- Improvement scope: deepened [[mapped/Human/Evolve]] and [[mapped/Human/Standard]] as a paired cluster around gradual improvement, criteria-setting, manuals, limits, and adaptive change.
- Exploration: reframed `Evolve` as a note about incremental improvement under friction, feedback, complexity, and paradigm shifts; reframed `Standard` as a note about the boundary between helpful structure and suffocating rigidity.
- Cleaning: replaced thin first-pass scaffolds with Korean thesis-driven summaries, repeated axes, hidden patterns, preserved tensions, and tighter neighboring links while keeping both pages at 71 lines each, comfortably under the 500-line cap.
- Preference signal learned: the author appears to prefer standards that reduce cognitive load without erasing judgment, and change processes that stay revisable rather than pretending to deliver final answers.
- Human refresh check: source markdown timestamps remain unchanged relative to earlier lab runs, so no refreshed source copies were added to `human-reviews/` in this pass.

### Health category deepening, Routine and Decision
- Improvement scope: deepened [[mapped/Health/Routine]] and [[mapped/Health/Decision]] as a paired Health-cluster pass, because both notes are really about operating daily life under limited energy, attention, and choice.
- Exploration: reframed `Routine` around body activation, trigger-based behavior design, weekly adjustment, and output-producing rhythms; reframed `Decision` around reducing candidate sets, increasing decision conditions, avoiding worst-case outcomes, and balancing settlement with continued exploration.
- Cleaning: replaced thin first-pass scaffolds with Korean thesis-driven summaries, repeated problem axes, hidden patterns, preserved tensions, and stronger cross-links into Human, Integration, and Meta neighboring nodes, while keeping both pages well under the 500-line cap.
- Preference signal learned: the author appears to prefer systems that reduce friction without becoming rigid, and values decision frameworks that protect flexibility, usability, and long-term optionality over abstract optimization alone.
- Human refresh check: `source/shdkej-content/Health/Routine.md` and `source/shdkej-content/Health/Decision.md` are both older than their mapped counterparts, so no refreshed source copies were added to `human-reviews/` in this pass.

## 2026-04-16 | Integration 노드 점진 심화

### Exploration 단일 노드 갱신
- 갱신 범위: [[mapped/Integration/Exploration]] 1개 페이지만 심화 정리.
- 탐구: 자료 수집, 키워드 확장, 검증, 질문, 레퍼런스 활용을 하나의 재사용 가능한 탐구 시스템으로 묶어 읽히도록 정리했다.
- 정리: 초안형 발췌 구조를 핵심 논지, 반복 축, 숨은 패턴, 긴장, 인접 노드 중심으로 재구성해 훑어보기와 재사용성을 높였다.
- 선호 신호: 저자는 정보의 양 자체보다 시작점, 키워드, 검증 루프, 반대 의견을 중시하며, 탐구를 메타 기술처럼 다루는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Integration/Exploration.md`가 최근 직접 갱신된 흔적은 없어 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행으로 공개 저장소 동기화를 진행했다.

## 2026-04-17 | Communication · Fundamental 노드 점진 심화

### Data_Structure 단일 노드 갱신
- 갱신 범위: [[mapped/Fundamental/Data_Structure]] 1개 페이지만 전면 재구성했다.
- 탐구: 자료구조를 개별 정의 목록이 아니라 선택 기준, 메모리 감각, 탐색 구조, 알고리즘 연결성으로 읽히도록 재정리했다.
- 정리: 초안형 발췌를 핵심 논지, 선택 축, 구조별 해석, 알고리즘 접점, 숨은 패턴, 인접 노드 링크 중심의 한국어 문서로 바꿨다.
- 선호 신호: 저자는 자료구조를 암기 대상보다 "언제 무엇을 왜 선택하는가"의 판단 문제로 다루며, 구현 세부보다 구조 감지 능력과 연산 비용의 차이를 중시하는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Fundamental/Data_Structure.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Network 단일 노드 갱신
- 갱신 범위: [[mapped/Fundamental/Network]] 1개 페이지만 강하게 재구성했다.
- 탐구: 네트워크를 TCP/IP, HTTP, DNS, TLS, 로드밸런서, CDN의 목록이 아니라 "요청이 여러 경계를 통과하며 역할이 분리되는 시스템"으로 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 핵심 질문, 구조 재정리, 판단 축, 세부 해석, 숨은 패턴, 인접 노드 링크 중심의 한국어 페이지로 바꿨다.
- 선호 신호: 저자는 네트워크를 프로토콜 암기보다 병목 위치, 책임 분배, 요청 흐름 추적, 앞단 계층 활용 같은 운영 감각으로 이해하려는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Fundamental/Network.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Cloud 단일 노드 갱신
- 갱신 범위: [[mapped/Deep Knowledge/Cloud]] 1개 페이지만 재정리했다.
- 탐구: 대응 원본 `source/shdkej-content/Deep Knowledge/Cloud.md`가 비어 있다는 점 자체를 카테고리 신호로 읽고, 임의 확장 대신 공란 상태, 예상 판단 범위, 인접 노드 경계를 정리했다.
- 정리: 영어 초안형 틀을 한국어 기준의 구조화된 페이지로 바꾸고, `Infra`, `Container`, `Devops`, `Web`와의 관계를 연결해 이후 원본이 채워질 때 점진 심화가 가능하도록 기반을 만들었다.
- 선호 신호: 저자는 클라우드 주제를 아직 독립 서술로 확정하지 않았거나 다른 노트에 분산해 둔 상태로 보이며, 이런 경우 빈 칸을 억지로 메우기보다 경계와 질문을 남겨두는 편이 현재 선호에 더 가깝다.
- 드리프트 점검: 원본 `source/shdkej-content/Deep Knowledge/Cloud.md`는 여전히 비어 있고 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았으므로 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Document 단일 노드 갱신
- 갱신 범위: [[mapped/Communication/Document]] 1개 페이지만 전면 재구성했다.
- 탐구: 문서를 단순 기록이 아니라 팀의 질문, 판단, 온보딩, 트러블슈팅, 제품 설명을 연결하는 재사용 가능한 작업 기억 시스템으로 읽히도록 정리했다.
- 정리: 초안형 발췌를 핵심 논지, 문서 유형, 판단 축, 반복 패턴, 히스토리 문서의 의미, 인접 노드 링크 중심의 한국어 페이지로 바꿨다.
- 선호 신호: 저자는 문서를 보기 좋은 산출물보다 실제 재진입 비용을 줄이는 운영 장치로 보며, 자동 문서화와 경험 기반 수동 문서화를 함께 유지하려는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Communication/Document.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### AI 단일 노드 갱신
- 갱신 범위: [[mapped/Deep Knowledge/AI]] 1개 페이지만 강하게 재구성했다.
- 탐구: `AI`를 개념 요약이 아니라 LLM 이후의 작업 방식, 문서 기반 메모리, 에이전트 설계, 프롬프트 운영, 머신러닝 실무 감각이 한데 묶인 카테고리 노드로 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 핵심 논지, 개념 축, 에이전트 관점, AI 사용법, 문서 관리, 프롬프트 노하우, RAG와 컨텍스트 한계, ML·트랜스포머 기초, 제품 운영 관점 중심의 한국어 페이지로 바꿨다.
- 선호 신호: 저자는 AI를 모델 성능 경쟁보다 문서, 기준, 검증, 운영 구조 안에 배치해야 제대로 쓸 수 있는 시스템으로 보는 경향이 강하다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Deep Knowledge/AI.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Portfolio 단일 노드 갱신
- 갱신 범위: [[mapped/Portfolio]] 1개 페이지만 점진 심화했다.
- 탐구: 포트폴리오를 프로젝트 목록이 아니라 "병목을 흐름 재설계로 풀고, 반복 업무를 플랫폼 기능으로 바꾸며, 속도와 안전장치를 함께 설계하는" 루트 노드로 다시 읽히도록 정리했다.
- 정리: 기존 한국어 mapped 문서를 유지한 채, 원본의 서술 방식과 강조점을 더 잘 보이도록 `한눈에 보는 요약`, `원본에서 먼저 잡히는 구조`, `원본 발췌 기반 구조 메모`를 추가하고 비용·처리량·운영성·문서화를 하나의 운영 감각으로 묶어 다듬었다.
- 추가 심화: 이번 패스에서는 `원본 섹션 대응 압축`, `재사용 가능한 판단 프레임`, `이 노드를 읽을 때 놓치지 말아야 할 점`을 보강해 루트 카테고리 노드로서의 해석 기준과 후속 노드 연결성을 더 선명하게 만들었다.
- 선호 신호: 저자는 복잡한 기술 스택 자체보다 개발자 마찰 감소, 재현성, 비용 감각, 안전한 자동화, 팀이 직접 쓸 수 있는 공용 시스템을 더 중요한 가치로 두는 경향이 있고, 문제 서술에서도 `문제 → 해결 → 결과`의 운영형 서사를 선호하는 편으로 보인다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Portfolio.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Container 단일 노드 갱신
- 갱신 범위: [[mapped/Deep Knowledge/Container]] 1개 페이지만 전면 재구성했다.
- 탐구: 컨테이너를 Docker 기능 목록이 아니라 격리 원리, 이미지와 볼륨의 역할 분리, Dockerfile 신뢰성, 쿠버네티스 운영 복잡성, 핫픽스·롤백 체계까지 이어지는 운영 판단 노드로 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 산발적인 메모를 `격리 원리 → 개발/배포 분리 → Dockerfile 기준 → 쿠버네티스 운영 → 반복 긴장` 흐름으로 재배열했다.
- 선호 신호: 저자는 컨테이너를 단순 배포 도구보다 재현 가능한 운영 시스템의 핵심 부품으로 보며, 실서버 편의보다 이미지 버전 관리, 재빌드, 롤백, 관측 가능성을 더 중시하는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Deep Knowledge/Container.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### CHANGELOG 단일 노드 갱신
- 갱신 범위: [[mapped/CHANGELOG]] 1개 페이지만 강하게 재구성했다.
- 탐구: 긴 커밋 목록을 단순 연혁이 아니라 공개 발행 환경 유지, 검색·광고 실험, Gatsby 생태계 대응, 반복 유지보수 비용을 보여주는 루트 카테고리 노드로 다시 읽히도록 정리했다.
- 정리: 영어 중심의 얇은 요약 페이지를 한국어 기준의 구조화된 문서로 바꾸고, 커밋 나열 대신 반복 운영 질문, 유지보수 축, `Portfolio`와의 연결을 중심으로 재배열했다.
- 추가 심화: 이번 패스에서는 원문 커밋 흐름을 `초기 노출/수익화`, `표면 손질`, `프레임워크 드리프트 대응`의 층위로 다시 나누고, `update`형 커밋의 반복 자체를 운영 리듬으로 읽히게 보강했다.
- 선호 신호: 저자는 개인 웹 운영에서도 화려한 기능 추가보다 검색성, 운영 지속성, 생태계 변화 대응, 작은 수정의 누적을 더 중요한 실천으로 두는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/CHANGELOG.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Portfolio 단일 노드 재심화
- 갱신 범위: [[mapped/Portfolio]] 1개 페이지만 추가 심화했다.
- 탐구: 프로젝트 나열을 다시 읽어, 개별 성과보다 `흐름 재설계`, `공용 자동화`, `비용 감각`, `재진입 가능한 운영 구조`라는 반복 역량이 드러나도록 정리했다.
- 정리: 기존 baseline은 유지한 채 `프로젝트별 역량 매핑`, `원본 서술 습관에서 읽히는 신호`, `[[CHANGELOG]]와의 스케일 비교`를 보강해 루트 노드로서의 해석력과 연결성을 높였다.
- 선호 신호: 저자는 포트폴리오에서도 기술 이름보다 문제 정의, 판단 근거, 수치로 검증된 운영 개선, 문서화된 재사용성을 더 중요한 성과 언어로 쓰는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Portfolio.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Feedback 단일 노드 갱신
- 갱신 범위: [[mapped/Communication/Feedback]] 1개 페이지만 전면 재구성했다.
- 탐구: 피드백을 평가 코멘트가 아니라 사람, 시스템, 탐구, 회고를 다시 조정하는 응답 회로로 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 핵심 논지, 판단 축, 반복 패턴, 인접 노드 링크 중심의 한국어 페이지로 바꾸고 `Document`, `Talk`, `Routine`, `Decision`, `Monitoring`, `Exploration`과의 연결을 보강했다.
- 선호 신호: 저자는 빠른 피드백을 선호하지만 인터럽트 비용과 노이즈를 함께 경계하며, 많은 정보보다 관측 가능하고 수정 가능한 구조를 더 중시하는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Communication/Feedback.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Data 단일 노드 갱신
- 갱신 범위: [[mapped/Deep Knowledge/Data]] 1개 페이지만 전면 재구성했다.
- 탐구: 데이터를 DB 제품 목록이 아니라 저장, 검색, 분석, 기억, 정보 과잉까지 이어지는 운영 감각의 노드로 다시 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 핵심 논지, 저장소별 판단 축, 대용량 처리, 검색 시스템, 인간 기억과 데이터 구조의 긴장, 인접 노드 링크 중심의 한국어 페이지로 바꿨다.
- 선호 신호: 저자는 데이터 모델링 자체보다 조회 비용, 메모리 한계, 검색 품질, 목적별 저장소 분리, 다시 찾기 쉬운 연결 구조를 더 중시하는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Deep Knowledge/Data.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Music 단일 노드 갱신
- 갱신 범위: [[mapped/Health/Music]] 1개 페이지만 전면 재구성했다.
- 탐구: 음악을 감상 일반론이 아니라 베이스 입문, 타브 해석, 지판 감각, 손 역할 분해를 중심으로 한 학습 진입 노드로 다시 읽히도록 정리했다.
- 정리: 매우 얇은 초안형 대응 문서를 핵심 논지, 원문 질문, 학습 축, 숨은 패턴, 인접 노드 링크 중심의 한국어 페이지로 바꿨다.
- 선호 신호: 저자는 새로운 영역을 배울 때 거대한 이론 체계보다 바로 손을 움직일 수 있는 최소 질문, 기존 경험의 전이, 역할 분해형 학습을 선호하는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Health/Music.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Coding 단일 노드 갱신
- 갱신 범위: [[mapped/Fundamental/Coding]] 1개 페이지만 강하게 재구성했다.
- 탐구: `Coding`을 문법 목록이 아니라 변경 용이성, 테스트 가능성, 실패 처리, 언어 철학 비교가 겹쳐 있는 기반 카테고리 노드로 읽히도록 다시 묶었다.
- 정리: 41줄짜리 초안형 대응 문서를 핵심 논지, 설계 원칙, 테스트, 에러 처리, 컨벤션, 언어별 메모의 공통 축, 실천 체크리스트 중심의 한국어 페이지로 전면 재작성했다.
- 선호 신호: 저자는 코딩을 취향이나 문체보다 변경 반경 축소, 경계 조건 대응, 호출자 책임, 명시적 구조, 언어 철학 존중의 문제로 다루는 경향이 강하다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Fundamental/Coding.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Architecture 단일 노드 갱신
- 갱신 범위: [[mapped/Fundamental/Architecture]] 1개 페이지만 강하게 재구성했다.
- 탐구: `Architecture`를 아키텍처 패턴 목록이 아니라 변경 용이성, 일관성, 피드백 루프, 자동화의 신중한 도입, 팀이 감당할 수 있는 복잡도 관리의 기준 노드로 다시 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 체크포인트·마이크로서비스·보안·자동화 메모를 하나의 판단 축 아래 재배열했다.
- 선호 신호: 저자는 특정 방법론 이름보다 "무엇을 늦게 결정할 수 있는가", "어떻게 한 부분만 바꾸게 만들 것인가", "운영 현실에서 감당 가능한가"를 더 중요한 설계 질문으로 두는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Fundamental/Architecture.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Curiosity 단일 노드 갱신
- 갱신 범위: [[mapped/Health/Curiosity]] 1개 페이지만 전면 재구성했다.
- 탐구: `Curiosity`를 산만한 질문 목록이 아니라 기술, 기록, 학습, 제품화, 삶의 방향을 여는 장기 탐사 노드로 다시 읽히도록 정리했다.
- 정리: 매우 얇은 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 원문의 방대한 질문들을 `운영`, `기록`, `학습`, `기술 실험`, `삶의 방향`의 반복 축으로 재배열했다.
- 선호 신호: 저자는 호기심을 단순 취향 수집보다 작동 원리 탐색, 재사용 가능한 작업 구조 발견, 미래 결과물 후보 보존의 방식으로 다루는 경향이 강하다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Health/Curiosity.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Blogging 단일 노드 갱신
- 갱신 범위: [[mapped/Communication/Blogging]] 1개 페이지만 전면 재구성했다.
- 탐구: 블로깅을 글쓰기 팁 모음이 아니라 파편화된 메모를 만다라트 구조 안에서 축적하고, 충분히 숙성된 내용을 독자용 산출물로 꺼내는 지식 발행 시스템으로 읽히도록 정리했다.
- 정리: 41줄짜리 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 위키와 블로그의 역할 차이, 주제 제한의 의미, 경험 기반 글쓰기 선호, AI·번역·영상까지 이어지는 편집 감각을 한 축으로 묶었다.
- 선호 신호: 저자는 새 글을 무한히 늘리기보다 제한된 주제를 반복 개선하는 방식을 선호하며, AI나 템플릿을 보조 도구로 쓰더라도 최종 글의 목소리와 선택 이유는 반드시 자기 경험과 자기 언어에 남겨 두려는 경향이 강하다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Communication/Blogging.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### picasso 단일 노드 갱신
- 갱신 범위: [[mapped/blog/picasso]] 1개 페이지만 강하게 재구성했다.
- 탐구: `picasso`를 단순한 전시 감상문이 아니라, 사진기 이후 회화의 위기와 AI 이후 개발자·디자이너의 역할 재정의를 겹쳐 보는 카테고리 노드로 읽히도록 정리했다.
- 정리: 27줄짜리 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 여행 경험, 큐비즘, 인간 전문성의 이동, 미해결 질문, 인접 노드 링크를 하나의 흐름으로 재배열했다.
- 선호 신호: 저자는 기술 변화를 단순 위협이나 찬양으로 보지 않고, 기존 숙련의 기준이 무너진 뒤 인간이 어떤 새 역할을 발명해야 하는지에 더 관심이 많은 편으로 보인다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/blog/picasso.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Digital_Content 단일 노드 갱신
- 갱신 범위: [[mapped/blog/Digital_Content]] 1개 페이지만 전면 재구성했다.
- 탐구: 디지털 콘텐츠 소장을 단순 백업 팁이 아니라 소유 감각, 플랫폼 접근권, DRM, 서비스 종료, 구독 경제의 충돌 문제로 읽히도록 정리했다.
- 정리: 34줄짜리 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 영화·전자책·음원·소프트웨어·랜섬웨어 메모를 하나의 판단 축 아래 재배열했다.
- 선호 신호: 저자는 디지털 콘텐츠를 단순 소비재보다 애장품과 개인 자산에 가깝게 느끼며, 편리함보다 장기 보존 가능성과 자율적 소유 감각을 더 중요하게 보는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/blog/Digital_Content.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### AGENTS 단일 노드 갱신
- 갱신 범위: [[mapped/Meta/AGENTS]] 1개 페이지만 기준선 수준으로 전면 재구성했다.
- 탐구: `AGENTS`를 단순한 모델 설정 메모가 아니라, 역할 분화와 공통 문서 기반 위에서 사람과 에이전트가 함께 일하는 메타 운영 노드로 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 핵심 논지, 역할 구조, 선행 문서군, 히스토리 문서, stateless 협업, PRD 모듈화, 도구층의 위치 중심의 한국어 페이지로 바꿨다.
- 선호 신호: 저자는 에이전트를 결과 생성기보다 문서 기반 공동작업자로 다루며, 빠른 출력보다 공통 맥락, 추적 가능성, 복원 가능성, 고객 목소리 연결을 더 중요한 운영 기준으로 두는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Meta/AGENTS.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Open_Source 단일 노드 갱신
- 갱신 범위: [[mapped/Communication/Open_Source]] 1개 페이지만 기준선 수준으로 전면 재구성했다.
- 탐구: `Open_Source`를 공개 찬반 메모가 아니라, 낯선 코드베이스 진입법, 라이선스 판단, 공개 전략, 버저닝, 발표까지 이어지는 협업 운영 노드로 읽히도록 정리했다.
- 정리: 1차 대응 문서를 핵심 논지, 구조 재정리, 판단 축, 반복 패턴, 인접 노드 링크 중심의 한국어 페이지로 바꿨다.
- 선호 신호: 저자는 오픈소스를 선행 문화보다 구조 읽기 훈련장과 협업 규칙 학습장으로 다루며, 큰 기여보다 작은 진입, 작성자 습관 이해, 사용자 관점 버저닝을 더 중시하는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Communication/Open_Source.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Portfolio 단일 노드 추가 심화
- 갱신 범위: [[mapped/Portfolio]] 1개 페이지만 점진 심화했다.
- 탐구: 포트폴리오를 인프라 기술 목록보다, 여러 경계를 넘나들며 병목·비용·배포·백엔드 흐름을 함께 조정하는 시스템 설계자 노드로 더 분명하게 읽히도록 다듬었다.
- 정리: 기존 baseline은 유지한 채 `역할 스펙트럼을 읽는 법` 섹션을 추가해, 인프라 엔지니어라는 표면 라벨과 실제 작업 범위 사이의 차이를 구조적으로 보이게 했다.
- 선호 신호: 저자는 특정 기술 하나의 깊이만 강조하기보다, 인프라·애플리케이션·운영 인터페이스의 경계면을 함께 다루는 조정력과 흐름 재설계 능력을 더 중요한 강점 언어로 쓰는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Portfolio.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

## 2026-04-18 | 루트 노드 점진 심화

### CHANGELOG 단일 노드 갱신
- 갱신 범위: [[mapped/CHANGELOG]] 1개 페이지만 점진 심화했다.
- 탐구: 긴 커밋 목록을 다시 읽어, 이 파일이 기능 연혁보다 `개인 웹 운영이 실제로 어떤 upstream 결합과 반복 판단 비용 위에 놓여 있는가`를 보여주는 루트 노드로 더 선명하게 읽히도록 정리했다.
- 정리: 기존 baseline은 유지한 채 `커밋 분류 체계 자체가 말해 주는 것`, `개인 웹 운영의 숨은 비용 구조` 섹션을 추가해, conventional changelog 형식과 실제 작업 의미의 어긋남, 그리고 작은 사이트도 큰 도구 체인 유지비를 떠안는다는 점을 보강했다.
- 선호 신호: 저자는 개인 웹 운영에서도 눈에 띄는 기능 추가보다, upstream 변화 대응, 검색·광고 실험, 자잘한 표면 조정, 장기 운영 가능성을 함께 감당하는 쪽에 익숙한 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/CHANGELOG.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### blog/My_space 단일 노드 갱신
- 갱신 범위: [[mapped/blog/My_space]] 1개 페이지만 기준선 수준으로 전면 재구성했다.
- 탐구: 개인 서버 메모를 단순 호스팅 비교가 아니라 비용 제약 안에서 배포, 관측, 복구를 모두 감당하려는 `개인 플랫폼 운영 설계` 노드로 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 비용 탐색, 쿠버네티스 실험 과제, DigitalOcean 시행착오, 최소 인프라 정의, 재구축 가능성의 의미를 한 흐름으로 재배열했다.
- 선호 신호: 저자는 개인 인프라에서도 화려한 확장보다 재구축 가능성, 배포 책임 분리, 상태 관측, 작은 비용 안에서의 지속 가능성을 더 중요한 기준으로 두는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/blog/My_space.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Devops 단일 노드 갱신
- 갱신 범위: [[mapped/Deep Knowledge/Devops]] 1개 페이지만 기준선 수준으로 전면 재구성했다.
- 탐구: `Devops`를 배포 자동화 기법 목록이 아니라, 작은 팀의 자율성, 운영 복원력, 피드백 루프, 플랫폼 조정 역할을 함께 다루는 카테고리 노드로 읽히도록 정리했다.
- 정리: 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 원문의 산발적 메모를 `정의 → 문화/포지션 → 필요성 → 개발자 경험 → 운영 → CI/CD → 반복 긴장` 흐름으로 재배열했다.
- 선호 신호: 저자는 DevOps를 도구 선택보다 되돌릴 수 있음, 복구 가능성, 개발자 마찰 감소, 공통 플랫폼 설계의 문제로 보는 경향이 강하다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Deep Knowledge/Devops.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Marketing 단일 노드 갱신
- 갱신 범위: [[mapped/Integration/Marketing]] 1개 페이지만 기준선 수준으로 전면 재구성했다.
- 탐구: `Marketing`을 SNS 운영 팁 모음이 아니라, 유입·전환·유지·이탈 방지·브랜드 톤 조정을 함께 다루는 사용자 흐름 설계 노드로 읽히도록 정리했다.
- 정리: 40줄짜리 초안형 대응 문서를 한국어 기준의 구조화된 페이지로 바꾸고, 마케팅·CRM·제품·UX 라이팅·SNS 메모를 하나의 퍼널 운영 감각 아래 재배열했다.
- 선호 신호: 저자는 마케팅을 대규모 노출 기술보다 핵심 고객 상상, 소비자 관점 해석, 무료에서 유료로 넘어가는 전환 설계, 채널별 인상 조정의 문제로 다루는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Integration/Marketing.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

### Portfolio 단일 노드 갱신
- 갱신 범위: [[mapped/Portfolio]] 1개 페이지만 점진 심화했다.
- 탐구: 포트폴리오를 기술 스택 소개보다, 서로 다른 운영 인터페이스가 충돌하는 지점을 어떻게 다시 설계하는지 보여주는 루트 노드로 더 선명하게 읽히도록 다듬었다.
- 정리: 기존 baseline은 유지한 채 `포트폴리오의 문장 문법에서 더 읽히는 것`을 추가하고, 성과 숫자보다 인터페이스 마찰과 재설계 전후의 흐름 차이가 핵심이라는 점을 보강했다.
- 추가 심화: 이번 실행에서는 `보조 프로젝트가 드러내는 확장성`을 더해, 마이그레이션·소셜 로그인·해커톤 항목도 본류 밖의 잡다한 경력이 아니라 경계 재정의, 보안 대응, 빠른 제품화 감각을 보여주는 보조 증거로 읽히게 다듬었다.
- 선호 신호: 저자는 포트폴리오에서도 화려한 결과 수치 자체보다, 개발자 경험·배포 통제·비용·처리량·운영 안정성의 경계면을 조정한 판단 과정을 더 중요한 성과 언어로 쓰는 경향이 있다.
- 드리프트 점검: 대응 원본 `source/shdkej-content/Portfolio.md`는 mapped 노트보다 오래되어 최근 직접 수정본으로 보이지 않았고, 따라서 `human-reviews/` 복사는 생략했다.
- 배포: `scripts/publish-agent-wiki.sh` 실행 예정.

## Current To-Dos / Follow-Up Directions
- [ ] Deepen mapped pages category by category
- [ ] Compare user-updated notes against mapped pages via `human-reviews/`
- [ ] Refine source category pages as overview lenses, not replacements for 1:1 note pages
- [ ] Expand synthesis pages only when cross-note patterns are clearly reusable
