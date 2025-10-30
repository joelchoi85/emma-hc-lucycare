import { cn } from "../../utils/default";

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
      className={cn(isColored && "bg-[#DDE9FF]", "rounded-[20px]", className)}
    >
      <div className="font-bold text-[50px]">{title}</div>
      <hr className="border-3 border-[#99C0FF]" />
      {children}
    </div>
  );
};

export default ListingBoxLayout;
