# Coding

- 원본: `source/shdkej-content/Fundamental/Coding.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Coding**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
코딩을 어떻게 하면 좋은 코드가 나올까? SOLID, DRY, YAGNI 등 많은 코딩, 디자인 가이드가 있다. 변경하기 위한 이유는 버그 수정이나 리팩토링일 때가 아니라 디자인 설계 시의 얘기 테스트 시에 외부 API의 기능을 테스트하는게 아니라 내 구현을 테스트한다. 객체 생성 시 고정된 객체를 만드는 것이 아니라 기준만 만들고 실제 구현은 각 상황에 맞게 수정할 수 있게 하는 것 인터페이스나 추상클래스를 이용하여 상속해 여러 객체를 하나의 기준으로 만드는 것 그리고 이를 이용하여 오버라이딩 하여 각 객체에 맞게 재구현할 수 있는 것

## 원문에서 보이는 구조
- 요약
- SOLID
- Single reason
- DIP를 통해 외부 라이브러리 대신 임의의 객체를 만들어 테스트하기 용이해진다.
- OOP
- 폴리모피즘
- 상속, 위임(Composition)
- coupling vs cohesion

## 초기 추출
- 
- Abstraction, One Behavior class, Encapsulation**
- S 하나의 클래스는 한 가지 일만, 변경하기 위한 이유는 하나만 갖고 있어야 한다.
- O 확장에는 열려있고, 변화에는 닫혀 있어야 한다
- L 하위 클래스는 기존 클래스와 치환되어도 동작 해야 한다
- I 인터페이스를 작게 하고, 클라이언트가 사용 안하는 함수는 공급도 안하게 한다.
- D 추상화에 의존해라. 구체적인 것 말고.
- Encapsulation, Composition, Inheritance, Delegation, Polymorphism, Open recursion**
- same Input, should same output
- Encapsulation = Module?

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Fundamental]]
