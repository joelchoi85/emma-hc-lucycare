import { useState } from "react";
import "./App.css";
import TabButton from "./components/buttons/TabButton";
import BasicResult from "./components/result-tabs/BasicResult";
import DetailedResult from "./components/result-tabs/DetailedResult";
import { fetchReport } from "./queries/query-report";

function App() {
  const [isDetailedResult, setIsDetaildResult] = useState(false);
  const { data, isError } = fetchReport();

  console.log(data, isError);
  return (
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
      <div className="bg-white pb-16 rounded-b-4xl">
        {isDetailedResult ? <DetailedResult /> : <BasicResult />}
      </div>
    </div>
  );
}

export default App;
