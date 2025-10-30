import FaceIcon from "../icons/FaceIcon";
import ListingBoxLayout from "../DetailedListingBox";
import { EMOTION_TEXT } from "../../constants/emotions";
import type { Emotion } from "../../types/report";

interface EmotionListProps {
  title?: string;
  isColored?: boolean;
  emotions: Emotion[];
  className?: string;
}

const EmotionList: React.FC<EmotionListProps> = ({
  title = "제시된 감정",
  isColored = true,
  emotions,
  className,
}) => {
  return (
    <ListingBoxLayout
      isColored={isColored}
      className={className || "pb-5"}
      title={title}
    >
      <div className="pt-8 flex flex-col gap-8 text-[45px] font-semibold">
        {emotions.map((emotion, index) => (
          <div
            key={index}
            className="flex flex-row justify-center gap-2 items-center"
          >
            <div className="w-32">{EMOTION_TEXT[emotion] || emotion}</div>
            <FaceIcon emotion={emotion} scale={1} />
          </div>
        ))}
      </div>
    </ListingBoxLayout>
  );
};

export default EmotionList;
