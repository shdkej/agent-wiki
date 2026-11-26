# Agent Wiki

## 목적

Agent Wiki는 Knowledge Lab에서 검토·컴파일한 문서를 공개적으로 읽는 정적 문서 사이트입니다. 원문과 운영 기록은 Knowledge Lab에 남기고, 이 저장소는 읽기 화면과 컴파일된 문서만 제공합니다.

## 핵심 기능

- 홈과 사이드바의 동일한 주제별 목차, 원본 만다라트 지도, 전문 검색
- 컴파일된 문서의 정적 공개
- 상단 **최근 변경** 메뉴: Git 이력의 최근 20개 커밋을 기준으로 최대 30개 문서를 파일 단위로 보여 주고, 최근 삭제된 문서는 최대 5개를 추가로 표시합니다. 파일마다 가장 최근 변경만 남기며, 삭제된 문서는 링크 없이 취소선으로 표시합니다.

## 개발

```bash
npm ci
npm run dev
```

검증 명령:

```bash
npm run verify:mandalart-nav
npm run verify:reader-nav
npm run types:check
npm run build
```

## 문서와 목차 편집

- 독자용 목차는 `content/reader-navigation.json`에서 편집합니다. 읽을 노트에는 대표 주제 한 곳을 지정하고, 각 주제의 첫 세 편을 홈에 먼저 표시합니다. 홈을 갱신할 때는 `npm run generate:reader-nav`를 실행합니다.
- 원본 만다라트 지도와 기존 문서 URL은 주제 목차와 독립적으로 관리합니다. 지도는 `npm run generate:mandalart-nav`로 갱신합니다.
- 대응 노트를 편집하기 전에 KL의 원문과 현재 위키 문서를 읽습니다. 원문 구조와 문장을 보존하고, 여러 근거를 엮은 글은 `content/docs/outputs/`의 종합 문서로 둡니다. 원본·검토·운영 이력은 KL의 `source/`, `ingest/`, `logs/`에서 확인합니다.

## 데이터와 의존성

- 문서 입력: `content/docs/`
- 최근 변경 목록: 빌드 시점의 이 저장소 Git 이력
- UI/문서 엔진: Next.js, Fumadocs

## 배포

`main` 브랜치 push가 GitHub Actions의 `.github/workflows/deploy.yml`을 실행해 GitHub Pages로 정적 결과물(`out/`)을 배포합니다. 최근 변경 목록은 배포 워크플로가 전체 Git 이력을 내려받아야 정확합니다.

## 한계

최근 변경 목록은 정적 빌드 시점의 Git 이력 스냅샷이며, 실시간으로 갱신되지 않습니다.
