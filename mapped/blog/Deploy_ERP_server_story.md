# Deploy_ERP_server_story

- 원본: `source/shdkej-content/blog/Deploy_ERP_server_story.md`
- 상태: 1차 대응 노트
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 주제 보존
이 페이지는 **Deploy_ERP_server_story**의 원래 주제를 보존하며, 주제 드리프트가 아니라 탐구와 정리를 통해 개선되어야 한다.

## 1차 읽기
회사의 내부 전산 작업화를 위해 ERP 서버를 구축해 데이터를 한 곳에 모으고, 추적하고, 관리하기 docker-compose.yml 파일 하나로 구성 docker 에 대해서는 [subicura님의 블로그](https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html)에 잘 정리되어 있어서 이것을 보면 바로 사용가능할 것 같다. 우분투 기준 설치 방법 ``` apt install -y docker.io usermod -aG docker $USER

## 원문에서 보이는 구조
- 목표
- Step by Step
- Docker를 사용해서 어떤 환경에서도 쉽고 빠르게 서버를 관리
- docker compose 로 여러 서비스 같이 관리한다
- 수정하고 지웠다가 다시 실행해보기
- docker-compose 확장 및 개선
- 폴더 트리
- 간단한 모니터링을 위해 nagios를 이용했다

## 초기 추출
- odoo -- postgresql -- nginx -- nagios 형태가 된다
- db # db 실행 후 erp 서버 실행하도록 설정
- "8069:8069"
- HOST=db
- USER=odoo
- PASSWORD=odoo
- odoo-data:/var/lib/odoo
- ./addons:/addions_external
- "5432:5432"
- POSTGRES_USER=odoo

## 탐구 / 정리 방향
- 탐구: 원문 표현을 넘어 이 노트를 오래 가치 있게 만드는 생각, 질문, 연결점을 찾는다.
- 정리: 중복을 줄이고, 문장을 다듬고, 구조를 보존하면서 훑어보기와 재사용이 쉬워지게 만든다.
- 제약: 관리 노트는 500줄 이하를 유지하고, 다른 주제로 바꾸지 않는다.

## 관련 문서
- [[../../sources/blog]]
