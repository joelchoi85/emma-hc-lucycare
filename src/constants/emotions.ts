export type Emotion =
  | "Angry"
  | "Disgusted"
  | "Fearful"
  | "Happy"
  | "Neutral"
  | "Sad"
  | "Surprised";

export const EMOTION_COLORS: Record<Emotion, string> = {
  Happy: "#FFD700", // 밝은 금색/노란색
  Sad: "#4A90E2", // 파란색
  Angry: "#E74C3C", // 빨간색
  Fearful: "#9B59B6", // 보라색
  Surprised: "#1ABC9C", // 청록색
  Disgusted: "#27AE60", // 녹색
  Neutral: "#95A5A6", // 회색
};

export const EMOTION_LABELS: Record<Emotion, string> = {
  Happy: "행복",
  Sad: "슬픔",
  Angry: "화남",
  Fearful: "두려움",
  Surprised: "놀람",
  Disgusted: "혐오",
  Neutral: "중립",
};
