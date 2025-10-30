import { PieChart, Pie, Cell, ResponsiveContainer, Customized } from "recharts";

interface HRVRadialChartProps {
  legend?: string;
  value: string;
}

const HRVRadialChart: React.FC<HRVRadialChartProps> = ({
  legend = "전",
  value = "80 ms",
}) => {
  const chartSize = 400;
  const startAngle = 260; // 게이지 시작 각도 (시계 반대방향)
  const endAngle = -75; // 게이지 끝 각도

  // 차트 크기에 비례하는 radius 계산
  const baseRadius = chartSize * 0.35; // 차트 크기의 35%
  const innerRadius = baseRadius;
  const outerRadius = baseRadius + 30;
  const needleLength = baseRadius;

  // 전체 0~200을 각도로 환산
  const anglePerUnit = (startAngle - endAngle) / 200;
  const currentAngle = startAngle - parseInt(value) * anglePerUnit;

  // highlight만 별도 pie로 그려야 두께 차이를 줄 수 있음
  const highlightData = [
    { name: "before", value: 33 },
    { name: "highlight", value: 150 - 33 },
    { name: "after", value: 200 - 150 },
  ];
  function Legend() {
    return (
      <div className="absolute -translate-1/2 top-[59%] left-1/2 text-[40px] font-bold">
        {legend}
      </div>
    );
  }

  return (
    <div className="relative w-[450px] h-[450px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={chartSize} height={chartSize}>
          {/* 기본 배경 게이지 */}
          <Pie
            data={[{ value: 200 }]}
            dataKey="value"
            cx="50%"
            cy="50%"
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            fill="#FFF3E8"
            stroke="none"
            cornerRadius={25}
          />

          {/* 하단부 0~19 영역 */}
          <Pie
            data={[{ value: 19 }]}
            dataKey="value"
            cx="50%"
            cy="50%"
            startAngle={startAngle}
            endAngle={startAngle - 19 * anglePerUnit}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            fill="#FFECEC"
            stroke="none"
            cornerRadius={25}
          />

          {/* 강조 구간 (33~150) */}
          <Pie
            data={highlightData}
            dataKey="value"
            cx="50%"
            cy="50%"
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={innerRadius - 2}
            outerRadius={outerRadius + 5}
            stroke="none"
            cornerRadius={25}
          >
            {highlightData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 1 ? "#69D346" : "transparent"}
              />
            ))}
          </Pie>
        </PieChart>
        <Customized component={<Legend />} />
      </ResponsiveContainer>

      {/* 중앙 핀 및 라벨 (SVG로 별도 오버레이) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${chartSize} ${chartSize}`}
        style={{ transform: "rotate(0deg)" }}
        overflow="visible"
      >
        <g transform={`translate(${chartSize / 2},${chartSize / 2})`}>
          {/* 바늘 (시작은 두껍고 끝은 뾰족한 삼각형) */}
          <polygon
            points={`
              ${Math.cos((Math.PI / 180) * (currentAngle + 90)) * 5},${
              -Math.sin((Math.PI / 180) * (currentAngle + 90)) * 5
            }
              ${Math.cos((Math.PI / 180) * (currentAngle - 90)) * 5},${
              -Math.sin((Math.PI / 180) * (currentAngle - 90)) * 5
            }
              ${Math.cos((Math.PI / 180) * currentAngle) * needleLength},${
              -Math.sin((Math.PI / 180) * currentAngle) * needleLength
            }
            `}
            fill="#E71515"
          />
          {/* 중앙 원 */}
          <circle r="5" fill="#E71515" />

          {/* 시작점 라벨 (0) */}
          <text
            x={Math.cos((Math.PI / 180) * startAngle) * (outerRadius + 10)}
            y={-Math.sin((Math.PI / 180) * startAngle) * (outerRadius + 10)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="32"
            fontWeight="700"
            fill="#333"
          >
            0
          </text>

          {/* 19 라벨 */}
          <text
            x={
              Math.cos((Math.PI / 180) * (startAngle - 19 * anglePerUnit)) *
              (outerRadius + 10)
            }
            y={
              -Math.sin((Math.PI / 180) * (startAngle - 19 * anglePerUnit)) *
              (outerRadius + 10)
            }
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="32"
            fontWeight="700"
            fill="#333"
          >
            19
          </text>

          {/* 33 라벨 */}
          <text
            x={
              Math.cos((Math.PI / 180) * (startAngle - 33 * anglePerUnit)) *
              (outerRadius + 10)
            }
            y={
              -Math.sin((Math.PI / 180) * (startAngle - 33 * anglePerUnit)) *
              (outerRadius + 10)
            }
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="32"
            fontWeight="700"
            fill="#333"
          >
            33
          </text>

          {/* 150 라벨 */}
          <text
            x={
              Math.cos((Math.PI / 180) * (startAngle - 150 * anglePerUnit)) *
              (outerRadius + 10)
            }
            y={
              -Math.sin((Math.PI / 180) * (startAngle - 150 * anglePerUnit)) *
              (outerRadius + 10)
            }
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="32"
            fontWeight="700"
            fill="#333"
          >
            150
          </text>

          {/* 끝점 라벨 (200) */}
          <text
            x={Math.cos((Math.PI / 180) * endAngle) * (outerRadius + 20)}
            y={-Math.sin((Math.PI / 180) * endAngle) * (outerRadius + 20)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="32"
            fontWeight="700"
            fill="#333"
          >
            200
          </text>
        </g>
      </svg>
    </div>
  );
};

export default HRVRadialChart;
