import React from "react";
import { cn } from "../utils/default";
interface DescriptionDivProps {
  textClass?: string;
  description: string;
}
const DescriptionDiv: React.FC<DescriptionDivProps> = ({
  textClass,
  description,
}) => {
  return (
    <div
      className={cn(
        "whitespace-pre-wrap break-keep  font-pretendard font-semibold",
        textClass ? textClass : "text-[40px]"
      )}
    >
      {description}
    </div>
  );
};

export default DescriptionDiv;
