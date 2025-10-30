# 정신건강 검사 결과 조회 페이지

## 배포 URL

- 프론트엔드: https://emma-hc-lucycare.vercel.app

## 기술 스택

### Frontend
- React 19
- TypeScript
- Vite
- Tanstack Query
- React Toastify
- Rechart
- Tailwindcss


### 기술 선택 이유
- React: 이전까지 Next를 다뤘지만 이번엔 기본적인 React의 문법으로 접근해봄
- Tanstack Query: 쿼리 에러 대응에 retry 기능이 자동으로 들어가고 커스터마이징이 용이함
- Rechart: React 기반으로 만들어진 라이브러리라 React와 호환성이 우수할 것이라 생각함, 애니메이션 효과가 기본적으로 적용되어 있어 추가적인 조치를 하지 않더라도 사용자 경험에 긍정적 영향을 줄 것으로 생각함
- Tailwindcss: 손에 익은 라이브러리라 선택함

## 설치 및 실행
npm install
npm run dev

## 프로젝트 구조
src/
├── assets/
│   ├── css/
│   │   └── pretendardvariable.css
│   ├── fonts/
│   │   ├── Inter-Italic.ttf
│   │   ├── Inter.ttf
│   │   └── PretendardVariable.woff2
│   ├── images/                             # 결과 페이지에 사용된 아이콘 이미지
│   │   ├── crying_face.png
│   │   ├── crying_face_2x.png
│   │   ├── face_with_open_mouth.png
│   │   ├── face_with_open_mouth_2x.png
│   │   ├── fearful_face.png
│   │   ├── fearful_face_2x.png
│   │   ├── hr.png
│   │   ├── hrv.png
│   │   ├── neutral_face.png
│   │   ├── neutral_face_2x.png
│   │   ├── pouting_face.png
│   │   ├── pouting_face_2x.png
│   │   ├── smiling_face.png
│   │   ├── smiling_face_2x.png
│   │   ├── weary_face.png
│   │   └── weary_face_2x.png
│   └── react.svg
├── components
│   ├── buttons
│   │   └── TabButton.tsx
│   ├── charts
│   │   ├── DepressedPieChart.tsx           # 파이차트-우울증지수
│   │   ├── EmotionPieChart.tsx             # 파이차트-감정지수
│   │   ├── HRLineChart.tsx                 # HR차트-심박수
│   │   ├── HRVRadialChart.tsx              # HR차트-심박 변이도
│   │   ├── HRVariantsComposedChart.tsx     # HR차트-심박수 변화
│   │   └── StressGaugeBar.tsx
│   ├── icons
│   │   ├── FaceIcon.tsx                    # 페이지 내의 감정 아이콘
│   │   └── HRIcon.tsx                      # 심장 아이콘
│   ├── layout
│   │   ├── Footer.tsx                      # 종료 버튼을 담고 있는 푸터 컴포넌트
│   │   ├── Header.tsx                      # 상단 로고 영역
│   │   ├── Layout.tsx                      # Header, main, Footer가 배치된 전체 레이아웃
│   ├── result-tabs
│   │   ├── BasicResult.tsx                 # 기본 결과 컴포넌트
│   │   ├── DetailedResult.tsx              # 상세 결과 컴포넌트
│   │   ├── DetailedTitle.tsx               # 상세 결과의 항목 타이틀
│   │   ├── EmotionList.tsx                 # 감정 아이콘 리스트
│   │   └── SectionItem.tsx                 # 기본 결과 컴포넌트의 각 항목 박스
│   ├── DescriptionDiv.tsx                  # 기본 결과 컴포넌트의 각 상세 설명 컴포넌트
│   ├── DetailedListingBox.tsx              # 상세 결과 컴포넌트의 박스 레이아웃
│   └── HRVWithIcon.tsx                     # 심박 변이도의 아이콘과 hrv를 담은 컴포넌트
├── constants
│   └── emotions.ts                         # 감정 관련 상수
├── lib
│   └── api
│       └── emotions.ts                     # 서버 호출 메서드
├── queries
│   └── query-report.ts                     # 과제 쿼리(서버 상태 관리)
├── types
│   └── report.ts                           # 과제 관련 타입
├── utils
│   └── default.ts                          # tailwindcss 관련 함수(자동 생성)
├── App.css                                 
├── App.tsx
├── index.css
└── main.tsx


## 주요 기능
- rPPG 생체신호 데이터 시각화 (심박수 그래프)
- 감정 분석 결과 표시 (파이차트 또는 바차트)
- 이전/현재 측정값 비교
- 우울증 점수 변화 추이
- 과제별(A/B/C/D) 결과 비교

## 구현 상세

### 에러 핸들링
- Tanstack Query의 retry 옵션 활용
- ErrorBoundary 구현

### 상태 관리
- 서버 상태: Tanstack Query
- 클라이언트 상태: useState                     # 데이터의 양이나 드릴링이 자주 발생하게 되면 Zustand 사용 예정

### 데이터 시각화
- 심박수 시계열 차트: hrValues 배열 활용
- 감정 분석: emotionResult 객체를 차트로 시각화
- 우울증 설문: depressionScore 객체의 current 값을 사용
- ...

## 개선 사항
실제 프로덕션 환경이라면 추가하고 싶은 기능이나 개선 방향
- 모바일 버전 View
- 주변인들의 평균값 비교
