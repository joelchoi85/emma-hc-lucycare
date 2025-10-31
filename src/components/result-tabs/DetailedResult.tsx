import React, { useEffect } from "react";
import DecoratedTitle from "./DetailedTitle";
import DetailedListingBox from "../DetailedListingBox";
import EmotionList from "./EmotionList";
import { fetchReport } from "../../queries/query-report";
import AIEmotionAnalysisListingBox from "../AIEmotionAnalysisListingBox";
import { DUMMY_TEXT } from "../../constants/dummy";
import RecognitionSpeedComposedChart from "../charts/RecognitionSpeedComposedChart";
import { EMOTION_TEXT } from "../../constants/emotions";

const DetailedResult: React.FC = () => {
  const { data, isLoading, isError } = fetchReport();
  useEffect(() => {
    if (!isLoading && !data && isError) {
      console.log("error");
    }
  });
  return (
    <div className="font-pretendard flex flex-col gap-6 p-3">
      {/* 표정 공감하기 섹션 */}
      <section className="flex flex-col p-[30px] space-y-8">
        <DecoratedTitle title="표정 공감하기" />
        {data && !(data instanceof Error) && (
          <div className="flex flex-row gap-8 items-stretch">
            <div className="w-[326px]">
              <EmotionList
                emotions={data.detailed.empathy.emotionRows.map(
                  (row) => row.aiAnalysis.emotion
                )}
              />
            </div>
            <div className="flex-1">
              <AIEmotionAnalysisListingBox
                data={data.detailed.empathy.emotionRows}
              />
            </div>
            <div className="w-[533px]">
              <DetailedListingBox
                className="pb-5 h-full"
                isColored
                title="공감도(이전→현재)"
              >
                <div className="mt-8 flex flex-col items-center gap-8">
                  {data &&
                    !(data instanceof Error) &&
                    data.detailed.empathy.empathyScores.map((score) => (
                      <div className="flex flex-row gap-4 text-[45px] font-semibold">
                        <div>{score.before}점</div>
                        <div>→</div>
                        <div>{score.after}점</div>
                      </div>
                    ))}
                </div>
              </DetailedListingBox>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <div className="w-[1513px] text-[35px]/15 font-bold whitespace-pre-line">
            {DUMMY_TEXT}
          </div>
        </div>
      </section>

      <section className="p-[30px]">
        <DecoratedTitle title="표정 따라하기" />
        {data && !(data instanceof Error) && (
          <div className="mt-16 flex gap-8 mb-16 items-stretch">
            <div className="flex-1">
              <EmotionList
                emotions={data.detailed.mimic.matchScores.map(
                  (row) => row.emotion
                )}
              />
            </div>
            <div className="flex-1">
              <DetailedListingBox
                className="h-full"
                title="표정 일치율(이전→현재)"
              >
                <div className="mt-8 flex flex-col items-center gap-8">
                  {data.detailed.mimic.matchScores.map((score) => (
                    <div className="flex flex-row gap-4 text-[45px] font-semibold">
                      <div>{score.before}%</div>
                      <div>→</div>
                      <div
                        className={
                          score.before > score.after
                            ? "text-[#FF0000]"
                            : "text-[#0074D0]"
                        }
                      >
                        {score.after}%
                      </div>
                    </div>
                  ))}
                </div>
              </DetailedListingBox>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <div className="w-[1513px] text-[35px]/15 font-bold whitespace-pre-line">
            {DUMMY_TEXT}
          </div>
        </div>
      </section>

      <section className="p-[30px]">
        <DecoratedTitle title="표정 인지하기" />
        {data && !(data instanceof Error) && (
          <div className="mt-16 flex gap-8 mb-16 items-stretch">
            <div className="w-[425px]">
              <EmotionList
                className="h-full pb-5"
                emotions={data.detailed.recognition.recognitionRows.map(
                  (row) => row.proposedEmotion
                )}
              />
            </div>
            <div className="w-[425px]">
              <EmotionList
                className="h-full pb-5"
                title="내가 선택한 감정"
                isColored={false}
                emotions={data.detailed.recognition.recognitionRows.map(
                  (row) => row.myEmotion
                )}
              />
            </div>
            <DetailedListingBox
              className="items-stretch w-[365px] pb-5"
              title="정확도"
              isColored
            >
              <div className="mt-8 flex flex-col justify-center items-center gap-8">
                <div className="text-[40px] font-semibold space-y-8">
                  <div>
                    {data.detailed.recognition.recognitionRows.length}가지 감정
                    중<br />
                    {data.detailed.recognition.recognitionRows.reduce(
                      (prev, curr) =>
                        curr.myEmotion === curr.proposedEmotion
                          ? prev + 1
                          : prev,
                      0
                    )}
                    개를 맞추셨습니다.
                  </div>
                  <div>
                    정확도
                    <br />
                    <div>
                      {data.detailed.recognition.accuracyBefore}%→
                      <span
                        className={
                          data.detailed.recognition.accuracyBefore <
                          data.detailed.recognition.accuracyAfter
                            ? "text-[#0074D0]"
                            : "text-[#FF0000]"
                        }
                      >
                        {data.detailed.recognition.accuracyAfter}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </DetailedListingBox>
            <DetailedListingBox
              className="items-stretch flex-1"
              title="반응 속도"
            >
              <RecognitionSpeedComposedChart
                responseTime={data.detailed.recognition.responseTime}
              />
            </DetailedListingBox>
          </div>
        )}
        <div className="flex justify-center">
          <div className="w-[1513px] text-[35px]/15 font-bold whitespace-pre-line">
            {DUMMY_TEXT}
          </div>
        </div>
      </section>

      {/* 표정 지어보기 섹션 */}
      <section className="p-[30px]">
        <DecoratedTitle title="표정 지어보기" />
        {data && !(data instanceof Error) && (
          <div className="mt-16 flex gap-8 mb-16 items-stretch">
            <div className="w-[326px]">
              <EmotionList
                emotions={data.detailed.replication.replicationRows.map(
                  (row) => row.proposedEmotion
                )}
              />
            </div>
            <DetailedListingBox
              className="flex-1"
              title="AI 표정 분석(이전 → 현재)"
            >
              {data.detailed.replication.replicationRows.map((row) => (
                <div className="mt-8 text-[45px] font-semibold">
                  {EMOTION_TEXT[row.aiAnalysis.emotion]} (
                  {(row.aiAnalysis.previous * 100).toFixed(0)}% →{" "}
                  <span
                    className={
                      row.aiAnalysis.previous < row.aiAnalysis.current
                        ? "text-[#0074D0]"
                        : "text-[#FF0000]"
                    }
                  >
                    {(row.aiAnalysis.current * 100).toFixed(0)}%
                  </span>
                  )
                </div>
              ))}
            </DetailedListingBox>
            <DetailedListingBox className="flex-1" title="결과" isColored>
              {data.detailed.replication.replicationRows.map((row) => (
                <div className="mt-8 text-[45px] font-semibold">
                  {row.aiAnalysis.current * 100 < 0.5 ? "어색함" : "자연스러움"}
                </div>
              ))}
            </DetailedListingBox>
          </div>
        )}
        <div className="flex justify-center">
          <div className="w-[1513px] text-[35px]/15 font-bold whitespace-pre-line">
            {DUMMY_TEXT}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedResult;
