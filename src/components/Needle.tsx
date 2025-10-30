interface NeedleProps {
  rotation?: number;
  length?: number;
  color?: string;
}

export default function Needle({
  rotation = 0,
  length = 170,
  color = "#000", // tailwind의 red-500
}: NeedleProps) {
  return (
    <div
      className="absolute left-1/2 bottom-1/2 origin-bottom"
      style={{
        transform: `translateX(-50%) rotate(${rotation}deg)`,
        width: "11px",
        height: `${length}px`,
        backgroundColor: color,
        clipPath: "polygon(50% 0%, 100% 80%, 50% 100%, 50% 100%, 0% 80%)",
      }}
    />
  );
}
