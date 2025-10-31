import type { Emotion, EmotionResult } from "../../types/report";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { EMOTION_COLORS, EMOTION_LABELS } from "../../constants/emotions";
import FaceIcon from "../icons/FaceIcon";

interface EmotionPieChartProps {
  emotions: EmotionResult;
}

const EmotionPieChart: React.FC<EmotionPieChartProps> = ({ emotions }) => {
  // EmotionResult를 차트 데이터 형식으로 변환
  const chartData = (Object.keys(emotions) as Emotion[])
    .map((emotion) => ({
      name: emotion,
      label: EMOTION_LABELS[emotion],
      value: Math.round(emotions[emotion] * 100), // 소수점 값을 퍼센트로 변환하고 반올림
      color: EMOTION_COLORS[emotion],
    }))
    .filter((item) => item.value > 0) // 0인 값은 제외
    .sort((a, b) => b.value - a.value); // 값이 큰 순서로 정렬

  // 가장 높은 값의 감정
  const topEmotion = chartData[0];

  return (
    <div className="flex gap-8 items-center">
      <div className="relative w-[450px] h-[450px]">
        <ResponsiveContainer width={450} height={450}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="54%"
              outerRadius="82%"
              paddingAngle={2}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* 중심 아이콘 및 텍스트 */}
        {topEmotion && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5">
            <FaceIcon
              emotion={topEmotion.name}
              scale={2}
              className="scale-85"
            />
            <div className="text-center">
              <div className="text-[28px] font-bold">
                {topEmotion.label} {topEmotion.value}%
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 범례 */}
      <div className="flex flex-col gap-3">
        <div className="text-[35px] font-bold">
          주요 감정: {chartData[0].label}
        </div>
        {chartData.map((item) => (
          <div key={item.name} className="flex items-center gap-8">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[28px] font-bold">
              {item.label}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionPieChart;
