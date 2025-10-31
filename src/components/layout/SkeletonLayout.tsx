import React from "react";

const SkeletonLayout: React.FC = () => {
  return (
    <div className="flex flex-col gap-13 pt-8 px-16 animate-pulse">
      {/* 심박수 섹션 */}
      <div className="flex flex-col gap-6">
        <div className="h-12 w-48 bg-gray-200 rounded-lg"></div>

        {/* 차트 영역 */}
        <div className="px-32 h-64 bg-gray-200 rounded-xl text-[40px] flex justify-center items-center font-pretendard">
          로딩중입니다... 잠시만 기다려주세요...
        </div>

        {/* 설명 박스 */}
        <div className="flex justify-center">
          <div className="w-[600px] h-32 bg-gray-200 rounded-2xl"></div>
        </div>

        {/* 심박수 변화 서브섹션 */}
        <div className="m-8">
          <div className="h-10 w-40 bg-gray-200 rounded-lg mb-4"></div>
          <div className="px-0 py-16 flex justify-around">
            <div className="border rounded-xl w-[270px] h-[377px] bg-gray-100"></div>
            <div className="flex gap-4">
              <div className="w-[270px] h-[377px] bg-gray-200 rounded-xl"></div>
              <div className="w-[270px] h-[377px] bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 심박 변이도 섹션 */}
      <div className="flex flex-col gap-6">
        <div className="h-12 w-48 bg-gray-200 rounded-lg"></div>
        <div className="flex relative justify-between items-baseline p-6 min-h-86 mb-10">
          <div className="w-80 h-80 bg-gray-200 rounded-full"></div>
          <div className="w-80 h-80 bg-gray-200 rounded-full"></div>
        </div>
        <div className="h-24 bg-gray-200 rounded-xl mx-16"></div>
      </div>

      {/* 스트레스 및 감정 섹션 (2열 그리드) */}
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div className="h-12 w-40 bg-gray-200 rounded-lg"></div>
          <div className="h-64 bg-gray-200 rounded-xl"></div>
          <div className="h-24 bg-gray-200 rounded-xl"></div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
          <div className="h-64 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* 우울증 설문 결과 섹션 */}
      <div className="flex flex-col gap-6 pb-16">
        <div className="h-12 w-56 bg-gray-200 rounded-lg"></div>
        <div className="grid grid-cols-3 gap-8">
          <div className="h-80 bg-gray-200 rounded-full"></div>
          <div className="col-span-2 flex flex-col gap-10">
            <div className="h-20 bg-gray-200 rounded-2xl"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded"></div>
              <div className="h-6 bg-gray-200 rounded w-5/6"></div>
              <div className="h-6 bg-gray-200 rounded w-4/5"></div>
              <div className="h-6 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLayout;
