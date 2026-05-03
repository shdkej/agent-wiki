# 에이전트 위키

이 위키는 `../source/shdkej-content/`를 기반으로 에이전트가 유지하는 지식 레이어다.

## 구조

- `index.md` — 전체 탐색 인덱스
- `log.md` — 날짜별 유지보수 로그
- `sources/` — 원본 카테고리 개요 페이지
- `concepts/` — 반복되는 개념, 원칙, 패턴
- `syntheses/` — 여러 노트를 묶는 종합 페이지
- `comparisons/` — 비교 페이지
- `queries/` — 장기 보관용 질의응답
- `maintenance/` — 감사, 드리프트, 재생성 메모
- `mapped/` — 원본 노트와 1:1 대응하는 핵심 관리 노트

## 제약

- 원본 노트의 핵심 주제와 대략적인 구조를 유지한다
- 각 페이지는 500줄 이하를 유지한다
- 탐구와 정리를 통해 명확성, 연결성, 일관성을 높인다
- 드리프트와 재생성 판단은 `log.md`에 남긴다

---

# 문서별 핵심 논지 분류 — 메시지 기반 묶음

mapped 아래 ~80개 문서를 **각 문서가 주장하는 핵심 메시지** 기준으로 27개 묶음으로 정리. 주제(AI, DevOps...)가 아니라 **문서가 무엇을 말하는가** 중심.

## 주장 1. "관찰할 수 없으면 운영할 수 없다 — 기록·로그·피드백이 신뢰의 기반"

좋은 운영은 직관이 아니라 관측 가능한 신호에 기반한다. 모니터링, 로그, 피드백 회로, 일일 추적이 없으면 현황을 파악할 수 없고, 문제를 빨리 잡을 수도, 개선을 증명할 수도 없다.

- Deep Knowledge/Monitoring
- blog/Life_Tracking
- Communication/Feedback
- Idea/Journal
- blog/Note_Management

**패턴**: 숫자와 기록은 자기기만을 피하는 도구고, 피드백 루프는 단순 수집이 아니라 행동 교정의 회로다.

## 주장 2. "변경 가능성과 느슨한 결합이 장기 안정성을 만든다"

소프트웨어, 아키텍처, 코드 모두 시간이 지나면 반드시 바뀐다. 처음부터 완벽할 수 없으므로, 변경 비용을 낮추고 영향 범위를 최소화하는 구조가 필수다.

- Fundamental/Architecture
- Fundamental/Software
- Fundamental/Coding
- Fundamental/Infra
- blog/Deploy_ERP_server_story

**패턴**: 완벽한 첫 설계보다 작은 변경에 강한 구조가 더 오래 버틴다.

## 주장 3. "혼자 안다고 한 게 아니다 — 외부화·문서화가 진짜 이해를 검증한다"

머리 안의 이해는 환상이다. 글로 쓰고, 다른 사람에게 설명하고, 코드로 드러내고, 문서화해야만 진짜 이해인지 확인할 수 있다.

- Communication/Document
- Communication/Blogging
- Communication/Open_Source
- Human/Readability
- Communication/Logical_Thinking

**패턴**: 외부화는 단순 공유가 아니라 자기 이해를 깎아내는 품질 체크다.

## 주장 4. "주도권은 외부에서 주어지지 않고 스스로 설계한다"

조건, 시간, 자원은 항상 부족하다. 누군가 완벽한 환경을 주길 기다리는 대신, 현재 가진 것으로 의도를 먼저 정한다.

- Human/Principle
- Health/Decision
- Human/Future
- Health/Curiosity
- Health/Routine

**패턴**: 원칙은 자신이 정하는 것이고, 일상의 반복이 미래를 만든다.

## 주장 5. "반복 속에서 디테일이 쌓인다 — 작은 것을 계속하면 큰 것이 된다"

원대한 계획보다 작은 실행이, 완벽한 첫 시도보다 계속된 개선이 결과를 만든다.

- Health/Music
- Health/Routine
- Health/Physical
- Fundamental/Coding
- blog/Digital_Content

**패턴**: 매일 조금씩 반복하는 것이 감각을 만든다.

## 주장 6. "시스템이 없으면 지속 불가능하다 — 프로세스가 일관성을 만든다"

개인의 의지로는 한계가 있다. 재반복 가능한 절차, 체크리스트, 자동화, 정책이 있어야 실수를 줄이고 일관성을 유지한다.

- blog/Note_Management
- Communication/Blogging
- blog/Life_Tracking
- blog/Deploy_ERP_server_story
- Meta/About_Development

**패턴**: 무엇이든 계속하고 싶으면 루틴이 필요하다.

## 주장 7. "비용과 복잡도가 증가하는 순간 관리 비용도 폭증한다 — 최소한의 정지점을 정한다"

많은 도구, 많은 기능, 많은 자원은 관리 부담을 낸다. 필수만 고정하고 복잡도 상한을 미리 정해야 한다.

- Meta/My_space
- Deep Knowledge/Cloud
- Deep Knowledge/Infra
- blog/100k_concurrent_server
- Fundamental/Tool

**패턴**: 더 많고 더 좋은 것은 거짓이다.

## 주장 8. "기술 선택은 현재 상황에 맞게 — 트렌드를 거슬러도 괜찮다"

신기술이 항상 답은 아니다. 팀 규모, 운영 현실, 배움 곡선, 기존 생태계를 고려해 결정한다.

- Deep Knowledge/Web
- Deep Knowledge/Devops
- Fundamental/Coding
- blog/EKS_with_terraform
- Integration/Business

**패턴**: 가장 좋은 기술은 현재 팀이 할 수 있는 기술이다.

## 주장 9. "내부와 외부를 분리하면 신뢰가 생긴다 — 인터페이스 설계가 핵심"

팀 안의 위키와 외부 블로그는 다르다. 내부는 미완성을 허용하되, 공개 인터페이스는 일관성과 신뢰를 갖춰야 한다.

- Communication/Blogging
- blog/Note_Management
- Communication/Open_Source
- Deep Knowledge/Product
- Communication/Document

**패턴**: 공개는 신뢰를 요구하고, 신뢰는 일관된 경험에서 나온다.

## 주장 10. "실패는 피할 수 없고 어떻게 복구할지가 중요하다"

완벽한 예방은 불가능하다. 얼마나 빨리 감지·복구하고 같은 실패를 반복하지 않을지가 운영 역량을 결정한다.

- Deep Knowledge/Monitoring
- Communication/Feedback
- blog/100k_concurrent_server
- Meta/Troubleshooting
- Deep Knowledge/Devops

**패턴**: 시스템은 망한다. 빨리 보고, 빨리 멈추고, 빨리 돌리는 준비가 안정성이다.

## 주장 11. "데이터가 있어도 읽지 않으면 의미가 없다 — 정보 정제와 해석이 핵심"

모으기만 하면 정보 과부하다. 무엇이 중요한지 가르고 어디에 두고 어떻게 다시 꺼낼지 설계해야 자산이 된다.

- Idea/Information
- Idea/Article
- Idea/Reading
- blog/Note_Management
- Communication/Talk

**패턴**: 양은 질을 보장하지 않는다. 정제와 재활용이 있어야 앎이 된다.

## 주장 12. "완벽함과 충분함 사이의 경계를 정한다"

무한 개선은 낭비고, 조기 종료는 후회다. 어디서 멈추고 출발할지 의도적으로 결정한다.

- Human/Principle
- Fundamental/Architecture
- Fundamental/Software
- Human/Future
- Health/Decision

**패턴**: "이 정도면 충분하다"의 지점을 미리 정하는 규율이 다음 단계를 빠르게 만든다.

## 주장 13. "감각을 먼저 키우고 이론을 나중에 배운다"

책으로만 배운 것은 죽은 지식이다. 직접 해보고, 낭패하고, 다시 이론을 펴면서 이해가 깊어진다.

- blog/picasso
- blog/EKS_with_terraform
- blog/100k_concurrent_server
- Health/Curiosity
- Human/Evolve

**패턴**: 실패와 시행착오는 교육과정이다.

## 주장 14. "도구는 의도를 명확히 해야 선택할 수 있다"

기술 선택 전에 문제 정의가 먼저다.

- Fundamental/Tool
- Integration/Tool
- Integration/Design
- Integration/Work
- blog/Decision_Monitor_Size

**패턴**: 최고의 도구는 없다. 의도가 다르면 최적도 다르다.

## 주장 15. "운영 부담은 아주 빨리 온다 — 만들기보다 유지가 더 오래 걸린다"

새 기능 추가는 6개월이지만 유지는 5년이다. 운영 비용을 처음부터 고려해야 한다.

- Meta/About_Architecture
- Deep Knowledge/Devops
- Meta/My_space
- blog/Deploy_ERP_server_story
- Deep Knowledge/Cloud

**패턴**: 좋은 아키텍처는 운영하기 쉬운 아키텍처다.

## 주장 16. "팀이 감당할 수 있는 복잡도가 진짜 한계다"

아무리 좋은 기술도 팀이 이해하지 못하면 짐이 된다.

- Communication/Teamwork
- Meta/About_Development
- Communication/Open_Source
- Communication/Document
- Communication/Logical_Thinking

**패턴**: 기술 부채는 기술이 아니라 팀 문제다.

## 주장 17. "좋은 질문이 좋은 답을 만든다 — 먼저 문제를 잘 정의한다"

대부분의 실수는 답이 틀려서가 아니라 문제를 잘못 이해해서다.

- Communication/Logical_Thinking
- Idea/Information
- Health/Decision
- Health/Curiosity
- Human/Future

**패턴**: 빨리 답하기보다 천천히 묻기.

## 주장 18. "소비는 의도해야 하고, 누적은 관리해야 한다"

소비자 사회에서는 기본값이 "사기"다. 정말 필요한 것만 고르고 오래 쓸 수 있게 관리한다.

- blog/Digital_Content
- Health/Investment
- Health/Food
- blog/Decision_Monitor_Size
- Human/Balance

**패턴**: 자신의 선택을 의도적으로 지키는 것이 저항이다.

## 주장 19. "논리와 감정은 분리되지 않는다 — 수용 조건을 무시하면 자료도 작동하지 않는다"

객관적 근거도 상대가 받아들일 조건이 없으면 닿지 않는다.

- Communication/Logical_Thinking
- Communication/Talk
- Human/Love
- Human/Balance

**패턴**: 데이터가 모든 걸 이기는 건 아니다. 마음이 닫혀 있으면 어떤 증거도 무시된다.

## 주장 20. "지식은 맥락과 함께 이전된다 — 정보만으로는 부족하다"

같은 사실도 맥락이 다르면 의미가 바뀐다. "왜 이런 판단이 쌓였는가"가 다음 사람을 배우게 한다.

- Meta/Fail_experience
- Idea/History
- Meta/Troubleshooting
- Communication/Document
- blog/Note_Management

**패턴**: "왜 이렇게 되었는가"는 "어떻게 고칠 것인가"만큼 중요하다.

## 주장 21. "한계를 인식하고 그 안에서 최선을 다한다"

무한한 자원이 없으므로 제약을 받아들이고 그 속에서 창의적으로 움직이는 것이 성공이다.

- Human/Reality
- Human/Balance
- blog/100k_concurrent_server
- Meta/My_space
- Human/Principle

**패턴**: 완벽하지 않은 조건도 시작해야 한다.

## 주장 22. "소유와 접근은 다르다 — 장기 관계에서는 소유가 중요하다"

구독은 편하지만 언제든 빼앗길 수 있다. 정말 중요한 것은 자신이 통제할 수 있어야 한다.

- blog/Digital_Content
- Meta/My_space
- Health/Investment
- Human/Principle

**패턴**: 플랫폼이 닫히면 구독자는 아무것도 아니다.

## 주장 23. "관계의 질이 결과를 결정한다 — 혼자는 갈 수 없다"

개인의 역량보다 누구와 일하는가가 더 중요하다.

- Communication/Teamwork
- Communication/Talk
- Human/Love
- Communication/Open_Source
- Human/Evolve

**패턴**: 혼자 똑똑한 것은 무의미하다.

## 주장 24. "좋은 경험은 디테일에서 나온다 — 마무리가 처음보다 어렵다"

빠르게 1.0을 만드는 것보다, 1.0을 1.5로, 2.0으로 만드는 과정에서 경험이 좋아진다.

- Human/Readability
- Communication/Blogging
- Deep Knowledge/Product
- Integration/Design

**패턴**: 기능은 빨리 만들어지지만 경험은 천천히 다듬어진다. MVP 다음이 진짜 일이다.

## 주장 25. "지금 배우지 않으면 나중에 못 배운다 — 시간이 최고의 자산"

오늘의 학습이 내일의 기회를 만든다.

- Health/Curiosity
- Idea/Reading
- Health/Physical
- Health/Routine
- Health/Music

**패턴**: 시간은 돌아오지 않는다.

## 주장 26. "예술과 기술의 경계에서 새로운 역할이 생긴다"

도구가 대체할 수 없는 것은 판단, 감식, 맥락 이해, 의도 설정.

- blog/picasso
- Fundamental/Coding
- Integration/Design
- Meta/About_Development

**패턴**: AI가 초안을 만들어도 "옳은가"를 판단하는 일은 인간의 몫이다.

## 주장 27. "작은 신호를 빨리 잡으면 큰 문제를 피한다"

결과가 보이면 이미 늦다. 약한 신호를 보는 감각이 위기 대응을 만든다.

- Deep Knowledge/Monitoring
- Communication/Feedback
- Communication/Logical_Thinking
- Health/Decision
- Human/Reality

**패턴**: p95 지표, 에러율 상승, 팀 분위기 변화, 고객 피드백의 톤 — 작은 신호를 빨리 캐치하는 문화가 시스템을 지킨다.

## 거대 패턴 5

### 1. 운영 철학이 기술을 이긴다
아무리 좋은 코드도 팀이 유지할 수 없으면 소용없다. 기술 선택 전에 운영 가능성을 먼저 본다.

### 2. 외부화가 없으면 성장도 없다
머릿속 이해는 환상이다. 문서·블로그·코드·대화로 밖으로 내보내야 진짜 이해가 된다.

### 3. 반복과 피드백이 모든 것을 결정한다
작게 시작하고, 신호를 받고, 빨리 고치고, 계속하는 사이클이 결과를 만든다.

### 4. 제약 안에서의 창의가 진짜 창의다
제약을 인식하고 그 안에서 최선을 다하는 것이 지속 가능한 성장을 만든다.

### 5. 사람이 모든 것의 중심이다
팀 구조, 관계, 신뢰, 소통이 기술과 결과를 결정한다.
