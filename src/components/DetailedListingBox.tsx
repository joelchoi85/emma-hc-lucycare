import { cn } from "../utils/default";

interface ListingBoxLayoutProps {
  isColored?: boolean;
  className?: string;
  title: string;
  children: React.ReactNode;
}
const ListingBoxLayout: React.FC<ListingBoxLayoutProps> = ({
  isColored = false,
  className,
  title,
  children,
}) => {
  return (
    <div
      className={cn(
        isColored ? "bg-[#DDE9FF]" : "border-2 border-[#DDE9FF]",
        "rounded-[20px]",
        className
      )}
    >
      <div className="p-8 pb-6 font-bold text-[50px]">{title}</div>
      <hr className="border-2 border-[#99C0FF]" />
      {children}
    </div>
  );
};

export default ListingBoxLayout;
