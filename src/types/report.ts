/**
 * 감정 분석 결과 세부 확률
 */
export interface EmotionResult {
  Angry: number;
  Disgusted: number;
  Fearful: number;
  Happy: number;
  Neutral: number;
  Sad: number;
  Surprised: number;
}

/**
 * rPPG 심박 및 감정
 */
export interface RPPGData {
  hr: string; // 심박수 (예: "72 bpm")
  hrValues: number[]; // 심박수 값 배열
  hrv: string; // 심박 변이도 (예: "45 ms")
  emotion: string; // 가장 높은 확률의 감정
  stress: "Low" | "Medium" | "High" | "Danger"; // 스트레스 수준 (예: "Low", "Medium")
  emotionResult: EmotionResult; // 감정 분석 세부 결과
}

/**
 * 우울증 점수
 */
interface DepressionScore {
  previous: number;
  current: number;
}

/**
 * AI 감정 분석
 */
interface EmotionRow {
  aiAnalysis: {
    emotion: string;
    percentage: number;
  };
  myEmotion: string;
}

/**
 * 공감 점수 변화
 */
interface EmpathyScore {
  before: number;
  after: number;
}

/**
 * 공감 관련 세부 데이터
 */
interface EmpathyData {
  emotionRows: EmotionRow[]; // 감정 일치 행 목록
  empathyScores: EmpathyScore[]; // 공감 점수 변화 목록
}

/**
 * 모방 매치 점수 데이터
 */
interface MimicMatchScore extends EmpathyScore {
  emotion: string; // 해당 감정
}

/**
 * 모방 관련 세부 데이터
 */
interface MimicData {
  matchScores: MimicMatchScore[]; // 매치 점수 목록
}

/**
 * 인식 테스트 결과
 */
interface RecognitionRow {
  proposedEmotion: string; // 제시된 감정
  myEmotion: string; // 사용자가 인식한 감정
}

/**
 * 인식 관련 세부 데이터
 */
interface RecognitionData {
  recognitionRows: RecognitionRow[]; // 인식 결과 행 목록
  accuracyBefore: number; // 이전 정확도
  accuracyAfter: number; // 이후 정확도
  responseTime: number; // 반응 시간 (밀리초)
}

/**
 * 복제 테스트 결과
 */
interface ReplicationRow {
  proposedEmotion: string; // 제시된 감정
  aiAnalysis: {
    emotion: string;
    previous: number; // 이전 확률
    current: number; // 현재 확률
  };
}

/**
 * 복제 관련 세부 데이터
 */
interface ReplicationData {
  replicationRows: ReplicationRow[]; // 복제 결과 행 목록
}

/**
 * 공감, 모방, 인식, 복제 등 세부 테스트 데이터
 */
interface DetailedData {
  empathy: EmpathyData;
  mimic: MimicData;
  recognition: RecognitionData;
  replication: ReplicationData;
}

/**
 * 전체 데이터 구조를 나타내는 최상위 타입입니다.
 */
export interface ReportData {
  previousRPPG: RPPGData;
  currentRPPG: RPPGData;
  depressionScore: DepressionScore;
  detailed: DetailedData;
}
