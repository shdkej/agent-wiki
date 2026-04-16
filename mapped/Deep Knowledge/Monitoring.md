# Monitoring

- 원본: `source/shdkej-content/Deep Knowledge/Monitoring.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Monitoring**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
![observability](../img/observability.jpg) 그 외 리포트 받아보면 좋을 내용 체크해야할 것들 로그를 많이 남겨서 쿼리로 잘 검색되게 하는게 낫겠다 시스템 도구를 이용하자 퍼널 데이터도 클릭하우스로 모으고 이걸 하려면 기본적으로 loki, clickhouse를 써야하는데 무겁지 않을까. 공통으로 쓰다가 커지면 단독으로 빼면 되려나 서비스가 빠른지 확인 방법 Throughput, Latency 아파치에서 동시작업을 위해 자식 프로세스를 생성하도록 하고, 부모 프로세스와 메모리를 일정 부분 공유하면서

## 원문에서 보이는 구조
- 중요한 포인트
- system
- 모니터링 지표
- web
- 웹 성능 확인 지표
- 트래픽을 측정하는 방법?
- 메인 모니터링 판넬에서 보여져야 할 것들
- 서비스 사용자 수용량 확인

## 초기 추출
- urgent
- important
- 보안 (로그인 체크)
- load average
- error message
- memory
- disk
- network + time wait port
- https://www.mimul.com/blog/linux-server-operations/
- 비즈니스 (마케팅, 퍼널)

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Deep Knowledge]]
