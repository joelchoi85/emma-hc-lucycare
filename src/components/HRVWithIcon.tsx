import hrvIcon from "../assets/images/hrv.png";
interface HRVWithIcon {
  hrv: string;
}

const HRVWithIcon: React.FC<HRVWithIcon> = ({ hrv }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={hrvIcon} alt="hrv" className="size-40" />
      <div className="space-x-4">
        <span className="text-[201px] font-bold">{hrv.split(" ")[0]}</span>
        <span className="text-[67px] font-bold">{hrv.split(" ")[1]}</span>
      </div>
    </div>
  );
};

export default HRVWithIcon;
