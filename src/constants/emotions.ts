import type { Emotion } from "../types/report";

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

export const EMOTION_TEXT: Record<string, string> = {
  Angry: "분노",
  Disgusted: "역겨움",
  Fearful: "불안",
  Happy: "행복",
  Neutral: "중립",
  Sad: "슬픔",
  Surprised: "당황",
};

export const STATUS_TEXT = ["양호", "주의", "경고", "위험"];
export const STATUS_CLASS = [
  "text-green-500",
  "text-[#FFCC00]",
  "text-orange-500",
  "text-rose-600",
];
