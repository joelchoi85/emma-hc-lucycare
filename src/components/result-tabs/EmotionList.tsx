import FaceIcon from "../icons/FaceIcon";
import ListingBoxLayout from "../layout/ListingBoxLayout";

const EmotionList = () => {
  return (
    <ListingBoxLayout title="제시된 감정" isColored>
      <div className="flex flex-col gap-4 text-[45px] font-semibold">
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="w-32">슬픔</div>
          <FaceIcon emotion="Sad" />
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="w-32">행복</div>
          <FaceIcon emotion="Happy" />
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="w-32">불안</div>
          <FaceIcon emotion="Fearful" />
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="w-32">중립</div>
          <FaceIcon emotion="Neutral" />
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="w-32">분노</div>
          <FaceIcon emotion="Angry" />
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="w-32">역겨움</div>
          <FaceIcon emotion="Disgusted" />
        </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="w-32">당황</div>
          <FaceIcon emotion="Surprised" />
        </div>
      </div>
    </ListingBoxLayout>
  );
};

export default EmotionList;
