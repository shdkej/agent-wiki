# Network

- 원본: `source/shdkej-content/Fundamental/Network.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Network**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
1990 World Wide Web 처음에는 1byte를 6,7,8 정해진 것 없이 각 업체마다 다르게 사용했다 ASCII가 128개의 문자를 표현할 수 있어서 이게 기준이 된 것이라는 설이 유력하다 (2^7=128) 대역폭은 BDP(Bandwidth Delay Product)라는 것과 관계있는데 BDP = 대역폭 _ RTT(round-trip time) RTT는 이동 시간 정도로 생각하면 될 것 같다 100Mbps 대역폭의 지연시간 2초인 곳에서 BDP는 25MB((100bit / 8)byte _ 2)이고, 이것이 네트워크 경로에

## 원문에서 보이는 구조
- Internet
- WWW
- TCP, UDP
- 왜 1byte는 8bit 일까
- TCP network
- tcp 혼잡제어
- Browser - Server
- client - server in web

## 초기 추출
- data networks
- hypertext = text displayed on a electronic devices (with hyperlinks)
- X windows system? = X11
- https://home.cern/science/computing/birth-web/short-history-web
- TCP - 4계층, IP - 3계층
- TCP: get Data, send serialize and check destination
- IP: Make Data(packet)
- URI - DNS - IP - TCP - HTTP - RESPONSE
- 1. 주소 입력
- 2. 주소값 DNS 검색

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Fundamental]]
