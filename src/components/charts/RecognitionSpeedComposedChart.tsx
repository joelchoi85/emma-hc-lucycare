import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import Needle from "../Needle";

interface RecognitionSpeedComposedChartProps {
  responseTime: number; // 0-1000 범위의 속도 값 (밀리초)
  maxValue?: number;
}

const RecognitionSpeedComposedChart: React.FC<
  RecognitionSpeedComposedChartProps
> = ({ responseTime, maxValue = 460 }) => {
  // responseTime이 낮을수록 빠름 (왼쪽), 높을수록 느림 (오른쪽)
  const clampedTime = Math.min(maxValue, Math.max(0, responseTime));
  const percentage = clampedTime / maxValue; // 0~1 비율

  // Pie 각도: 180도(왼쪽/빠름) ~ 0도(오른쪽/느림)
  const pieAngle = 180 - 180 * percentage;

  // CSS rotation: -90도(왼쪽/빠름) ~ 90도(오른쪽/느림)
  const needleRotation = -90 + 180 * percentage;

  const gaugeData = [
    { value: 25, color: "#69D346" }, // 왼쪽 0-25% (빠름)
    { value: 50, color: "#FFCC00" }, // 중간 25-75%
    { value: 25, color: "#FF0000" }, // 오른쪽 75-100% (느림)
  ];

  // 속도감 연출용 파이 (침 따라붙는 부분)
  const trailData = [
    { value: 3, color: "#FF0000" },
    { value: 2, color: "#FF0000" },
  ];

  return (
    <div className="relative w-[450px] h-[400px] flex items-end justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* 배경 반원 */}
          <Pie
            data={gaugeData}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            innerRadius={150}
            outerRadius={180}
            stroke="none"
          >
            {gaugeData.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>

          {/* 중앙부 두껍게 강조 (겹치는 파이) */}
          <Pie
            data={[{ value: 100 }]}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            innerRadius={100}
            outerRadius={113}
            fill="url(#center-gradient)"
            stroke="none"
            cornerRadius={50}
          />

          {/* 침 앞의 속도감용 파이 */}
          {trailData.map((d, i) => (
            <Pie
              key={`trail-${i}`}
              data={[d]}
              dataKey="value"
              startAngle={0}
              endAngle={pieAngle - 10 + i * 3}
              innerRadius={77 + i * 40}
              outerRadius={90 + i * 40}
              fill={d.color}
              stroke="none"
            />
          ))}
        </PieChart>
      </ResponsiveContainer>
      <Needle rotation={needleRotation} />
    </div>
  );
};

export default RecognitionSpeedComposedChart;
