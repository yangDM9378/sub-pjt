# sub-pjt

## 개요

서브 프로젝트를 Mono Repo 구조 (pnpm + turbo + vite) 로 개발하고 관리하는 공간

### Sub PJT

0. Sub PJT 용 Mono Repo 구조 설계

   - /pjt-monorepo/apps/test
   - monorepo 라우팅 구조 설계 및 이해

1. 영상 파일 재생 화면 개발 프로젝트
   - /pjt-monorepo/apps/video
   - [README.md](https://github.com/yangDM9378/sub-pjt/pjt-monorepo/apps/video)

### 실행 방법

- monorepo로 구성된 app의 package 한번에 설치

```
pnpm install
```

- monorepo app의 build 파일 생성

```
pnpm turbo build
```

- 주소 라우터로 monorepo app dist 파일 실행을 위한 express server 실행

```
cd apps/root
node server.js
```
