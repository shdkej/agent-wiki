# Agent Wiki

## 목적

Agent Wiki는 Knowledge Lab에서 검토·컴파일한 문서를 공개적으로 읽는 정적 문서 사이트입니다. 원문과 운영 기록은 Knowledge Lab에 남기고, 이 저장소는 읽기 화면과 컴파일된 문서만 제공합니다.

## 핵심 기능

- 문서 구조 탐색과 전문 검색
- 컴파일된 문서의 정적 공개
- 상단 **최근 변경** 메뉴: Git 이력의 최근 20개 커밋을 기준으로 최대 30개 문서를 파일 단위로 보여 줍니다. 파일마다 가장 최근 변경만 남기며, 삭제된 문서는 링크 없이 취소선으로 표시합니다.

## 개발

```bash
npm ci
npm run dev
```

검증 명령:

```bash
npm run verify:mandalart-nav
npm run types:check
npm run build
```

## 데이터와 의존성

- 문서 입력: `content/docs/`
- 최근 변경 목록: 빌드 시점의 이 저장소 Git 이력
- UI/문서 엔진: Next.js, Fumadocs

## 배포

`main` 브랜치 push가 GitHub Actions의 `.github/workflows/deploy.yml`을 실행해 GitHub Pages로 정적 결과물(`out/`)을 배포합니다. 최근 변경 목록은 배포 워크플로가 전체 Git 이력을 내려받아야 정확합니다.

## 한계

최근 변경 목록은 정적 빌드 시점의 Git 이력 스냅샷이며, 실시간으로 갱신되지 않습니다.
