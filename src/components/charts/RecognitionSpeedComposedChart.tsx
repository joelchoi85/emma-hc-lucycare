import { Pie, PieChart, ResponsiveContainer, Cell, Customized } from "recharts";
import Needle from "../Needle";
import { cn } from "../../utils/default";

interface RecognitionSpeedComposedChartProps {
  responseTime: number; // 0-1000 범위의 속도 값 (밀리초)
  maxValue?: number;
}
const RESPONSE_TIME_TEXT = ["빠름", "약간 빠름", "다소 느림", "느림"];
const RESPONSE_TIME_COLOR = [
  "text-[#69D346]",
  "text-[#FFCC00]",
  "text-[#FFAA00]",
  "text-[#E71515]",
];
const RecognitionSpeedComposedChart: React.FC<
  RecognitionSpeedComposedChartProps
> = ({ responseTime, maxValue = 900 }) => {
  const clampedTime = Math.min(maxValue, Math.max(0, responseTime));
  const percentage = clampedTime / maxValue;

  // Pie 각도: 180도(왼쪽/빠름) ~ 0도(오른쪽/느림)
  const pieAngle = 180 - 180 * percentage;

  // CSS rotation: -90도(왼쪽/빠름) ~ 90도(오른쪽/느림)
  const needleRotation = -90 + 180 * percentage;

  // 배경 게이지 데이터 (green 50%, red 50%)
  const backgroundData = [
    { name: "green", value: 50 },
    { name: "red", value: 50 },
  ];

  const backgroundColors = ["#69D346", "#E71515"];

  // 속도감 연출용 파이 (침 따라붙는 부분)
  const trailData = [
    { value: 3, color: "#E71515" },
    { value: 2, color: "#E71515" },
  ];
  const RenderResponseTime = () => {
    const speedIndex = Math.min(
      3,
      Math.floor(percentage * RESPONSE_TIME_TEXT.length)
    );
    const speedText = RESPONSE_TIME_TEXT[speedIndex];

    return (
      <div
        className={cn(
          "absolute -translate-1/2 top-[70%]",
          "left-1/2 z-100 text-center"
        )}
      >
        <div
          className={cn(
            RESPONSE_TIME_COLOR[speedIndex],
            "text-[60px] font-bold"
          )}
        >
          {responseTime}ms
        </div>
        <div className="text-[50px] font-semibold">{speedText}</div>
      </div>
    );
  };

  return (
    <div className="relative w-[450px] h-[400px] flex items-end justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* 배경 반원 */}
          <Pie
            data={backgroundData}
            dataKey="value"
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={153}
            outerRadius={180}
            stroke="none"
            cornerRadius={25}
          >
            {backgroundData.map((_, i) => (
              <Cell
                key={`cell-${i}`}
                fill={backgroundColors[i]}
                stroke="none"
              />
            ))}
          </Pie>

          {/* 중앙부 노란색으로 두껍게 덮기 */}
          <Pie
            data={[{ value: 100 }]}
            dataKey="value"
            cx="50%"
            cy="50%"
            startAngle={45}
            endAngle={135}
            innerRadius={150}
            outerRadius={182}
            fill="#FFCC00"
            stroke="none"
            cornerRadius={25}
          />

          {/* 침 뒤의 속도감용 파이 */}
          {trailData.map((d, i) => (
            <Pie
              key={`trail-${i}`}
              data={[d]}
              dataKey="value"
              cx="50%"
              cy="50%"
              startAngle={0}
              endAngle={pieAngle - 10 + i * 3}
              innerRadius={77 + i * 40}
              outerRadius={90 + i * 40}
              fill={d.color}
              stroke="none"
            />
          ))}
        </PieChart>
        <Customized component={<RenderResponseTime />} />
      </ResponsiveContainer>
      <Needle rotation={needleRotation} />
    </div>
  );
};

export default RecognitionSpeedComposedChart;
