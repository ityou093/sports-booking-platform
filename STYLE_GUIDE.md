# 🎯 Sports Booking Platform - Style Guide

## 📋 목차
- [개요](#개요)
- [코드 포맷팅 (Prettier)](#코드-포맷팅-prettier)
- [코드 품질 (ESLint)](#코드-품질-eslint)
- [TypeScript 규칙](#typescript-규칙)
- [React 컴포넌트 규칙](#react-컴포넌트-규칙)
- [Import 및 모듈 규칙](#import-및-모듈-규칙)
- [접근성 (a11y) 규칙](#접근성-a11y-규칙)
- [파일 및 폴더 구조](#파일-및-폴더-구조)
- [네이밍 컨벤션](#네이밍-컨벤션)
- [좋은 예시와 나쁜 예시](#좋은-예시와-나쁜-예시)

---

## 🔍 개요

이 문서는 Sports Booking Platform 프로젝트의 코딩 스타일 가이드입니다. 
일관성 있고 유지보수 가능한 코드를 작성하기 위한 규칙들을 정의합니다.

**기술 스택:**
- React 19 + TypeScript
- Vite + Material-UI
- Zustand (상태관리)
- ESLint + Prettier

---

## 🎨 코드 포맷팅 (Prettier)

### 기본 설정
```json
{
  "semi": true,                    // 세미콜론 필수
  "singleQuote": true,            // 단일 따옴표 사용
  "printWidth": 100,              // 한 줄 최대 100자
  "tabWidth": 2,                  // 들여쓰기 2칸
  "trailingComma": "all",         // 후행 쉼표 항상 사용
  "bracketSpacing": true,         // 객체 괄호 공백
  "arrowParens": "always"         // 화살표 함수 괄호 항상
}
```

### ✅ 올바른 포맷팅
```typescript
// ✅ 좋은 예시
const user = {
  name: 'John',
  age: 30,
  skills: ['React', 'TypeScript'],
};

const handleClick = (event: MouseEvent) => {
  console.log('Button clicked');
};

// ✅ 100자 제한 준수
const veryLongFunctionName = (
  parameterOne: string,
  parameterTwo: number,
  parameterThree: boolean,
) => {
  return 'result';
};
```

---

## 🔧 코드 품질 (ESLint)

### 기본 원칙
- **일관성**: 모든 코드는 동일한 스타일을 따라야 합니다
- **안전성**: TypeScript의 타입 안전성을 최대한 활용합니다
- **가독성**: 명확하고 이해하기 쉬운 코드를 작성합니다

### 필수 규칙
```javascript
{
  "prettier/prettier": ["error"],              // Prettier 규칙 강제
  "semi": ["error", "always"],                 // 세미콜론 필수
  "quotes": ["error", "single"],               // 단일 따옴표
  "comma-dangle": ["error", "always-multiline"], // 후행 쉼표
  "no-duplicate-imports": "error"              // 중복 import 금지
}
```

---

## 📘 TypeScript 규칙

### 타입 안전성
```typescript
// ✅ 명시적 타입 정의
type User = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

// ✅ 함수 반환 타입 명시 (권장)
const getUser = (id: string): User | null => {
  // 구현
  return null;
};

// ❌ any 타입 사용 지양
const badFunction = (data: any) => {
  return data.something;
};

// ✅ 제네릭 사용
const apiCall = <T>(endpoint: string): Promise<T> => {
  return fetch(endpoint).then(res => res.json());
};
```

### 사용하지 않는 변수
```typescript
// ✅ 언더스코어로 시작하는 매개변수는 경고 무시
const handleEvent = (_event: MouseEvent, data: string) => {
  console.log(data);
};

// ❌ 사용하지 않는 변수
const unusedVariable = 'this will trigger warning';
```

### 타입 정의 스타일
```typescript
// ✅ type 키워드 사용 (interface 대신)
type UserProps = {
  user: User;
  onEdit: (user: User) => void;
};

// ✅ 함수형 컴포넌트 타입
type UserCardComponent = (props: UserProps) => JSX.Element;
```

---

## ⚛️ React 컴포넌트 규칙

### 컴포넌트 선언 스타일
```typescript
// ✅ 함수 표현식으로 선언 (const 사용)
const UserCard = ({ user, onEdit }: UserProps): JSX.Element => {
  return (
    <Card>
      <Typography>{user.name}</Typography>
      <Button onClick={() => onEdit(user)}>Edit</Button>
    </Card>
  );
};

// ❌ 함수 선언문 사용 금지
function UserCard(props) {
  // ...
}
```

### JSX 규칙
```typescript
// ✅ Boolean props는 축약형 사용
<Button disabled primary />

// ❌ 명시적 true 값 사용 금지
<Button disabled={true} primary={true} />

// ✅ 적절한 key 사용
{users.map((user) => (
  <UserCard key={user.id} user={user} />
))}
```

### Props 타입 정의
```typescript
// ✅ type 사용
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
};

// ✅ 기본값은 destructuring에서 설정
const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false 
}: ButtonProps) => {
  // 구현
};
```

---

## 📦 Import 및 모듈 규칙

### Import 순서
```typescript
// ✅ 올바른 import 순서
// 1. Node.js 내장 모듈
import path from 'path';

// 2. 외부 라이브러리
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// 3. 내부 모듈 (상위 디렉토리)
import { useAppStore } from '../../store/store';
import { getTranslation } from '../../services/i18n';

// 4. 같은 레벨 디렉토리
import { UserCard } from './UserCard';
import { Header } from './Header';

// 5. 타입 imports (별도로)
import type { User, UserProps } from '../../types/types';
```

### 사용하지 않는 Import 제거
```typescript
// ✅ 필요한 것만 import
import { useState } from 'react';
import { Button } from '@mui/material';

// ❌ 사용하지 않는 import (자동 제거됨)
import { useEffect } from 'react'; // 사용하지 않음
```

---

## ♿ 접근성 (a11y) 규칙

### 이미지 alt 속성
```typescript
// ✅ 의미있는 alt 텍스트
<img src="/logo.png" alt="Sports Booking Platform Logo" />

// ✅ 장식용 이미지는 빈 alt
<img src="/decoration.png" alt="" />

// ❌ alt 속성 누락
<img src="/important.png" />
```

### 버튼과 링크
```typescript
// ✅ 접근 가능한 버튼
<Button 
  onClick={handleSubmit}
  aria-label="사용자 정보 저장"
>
  저장
</Button>

// ✅ 올바른 링크 사용
<Link to="/venues" aria-label="구장 목록 페이지로 이동">
  구장 보기
</Link>
```

---

## 📁 파일 및 폴더 구조

### 디렉토리 구조
```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── LanguageSelector.tsx
│   ├── VenueCard.tsx
│   └── SportCategoryCard.tsx
├── pages/              # 페이지 컴포넌트
│   ├── Main/
│   │   └── index.tsx
│   ├── VenueDetail/
│   │   └── index.tsx
│   └── Header.tsx
├── services/           # API 및 비즈니스 로직
│   ├── api.ts
│   ├── i18n.ts
│   └── mockData.ts
├── store/              # 상태 관리
│   └── store.ts
├── types/              # TypeScript 타입 정의
│   └── types.ts
├── utils/              # 유틸리티 함수
│   ├── dateUtils.ts
│   └── formatUtils.ts
└── styles/             # 스타일 관련
    ├── index.css
    └── CSS_CLASSES.md
```

### 파일 명명 규칙
- **컴포넌트**: `PascalCase.tsx` (예: `UserCard.tsx`)
- **페이지**: `index.tsx` (폴더명은 `PascalCase`)
- **유틸리티**: `camelCase.ts` (예: `dateUtils.ts`)
- **타입**: `types.ts` 또는 `interfaces.ts`
- **상수**: `UPPER_SNAKE_CASE` (예: `API_ENDPOINTS`)

---

## 🏷️ 네이밍 컨벤션

### 변수 및 함수
```typescript
// ✅ camelCase 사용
const userName = 'john_doe';
const isUserActive = true;
const handleButtonClick = () => {};

// ✅ Boolean 변수는 is/has/can 접두사
const isLoading = false;
const hasPermission = true;
const canEdit = false;

// ✅ 이벤트 핸들러는 handle 접두사
const handleSubmit = () => {};
const handleUserSelect = (user: User) => {};
```

### 컴포넌트
```typescript
// ✅ PascalCase 사용
const UserCard = () => {};
const VenueDetailPage = () => {};
const LanguageSelector = () => {};

// ✅ 컴포넌트 Props는 ComponentNameProps
type UserCardProps = {
  user: User;
  onEdit: (user: User) => void;
};
```

### 상수
```typescript
// ✅ UPPER_SNAKE_CASE 사용
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_COUNT = 3;
const DEFAULT_LANGUAGE = 'ko';
```

---

## 💡 좋은 예시와 나쁜 예시

### 컴포넌트 작성
```typescript
// ✅ 좋은 예시
type VenueCardProps = {
  venue: SportsVenue;
  onBook: (venueId: string) => void;
  isLoading?: boolean;
};

const VenueCard = ({ 
  venue, 
  onBook, 
  isLoading = false 
}: VenueCardProps): JSX.Element => {
  const { selectedLanguage } = useAppStore();
  const t = getTranslation(selectedLanguage);

  const handleBookClick = useCallback(() => {
    onBook(venue.id);
  }, [onBook, venue.id]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={venue.imageUrl}
        alt={`${venue.name} 구장 사진`}
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          {venue.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {venue.location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          onClick={handleBookClick}
          disabled={isLoading}
          aria-label={`${venue.name} 예약하기`}
        >
          {t.main.bookNow}
        </Button>
      </CardActions>
    </Card>
  );
};

export { VenueCard };
export type { VenueCardProps };
```

---

## 🔧 도구 설정

### package.json 스크립트
```json
{
  "scripts": {
    "lint": "eslint src --ext .ts,.tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "format": "prettier --write src/**/*.{ts,tsx,css,md}",
    "format:check": "prettier --check src/**/*.{ts,tsx,css,md}",
    "type-check": "tsc --noEmit"
  }
}
```

### VS Code 설정 (.vscode/settings.json)
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## 📚 추가 리소스

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Material-UI Documentation](https://mui.com/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)

---

**마지막 업데이트**: 2024년 12월 17일  
**프로젝트**: Sports Booking Platform  
**버전**: 1.0.0 