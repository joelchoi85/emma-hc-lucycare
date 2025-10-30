import { EMOTION_TEXT } from "../constants/emotions";
import type { EmotionRow } from "../types/report";
import { cn } from "../utils/default";

interface AIEmotionAnalysisListingBoxProps {
  isColored?: boolean;
  className?: string;
  data: EmotionRow[];
}
const AIEmotionAnalysisListingBox: React.FC<
  AIEmotionAnalysisListingBoxProps
> = ({ isColored = false, className, data }) => {
  return (
    <div
      className={cn(
        isColored ? "bg-[#DDE9FF]" : "border-2 border-[#DDE9FF]",
        "rounded-[20px]",
        className
      )}
    >
      <div className="-mb-2 grid grid-cols-3 font-bold text-[50px] p-8">
        <div>AI 표정 분석</div>
        <div>나의 감정</div>
        <div>일치 여부</div>
      </div>
      <hr className="border-2 border-[#99C0FF]" />
      <div className="space-y-0">
        {data.map((emotion) => (
          <div className="grid grid-cols-3 font-semibold text-[45px] px-8 pt-8 pb-2">
            <div>
              {EMOTION_TEXT[emotion.aiAnalysis.emotion]}(
              {(emotion.aiAnalysis.percentage * 100).toFixed(0)}%)
            </div>
            <div>{EMOTION_TEXT[emotion.myEmotion]}</div>
            <div
              className={
                emotion.aiAnalysis.emotion === emotion.myEmotion
                  ? "text-[#3B82F6]"
                  : "text-[#FF0000]"
              }
            >
              {emotion.aiAnalysis.emotion === emotion.myEmotion
                ? "일치"
                : "불일치"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIEmotionAnalysisListingBox;
