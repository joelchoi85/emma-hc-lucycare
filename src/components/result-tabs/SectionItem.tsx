import { STATUS_CLASS, STATUS_TEXT } from "../../constants/emotions";
import { cn } from "../../utils/default";

interface SectionItemProps {
  name: string;
  status?: number;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}
const SectionItem: React.FC<SectionItemProps> = ({
  name,
  status,
  description,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "relative",
        "flex flex-col",
        "rounded-4xl border border-[#6B6B6B] py-6 px-12",
        className
      )}
    >
      <div className="flex gap-12 items-center">
        <div
          className={cn(
            className?.includes("text") ? "" : "text-[50px]",
            "font-bold text-start"
          )}
        >
          {name}
          {typeof status !== "undefined" && (
            <span className={cn("pl-6", STATUS_CLASS[status])}>
              {STATUS_TEXT[status]}
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
