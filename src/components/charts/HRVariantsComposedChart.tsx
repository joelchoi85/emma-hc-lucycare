import { useRef, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

interface VariantsChartProps {
  legend?: string;
  variants: number[];
  color?: string;
}

const HRVariantsComposedChart: React.FC<VariantsChartProps> = ({
  legend,
  variants,
  color = "#3B82F6",
}) => {
  // 데이터 검증
  if (!variants || variants.length === 0) {
    return (
      <div className="w-[360px] h-[465px] flex items-center justify-center text-gray-500">
        데이터가 없습니다
      </div>
    );
  }

  // 통계 계산
  const min = Math.min(...variants);
  const max = Math.max(...variants);
  const avg = variants.reduce((a, b) => a + b, 0) / variants.length;

  // y축 자동 스케일 상태
  const [isAutoScale, setIsAutoScale] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // cy 값들을 저장할 ref
  const cyValues = useRef<{ cx: number; min: number; max: number }>({
    cx: 0,
    min: 0,
    max: 0,
  });

  // y축 도메인 계산
  const yDomain = isAutoScale
    ? [Math.floor(min - 5), Math.ceil(max + 5)]
    : [40, 160];

  // y축 ticks 계산
  const yTicks = isAutoScale ? undefined : [40, 80, 120, 160];

  // x 값을 모두 0으로 설정하여 수직으로 쌓이게 함
  const scatterData = [
    { x: 0, y: min, type: "min", index: 0 },
    { x: 0, y: avg, type: "avg", index: 1 },
    { x: 0, y: max, type: "max", index: 2 },
  ];

  return (
    <div
      className="w-[400px] h-[465px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 토글 버튼 */}
      {isHovered && (
        <button
          onClick={() => setIsAutoScale(!isAutoScale)}
          className="absolute top-2 right-2 z-10 px-3 py-1 bg-white border border-gray-300 rounded shadow-md hover:bg-gray-50 text-sm"
        >
          {isAutoScale ? "전체 범위" : "자동 조정"}
        </button>
      )}

      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 40, left: 40, bottom: 40 }}>
          <XAxis
            stroke="#000"
            type="number"
            dataKey="x"
            domain={[-1, 1]}
            ticks={[0]}
            tickFormatter={() => legend || ""}
            tickLine={false}
            tickMargin={26}
            tick={{ fontSize: 30, fontWeight: 700 }}
          />
          <YAxis
            stroke="black"
            type="number"
            dataKey="y"
            domain={yDomain}
            padding={{ bottom: 120 }}
            tickSize={16}
            tickMargin={6}
            fontSize={30}
            fontWeight={400}
            fontFamily="Pretendard"
            tick={{ fill: "#444" }}
            ticks={yTicks}
          />

          {/* 점들과 수직선 */}
          <Scatter
            data={scatterData}
            isAnimationActive={false}
            shape={(props: any) => {
              const { cx, cy, payload, index } = props;

              // cy 값 저장
              if (payload.type === "min") {
                cyValues.current.cx = cx;
                cyValues.current.min = cy;
              } else if (payload.type === "max") {
                cyValues.current.max = cy;
              }

              // 마지막 점(max)일 때 수직선도 함께 그림
              if (index === 2) {
                const circleRadius = 8;
                // 라인이 점의 가장자리에서 시작/끝나도록 조정
                const lineY1 = cyValues.current.min - circleRadius;
                const lineY2 = cy + circleRadius;

                return (
                  <g>
                    {/* 수직 선 (min에서 max까지) */}
                    <line
                      x1={cx}
                      y1={lineY1}
                      x2={cx}
                      y2={lineY2}
                      stroke={color}
                      strokeWidth={3}
                    />
                    {/* 현재 점 (max) */}
                    <circle cx={cx} cy={cy} r={8} fill={color} />
                    {/* 값 표시 - 자동 조정일 때만 */}
                    {isAutoScale && (
                      <text
                        x={cx + 15}
                        y={cy + 5}
                        fill={color}
                        fontSize="20"
                        fontWeight="bold"
                      >
                        {Math.round(payload.y)}
                      </text>
                    )}
                  </g>
                );
              }

              // 나머지 점들
              return (
                <g>
                  <circle cx={cx} cy={cy} r={8} fill={color} />
                  {/* 값 표시 - 자동 조정일 때만 */}
                  {isAutoScale && (
                    <text
                      x={cx + 15}
                      y={cy + 5}
                      fill={color}
                      fontSize="20"
                      fontWeight="bold"
                    >
                      {Math.round(payload.y)}
                    </text>
                  )}
                </g>
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HRVariantsComposedChart;
