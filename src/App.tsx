import { useState } from "react";
import "./App.css";
import TabButton from "./components/buttons/TabButton";

function App() {
  const [isDetailedResult, setIsDetaildResult] = useState(false);

  return (
    <div className="mt-[23px] mx-[89px] text-black flex flex-col">
      {/* NavBar */}
      <div className="flex gap-0">
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
    </div>
  );
}

export default App;
