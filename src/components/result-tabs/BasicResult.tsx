import React, { useEffect } from "react";
import SectionItem from "./SectionItem";
import DescriptionDiv from "../DescriptionDiv";
import { fetchReport } from "../../queries/query-report";
import HRLineChart from "../charts/HRLineChart";
import HRVariantsComposedChart from "../charts/HRVariantsComposedChart";
import HRVRadialChart from "../charts/HRVRadialChart";
import HRVWithIcon from "../HRVWithIcon";
import StressGaugeBar from "../charts/StressGaugeBar";
import EmotionPieChart from "../charts/EmotionPieChart";
import DepressedPieChart from "../charts/DepressedPieChart";

const BasicResult: React.FC = () => {
  const { data, isLoading, isError } = fetchReport();
  useEffect(() => {
    if (!isLoading && !data && isError) {
      console.log("error");
    }
  });
  return (
    <div className="flex flex-col gap-13 pt-8 px-16">
      <SectionItem name="심박수">
        {data && !(data instanceof Error) && (
          <div className="px-32">
            <HRLineChart
              previous={data.previousRPPG}
              current={data.currentRPPG}
            />
          </div>
        )}
        <div className="flex justify-center">
          <DescriptionDiv
            description={`심박수는 1분 동안 심장이 뛰는 횟수를 의미해요.
일반적으로 성인은 60-100 BPM이 정상 범위에요.
심박수가 너무 높거나 낮으면
건강 문제의 신호일 수 있어 주의가 필요해요.`}
          />
        </div>
        <div className="m-8">
          <SectionItem
            name="심박수 변화"
            description="심박수는 어쩌구어쩌구어쩌구"
          >
            <div className="px-0 py-16 flex justify-around">
              <div className="flex border rounded-xl w-[270px] h-[377px] justify-center items-center gap-10">
                <div className="relative font-pretendard overflow-visible  items-center w-1 h-[236px] bg-black flex flex-col justify-between text-xl font-black">
                  <div className="absolute -top-3">◆</div>
                  <div className="absolute top-1/2 -translate-y-1/2">●</div>
                  <div className="absolute -bottom-3">◆</div>
                </div>
                <div className="relative overflow-visible items-start h-[236px] w-[90px] flex flex-col justify-start text-xl font-bold text-[30px]">
                  <div className="absolute -top-5">최대값</div>
                  <div className="absolute top-1/2 -translate-y-1/2">평균</div>
                  <div className="absolute -bottom-5">최소값</div>
                </div>
              </div>
              {data && !(data instanceof Error) && (
                <div className="flex">
                  <HRVariantsComposedChart
                    legend="직전"
                    variants={data.previousRPPG.hrValues}
                  />
                  <HRVariantsComposedChart
                    legend="현재"
                    color="#FF0000"
                    variants={data.currentRPPG.hrValues}
                  />
                </div>
              )}
            </div>
          </SectionItem>
        </div>
      </SectionItem>

      {/* 심박 변이도 섹션 */}

      <SectionItem name="심박 변이도">
        {data && !(data instanceof Error) && (
          <div className="flex relative justify-between items-baseline p-6 min-h-86 mb-10">
            <>
              <HRVRadialChart value={data.previousRPPG.hrv} />
              <HRVRadialChart value={data.currentRPPG.hrv} />
            </>

            <div className="absolute flex flex-col items-center -translate-1/2 top-1/2 left-1/2">
              <HRVWithIcon hrv={data.currentRPPG.hrv} />
              <DescriptionDiv
                description={`심박 변이도는 심장이 얼마나 유연하게
조절되는 지를 알려주는 지표에요.
해당 값이 높을수록 건강한 상태를 의미해요.`}
              />
            </div>
          </div>
        )}
        <div className="font-bold text-[28px] text-[#6B6B6B] mb-10">
          제공된 HRV 위험도는 참고용으로서, 정확한 진단은 반드시 의료기관에서
          받으시기 바랍니다.
        </div>
      </SectionItem>

      {/* 스트레스 및 감정 섹션 */}
      <div className="grid grid-cols-2 gap-8">
        <SectionItem name="스트레스">
          {data && !(data instanceof Error) && (
            <div className="flex flex-col gap-8 pb-10">
              <StressGaugeBar value={data.currentRPPG.stress} />
              <DescriptionDiv
                textClass=" text-[40px]/18 font-bold"
                description={`스트레스 수치가 낮아요.
 가끔 스트레스를 경험하긴 하지만
 충분히 관리할 수 있는 상태에요!`}
              />
            </div>
          )}
        </SectionItem>
        <SectionItem name="감정">
          {data && !(data instanceof Error) && (
            <EmotionPieChart emotions={data.currentRPPG.emotionResult} />
          )}
        </SectionItem>
      </div>

      {/* 우울증 설문 결과 섹션 */}
      <SectionItem name="우울증 설문 결과">
        <div className="grid grid-cols-3">
          {data && !(data instanceof Error) && (
            <DepressedPieChart score={data.depressionScore.current} />
          )}
          <div className="col-span-2 flex flex-col gap-10 max-w-[931px]">
            <SectionItem
              name="결과"
              status={0}
              className="m-0! py-4! px-6 rounded-2xl text-[34px]!"
            ></SectionItem>
            <DescriptionDiv
              textClass="pl-8 text-[30px] text-start font-bold"
              description={`가벼운 수준의 우울감이 나타나고 있습니다. 
일시적인 감정 기복일 수 있으나, 증상이 악화되지 않도록 적극적인 관심과 관리가 필요합니다.

가족, 친구, 이웃 등 주변 사람과의 교류를 늘리고, 필요하다면 지역사회 상담 기관이나 심리상담센터 등 전문 자원을 활용해 보세요.`}
            />
          </div>
        </div>
      </SectionItem>
    </div>
  );
};

export default BasicResult;
