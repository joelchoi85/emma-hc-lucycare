import React from "react";
import DecoratedTitle from "./DetailedTitle";
import ListingBoxLayout from "../layout/ListingBoxLayout";
import EmotionList from "./EmotionList";
export const emotionText: Record<string, string> = {
  Angry: "분노",
  Disgusted: "역겨움",
  Fearful: "불안",
  Happy: "행복",
  Neutral: "중립",
  Sad: "슬픔",
  Surprised: "당황",
};
const DetailedResult: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-8">
      {/* 표정 공감하기 섹션 */}
      <section className="p-[30px] space-y-8">
        <DecoratedTitle title="표정 공감하기" />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <EmotionList />
          </div>
          <div className="col-span-6">
            <ListingBoxLayout title="여러 공감 매체">슬픔</ListingBoxLayout>
          </div>
          <div className="col-span-3">
            <ListingBoxLayout isColored title="공감도(이전→현재)">
              djdj
            </ListingBoxLayout>
          </div>
        </div>
      </section>

      {/* 표정 따라하기 섹션 */}
      <section className="p-[30px]">
        <h2 className="text-2xl font-bold mb-4">표정 따라하기</h2>
        <div className="text-gray-600">
          표정 따라하기 데이터가 여기에 표시됩니다.
        </div>
      </section>

      {/* 표정 인지하기 섹션 */}
      <section className="p-[30px]">
        <h2 className="text-2xl font-bold mb-4">표정 인지하기</h2>
        <div className="text-gray-600">
          표정 인지하기 데이터가 여기에 표시됩니다.
        </div>
      </section>

      {/* 표정 지어보기 섹션 */}
      <section className="p-[30px]">
        <h2 className="text-2xl font-bold mb-4">표정 지어보기</h2>
        <div className="text-gray-600">
          표정 지어보기 데이터가 여기에 표시됩니다.
        </div>
      </section>
    </div>
  );
};

export default DetailedResult;
