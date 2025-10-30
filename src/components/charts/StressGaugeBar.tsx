import React from "react";
import { cn } from "../../utils/default";
interface StressGaugeBarProps {
  value: "Low" | "Medium" | "High" | "Danger";
}
// 게이지가 수치화 되는 근거 부족
const valueScore = { Low: 21, Medium: 48, High: 74, Danger: 96 };
const StressGaugeBar: React.FC<StressGaugeBarProps> = ({ value }) => {
  return (
    <div className="relative h-[114px] flex justify-center items-end">
      <div
        className="absolute w-5 h-14 bg-black mx-auto"
        style={{
          transform: `translateX(${valueScore[value]}%) translateY(-80%)`,
          clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
        }}
      ></div>
      <div
        className={cn(
          "w-[706px] h-[76px] flex justify-center items-center",
          "rounded-[30px]",
          "text-[28px] font-bold text-white",
          "bg-linear-to-r from-[#69D346] via-[#FFCC00] to-[#FF0000]"
        )}
      >
        {valueScore[value]}점
      </div>
    </div>
  );
};

export default StressGaugeBar;
