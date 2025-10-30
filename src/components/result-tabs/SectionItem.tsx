import { cn } from "../../utils/default";

interface SectionItemProps {
  name: string;
  status?: number;
  description?: string;
  children?: React.ReactNode;
}
const statusText = ["양호", "주의", "경고", "위험"];
const statusClass = [
  "text-green-500",
  "text-[#FFCC00]",
  "text-orange-500",
  "text-rose-600",
];
const SectionItem: React.FC<SectionItemProps> = ({
  name,
  status,
  description,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative",
        "flex flex-col",
        "rounded-4xl border border-[#6B6B6B] py-6 px-12"
      )}
    >
      <div className="flex gap-12 items-center">
        <div className="text-[50px] font-bold text-start">
          {name}
          {typeof status !== "undefined" && (
            <span className={cn("pl-6", statusClass[status])}>
              {statusText[status]}
            </span>
          )}
        </div>
        {description && (
          <div className="text-[#6B6B6B] text-[30px] font-semibold">
            {description}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default SectionItem;
