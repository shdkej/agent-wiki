# Container

- 원본: `source/shdkej-content/Deep Knowledge/Container.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Container**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
Fluentd와 Eleasticsearch를 이용해서 로그 수집 및 검색 표준출력(stdout)으로 로그를 출력하도록 두고, 이를 수집하도록 한다. nginx는 stdout으로 출력되도록 설정이 필요하다 libcontainer 개발로 kernel에서 namespaces, cgroups 등을 직접 실행 LXC -> runC 컨테이너 런타임 변경. OCI 준수 그 외 rkt, cri-o 등이 있음 LXC는 다른 호스트에서 실행했을 때 설정 차이로 동일하게 돌아가지 않는 경우가 있었다고 한다. 도커도 버전 다르면 안돌아간다.

## 원문에서 보이는 구조
- Container
- docker strength
- Docker image vs compose
- docker logs
- container
- Docker의 위기?
- Dockerfile
- Dockerfile

## 초기 추출
- isolation process
- no dependency
- portable
- light-weight
- image vs volume
- test with volume, deploy with image
- make stdout
- `echo "test" >> /proc/1/fd/1`
- `--log-opt`
- `max-size`

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Deep Knowledge]]
