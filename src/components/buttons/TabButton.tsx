import { cn } from "../../utils/default";

interface TabButtonProps {
  children: React.ReactNode;
  isSelected?: boolean;
  setIsSelected?: () => void;
}
const TabButton: React.FC<TabButtonProps> = ({
  children,
  isSelected,
  setIsSelected,
}) => {
  return (
    <button
      className={cn(
        isSelected ? "bg-white text-black" : "text-[#6B6B6B]",
        "px-24 py-16",
        "rounded-t-4xl",
        "font-bold text-8xl",
        "cursor-pointer"
      )}
      onClick={setIsSelected}
    >
      {children}
    </button>
  );
};

export default TabButton;
