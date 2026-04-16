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

## Current To-Dos / Follow-Up Directions
- [ ] Deepen mapped pages category by category
- [ ] Compare user-updated notes against mapped pages via `human-reviews/`
- [ ] Refine source category pages as overview lenses, not replacements for 1:1 note pages
- [ ] Expand synthesis pages only when cross-note patterns are clearly reusable
