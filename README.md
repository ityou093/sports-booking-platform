# 플랩 - 운동 예약 플랫폼

운동(축구, 농구, 테니스, 배드민턴, 풋살) 예약을 할 수 있는 웹 플랫폼입니다.

## 🛠 기술 스택

- **React** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **React Query (@tanstack/react-query)** - 서버 상태 관리
- **Zustand** - 클라이언트 상태 관리
- **Material-UI (MUI)** - UI 컴포넌트 라이브러리
- **Vite** - 빌드 도구

## 🚀 시작하기

### 설치

```bash
yarn install --ignore-engines
```

### 개발 서버 실행

```bash
& "C:\Users\skson\AppData\Roaming\npm\yarn.cmd" dev
```

브라우저에서 `http://localhost:5173`을 열어 애플리케이션을 확인하세요.

### 빌드

```bash
yarn build
```

### 미리보기

```bash
yarn preview
```

## 📱 주요 기능

- **운동 종목 선택**: 축구, 농구, 테니스, 배드민턴, 풋살 중 선택
- **날짜 선택**: 오늘부터 2주일간의 날짜 선택 가능
- **장소 검색**: 지역별 운동 시설 검색
- **시간대별 예약**: 시간대별 가격과 예약 가능 여부 확인
- **실시간 상태**: 마감임박, 예약 가능 상태 실시간 업데이트

## 🎨 UI/UX 특징

- **반응형 디자인**: 모바일 우선 디자인
- **직관적인 인터페이스**: 간단하고 명확한 사용자 경험
- **한국어 지원**: 완전한 한국어 UI
- **실시간 피드백**: 사용자 상호작용에 대한 즉각적인 피드백

## 📂 프로젝트 구조

```
├── public/                        # 퍼블릭 파일 (HTML, 이미지 등)
│   └── index.html                 # HTML 템플릿
│
├── src/                           # 소스 코드
│   ├── assets/                    # 이미지, 폰트, 아이콘 등
│   ├── components/                # 재사용 가능한 UI 컴포넌트
│   │   ├── Header.tsx             # 헤더 컴포넌트
│   │   ├── SportCategoryCard.tsx  # 운동 종목 카드 컴포넌트
│   │   ├── VenueCard.tsx          # 장소 카드 컴포넌트
│   │   └── SpecialEventCard.tsx   # 특별 이벤트 카드 컴포넌트
│   ├── pages/                     # 페이지 컴포넌트
│   │   └── HomePage.tsx           # 메인 홈페이지
│   ├── services/                  # API 요청 및 비즈니스 로직
│   │   ├── api.ts                 # API 서비스 함수들
│   │   └── mockData.ts            # 테스트용 목 데이터
│   ├── store/                     # 상태 관리
│   │   ├── store.ts               # Zustand 스토어
│   │   └── types.ts               # TypeScript 타입 정의
│   ├── styles/                    # 전역 스타일
│   │   └── index.css              # 글로벌 CSS
│   ├── utils/                     # 유틸리티 함수들
│   │   ├── dateUtils.ts           # 날짜 관련 유틸리티
│   │   └── formatUtils.ts         # 포맷팅 유틸리티
│   ├── App.tsx                    # 루트 컴포넌트
│   └── main.tsx                   # 엔트리 포인트
│
└── package.json                   # 의존성 및 스크립트 관리
```

## 🔄 상태 관리

- **Zustand**: 선택된 운동 종목, 날짜, 지역 등의 전역 상태 관리
- **React Query**: 서버 데이터 캐싱 및 동기화 (향후 API 연동 준비)

## ⚠️ 참고사항

현재 Node.js 버전 호환성 문제로 인해 `--ignore-engines` 플래그를 사용합니다.

## 🎯 향후 개선 계획

- [ ] 실제 API 연동
- [ ] 사용자 인증 시스템
- [ ] 결제 시스템 연동
- [ ] 예약 관리 기능
- [ ] 푸시 알림
- [ ] 지도 기반 장소 검색
