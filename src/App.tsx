import { useState, useEffect } from "react";
import "./App.css";
import TabButton from "./components/buttons/TabButton";
import BasicResult from "./components/result-tabs/BasicResult";
import DetailedResult from "./components/result-tabs/DetailedResult";
import SkeletonLayout from "./components/layout/SkeletonLayout";
import ErrorModal from "./components/modal/ErrorModal";
import { fetchReport } from "./queries/query-report";
import { cn } from "./utils/default";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isDetailedResult, setIsDetaildResult] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { isLoading, isError, isSuccess, data } = fetchReport();

  // 데이터 로딩 성공 시 토스트 표시
  useEffect(() => {
    if (isSuccess && data) {
      toast.success("검사 결과를 성공적으로 불러왔습니다!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [isSuccess, data]);

  // 에러 발생 시 토스트 및 모달 표시
  useEffect(() => {
    if (isError) {
      toast.error("데이터를 불러오는 중 오류가 발생했습니다.", {
        position: "top-right",
        autoClose: 4000,
      });
      setShowErrorModal(true);
    }
  }, [isError]);

  return (
    <>
      <div className="mt-[23px] mx-[89px] text-black flex flex-col">
        {/* NavBar */}
        <div className="flex gap-0 ">
          <TabButton
            isSelected={!isDetailedResult}
            setIsSelected={() => setIsDetaildResult(false)}
          >
            기본 결과
          </TabButton>
          <TabButton
            isSelected={isDetailedResult}
            setIsSelected={() => setIsDetaildResult(true)}
          >
            세부 결과
          </TabButton>
        </div>
        {/* Body */}
        <div
          className={cn(
            isDetailedResult && "rounded-tl-4xl",
            "bg-white pb-16 rounded-b-4xl rounded-tr-4xl"
          )}
        >
          {isLoading ? (
            <SkeletonLayout />
          ) : isDetailedResult ? (
            <DetailedResult />
          ) : (
            <BasicResult />
          )}
        </div>
      </div>

      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      />
      <ToastContainer />
    </>
  );
}

export default App;
