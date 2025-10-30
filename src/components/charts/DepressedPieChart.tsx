import { Pie, PieChart, ResponsiveContainer } from "recharts";
import FaceIcon from "../icons/FaceIcon";

interface DepressedPieChartProps {
  score: number;
  max?: number;
}

type DepressionLevel = 0 | 1 | 2 | 3;

interface LevelConfig {
  color: string;
  emotion: "Happy" | "Neutral" | "Surprised" | "Sad";
  label: string;
}

const levelConfigs: Record<DepressionLevel, LevelConfig> = {
  0: { color: "#27AE60", emotion: "Happy", label: "정상" }, // 녹색
  1: { color: "#95A5A6", emotion: "Neutral", label: "경미" }, // 회색
  2: { color: "#F39C12", emotion: "Surprised", label: "중등도" }, // 노란색
  3: { color: "#E74C3C", emotion: "Sad", label: "심각" }, // 빨간색
};

const DepressedPieChart: React.FC<DepressedPieChartProps> = ({
  score,
  max = 27,
}) => {
  // 점수를 4단계로 매핑 (0: 0-6, 1: 7-13, 2: 14-20, 3: 21-27)
  const getLevel = (score: number): DepressionLevel => {
    if (score <= 6) return 0;
    if (score <= 13) return 1;
    if (score <= 20) return 2;
    return 3;
  };

  const level = getLevel(score);
  const config = levelConfigs[level];

  return (
    <div className="flex gap-8 items-center">
      <div className="relative w-[450px] h-[450px]">
        <ResponsiveContainer width={450} height={450}>
          <PieChart>
            {/* 배경 게이지 (전체 범위) */}
            <Pie
              data={[{ value: max }]}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="82%"
              fill="#E8E8E8"
              startAngle={0}
              endAngle={-360}
            />
            {/* 현재 점수 게이지 */}
            <Pie
              data={[{ value: score }]}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="82%"
              fill={config.color}
              startAngle={0}
              endAngle={0 - (360 * score) / max}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <FaceIcon emotion={config.emotion} scale={2} className="scale-90" />
          <div className="text-center">
            <div className="text-[40px] font-bold">{score}/27</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepressedPieChart;
