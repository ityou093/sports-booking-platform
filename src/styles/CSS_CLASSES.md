# CSS 클래스 사용 가이드

## CSS 변수 (색상 커스터마이징)

### 메인 컬러
- `--main-color`: #1DB8A6 (기본 메인 컬러)
- `--main-color-light`: #20A085 (밝은 메인 컬러)
- `--main-color-dark`: #16A085 (어두운 메인 컬러)

### 세컨더리 컬러
- `--secondary-color`: #FFD700 (기본 세컨더리 컬러)
- `--secondary-color-light`: #FFC107 (밝은 세컨더리 컬러)
- `--secondary-color-dark`: #F39C12 (어두운 세컨더리 컬러)

### 액센트 컬러
- `--accent-color`: #FF6B6B (기본 액센트 컬러)
- `--accent-color-light`: #FF8E53 (밝은 액센트 컬러)
- `--accent-color-dark`: #FF5252 (어두운 액센트 컬러)

## 공통 버튼 클래스

### .btn-primary
- 메인 액션 버튼 (노란색 배경)
- 사용법: `<Button className="btn-primary">버튼</Button>`

### .btn-secondary  
- 보조 버튼 (투명 배경, 호버시 메인 컬러)
- 사용법: `<Button className="btn-secondary">버튼</Button>`

### .btn-accent
- 강조 버튼 (빨간색 배경)
- 사용법: `<Button className="btn-accent">버튼</Button>`

## 공통 카드 클래스

### .card-glass
- 유리 효과가 있는 카드 스타일
- 사용법: `<Card className="card-glass">...</Card>`

### .card-rounded
- 둥근 모서리의 기본 카드 스타일
- 사용법: `<Card className="card-rounded">...</Card>`

## 공통 배경 클래스

### .bg-main
- 메인 그라데이션 배경
- 사용법: `<Box className="bg-main">...</Box>`

### .bg-accent
- 액센트 그라데이션 배경
- 사용법: `<Box className="bg-accent">...</Box>`

### .bg-glass
- 투명한 유리 효과 배경
- 사용법: `<Box className="bg-glass">...</Box>`

### .bg-glass-strong
- 강한 유리 효과 배경
- 사용법: `<Box className="bg-glass-strong">...</Box>`

## 공통 텍스트 클래스

### .text-primary
- 기본 텍스트 색상 (#333)
- 사용법: `<Typography className="text-primary">텍스트</Typography>`

### .text-secondary
- 보조 텍스트 색상 (#666)
- 사용법: `<Typography className="text-secondary">텍스트</Typography>`

### .text-white
- 흰색 텍스트
- 사용법: `<Typography className="text-white">텍스트</Typography>`

### .text-center
- 중앙 정렬
- 사용법: `<Typography className="text-center">텍스트</Typography>`

### .font-bold
- 굵은 글꼴
- 사용법: `<Typography className="font-bold">텍스트</Typography>`

## 공통 브랜드/아이콘 클래스

### .brand-logo
- 브랜드 로고 스타일 (노란색 배경, 둥근 모서리)
- 사용법: `<Box className="brand-logo">...</Box>`

### .icon-lg
- 큰 아이콘 스타일 (2rem 크기)
- 사용법: `<Icon className="icon-lg" />`

## 공통 헤더 클래스

### .header-glass
- 헤더용 유리 효과 스타일
- 사용법: `<AppBar className="header-glass">...</AppBar>`

## 공통 컨테이너 클래스

### .container-padding
- 기본 패딩 적용
- 사용법: `<Box className="container-padding">...</Box>`

### .container-margin
- 기본 마진 적용
- 사용법: `<Box className="container-margin">...</Box>`

## 애니메이션 클래스

### .animate-float
- 부유하는 애니메이션 효과
- 사용법: `<Box className="animate-float">...</Box>`

### .animate-fadeInUp
- 아래에서 위로 페이드인 효과
- 사용법: `<Box className="animate-fadeInUp">...</Box>`

### .animate-pulse
- 맥박 효과 애니메이션
- 사용법: `<Box className="animate-pulse">...</Box>`

## 사용 예시

```tsx
// 버튼 스타일링
<Button className="btn-primary">주요 액션</Button>
<Button className="btn-secondary">보조 액션</Button>
<Button className="btn-accent">강조 액션</Button>

// 카드 스타일링
<Card className="card-glass">
  <CardContent className="container-padding">
    <Typography className="text-primary font-bold">제목</Typography>
    <Typography className="text-secondary">내용</Typography>
  </CardContent>
</Card>

// 헤더 스타일링
<AppBar className="header-glass">
  <Box className="brand-logo">
    <Icon className="icon-lg" />
    <Typography className="text-primary font-bold">브랜드명</Typography>
  </Box>
</AppBar>

// 배경과 애니메이션
<Box className="bg-main animate-fadeInUp">
  <Typography className="text-white text-center font-bold">
    메인 콘텐츠
  </Typography>
</Box>
```

## 색상 커스터마이징

CSS 파일에서 `:root` 변수 값을 변경하여 전체 테마 색상을 쉽게 변경할 수 있습니다:

```css
:root {
  --main-color: #새로운색상;
  --secondary-color: #새로운색상;
  --accent-color: #새로운색상;
}
``` 