# Data

- 원본: `source/shdkej-content/Deep Knowledge/Data.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Data**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
json data 기본 synonym도 포함 한다 정보 느낌이다. es에 넣으면 내부에서 기대하는 로직을 수행하고, 결과값을 기대했던대로 받는다. 궁금한 것 마나? default size가 10이었다. userdict.txt 와 synonyms.txt를 준비해두고 인덱스 생성 ``` > curl -X PUT "localhost:9200/analyze?pretty" -H 'Content-Type: application/json' -d' { "settings": { "analysis": { "tokenizer": {

## 원문에서 보이는 구조
- Database
- 디비 설계 시 고려사항
- 대용량 작업
- Redis
- data structure [[redis]]
- redis hash crud
- elasticsearch
- elasticsearch

## 초기 추출
- Data management: File - RDB - NoSQL
- ACID
- Atomicity
- Consistency
- Isolation
- Durability
- How would you find the most expensive queries
- NoSQL, for document and relational db
- NoSQL, CAP theorem
- N+1 Problem

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/Deep Knowledge]]
