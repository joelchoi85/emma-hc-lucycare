"use client";

import {
  Customized,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RPPGData } from "../../types/report";
import HRIcon from "../icons/HRIcon";

interface LineChartDataProps {
  previous: RPPGData;
  current: RPPGData;
}
function CustomLegend({ payload }: any) {
  if (!payload) return null;
  return (
    <div className="flex flex-col gap-2 justify-center mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={`legend-${index}`} className="flex items-center gap-8">
          <div
            className="w-[120px] h-2.5"
            style={{
              backgroundColor: entry.color,
              borderRadius: "20px",
            }}
          ></div>
          <span className="text-[30px] font-bold text-gray-800">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}
const HRLineChart: React.FC<LineChartDataProps> = ({ previous, current }) => {
  const data = previous.hrValues.map((prev, i) => ({
    index: i + 1,
    previous: prev,
    current: current.hrValues[i],
  }));
  function CustomContent() {
    return (
      <foreignObject
        // 🔹 X축 가운데 & Y축 하단 위치
        x="50%"
        y="100%"
        width="200"
        height="160"
        style={{ overflow: "visible" }}
      >
        <div
          className="flex flex-col items-center justify-center"
          style={{
            transform: "translate(-50%, -160%)", // 중심 기준으로 이동
          }}
        >
          <div className="flex flex-row gap-3 items-baseline">
            <HRIcon icon="hr" className="size-[150px]" />
            <div className="relative text-[196px] tracking-wider font-bold">
              {current.hr.split(" ")[0]}
              <div className="absolute top-0 -translate-x-1/2 left-1/2 font-bold text-[40px] text-center tracking-normal">
                평균
              </div>
            </div>
            <div className="text-[65px] font-bold">
              {current.hr.split(" ")[1]}
            </div>
          </div>
        </div>
      </foreignObject>
    );
  }
  return (
    <div className=" w-full h-220 p-4 rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ bottom: 80 }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            stroke="#000000"
            dataKey="index"
            label={{ position: "insideBottom", dy: 10 }}
            tickMargin={25}
            fontSize={40}
            fontWeight={600}
            padding={{ left: 150, right: 30 }}
            tickSize={0}
          />
          <YAxis
            stroke="#000000"
            label={{ angle: -90, position: "insideLeft" }}
            domain={[40, 160]}
            padding={{ bottom: 200 }}
            tickSize={10}
            fontSize={30}
            fontWeight={500}
            ticks={[40, 80, 120, 160]}
          />
          <Tooltip
            wrapperStyle={{
              zIndex: 10,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
          <Legend
            content={<CustomLegend />}
            verticalAlign="top"
            layout="vertical"
            wrapperStyle={{ borderRadius: "24px" }}
          />
          <Line
            type="linear"
            dataKey="previous"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 0 }}
            name="직전"
          />
          <Line
            type="linear"
            dataKey="current"
            stroke="#FF0000"
            strokeWidth={3}
            dot={{ r: 0 }}
            name="현재"
          />
          <Customized component={<CustomContent />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HRLineChart;
