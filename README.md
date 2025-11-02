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
- **React 19**: SPA로 단순 페이지 구현이라 빠르게 작업할 수 있을 거라 생각해서 선택함
- **TypeScript**: 데이터 처리 시 타입 안정성으로 런타임 에러 사전 방지 및 개발 생산성 향상
- **Vite**: Webpack 대비 개발 서버 구동 속도가 빠르고 HMR로 코드 변경 결과를 바로 확인 가능함
- **TanStack Query**: retry 기능과 캐싱 전략으로 네트워크 불안정 시에도 안정적인 데이터 조회, 상태 관리 가능함
- **Recharts**: React 기반으로 다양한 차트 타입을 일관된 API로 구현 가능, 기본 애니메이션 효과로 UX 향상
- **React Toastify**: 경량 라이브러리이고 접근성(a11y)를 고려하면서 React로 작성돼 호환성이 좋을 것이라 생각함.
- **Tailwind CSS**: Utility-first 방식으로 일관된 디자인 시스템을 유지함. 미사용 CSS 자동 제거로 번들 크기 최소화로 js기반의 프레임워크이지만 빠른 실행을 위해 노력하고 있음.

## 설치 및 실행
npm install
npm run dev

## 프로젝트 구조
```zsh
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
│   │   └── TabButton.tsx                       # 기본/세부 결과 탭 전환 버튼
│   ├── charts
│   │   ├── DepressedPieChart.tsx               # 파이차트-우울증지수
│   │   ├── EmotionPieChart.tsx                 # 파이차트-감정지수
│   │   ├── HRLineChart.tsx                     # HR차트-심박수
│   │   ├── HRVRadialChart.tsx                  # HR차트-심박 변이도
│   │   ├── HRVariantsComposedChart.tsx         # HR차트-심박수 변화
│   │   ├── RecognitionSpeedComposedChart.tsx   # 인식 속도 복합 차트
│   │   └── StressGaugeBar.tsx                  # 게이지 바-스트레스 지수
│   ├── icons
│   │   ├── FaceIcon.tsx                        # 페이지 내의 감정 아이콘
│   │   └── HRIcon.tsx                          # 심장 아이콘
│   ├── layout
│   │   ├── Footer.tsx                          # 종료 버튼을 담고 있는 푸터 컴포넌트
│   │   ├── Header.tsx                          # 상단 로고 영역
│   │   ├── Layout.tsx                          # Header, main, Footer가 배치된 전체 레이아웃
│   │   └── SkeletonLayout.tsx                  # 데이터 로딩 중 스켈레톤 UI
│   ├── modal
│   │   └── ErrorModal.tsx                      # 에러 발생 시 표시되는 모달 (retry 초과 시)
│   ├── result-tabs
│   │   ├── BasicResult.tsx                     # 기본 결과 컴포넌트
│   │   ├── DetailedResult.tsx                  # 상세 결과 컴포넌트
│   │   ├── DetailedTitle.tsx                   # 상세 결과의 항목 타이틀
│   │   ├── EmotionList.tsx                     # 감정 아이콘 리스트
│   │   └── SectionItem.tsx                     # 기본 결과 컴포넌트의 각 항목 박스
│   ├── AIEmotionAnalysisListingBox.tsx         # AI 감정 분석 결과 박스
│   ├── DescriptionDiv.tsx                      # 기본 결과 컴포넌트의 각 상세 설명 컴포넌트
│   ├── DetailedListingBox.tsx                  # 상세 결과 컴포넌트의 박스 레이아웃
│   ├── HRVWithIcon.tsx                         # 심박 변이도의 아이콘과 hrv를 담은 컴포넌트
│   └── Needle.tsx                              # 게이지 차트의 바늘 컴포넌트
├── constants
│   ├── dummy.ts                                # 개발/테스트용 더미 데이터
│   └── emotions.ts                             # 감정 관련 상수
├── lib
│   └── api
│       └── emotions.ts                         # 서버 호출 메서드
├── queries
│   └── query-report.ts                         # 과제 쿼리(서버 상태 관리)
├── types
│   └── report.ts                               # 과제 관련 타입
├── utils
│   └── default.ts                              # tailwindcss 관련 함수(자동 생성)
├── App.css                                 
├── App.tsx
├── index.css
└── main.tsx
```
## 주요 기능

### 데이터 시각화
- **심박수 분석**: 실시간 심박수 그래프(Line Chart), 심박 변이도(Radial Chart), 심박수 변화 추이(Composed Chart)
- **감정 분석**: 7가지 감정 분포(Pie Chart), 감정별 아이콘 리스트, AI 감정 분석 결과
- **스트레스 및 우울증**: 스트레스 게이지 바, 우울증 점수 파이 차트

### UI/UX
- **탭 전환**: 기본 결과 / 세부 결과 탭으로 정보 단계별 제공
- **로딩 상태**: 스켈레톤 UI로 자연스러운 로딩 경험
- **에러 처리**: 친화적인 에러 모달과 토스트 알림, 자동 재시도(5회, 지수 백오프)
- **반응형 차트**: 애니메이션 효과와 인터랙티브한 데이터 시각화

## 구현 상세

### 에러 핸들링
- **자동 재시도**: 네트워크 불안정 시 자동으로 5회까지 재시도, 간격은 지수 백오프 방식으로 점차 증가시켜 서버 부하 최소화
- **이중 알림 시스템**: 에러 발생 시 토스트 알림으로 즉각적인 피드백 제공 + 상세한 안내를 담은 에러 모달 표시
- **사용자 친화적 메시지**: 사용자가 조금 더 친근하게 접근할 수 있게 알림에 일상체 사용
- **놀람 아이콘**: 딱딱한 경고 아이콘 대신 프로젝트의 FaceIcon(Surprised) 사용하여 일관된 디자인 유지
- **고객센터 안내**: 문제 지속 시 연락 가능한 고객센터 전화번호 제공

### 상태 관리
- 서버 상태: Tanstack Query
- 클라이언트 상태: useState                         # 데이터의 양이나 드릴링이 자주 발생하게 되면 Zustand 사용 예정

### 데이터 시각화
- **심박수 분석**: 측정 중 심박수가 어떻게 변화했는지 그래프로 확인 가능, 심박 변이도를 직관적인 원형 차트로 제공
- **감정 분석**: Happy, Sad, Surprised 등 7가지 감정이 각각 몇 퍼센트인지 파이 차트로 한눈에 파악 가능
- **인식 속도**: 감정 인식에 걸린 시간을 시각화해서 제공
- **스트레스 및 우울증**: 스트레스 수치를 게이지 바로 직관적으로 표현, 우울증 점수는 파이 차트로 제공
- **이전 측정값 비교**: 현재 측정값과 이전 측정값을 비교하여 건강 상태 변화 추이를 확인 가능

## 개선 사항
실제 프로덕션 환경이라면 추가하고 싶은 기능이나 개선 방향

### UX 개선
- **모바일 최적화**: 태블릿, 모바일 기기에서도 편하게 볼 수 있도록 반응형 디자인 강화
- **다크 모드**: 개인의 선호에 따른 다크 모드 옵션 추가
- **프린트 기능**: 검사 결과를 PDF로 저장하거나 인쇄할 수 있는 기능 추가

### 데이터 비교 및 분석
- **또래 비교**: 비슷한 연령대, 성별 사용자들의 평균값과 비교하여 내 상태가 어느 정도인지 파악 가능
- **시계열 분석**: 이전 검사 결과들을 시간 순으로 나열하여 장기적인 건강 변화 추이 확인
- **맞춤형 건강 조언**: AI 분석 결과를 기반으로 개인화된 건강 관리 팁 제공

### 성능 최적화
- **차트 렌더링 최적화**: 대량의 심박수 데이터 처리 시 가상화(virtualization) 적용으로 성능 향상
- **이미지 최적화**: WebP 포맷 적용 및 Lazy Loading으로 초기 로딩 속도 개선

## 구현시 어려웠던 점
- 어려웠다기보다는 Rechart.js를 처음 써봐서 러닝커브가 조금 있었음. 각 프로퍼티들을 하나씩 수정해가면서 제시된 과제에 끼워맞추듯 작업함.