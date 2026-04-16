# Data_Structure

- 원본: `source/shdkej-content/Fundamental/Data_Structure.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Data_Structure**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
```c // C int a = 1 int b = 2 // a address = 0x0000 // b address = 0x0004 ``` ```c // C int a[2] int b[2] // a address = 0x0000 // b address = 0x0008 ``` ```py a = 1 b = 2 c = [] d = [] ``` ```py class Node: def __init__(self, data): self.data = data self.next = None class LinkedList:

## 원문에서 보이는 구조
- How to choice Data Structure
- Base
- search, add, remove, sort
- Data Type
- Arrays
- python
- a address = 0x000080
- b address = 0x000080 a == b

## 초기 추출
- how to access
- memory space
- ordered
- concurrency
- duplicates
- mutable
- read, write frequency
- size
- 데이터 분포, 입출력빈도
- int, char, long

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Fundamental]]
