interface DecoratedTitleProps {
  title: string;
}
const DecoratedTitle: React.FC<DecoratedTitleProps> = ({ title }) => {
  return (
    <div className="flex justify-center">
      <div className="text-[70px] px-6 font-bold bg-linear-to-t from-[#DDE9FF] from-50% via-white via-50%">
        {title}
      </div>
    </div>
  );
};

export default DecoratedTitle;
