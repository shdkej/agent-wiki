# Computer_Architecture

- 원본: `source/shdkej-content/Fundamental/Computer_Architecture.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Computer_Architecture**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
디스크에 있는 프로그램을 메모리로 부르고, 메모리에 있는 데이터를 CPU가 읽어가면서 프로그램이 동작한다. 불 대수 -> 폰 노이만 Transistor -> Flipflop -> IC -> CPU or RAM low level - Assembly - complier - high level language 디스크에 저장된 프로그램이 코드와 데이터를 갖고 있다. 이를 실행시키면 프로세스를 RAM에 적재하면서 코드와 데이터를 가져오고, 스택과 힙을 할당 받는다. 코드를 읽는 것은 CPU에서 메모리를 불러와 명령을 수행한다.

## 원문에서 보이는 구조
- Summary
- CPU
- process
- Process, Thread
- MEMORY
- C 언어가 메모리를 사용하는 방식
- memory management
- 메모리와 cpu 캐시는 구조가 다르다

## 초기 추출
- AND OR XOR
- ARU MBR MAR -- John von neumann
- low level (CISC - intel, RISC - arm)
- 기계어는 CPU와 1:1 관계라 어셈블리어가 기계어 구조에 맞춰 변환되면 CPU는 동작한다.
- USER want to running program: HDD -> RAM -> CPU (process) -> OUTPUT
- really running CPU with RAM and process scheduler
- 
- Code - Code text, 기계어(Machine Code) ex) RISC
- Data - Global, Const variable
- Stack - region(local) variable, function

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Fundamental]]
